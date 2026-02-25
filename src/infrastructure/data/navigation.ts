import type { NavigationItem } from "@/domain/types";

export const navigation: NavigationItem[] = [
  { id: "nav-experiences", label: "Experiences", href: "/experiences" },
  { id: "nav-about", label: "About", href: "/about" },
  { id: "nav-journal", label: "Journal", href: "/blog" },
  { id: "nav-enquire", label: "ENQUIRE NOW", href: "/contact", isCTA: true },
];
