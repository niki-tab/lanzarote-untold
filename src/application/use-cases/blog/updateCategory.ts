import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type { UpdateBlogCategoryInput } from "@/domain/types";

export function updateCategory(repository: IBlogRepository) {
  return (input: UpdateBlogCategoryInput) => repository.updateCategory(input);
}
