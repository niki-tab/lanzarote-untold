export interface Experience {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorLocation: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}
