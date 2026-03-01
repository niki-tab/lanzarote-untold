import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { toDomainCategory, toDomainArticle } from "./helpers";

// Helper to get categories for an article
async function getArticleCategories(ctx: { db: any; storage: any }, articleId: any) {
  const links = await ctx.db
    .query("articleCategories")
    .withIndex("by_articleId", (q: any) => q.eq("articleId", articleId))
    .collect();
  const categories = await Promise.all(
    links.map((link: any) => ctx.db.get(link.categoryId))
  );
  return categories.filter(Boolean);
}

// Helper to resolve featured image URL
async function resolveImageUrl(ctx: { db: any; storage: any }, storageId: any) {
  if (!storageId) return null;
  return await ctx.storage.getUrl(storageId);
}

// Helper to enrich article with categories and image URL, mapped to domain shape
async function enrichArticle(ctx: { db: any; storage: any }, article: any) {
  const categories = await getArticleCategories(ctx, article._id);
  const featuredImageUrl = await resolveImageUrl(ctx, article.featuredImage);
  return toDomainArticle(article, categories, featuredImageUrl);
}

export const list = query({
  args: {
    page: v.optional(v.number()),
    pageSize: v.optional(v.number()),
    state: v.optional(v.string()),
    categoryId: v.optional(v.id("blogCategories")),
    search: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const page = args.page ?? 1;
    const pageSize = args.pageSize ?? 10;

    let articles = await ctx.db.query("blogArticles").order("desc").collect();

    if (args.state) {
      articles = articles.filter((a) => a.state === args.state);
    }

    if (args.search) {
      const s = args.search.toLowerCase();
      articles = articles.filter(
        (a) =>
          a.titleEn.toLowerCase().includes(s) ||
          a.titleEs.toLowerCase().includes(s)
      );
    }

    if (args.categoryId) {
      const links = await ctx.db
        .query("articleCategories")
        .withIndex("by_categoryId", (q) => q.eq("categoryId", args.categoryId!))
        .collect();
      const articleIds = new Set(links.map((l) => l.articleId.toString()));
      articles = articles.filter((a) => articleIds.has(a._id.toString()));
    }

    const total = articles.length;
    const totalPages = Math.ceil(total / pageSize);
    const data = articles.slice((page - 1) * pageSize, page * pageSize);

    const enriched = await Promise.all(data.map((a) => enrichArticle(ctx, a)));

    return { data: enriched, total, page, pageSize, totalPages };
  },
});

export const getById = query({
  args: { id: v.id("blogArticles") },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.id);
    if (!article) return null;
    return await enrichArticle(ctx, article);
  },
});

export const getBySlug = query({
  args: { slug: v.string(), lang: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let article;
    if (args.lang === "es") {
      article = await ctx.db
        .query("blogArticles")
        .withIndex("by_slugEs", (q) => q.eq("slugEs", args.slug))
        .first();
    } else {
      article = await ctx.db
        .query("blogArticles")
        .withIndex("by_slugEn", (q) => q.eq("slugEn", args.slug))
        .first();
    }
    if (!article) return null;
    return await enrichArticle(ctx, article);
  },
});

export const create = mutation({
  args: {
    titleEn: v.string(),
    titleEs: v.string(),
    slugEn: v.string(),
    slugEs: v.string(),
    excerptEn: v.optional(v.string()),
    excerptEs: v.optional(v.string()),
    bodyEn: v.optional(v.string()),
    bodyEs: v.optional(v.string()),
    seoTitleEn: v.optional(v.string()),
    seoTitleEs: v.optional(v.string()),
    seoDescriptionEn: v.optional(v.string()),
    seoDescriptionEs: v.optional(v.string()),
    featuredImage: v.optional(v.id("_storage")),
    state: v.optional(v.string()),
    isFeatured: v.optional(v.boolean()),
    publishedAt: v.optional(v.number()),
    readingTime: v.optional(v.number()),
    categoryIds: v.optional(v.array(v.id("blogCategories"))),
  },
  handler: async (ctx, args) => {
    const { categoryIds, ...articleData } = args;
    const articleId = await ctx.db.insert("blogArticles", {
      ...articleData,
      state: articleData.state ?? "draft",
      isFeatured: articleData.isFeatured ?? false,
    });

    if (categoryIds?.length) {
      for (const categoryId of categoryIds) {
        await ctx.db.insert("articleCategories", { articleId, categoryId });
      }
    }

    return articleId;
  },
});

