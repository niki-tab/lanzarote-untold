export const locales = ["en", "es", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Maps internal (English) routes to their translated slugs per locale.
// Only non-default locales need entries. English routes are the canonical internal paths.
export const routeSlugs: Record<string, Partial<Record<Locale, string>>> = {
  "/about": {
    es: "/sobre-nosotros",
    de: "/ueber-uns",
    fr: "/a-propos",
  },
  "/contact": {
    es: "/contacto",
    de: "/kontakt",
    fr: "/contact",
  },
  "/experiences": {
    es: "/experiencias",
    de: "/erlebnisse",
    fr: "/experiences",
  },
  "/experiences/sea-adventure": {
    es: "/experiencias/aventura-maritima",
    de: "/erlebnisse/meer-abenteuer",
    fr: "/experiences/aventure-maritime",
  },
  "/experiences/volcano-nature": {
    es: "/experiencias/volcan-naturaleza",
    de: "/erlebnisse/vulkan-natur",
    fr: "/experiences/volcan-nature",
  },
  "/experiences/wine-gastronomy": {
    es: "/experiencias/vino-gastronomia",
    de: "/erlebnisse/wein-gastronomie",
    fr: "/experiences/vin-gastronomie",
  },
  "/private-experiences": {
    es: "/experiencias-privadas",
    de: "/private-erlebnisse",
    fr: "/experiences-privees",
  },
  "/blog": {
    es: "/blog",
    de: "/blog",
    fr: "/blog",
  },
};

/**
 * Convert an internal href (e.g. "/about") to the locale's public slug (e.g. "/sobre-nosotros").
 * For the default locale (en), returns the internal href unchanged.
 * For non-internal hrefs (mailto:, tel:, #, http), returns unchanged.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === defaultLocale || !href.startsWith("/")) return href;

  // Try exact match first (longest paths first)
  const sorted = Object.keys(routeSlugs).sort((a, b) => b.length - a.length);
  for (const internalPath of sorted) {
    if (href === internalPath) {
      return routeSlugs[internalPath][locale] ?? href;
    }
    if (href.startsWith(internalPath + "/")) {
      const translated = routeSlugs[internalPath][locale];
      if (translated) {
        return translated + href.slice(internalPath.length);
      }
    }
  }

  return href;
}

/**
 * Build a fully prefixed, translated path for a given locale.
 * e.g. localizedPath("/about", "es") → "/es/sobre-nosotros"
 *      localizedPath("/about", "en") → "/about"
 */
export function localizedPath(href: string, locale: Locale): string {
  if (!href.startsWith("/")) return href;
  const translated = localizeHref(href, locale);
  if (locale === defaultLocale) return translated;
  return `/${locale}${translated}`;
}

/**
 * Reverse lookup: given a translated slug, return the internal (English) path.
 * e.g. "/sobre-nosotros" with locale "es" → "/about"
 */
export function resolveInternalPath(translatedPath: string, locale: Locale): string {
  if (locale === defaultLocale) return translatedPath;

  const sorted = Object.keys(routeSlugs).sort((a, b) => b.length - a.length);
  for (const internalPath of sorted) {
    const localizedSlug = routeSlugs[internalPath][locale];
    if (!localizedSlug) continue;
    if (translatedPath === localizedSlug) return internalPath;
    if (translatedPath.startsWith(localizedSlug + "/")) {
      return internalPath + translatedPath.slice(localizedSlug.length);
    }
  }

  return translatedPath;
}
