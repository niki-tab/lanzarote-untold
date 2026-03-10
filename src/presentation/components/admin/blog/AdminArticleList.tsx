"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import Link from "next/link";
import { Pencil, Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { ArticleState } from "@/domain/types";
import type { Id } from "../../../../../convex/_generated/dataModel";
import { AdminTable } from "../ui/AdminTable";
import { ConfirmModal } from "../ui/ConfirmModal";

const STATE_COLORS: Record<ArticleState, string> = {
  draft: "bg-yellow-500/10 text-yellow-400",
  published: "bg-emerald-500/10 text-emerald-400",
  archived: "bg-zinc-500/10 text-zinc-400",
};

export function AdminArticleList() {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const result = useQuery(api.articles.list, {
    page,
    search: search || undefined,
    state: stateFilter || undefined,
    categoryId: categoryFilter
      ? (categoryFilter as Id<"blogCategories">)
      : undefined,
  });
  const categories = useQuery(api.categories.list, {});
  const removeArticle = useMutation(api.articles.remove);

  const loading = result === undefined;
  const articles = result?.data || [];

  const handleDelete = async () => {
    if (!deleteId) return;
    await removeArticle({ id: deleteId as Id<"blogArticles"> });
    setDeleteId(null);
  };

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-3">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            size={16}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-border bg-dark-bg py-2.5 pl-10 pr-4 font-inter text-sm text-text-primary outline-none focus:border-gold/50"
          />
        </div>
        <select
          value={stateFilter}
          onChange={(e) => {
            setStateFilter(e.target.value);
            setPage(1);
          }}
          className="rounded-lg border border-border bg-dark-bg px-4 py-2.5 font-inter text-sm text-text-primary outline-none focus:border-gold/50"
        >
          <option value="">All States</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setPage(1);
          }}
          className="rounded-lg border border-border bg-dark-bg px-4 py-2.5 font-inter text-sm text-text-primary outline-none focus:border-gold/50"
        >
          <option value="">All Categories</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name.en}
            </option>
          ))}
        </select>
      </div>

      <AdminTable
        headers={["Title", "State", "Categories", "Date", "Actions"]}
        isEmpty={!loading && articles.length === 0}
        emptyMessage="No articles found"
      >
        {articles.map((article) => (
          <tr
            key={article.id}
            className="border-b border-border/50 transition-colors hover:bg-white/[0.02]"
          >
            <td className="px-5 py-3.5">
              <div>
                <span className="font-inter text-sm text-text-primary">
                  {article.title.en}
                </span>
                {article.isFeatured && (
                  <span className="ml-2 rounded bg-gold/10 px-1.5 py-0.5 font-inter text-[10px] font-medium text-gold">
                    FEATURED
                  </span>
                )}
              </div>
              <span className="font-inter text-xs text-text-muted">
                {article.slug.en}
              </span>
            </td>
            <td className="px-5 py-3.5">
              <span
                className={`rounded-full px-2.5 py-0.5 font-inter text-xs capitalize ${STATE_COLORS[article.state as ArticleState]}`}
              >
                {article.state}
              </span>
            </td>
            <td className="px-5 py-3.5">
              <div className="flex flex-wrap gap-1">
                {article.categories?.map((cat) => (
                  <span
                    key={cat.id}
                    className="rounded-full px-2 py-0.5 font-inter text-[10px]"
                    style={{
                      backgroundColor: `${cat.color}20`,
                      color: cat.color,
                    }}
                  >
                    {cat.name.en}
                  </span>
                ))}
              </div>
            </td>
            <td className="px-5 py-3.5 font-inter text-sm text-text-secondary">
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString()
                : "\u2014"}
            </td>
            <td className="px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/blog/articles/${article.id}/edit`}
                  className="rounded-lg p-2 text-text-muted transition-colors hover:bg-white/5 hover:text-gold"
                >
                  <Pencil size={15} />
                </Link>
                <button
                  onClick={() => setDeleteId(article.id)}
                  className="rounded-lg p-2 text-text-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>

      {result && result.totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <span className="font-inter text-sm text-text-muted">
            Page {result.page} of {result.totalPages} ({result.total} total)
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-lg border border-border p-2 text-text-muted transition-colors hover:bg-white/5 disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(result.totalPages, p + 1))}
              disabled={page === result.totalPages}
              className="rounded-lg border border-border p-2 text-text-muted transition-colors hover:bg-white/5 disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      <ConfirmModal
        open={!!deleteId}
        title="Delete Article"
        message="Are you sure you want to delete this article? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
