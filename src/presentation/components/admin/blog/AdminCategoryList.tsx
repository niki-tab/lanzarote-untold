"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import Link from "next/link";
import { Pencil, Trash2, Search } from "lucide-react";
import { AdminTable } from "../ui/AdminTable";
import { ConfirmModal } from "../ui/ConfirmModal";
import type { Id } from "../../../../../convex/_generated/dataModel";

export function AdminCategoryList() {
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const categories = useQuery(api.categories.list, {
    search: search || undefined,
  });
  const updateCategory = useMutation(api.categories.update);
  const removeCategory = useMutation(api.categories.remove);

  const loading = categories === undefined;

  const handleDelete = async () => {
    if (!deleteId) return;
    await removeCategory({ id: deleteId as Id<"blogCategories"> });
    setDeleteId(null);
  };

  const handleToggleActive = async (cat: { id: string; isActive: boolean }) => {
    await updateCategory({
      id: cat.id as Id<"blogCategories">,
      isActive: !cat.isActive,
    });
  };

  return (
    <>
      <div className="mb-4">
        <div className="relative max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            size={16}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search categories..."
            className="w-full rounded-lg border border-border bg-dark-bg py-2.5 pl-10 pr-4 font-inter text-sm text-text-primary outline-none transition-colors focus:border-gold/50"
          />
        </div>
      </div>

      <AdminTable
        headers={["Name", "Slug", "Color", "Active", "Order", "Actions"]}
        isEmpty={!loading && (categories?.length ?? 0) === 0}
        emptyMessage="No categories found"
      >
        {categories?.map((cat) => (
          <tr
            key={cat.id}
            className="border-b border-border/50 transition-colors hover:bg-white/[0.02]"
          >
            <td className="px-5 py-3.5">
              <span className="font-inter text-sm text-text-primary">
                {cat.name.en}
              </span>
              <span className="ml-2 font-inter text-xs text-text-muted">
                / {cat.name.es}
              </span>
            </td>
            <td className="px-5 py-3.5 font-inter text-sm text-text-secondary">
              {cat.slug.en}
            </td>
            <td className="px-5 py-3.5">
              <span
                className="inline-block h-5 w-5 rounded-full border border-border"
                style={{ backgroundColor: cat.color }}
              />
            </td>
            <td className="px-5 py-3.5">
              <button
                onClick={() => handleToggleActive(cat)}
                className={`rounded-full px-2.5 py-0.5 font-inter text-xs ${
                  cat.isActive
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {cat.isActive ? "Active" : "Inactive"}
              </button>
            </td>
            <td className="px-5 py-3.5 font-inter text-sm text-text-secondary">
              {cat.sortOrder}
            </td>
            <td className="px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/blog/categories/${cat.id}/edit`}
                  className="rounded-lg p-2 text-text-muted transition-colors hover:bg-white/5 hover:text-gold"
                >
                  <Pencil size={15} />
                </Link>
                <button
                  onClick={() => setDeleteId(cat.id)}
                  className="rounded-lg p-2 text-text-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>

      <ConfirmModal
        open={!!deleteId}
        title="Delete Category"
        message="Are you sure you want to delete this category? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
