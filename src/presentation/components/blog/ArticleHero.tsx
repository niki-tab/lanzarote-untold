import type { BlogArticle, TranslatableText } from "@/domain/types";
import type { Locale } from "@/infrastructure/i18n/config";

interface ArticleHeroProps {
  article: BlogArticle;
  lang?: Locale;
}

function t(field: TranslatableText | undefined, lang: string): string {
  if (!field) return "";
  return field[lang as keyof TranslatableText] || field.en || "";
}

const dateLocales: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
};

export function ArticleHero({ article, lang = "en" }: ArticleHeroProps) {
  const title = t(article.title, lang);
  const dateLocale = dateLocales[lang] || "en-US";

  return (
    <section className="relative">
      {article.featuredImage && (
        <div className="relative h-[300px] lg:h-[480px]">
          <img
            src={article.featuredImage}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
        </div>
      )}
      <div
        className={`mx-auto max-w-3xl px-5 lg:px-0 ${
          article.featuredImage ? "-mt-32 relative" : "pt-[120px]"
        }`}
      >
        {article.categories && article.categories.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-3">
            {article.categories.map((cat) => (
              <span
                key={cat.id}
                className="font-inter text-[10px] font-medium tracking-[3px] uppercase"
                style={{ color: cat.color }}
              >
                {t(cat.name, lang)}
              </span>
            ))}
          </div>
        )}
        <h1 className="mb-4 font-cormorant text-[36px] font-light leading-[1.1] text-text-primary lg:text-[52px]">
          {title}
        </h1>
        <div className="flex items-center gap-3 font-inter text-sm text-text-muted">
          {article.publishedAt && (
            <time>
              {new Date(article.publishedAt).toLocaleDateString(dateLocale, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
          {article.readingTime && (
            <>
              <span>·</span>
              <span>{article.readingTime} min read</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
