import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../../convex/_generated/api";
import { ArticleHero } from "@/presentation/components/blog/ArticleHero";
import { ArticleBody } from "@/presentation/components/blog/ArticleBody";
import { RelatedArticles } from "@/presentation/components/blog/RelatedArticles";
import { getBlogPostingStructuredData } from "@/infrastructure/seo/blogStructuredData";
import type { Locale } from "@/infrastructure/i18n/config";

function getConvex() {
  return new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
}

/** Pick a translated field with fallback to English */
function t(field: Record<string, string | undefined> | undefined, lang: string): string {
  if (!field) return "";
  return field[lang] || field["en"] || "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = await getConvex().query(api.articles.getBySlug, { slug, lang });

  if (!article) return {};

  const title = t(article.seoTitle, lang) || t(article.title, lang);
  const description =
    t(article.seoDescription, lang) ||
    t(article.excerpt, lang) ||
    `Read "${t(article.title, lang)}" on Lanzarote Untold`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.publishedAt
        ? new Date(article.publishedAt).toISOString()
        : undefined,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
  };
}

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const article = await getConvex().query(api.articles.getBySlug, { slug, lang });

  if (!article || article.state !== "published") {
    notFound();
  }

  // Fetch related articles from the same categories
  let relatedArticles: typeof article[] = [];
  if (article.categories && article.categories.length > 0) {
    const result = await getConvex().query(api.articles.listPublished, {
      categoryId: article.categories[0].id as any,
      pageSize: 4,
    });
    relatedArticles = result.data
      .filter((a: any) => a.id !== article.id)
      .slice(0, 3);
  }

  const structuredData = getBlogPostingStructuredData(article);
  const body = t(article.body, lang);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ArticleHero article={article} lang={locale} />
      {body && <ArticleBody html={body} />}
      <RelatedArticles articles={relatedArticles} lang={locale} />
    </main>
  );
}
