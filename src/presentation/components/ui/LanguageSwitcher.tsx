"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, defaultLocale, localizedPath, resolveInternalPath } from "@/infrastructure/i18n/config";
import type { Locale } from "@/infrastructure/i18n/config";

interface LanguageSwitcherProps {
  lang: Locale;
}

function buildLocalePath(currentLocale: Locale, targetLocale: Locale, pathname: string): string {
  // 1. Strip the locale prefix if present
  let rest = pathname;
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      rest = pathname.slice(locale.length + 1);
      break;
    }
    if (pathname === `/${locale}`) {
      rest = "/";
      break;
    }
  }

  // 2. Resolve translated slug back to internal English path
  const internalPath = resolveInternalPath(rest, currentLocale);

  // 3. Build the target locale's translated path
  return localizedPath(internalPath, targetLocale);
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 && (
            <span className="font-inter text-[11px] text-text-muted">|</span>
          )}
          <Link
            href={buildLocalePath(lang, locale, pathname)}
            className={`font-inter text-[11px] tracking-[1px] transition-colors ${
              locale === lang
                ? "text-gold"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
