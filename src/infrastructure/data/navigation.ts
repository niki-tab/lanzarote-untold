import type { NavigationItem } from "@/domain/types";

export const navigation: NavigationItem[] = [
  { id: "nav-experiences", label: "Experiences", href: "/experiences" },
  { id: "nav-lanzarote", label: "Lanzarote", href: "/volcano-nature" },
  { id: "nav-about", label: "About", href: "/about" },
  { id: "nav-journal", label: "Journal", href: "/contact" },
  { id: "nav-enquire", label: "ENQUIRE NOW", href: "/contact", isCTA: true },
];
