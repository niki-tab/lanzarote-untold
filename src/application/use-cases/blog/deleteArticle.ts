import type { IBlogRepository } from "@/application/ports/IBlogRepository";

export function deleteArticle(repository: IBlogRepository) {
  return (id: string) => repository.deleteArticle(id);
}
