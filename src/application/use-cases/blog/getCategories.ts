import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type { BlogCategoryFilters } from "@/domain/types";

export function getCategories(repository: IBlogRepository) {
  return (filters?: BlogCategoryFilters) => repository.getCategories(filters);
}
