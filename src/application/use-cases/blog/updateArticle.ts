import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type { UpdateBlogArticleInput } from "@/domain/types";

export function updateArticle(repository: IBlogRepository) {
  return (input: UpdateBlogArticleInput) => repository.updateArticle(input);
}
