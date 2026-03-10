import type { BlogArticle } from "@/domain/types";
import { BlogArticleCard } from "./BlogArticleCard";

interface RelatedArticlesProps {
  articles: BlogArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t border-border px-5 py-16 lg:px-[120px] lg:py-20">
      <h2 className="mb-8 text-center font-cormorant text-2xl font-light text-text-primary lg:text-3xl">
        Related Stories
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <BlogArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
