// Maps Convex DB documents to domain-compatible shapes
// so UI components can use stable interfaces (article.title.en, cat.name.en, etc.)

export function toDomainCategory(cat: any) {
  return {
    id: cat._id,
    name: { en: cat.nameEn, es: cat.nameEs, de: cat.nameDe || "", fr: cat.nameFr || "" },
    slug: { en: cat.slugEn, es: cat.slugEs, de: cat.slugDe || "", fr: cat.slugFr || "" },
    description: {
      en: cat.descriptionEn || "",
      es: cat.descriptionEs || "",
      de: cat.descriptionDe || "",
      fr: cat.descriptionFr || "",
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
    title: { en: article.titleEn, es: article.titleEs, de: article.titleDe || "", fr: article.titleFr || "" },
    slug: { en: article.slugEn, es: article.slugEs, de: article.slugDe || "", fr: article.slugFr || "" },
    excerpt: {
      en: article.excerptEn || "",
      es: article.excerptEs || "",
      de: article.excerptDe || "",
      fr: article.excerptFr || "",
    },
    body: {
      en: article.bodyEn || "",
      es: article.bodyEs || "",
      de: article.bodyDe || "",
      fr: article.bodyFr || "",
    },
    seoTitle: {
      en: article.seoTitleEn || "",
      es: article.seoTitleEs || "",
      de: article.seoTitleDe || "",
      fr: article.seoTitleFr || "",
    },
    seoDescription: {
      en: article.seoDescriptionEn || "",
      es: article.seoDescriptionEs || "",
      de: article.seoDescriptionDe || "",
      fr: article.seoDescriptionFr || "",
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
