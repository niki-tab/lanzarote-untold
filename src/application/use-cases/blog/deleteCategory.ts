import type { IBlogRepository } from "@/application/ports/IBlogRepository";

export function deleteCategory(repository: IBlogRepository) {
  return (id: string) => repository.deleteCategory(id);
}
