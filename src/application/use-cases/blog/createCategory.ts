import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type { CreateBlogCategoryInput } from "@/domain/types";

export function createCategory(repository: IBlogRepository) {
  return (input: CreateBlogCategoryInput) => repository.createCategory(input);
}
