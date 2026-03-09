import { prisma } from "@/infrastructure/database/prisma";
import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type {
  BlogCategory,
  BlogArticle,
  CreateBlogCategoryInput,
  UpdateBlogCategoryInput,
  CreateBlogArticleInput,
  UpdateBlogArticleInput,
  PaginatedResult,
  BlogArticleFilters,
  BlogCategoryFilters,
  ArticleState,
} from "@/domain/types";
import type {
  BlogCategory as PrismaCategory,
  BlogArticle as PrismaArticle,
} from "@prisma/client";

type PrismaCategoryWithRelations = PrismaCategory & {
  parent?: PrismaCategory | null;
  children?: PrismaCategory[];
};

type PrismaArticleWithRelations = PrismaArticle & {
  categories?: { category: PrismaCategory }[];
};

function mapCategory(c: PrismaCategoryWithRelations): BlogCategory {
  return {
    id: c.id,
    name: { en: c.nameEn, es: c.nameEs },
    slug: { en: c.slugEn, es: c.slugEs },
    description: c.descriptionEn || c.descriptionEs
      ? { en: c.descriptionEn || "", es: c.descriptionEs || "" }
      : undefined,
    color: c.color,
    isActive: c.isActive,
    sortOrder: c.sortOrder,
    parentId: c.parentId,
    parent: c.parent ? mapCategory(c.parent) : undefined,
    children: c.children?.map(mapCategory),
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
  };
}

function mapArticle(a: PrismaArticleWithRelations): BlogArticle {
  return {
    id: a.id,
    title: { en: a.titleEn, es: a.titleEs },
    slug: { en: a.slugEn, es: a.slugEs },
    excerpt: a.excerptEn || a.excerptEs
      ? { en: a.excerptEn || "", es: a.excerptEs || "" }
      : undefined,
    body: a.bodyEn || a.bodyEs
      ? { en: a.bodyEn || "", es: a.bodyEs || "" }
      : undefined,
    seoTitle: a.seoTitleEn || a.seoTitleEs
      ? { en: a.seoTitleEn || "", es: a.seoTitleEs || "" }
      : undefined,
    seoDescription: a.seoDescriptionEn || a.seoDescriptionEs
      ? { en: a.seoDescriptionEn || "", es: a.seoDescriptionEs || "" }
      : undefined,
    featuredImage: a.featuredImage,
    state: a.state as ArticleState,
    isFeatured: a.isFeatured,
    publishedAt: a.publishedAt,
    readingTime: a.readingTime,
    categories: a.categories?.map((ac) => mapCategory(ac.category)),
    createdAt: a.createdAt,
    updatedAt: a.updatedAt,
  };
}

export class PrismaBlogRepository implements IBlogRepository {
  // Categories

