import type { IBlogRepository } from "@/application/ports/IBlogRepository";

export function getArticleById(repository: IBlogRepository) {
  return (id: string) => repository.getArticleById(id);
}
