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

// Blog types

export type ArticleState = "draft" | "published" | "archived";
export type Language = "en" | "es";

export interface TranslatableText {
  en: string;
  es: string;
}

export interface BlogCategory {
  id: string;
  name: TranslatableText;
  slug: TranslatableText;
  description?: TranslatableText;
  color: string;
  isActive: boolean;
  sortOrder: number;
  parentId?: string | null;
  parent?: BlogCategory | null;
  children?: BlogCategory[];
  createdAt: number;
  updatedAt: number;
}

export interface BlogArticle {
  id: string;
  title: TranslatableText;
  slug: TranslatableText;
  excerpt?: TranslatableText;
  body?: TranslatableText;
  seoTitle?: TranslatableText;
  seoDescription?: TranslatableText;
  featuredImage?: string | null;
  featuredImageStorageId?: string | null;
  state: ArticleState;
  isFeatured: boolean;
  publishedAt?: number | null;
  readingTime?: number | null;
  categories?: BlogCategory[];
  createdAt: number;
  updatedAt: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BlogArticleFilters {
  state?: ArticleState;
  categoryId?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface BlogCategoryFilters {
  isActive?: boolean;
  search?: string;
}
