"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import slugify from "slugify";
import type { Language } from "@/domain/types";
import type { Id } from "../../../../../convex/_generated/dataModel";
import { LanguageTabs } from "../ui/LanguageTabs";
import { AdminInput } from "../ui/AdminInput";
import { AdminSelect } from "../ui/AdminSelect";
import { AdminToggle } from "../ui/AdminToggle";

interface AdminCategoryFormProps {
  categoryId?: string;
}

export function AdminCategoryForm({ categoryId }: AdminCategoryFormProps) {
  const router = useRouter();
  const isEdit = !!categoryId;
  const [lang, setLang] = useState<Language>("en");
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const [nameEn, setNameEn] = useState("");
  const [nameEs, setNameEs] = useState("");
  const [slugEn, setSlugEn] = useState("");
  const [slugEs, setSlugEs] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [descriptionEs, setDescriptionEs] = useState("");
  const [color, setColor] = useState("#C9A962");
  const [isActive, setIsActive] = useState(true);
  const [sortOrder, setSortOrder] = useState("0");
  const [parentId, setParentId] = useState("");

  const categories = useQuery(api.categories.list, {});
  const category = useQuery(
    api.categories.getById,
    categoryId ? { id: categoryId as Id<"blogCategories"> } : "skip"
  );
  const createCategory = useMutation(api.categories.create);
  const updateCategory = useMutation(api.categories.update);

  // Populate form when editing
  if (category && !initialized) {
    setNameEn(category.name.en);
    setNameEs(category.name.es);
    setSlugEn(category.slug.en);
    setSlugEs(category.slug.es);
    setDescriptionEn(category.description?.en || "");
    setDescriptionEs(category.description?.es || "");
    setColor(category.color);
    setIsActive(category.isActive);
    setSortOrder(String(category.sortOrder));
    setParentId(category.parentId || "");
    setInitialized(true);
  }

  const autoSlug = (name: string, setter: (v: string) => void) => {
    setter(slugify(name, { lower: true, strict: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isEdit) {
      await updateCategory({
        id: categoryId as Id<"blogCategories">,
        nameEn,
        nameEs,
        slugEn,
        slugEs,
        descriptionEn: descriptionEn || undefined,
        descriptionEs: descriptionEs || undefined,
        color,
        isActive,
        sortOrder: parseInt(sortOrder) || 0,
        parentId: parentId ? (parentId as Id<"blogCategories">) : undefined,
      });
    } else {
      await createCategory({
        nameEn,
        nameEs,
        slugEn,
        slugEs,
        descriptionEn: descriptionEn || undefined,
        descriptionEs: descriptionEs || undefined,
        color,
        isActive,
        sortOrder: parseInt(sortOrder) || 0,
        parentId: parentId ? (parentId as Id<"blogCategories">) : undefined,
      });
    }

    router.push("/admin/blog/categories");
  };

  const parentOptions = (categories || [])
    .filter((c) => c.id !== categoryId)
    .map((c) => ({ value: c.id, label: c.name.en }));

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl rounded-xl border border-border bg-footer-bg p-6"
    >
      <LanguageTabs activeLanguage={lang} onChange={setLang} />

      <div className="space-y-5">
        {lang === "en" ? (
          <>
            <AdminInput
              label="Name (English)"
              value={nameEn}
              onChange={(v) => {
                setNameEn(v);
                if (!isEdit) autoSlug(v, setSlugEn);
              }}
              required
              placeholder="e.g., Hidden Gems"
            />
            <AdminInput
              label="Slug (English)"
              value={slugEn}
              onChange={setSlugEn}
              required
              placeholder="hidden-gems"
            />
            <AdminInput
              label="Description (English)"
              value={descriptionEn}
              onChange={setDescriptionEn}
              placeholder="Brief description..."
            />
          </>
        ) : (
          <>
            <AdminInput
              label="Name (Espanol)"
              value={nameEs}
              onChange={(v) => {
                setNameEs(v);
                if (!isEdit) autoSlug(v, setSlugEs);
              }}
              required
              placeholder="ej., Joyas Ocultas"
            />
            <AdminInput
              label="Slug (Espanol)"
              value={slugEs}
              onChange={setSlugEs}
              required
              placeholder="joyas-ocultas"
            />
            <AdminInput
              label="Description (Espanol)"
              value={descriptionEs}
              onChange={setDescriptionEs}
              placeholder="Breve descripcion..."
            />
          </>
        )}

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="mb-1.5 block font-inter text-xs font-medium tracking-wide text-text-muted">
              COLOR
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-10 w-10 cursor-pointer rounded-lg border border-border bg-transparent"
              />
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full rounded-lg border border-border bg-dark-bg px-4 py-2.5 font-inter text-sm text-text-primary outline-none focus:border-gold/50"
              />
            </div>
          </div>
          <AdminInput
            label="Sort Order"
            value={sortOrder}
            onChange={setSortOrder}
            type="number"
          />
        </div>

        <AdminSelect
          label="Parent Category"
          value={parentId}
          onChange={setParentId}
          options={parentOptions}
          placeholder="None (top level)"
        />

        <AdminToggle
          label="Active"
          checked={isActive}
          onChange={setIsActive}
        />
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => router.push("/admin/blog/categories")}
          className="rounded-lg border border-border px-5 py-2.5 font-inter text-sm text-text-secondary transition-colors hover:bg-white/5"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-gold px-5 py-2.5 font-inter text-sm font-medium text-text-dark transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : isEdit
              ? "Update Category"
              : "Create Category"}
        </button>
      </div>
    </form>
  );
}
