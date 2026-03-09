import type { IBlogRepository } from "@/application/ports/IBlogRepository";

export function getFeaturedArticle(repository: IBlogRepository) {
  return () => repository.getFeaturedArticle();
}
