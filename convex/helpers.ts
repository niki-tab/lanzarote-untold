// Maps Convex DB documents to domain-compatible shapes
// so UI components can use stable interfaces (article.title.en, cat.name.en, etc.)

export function toDomainCategory(cat: any) {
  return {
    id: cat._id,
    name: { en: cat.nameEn, es: cat.nameEs },
    slug: { en: cat.slugEn, es: cat.slugEs },
    description: {
      en: cat.descriptionEn || "",
      es: cat.descriptionEs || "",
    },
    color: cat.color,
    isActive: cat.isActive,
    sortOrder: cat.sortOrder,
    parentId: cat.parentId || null,
    createdAt: cat._creationTime,
    updatedAt: cat._creationTime,
  };
}

export function toDomainArticle(
  article: any,
  categories: any[],
  featuredImageUrl: string | null
) {
  return {
    id: article._id,
    title: { en: article.titleEn, es: article.titleEs },
    slug: { en: article.slugEn, es: article.slugEs },
    excerpt: {
      en: article.excerptEn || "",
      es: article.excerptEs || "",
    },
    body: {
      en: article.bodyEn || "",
      es: article.bodyEs || "",
    },
    seoTitle: {
      en: article.seoTitleEn || "",
      es: article.seoTitleEs || "",
    },
    seoDescription: {
      en: article.seoDescriptionEn || "",
      es: article.seoDescriptionEs || "",
    },
    featuredImage: featuredImageUrl,
    featuredImageStorageId: article.featuredImage || null,
    state: article.state,
    isFeatured: article.isFeatured,
    publishedAt: article.publishedAt || null,
    readingTime: article.readingTime || null,
    categories: categories.map(toDomainCategory),
    createdAt: article._creationTime,
    updatedAt: article._creationTime,
  };
}
