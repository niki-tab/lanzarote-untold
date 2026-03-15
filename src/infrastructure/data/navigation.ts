import type { NavigationItem } from "@/domain/types";
import type { Locale } from "@/infrastructure/i18n/config";

const labels = {
  en: {
    experiences: "Experiences",
    about: "About",
    journal: "Journal",
    cta: "ENQUIRE NOW",
  },
  es: {
    experiences: "Experiencias",
    about: "Nosotros",
    journal: "Blog",
    cta: "RESERVAR",
  },
  de: {
    experiences: "Erlebnisse",
    about: "Über uns",
    journal: "Blog",
    cta: "ANFRAGEN",
  },
  fr: {
    experiences: "Expériences",
    about: "À propos",
    journal: "Blog",
    cta: "RÉSERVER",
  },
};

export function getNavigation(locale: Locale = "en"): NavigationItem[] {
  const t = labels[locale];
  return [
    { id: "nav-experiences", label: t.experiences, href: "/experiences" },
    { id: "nav-about", label: t.about, href: "/about" },
    { id: "nav-journal", label: t.journal, href: "/blog" },
    { id: "nav-enquire", label: t.cta, href: "/contact", isCTA: true },
  ];
}

// Keep default export for backward compatibility
export const navigation: NavigationItem[] = getNavigation("en");
