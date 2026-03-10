"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { BlogArticle, BlogCategory } from "@/domain/types";
import type { Id } from "../../../../convex/_generated/dataModel";
import { BlogArticleCard } from "./BlogArticleCard";
import { BlogFeatured } from "./BlogFeatured";
import { BlogCategoryFilter } from "./BlogCategoryFilter";

interface BlogGridProps {
  initialData: { data: any[]; total: number; page: number; pageSize: number; totalPages: number };
  featured: any;
  categories: any[];
}

export function BlogGrid({ initialData, featured, categories }: BlogGridProps) {
  const [page, setPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const result = useQuery(api.articles.listPublished, {
    page,
    pageSize: 9,
    categoryId: categoryFilter
      ? (categoryFilter as Id<"blogCategories">)
      : undefined,
  });

  // Use server-provided data until client query loads
  const articles = result?.data ?? initialData.data;
  const totalPages = result?.totalPages ?? initialData.totalPages;
  const loading = result === undefined;

  const loadMore = () => {
    setPage((p) => p + 1);
  };

  return (
    <div>
      {featured && !categoryFilter && (
        <div className="mb-10">
          <BlogFeatured article={featured} />
        </div>
      )}

      {categories.length > 0 && (
        <div className="mb-8">
          <BlogCategoryFilter
            categories={categories}
            activeId={categoryFilter}
            onChange={(id) => {
              setCategoryFilter(id);
              setPage(1);
            }}
          />
        </div>
      )}

      {articles.length === 0 && !loading ? (
        <div className="py-20 text-center">
          <p className="font-inter text-sm text-text-muted">
            No articles found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any) => (
            <BlogArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {page < totalPages && (
        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="rounded-lg border border-gold px-8 py-3 font-inter text-sm tracking-wide text-gold transition-colors hover:bg-gold/10 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
