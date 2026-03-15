"use client";

import type { BlogCategory, TranslatableText } from "@/domain/types";
import type { Locale } from "@/infrastructure/i18n/config";

interface BlogCategoryFilterProps {
  categories: BlogCategory[];
  activeId: string | null;
  onChange: (id: string | null) => void;
  lang?: Locale;
}

function t(field: TranslatableText | undefined, lang: string): string {
  if (!field) return "";
  return field[lang as keyof TranslatableText] || field.en || "";
}

const allLabels: Record<string, string> = {
  en: "All",
  es: "Todos",
  de: "Alle",
  fr: "Tous",
};

export function BlogCategoryFilter({
  categories,
  activeId,
  onChange,
  lang = "en",
}: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`rounded-full border px-4 py-2 font-inter text-xs tracking-wide transition-colors ${
          !activeId
            ? "border-gold bg-gold/10 text-gold"
            : "border-border text-text-muted hover:border-gold/30 hover:text-text-secondary"
        }`}
      >
        {allLabels[lang] || "All"}
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`rounded-full border px-4 py-2 font-inter text-xs tracking-wide transition-colors ${
            activeId === cat.id
              ? "border-gold bg-gold/10 text-gold"
              : "border-border text-text-muted hover:border-gold/30 hover:text-text-secondary"
          }`}
        >
          {t(cat.name, lang)}
        </button>
      ))}
    </div>
  );
}
