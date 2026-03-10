import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    password: v.string(),
    name: v.string(),
    role: v.string(),
  }).index("by_email", ["email"]),

  blogCategories: defineTable({
    nameEn: v.string(),
    nameEs: v.string(),
    slugEn: v.string(),
    slugEs: v.string(),
    descriptionEn: v.optional(v.string()),
    descriptionEs: v.optional(v.string()),
    color: v.string(),
    isActive: v.boolean(),
    sortOrder: v.number(),
    parentId: v.optional(v.id("blogCategories")),
  })
    .index("by_slugEn", ["slugEn"])
    .index("by_slugEs", ["slugEs"])
    .index("by_sortOrder", ["sortOrder"]),

  blogArticles: defineTable({
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
    state: v.string(),
    isFeatured: v.boolean(),
    publishedAt: v.optional(v.number()),
    readingTime: v.optional(v.number()),
  })
    .index("by_slugEn", ["slugEn"])
    .index("by_slugEs", ["slugEs"])
    .index("by_state", ["state"])
    .index("by_state_publishedAt", ["state", "publishedAt"])
    .index("by_isFeatured", ["isFeatured"]),

  articleCategories: defineTable({
    articleId: v.id("blogArticles"),
    categoryId: v.id("blogCategories"),
  })
    .index("by_articleId", ["articleId"])
    .index("by_categoryId", ["categoryId"]),
});
