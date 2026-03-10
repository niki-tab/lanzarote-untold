import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { toDomainCategory } from "./helpers";

export const list = query({
  args: {
    search: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let categories = await ctx.db
      .query("blogCategories")
      .withIndex("by_sortOrder")
      .collect();

    if (args.isActive !== undefined) {
      categories = categories.filter((c) => c.isActive === args.isActive);
    }

    if (args.search) {
      const s = args.search.toLowerCase();
      categories = categories.filter(
        (c) =>
          c.nameEn.toLowerCase().includes(s) ||
          c.nameEs.toLowerCase().includes(s)
      );
    }

    return categories.map(toDomainCategory);
  },
});

export const getById = query({
  args: { id: v.id("blogCategories") },
  handler: async (ctx, args) => {
    const cat = await ctx.db.get(args.id);
    if (!cat) return null;
    return toDomainCategory(cat);
  },
});

export const getBySlug = query({
  args: { slug: v.string(), lang: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let cat;
    if (args.lang === "es") {
      cat = await ctx.db
        .query("blogCategories")
        .withIndex("by_slugEs", (q) => q.eq("slugEs", args.slug))
        .first();
    } else {
      cat = await ctx.db
        .query("blogCategories")
        .withIndex("by_slugEn", (q) => q.eq("slugEn", args.slug))
        .first();
    }
    if (!cat) return null;
    return toDomainCategory(cat);
  },
});

export const create = mutation({
  args: {
    nameEn: v.string(),
    nameEs: v.string(),
    slugEn: v.string(),
    slugEs: v.string(),
    descriptionEn: v.optional(v.string()),
    descriptionEs: v.optional(v.string()),
    color: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
    sortOrder: v.optional(v.number()),
    parentId: v.optional(v.id("blogCategories")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("blogCategories", {
      nameEn: args.nameEn,
      nameEs: args.nameEs,
      slugEn: args.slugEn,
      slugEs: args.slugEs,
      descriptionEn: args.descriptionEn,
      descriptionEs: args.descriptionEs,
      color: args.color ?? "#C9A962",
      isActive: args.isActive ?? true,
      sortOrder: args.sortOrder ?? 0,
      parentId: args.parentId,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("blogCategories"),
    nameEn: v.optional(v.string()),
    nameEs: v.optional(v.string()),
    slugEn: v.optional(v.string()),
    slugEs: v.optional(v.string()),
    descriptionEn: v.optional(v.string()),
    descriptionEs: v.optional(v.string()),
    color: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
    sortOrder: v.optional(v.number()),
    parentId: v.optional(v.id("blogCategories")),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    const updates: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) updates[key] = value;
    }
    await ctx.db.patch(id, updates);
    return await ctx.db.get(id);
  },
});

export const remove = mutation({
  args: { id: v.id("blogCategories") },
  handler: async (ctx, args) => {
    const links = await ctx.db
      .query("articleCategories")
      .withIndex("by_categoryId", (q) => q.eq("categoryId", args.id))
      .collect();
    for (const link of links) {
      await ctx.db.delete(link._id);
    }
    await ctx.db.delete(args.id);
  },
});
