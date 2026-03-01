import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../../convex/_generated/api";
import { ArticleHero } from "@/presentation/components/blog/ArticleHero";
import { ArticleBody } from "@/presentation/components/blog/ArticleBody";
import { RelatedArticles } from "@/presentation/components/blog/RelatedArticles";
import { getBlogPostingStructuredData } from "@/infrastructure/seo/blogStructuredData";

function getConvex() {
  return new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getConvex().query(api.articles.getBySlug, { slug });

  if (!article) return {};

  const title = article.seoTitle?.en || article.title.en;
  const description =
    article.seoDescription?.en ||
    article.excerpt?.en ||
    `Read "${article.title.en}" on Lanzarote Untold`;

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
  const { slug } = await params;
  const article = await getConvex().query(api.articles.getBySlug, { slug });

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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ArticleHero article={article} />
      {article.body?.en && <ArticleBody html={article.body.en} />}
      <RelatedArticles articles={relatedArticles} />
    </main>
  );
}
