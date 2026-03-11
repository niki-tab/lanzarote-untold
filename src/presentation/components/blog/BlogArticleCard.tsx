import Link from "next/link";
import type { BlogArticle } from "@/domain/types";
import type { Locale } from "@/infrastructure/i18n/config";

interface BlogArticleCardProps {
  article: BlogArticle;
  lang?: Locale;
}

function t(field: Record<string, string> | undefined, lang: string): string {
  if (!field) return "";
  return field[lang] || field.en || "";
}

const dateLocales: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
};

export function BlogArticleCard({ article, lang = "en" }: BlogArticleCardProps) {
  const slug = t(article.slug, lang);
  const title = t(article.title, lang);
  const excerpt = t(article.excerpt, lang);
  const dateLocale = dateLocales[lang] || "en-US";
  const prefix = lang === "en" ? "" : `/${lang}`;

  return (
    <Link
      href={`${prefix}/blog/${slug}`}
      className="group overflow-hidden rounded-xl border border-border bg-footer-bg transition-all hover:border-gold/30"
    >
      {article.featuredImage && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.featuredImage}
            alt={title}
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
                {t(cat.name, lang)}
              </span>
            ))}
          </div>
        )}
        <h3 className="mb-2 font-cormorant text-xl font-medium leading-tight text-text-primary transition-colors group-hover:text-gold">
          {title}
        </h3>
        {excerpt && (
          <p className="mb-3 line-clamp-2 font-inter text-sm font-light leading-relaxed text-text-secondary">
            {excerpt}
          </p>
        )}
        <div className="flex items-center gap-3 font-inter text-xs text-text-muted">
          {article.publishedAt && (
            <time>{new Date(article.publishedAt).toLocaleDateString(dateLocale, {
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