  async getCategories(filters?: BlogCategoryFilters): Promise<BlogCategory[]> {
    const where: Record<string, unknown> = {};
    if (filters?.isActive !== undefined) where.isActive = filters.isActive;
    if (filters?.search) {
      where.OR = [
        { nameEn: { contains: filters.search, mode: "insensitive" } },
        { nameEs: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    const categories = await prisma.blogCategory.findMany({
      where,
      include: { parent: true, children: true },
      orderBy: { sortOrder: "asc" },
    });

    return categories.map(mapCategory);
  }

  async getCategoryById(id: string): Promise<BlogCategory | null> {
    const category = await prisma.blogCategory.findUnique({
      where: { id },
      include: { parent: true, children: true },
    });
    return category ? mapCategory(category) : null;
  }

  async getCategoryBySlug(slug: string, lang = "en"): Promise<BlogCategory | null> {
    const where = lang === "es" ? { slugEs: slug } : { slugEn: slug };
    const category = await prisma.blogCategory.findFirst({
      where,
      include: { parent: true, children: true },
    });
    return category ? mapCategory(category) : null;
  }

  async createCategory(input: CreateBlogCategoryInput): Promise<BlogCategory> {
    const category = await prisma.blogCategory.create({
      data: {
        nameEn: input.name.en,
        nameEs: input.name.es,
        slugEn: input.slug.en,
        slugEs: input.slug.es,
        descriptionEn: input.description?.en,
        descriptionEs: input.description?.es,
        color: input.color || "#C9A962",
        isActive: input.isActive ?? true,
        sortOrder: input.sortOrder ?? 0,
        parentId: input.parentId,
      },
      include: { parent: true, children: true },
    });
    return mapCategory(category);
  }

  async updateCategory(input: UpdateBlogCategoryInput): Promise<BlogCategory> {
    const data: Record<string, unknown> = {};
    if (input.name) {
      data.nameEn = input.name.en;
      data.nameEs = input.name.es;
    }
    if (input.slug) {
      data.slugEn = input.slug.en;
      data.slugEs = input.slug.es;
    }
    if (input.description !== undefined) {
      data.descriptionEn = input.description?.en;
      data.descriptionEs = input.description?.es;
    }
    if (input.color !== undefined) data.color = input.color;
    if (input.isActive !== undefined) data.isActive = input.isActive;
    if (input.sortOrder !== undefined) data.sortOrder = input.sortOrder;
    if (input.parentId !== undefined) data.parentId = input.parentId;

    const category = await prisma.blogCategory.update({
      where: { id: input.id },
      data,
      include: { parent: true, children: true },
    });
    return mapCategory(category);
  }

  async deleteCategory(id: string): Promise<void> {
    await prisma.blogCategory.delete({ where: { id } });
  }

  // Articles

  async getArticles(filters?: BlogArticleFilters): Promise<PaginatedResult<BlogArticle>> {
    const page = filters?.page || 1;
    const pageSize = filters?.pageSize || 10;
    const where: Record<string, unknown> = {};

    if (filters?.state) where.state = filters.state;
    if (filters?.categoryId) {
      where.categories = { some: { categoryId: filters.categoryId } };
    }
    if (filters?.search) {
      where.OR = [
        { titleEn: { contains: filters.search, mode: "insensitive" } },
        { titleEs: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    const [articles, total] = await Promise.all([
      prisma.blogArticle.findMany({
        where,
        include: { categories: { include: { category: true } } },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.blogArticle.count({ where }),
    ]);

    return {
      data: articles.map(mapArticle),
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async getArticleById(id: string): Promise<BlogArticle | null> {
    const article = await prisma.blogArticle.findUnique({
      where: { id },
      include: { categories: { include: { category: true } } },
    });
    return article ? mapArticle(article) : null;
  }

  async getArticleBySlug(slug: string, lang = "en"): Promise<BlogArticle | null> {
    const where = lang === "es" ? { slugEs: slug } : { slugEn: slug };
    const article = await prisma.blogArticle.findFirst({
      where,
      include: { categories: { include: { category: true } } },
    });
    return article ? mapArticle(article) : null;
  }

  async createArticle(input: CreateBlogArticleInput): Promise<BlogArticle> {
    const article = await prisma.blogArticle.create({
      data: {
        titleEn: input.title.en,
        titleEs: input.title.es,
        slugEn: input.slug.en,
        slugEs: input.slug.es,
        excerptEn: input.excerpt?.en,
        excerptEs: input.excerpt?.es,
        bodyEn: input.body?.en,
        bodyEs: input.body?.es,
        seoTitleEn: input.seoTitle?.en,
        seoTitleEs: input.seoTitle?.es,
        seoDescriptionEn: input.seoDescription?.en,
        seoDescriptionEs: input.seoDescription?.es,
        featuredImage: input.featuredImage,
        state: input.state || "draft",
        isFeatured: input.isFeatured ?? false,
        publishedAt: input.publishedAt,
        readingTime: input.readingTime,
        categories: input.categoryIds?.length
          ? { create: input.categoryIds.map((id) => ({ categoryId: id })) }
          : undefined,
      },
      include: { categories: { include: { category: true } } },
    });
    return mapArticle(article);
  }

  async updateArticle(input: UpdateBlogArticleInput): Promise<BlogArticle> {
    const data: Record<string, unknown> = {};
    if (input.title) {
      data.titleEn = input.title.en;
      data.titleEs = input.title.es;
    }
    if (input.slug) {
      data.slugEn = input.slug.en;
      data.slugEs = input.slug.es;
    }
    if (input.excerpt !== undefined) {
      data.excerptEn = input.excerpt?.en;
      data.excerptEs = input.excerpt?.es;
    }
    if (input.body !== undefined) {
      data.bodyEn = input.body?.en;
      data.bodyEs = input.body?.es;
    }
    if (input.seoTitle !== undefined) {
      data.seoTitleEn = input.seoTitle?.en;
      data.seoTitleEs = input.seoTitle?.es;
    }
    if (input.seoDescription !== undefined) {
      data.seoDescriptionEn = input.seoDescription?.en;
      data.seoDescriptionEs = input.seoDescription?.es;
    }
    if (input.featuredImage !== undefined) data.featuredImage = input.featuredImage;
    if (input.state !== undefined) data.state = input.state;
    if (input.isFeatured !== undefined) data.isFeatured = input.isFeatured;
    if (input.publishedAt !== undefined) data.publishedAt = input.publishedAt;
    if (input.readingTime !== undefined) data.readingTime = input.readingTime;

    if (input.categoryIds !== undefined) {
      await prisma.articleCategory.deleteMany({ where: { articleId: input.id } });
      if (input.categoryIds.length > 0) {
        await prisma.articleCategory.createMany({
          data: input.categoryIds.map((categoryId) => ({
            articleId: input.id,
            categoryId,
          })),
        });
      }
    }

    const article = await prisma.blogArticle.update({
      where: { id: input.id },
      data,
      include: { categories: { include: { category: true } } },
    });
    return mapArticle(article);
  }

  async deleteArticle(id: string): Promise<void> {
    await prisma.blogArticle.delete({ where: { id } });
  }

  // Public

  async getPublishedArticles(filters?: BlogArticleFilters): Promise<PaginatedResult<BlogArticle>> {
    const page = filters?.page || 1;
    const pageSize = filters?.pageSize || 9;
    const where: Record<string, unknown> = { state: "published" };

    if (filters?.categoryId) {
      where.categories = { some: { categoryId: filters.categoryId } };
    }
    if (filters?.search) {
      where.OR = [
        { titleEn: { contains: filters.search, mode: "insensitive" } },
        { titleEs: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    const [articles, total] = await Promise.all([
      prisma.blogArticle.findMany({
        where,
        include: { categories: { include: { category: true } } },
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.blogArticle.count({ where }),
    ]);

    return {
      data: articles.map(mapArticle),
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async getFeaturedArticle(): Promise<BlogArticle | null> {
    const article = await prisma.blogArticle.findFirst({
      where: { state: "published", isFeatured: true },
      include: { categories: { include: { category: true } } },
      orderBy: { publishedAt: "desc" },
    });
    return article ? mapArticle(article) : null;
  }
}