export const update = mutation({
  args: {
    id: v.id("blogArticles"),
    titleEn: v.optional(v.string()),
    titleEs: v.optional(v.string()),
    slugEn: v.optional(v.string()),
    slugEs: v.optional(v.string()),
    excerptEn: v.optional(v.string()),
    excerptEs: v.optional(v.string()),
    bodyEn: v.optional(v.string()),
    bodyEs: v.optional(v.string()),
    seoTitleEn: v.optional(v.string()),
    seoTitleEs: v.optional(v.string()),
    seoDescriptionEn: v.optional(v.string()),
    seoDescriptionEs: v.optional(v.string()),
    featuredImage: v.optional(v.id("_storage")),
    state: v.optional(v.string()),
    isFeatured: v.optional(v.boolean()),
    publishedAt: v.optional(v.number()),
    readingTime: v.optional(v.number()),
    categoryIds: v.optional(v.array(v.id("blogCategories"))),
  },
  handler: async (ctx, args) => {
    const { id, categoryIds, ...fields } = args;
    const updates: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) updates[key] = value;
    }
    await ctx.db.patch(id, updates);

    if (categoryIds !== undefined) {
      const existing = await ctx.db
        .query("articleCategories")
        .withIndex("by_articleId", (q) => q.eq("articleId", id))
        .collect();
      for (const link of existing) {
        await ctx.db.delete(link._id);
      }
      for (const categoryId of categoryIds) {
        await ctx.db.insert("articleCategories", { articleId: id, categoryId });
      }
    }

    return await ctx.db.get(id);
  },
});

export const remove = mutation({
  args: { id: v.id("blogArticles") },
  handler: async (ctx, args) => {
    const links = await ctx.db
      .query("articleCategories")
      .withIndex("by_articleId", (q) => q.eq("articleId", args.id))
      .collect();
    for (const link of links) {
      await ctx.db.delete(link._id);
    }
    await ctx.db.delete(args.id);
  },
});

export const listPublished = query({
  args: {
    page: v.optional(v.number()),
    pageSize: v.optional(v.number()),
    categoryId: v.optional(v.id("blogCategories")),
  },
  handler: async (ctx, args) => {
    const page = args.page ?? 1;
    const pageSize = args.pageSize ?? 9;

    let articles = await ctx.db
      .query("blogArticles")
      .withIndex("by_state", (q) => q.eq("state", "published"))
      .collect();

    articles.sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0));

    if (args.categoryId) {
      const links = await ctx.db
        .query("articleCategories")
        .withIndex("by_categoryId", (q) => q.eq("categoryId", args.categoryId!))
        .collect();
      const articleIds = new Set(links.map((l) => l.articleId.toString()));
      articles = articles.filter((a) => articleIds.has(a._id.toString()));
    }

    const total = articles.length;
    const totalPages = Math.ceil(total / pageSize);
    const data = articles.slice((page - 1) * pageSize, page * pageSize);

    const enriched = await Promise.all(data.map((a) => enrichArticle(ctx, a)));

    return { data: enriched, total, page, pageSize, totalPages };
  },
});

export const getFeatured = query({
  handler: async (ctx) => {
    const articles = await ctx.db
      .query("blogArticles")
      .withIndex("by_state", (q) => q.eq("state", "published"))
      .collect();

    const featured = articles
      .filter((a) => a.isFeatured)
      .sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0))[0];

    if (!featured) return null;
    return await enrichArticle(ctx, featured);
  },
});
