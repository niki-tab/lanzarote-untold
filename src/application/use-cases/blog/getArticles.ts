import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type { BlogArticleFilters } from "@/domain/types";

export function getArticles(repository: IBlogRepository) {
  return (filters?: BlogArticleFilters) => repository.getArticles(filters);
}
