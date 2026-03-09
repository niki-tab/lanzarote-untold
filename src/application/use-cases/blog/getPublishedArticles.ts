import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type { BlogArticleFilters } from "@/domain/types";

export function getPublishedArticles(repository: IBlogRepository) {
  return (filters?: BlogArticleFilters) => repository.getPublishedArticles(filters);
}
