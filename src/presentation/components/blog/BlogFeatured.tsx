import Link from "next/link";
import type { BlogArticle } from "@/domain/types";
import type { Locale } from "@/infrastructure/i18n/config";

interface BlogFeaturedProps {
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

const featuredLabels: Record<string, string> = {
  en: "FEATURED",
  es: "DESTACADO",
  de: "EMPFOHLEN",
  fr: "À LA UNE",
};

export function BlogFeatured({ article, lang = "en" }: BlogFeaturedProps) {
  const slug = t(article.slug, lang);
  const title = t(article.title, lang);
  const excerpt = t(article.excerpt, lang);
  const dateLocale = dateLocales[lang] || "en-US";
  const prefix = lang === "en" ? "" : `/${lang}`;

  return (
    <Link
      href={`${prefix}/blog/${slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-footer-bg transition-all hover:border-gold/30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {article.featuredImage && (
          <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
            <img
              src={article.featuredImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-col justify-center p-6 lg:p-10">
          <span className="mb-3 font-inter text-[10px] font-medium tracking-[3px] text-gold">
            {featuredLabels[lang] || "FEATURED"}
          </span>
          {article.categories && article.categories.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-3">
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
          <h2 className="mb-3 font-cormorant text-2xl font-medium leading-tight text-text-primary transition-colors group-hover:text-gold lg:text-3xl">
            {title}
          </h2>
          {excerpt && (
            <p className="mb-4 line-clamp-3 font-inter text-sm font-light leading-relaxed text-text-secondary">
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
      </div>
    </Link>
  );
}
