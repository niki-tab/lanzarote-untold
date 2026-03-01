import Link from "next/link";
import type { BlogArticle } from "@/domain/types";

interface BlogArticleCardProps {
  article: BlogArticle;
}

export function BlogArticleCard({ article }: BlogArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug.en}`}
      className="group overflow-hidden rounded-xl border border-border bg-footer-bg transition-all hover:border-gold/30"
    >
      {article.featuredImage && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title.en}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        {article.categories && article.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {article.categories.map((cat) => (
              <span
                key={cat.id}
                className="font-inter text-[10px] font-medium tracking-[2px] uppercase"
                style={{ color: cat.color }}
              >
                {cat.name.en}
              </span>
            ))}
          </div>
        )}
        <h3 className="mb-2 font-cormorant text-xl font-medium leading-tight text-text-primary transition-colors group-hover:text-gold">
          {article.title.en}
        </h3>
        {article.excerpt?.en && (
          <p className="mb-3 line-clamp-2 font-inter text-sm font-light leading-relaxed text-text-secondary">
            {article.excerpt.en}
          </p>
        )}
        <div className="flex items-center gap-3 font-inter text-xs text-text-muted">
          {article.publishedAt && (
            <time>{new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}</time>
          )}
          {article.readingTime && (
            <>
              <span>·</span>
              <span>{article.readingTime} min read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
