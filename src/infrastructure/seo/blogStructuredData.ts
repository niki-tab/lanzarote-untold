import type { BlogArticle } from "@/domain/types";

export function getBlogPostingStructuredData(article: BlogArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title.en,
    description: article.excerpt?.en || "",
    image: article.featuredImage || undefined,
    datePublished: article.publishedAt
      ? new Date(article.publishedAt).toISOString()
      : undefined,
    dateModified: article.updatedAt
      ? new Date(article.updatedAt).toISOString()
      : undefined,
    author: {
      "@type": "Organization",
      name: "Lanzarote Untold",
      url: "https://lanzaroteuntold.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Lanzarote Untold",
      url: "https://lanzaroteuntold.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lanzaroteuntold.com/blog/${article.slug.en}`,
    },
    wordCount: article.body?.en
      ? article.body.en.replace(/<[^>]*>/g, "").split(/\s+/).length
      : undefined,
    articleSection: article.categories?.map((c) => c.name.en).join(", "),
  };
}
