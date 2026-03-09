import type { IBlogRepository } from "@/application/ports/IBlogRepository";

export function getArticleBySlug(repository: IBlogRepository) {
  return (slug: string, lang?: string) => repository.getArticleBySlug(slug, lang);
}
