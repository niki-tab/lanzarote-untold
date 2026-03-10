"use client";

import type { Language } from "@/domain/types";

interface LanguageTabsProps {
  activeLanguage: Language;
  onChange: (lang: Language) => void;
}

export function LanguageTabs({ activeLanguage, onChange }: LanguageTabsProps) {
  return (
    <div className="mb-6 flex gap-1 rounded-lg border border-border bg-dark-bg p-1">
      {(["en", "es"] as Language[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onChange(lang)}
          className={`rounded-md px-4 py-2 font-inter text-sm transition-colors ${
            activeLanguage === lang
              ? "bg-gold/10 font-medium text-gold"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          {lang === "en" ? "English" : "Español"}
        </button>
      ))}
    </div>
  );
}
