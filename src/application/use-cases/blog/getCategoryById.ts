import type { IBlogRepository } from "@/application/ports/IBlogRepository";

export function getCategoryById(repository: IBlogRepository) {
  return (id: string) => repository.getCategoryById(id);
}
