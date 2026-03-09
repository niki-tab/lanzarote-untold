import type { IBlogRepository } from "@/application/ports/IBlogRepository";
import type { CreateBlogArticleInput } from "@/domain/types";

export function createArticle(repository: IBlogRepository) {
  return (input: CreateBlogArticleInput) => repository.createArticle(input);
}
