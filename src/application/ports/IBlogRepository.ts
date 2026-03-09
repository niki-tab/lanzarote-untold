import type {
  BlogCategory,
  BlogArticle,
  CreateBlogCategoryInput,
  UpdateBlogCategoryInput,
  CreateBlogArticleInput,
  UpdateBlogArticleInput,
  PaginatedResult,
  BlogArticleFilters,
  BlogCategoryFilters,
} from "@/domain/types";

export interface IBlogRepository {
  // Categories
  getCategories(filters?: BlogCategoryFilters): Promise<BlogCategory[]>;
  getCategoryById(id: string): Promise<BlogCategory | null>;
  getCategoryBySlug(slug: string, lang?: string): Promise<BlogCategory | null>;
  createCategory(input: CreateBlogCategoryInput): Promise<BlogCategory>;
  updateCategory(input: UpdateBlogCategoryInput): Promise<BlogCategory>;
  deleteCategory(id: string): Promise<void>;

  // Articles
  getArticles(filters?: BlogArticleFilters): Promise<PaginatedResult<BlogArticle>>;
  getArticleById(id: string): Promise<BlogArticle | null>;
  getArticleBySlug(slug: string, lang?: string): Promise<BlogArticle | null>;
  createArticle(input: CreateBlogArticleInput): Promise<BlogArticle>;
  updateArticle(input: UpdateBlogArticleInput): Promise<BlogArticle>;
  deleteArticle(id: string): Promise<void>;

  // Public
  getPublishedArticles(filters?: BlogArticleFilters): Promise<PaginatedResult<BlogArticle>>;
  getFeaturedArticle(): Promise<BlogArticle | null>;
}
