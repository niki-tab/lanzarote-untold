"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import slugify from "slugify";
import type { Language, ArticleState } from "@/domain/types";
import type { Id } from "../../../../../convex/_generated/dataModel";
import { LanguageTabs } from "../ui/LanguageTabs";
import { AdminInput } from "../ui/AdminInput";
import { AdminSelect } from "../ui/AdminSelect";
import { AdminToggle } from "../ui/AdminToggle";
import { ImageUpload } from "../ui/ImageUpload";
import { RichTextEditor } from "../ui/RichTextEditor";

interface AdminArticleFormProps {
  articleId?: string;
}

export function AdminArticleForm({ articleId }: AdminArticleFormProps) {
  const router = useRouter();
  const isEdit = !!articleId;
  const [lang, setLang] = useState<Language>("en");
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const [titleEn, setTitleEn] = useState("");
  const [titleEs, setTitleEs] = useState("");
  const [slugEn, setSlugEn] = useState("");
  const [slugEs, setSlugEs] = useState("");
  const [excerptEn, setExcerptEn] = useState("");
  const [excerptEs, setExcerptEs] = useState("");
  const [bodyEn, setBodyEn] = useState("");
  const [bodyEs, setBodyEs] = useState("");
  const [seoTitleEn, setSeoTitleEn] = useState("");
  const [seoTitleEs, setSeoTitleEs] = useState("");
  const [seoDescriptionEn, setSeoDescriptionEn] = useState("");
  const [seoDescriptionEs, setSeoDescriptionEs] = useState("");
  const [featuredImageStorageId, setFeaturedImageStorageId] = useState<string | null>(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null);
  const [state, setState] = useState<ArticleState>("draft");
  const [isFeatured, setIsFeatured] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);

  const categories = useQuery(api.categories.list, {});
  const article = useQuery(
    api.articles.getById,
    articleId ? { id: articleId as Id<"blogArticles"> } : "skip"
  );
  const createArticle = useMutation(api.articles.create);
  const updateArticle = useMutation(api.articles.update);

  // Populate form when editing
  if (article && !initialized) {
    setTitleEn(article.title.en);
    setTitleEs(article.title.es);
    setSlugEn(article.slug.en);
    setSlugEs(article.slug.es);
    setExcerptEn(article.excerpt?.en || "");
    setExcerptEs(article.excerpt?.es || "");
    setBodyEn(article.body?.en || "");
    setBodyEs(article.body?.es || "");
    setSeoTitleEn(article.seoTitle?.en || "");
    setSeoTitleEs(article.seoTitle?.es || "");
    setSeoDescriptionEn(article.seoDescription?.en || "");
    setSeoDescriptionEs(article.seoDescription?.es || "");
    setFeaturedImageUrl(article.featuredImage || null);
    setFeaturedImageStorageId(article.featuredImageStorageId || null);
    setState(article.state as ArticleState);
    setIsFeatured(article.isFeatured);
    setSelectedCategoryIds(article.categories?.map((c) => c.id) || []);
    setInitialized(true);
  }

  const autoSlug = (name: string, setter: (v: string) => void) => {
    setter(slugify(name, { lower: true, strict: true }));
  };

  const handleSubmit = async (targetState?: ArticleState) => {
    setLoading(true);
    const finalState = targetState || state;

    const data = {
      titleEn,
      titleEs,
      slugEn,
      slugEs,
      excerptEn: excerptEn || undefined,
      excerptEs: excerptEs || undefined,
      bodyEn: bodyEn || undefined,
      bodyEs: bodyEs || undefined,
      seoTitleEn: seoTitleEn || undefined,
      seoTitleEs: seoTitleEs || undefined,
      seoDescriptionEn: seoDescriptionEn || undefined,
      seoDescriptionEs: seoDescriptionEs || undefined,
      featuredImage: featuredImageStorageId
        ? (featuredImageStorageId as Id<"_storage">)
        : undefined,
      state: finalState,
      isFeatured,
      publishedAt: finalState === "published" ? Date.now() : undefined,
      categoryIds: selectedCategoryIds as Id<"blogCategories">[],
    };

    if (isEdit) {
      await updateArticle({ id: articleId as Id<"blogArticles">, ...data });
    } else {
      await createArticle(data);
    }

    router.push("/admin/blog/articles");
  };

  const toggleCategory = (id: string) => {
    setSelectedCategoryIds((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex gap-6">
      {/* Left column: content */}
      <div className="flex-1 space-y-6 rounded-xl border border-border bg-footer-bg p-6">
        <LanguageTabs activeLanguage={lang} onChange={setLang} />

        {lang === "en" ? (
          <div className="space-y-5">
            <AdminInput
              label="Title (English)"
              value={titleEn}
              onChange={(v) => {
                setTitleEn(v);
                if (!isEdit) autoSlug(v, setSlugEn);
              }}
              required
              placeholder="Article title"
            />
            <AdminInput
              label="Slug (English)"
              value={slugEn}
              onChange={setSlugEn}
              required
              placeholder="article-slug"
            />
            <AdminInput
              label="Excerpt (English)"
              value={excerptEn}
              onChange={setExcerptEn}
              placeholder="Brief summary..."
            />
            <div>
              <label className="mb-1.5 block font-inter text-xs font-medium tracking-wide text-text-muted">
                BODY (ENGLISH)
              </label>
              <RichTextEditor content={bodyEn} onChange={setBodyEn} />
            </div>
            <AdminInput
              label="SEO Title (English)"
              value={seoTitleEn}
              onChange={setSeoTitleEn}
              placeholder="SEO title (max 60 chars)"
            />
            <AdminInput
              label="SEO Description (English)"
              value={seoDescriptionEn}
              onChange={setSeoDescriptionEn}
              placeholder="SEO description (max 155 chars)"
            />
          </div>
        ) : (
          <div className="space-y-5">
            <AdminInput
              label="Title (Espanol)"
              value={titleEs}
              onChange={(v) => {
                setTitleEs(v);
                if (!isEdit) autoSlug(v, setSlugEs);
              }}
              required
              placeholder="Titulo del articulo"
            />
            <AdminInput
              label="Slug (Espanol)"
              value={slugEs}
              onChange={setSlugEs}
              required
              placeholder="slug-del-articulo"
            />
            <AdminInput
              label="Excerpt (Espanol)"
              value={excerptEs}
              onChange={setExcerptEs}
              placeholder="Resumen breve..."
            />
            <div>
              <label className="mb-1.5 block font-inter text-xs font-medium tracking-wide text-text-muted">
                BODY (ESPANOL)
              </label>
              <RichTextEditor content={bodyEs} onChange={setBodyEs} />
            </div>
            <AdminInput
              label="SEO Title (Espanol)"
              value={seoTitleEs}
              onChange={setSeoTitleEs}
              placeholder="Titulo SEO (max 60 caracteres)"
            />
            <AdminInput
              label="SEO Description (Espanol)"
              value={seoDescriptionEs}
              onChange={setSeoDescriptionEs}
              placeholder="Descripcion SEO (max 155 caracteres)"
            />
          </div>
        )}
      </div>

      {/* Right column: meta */}
      <div className="w-80 space-y-6">
        <div className="rounded-xl border border-border bg-footer-bg p-5">
          <h3 className="mb-4 font-inter text-xs font-medium tracking-wide text-text-muted">
            STATUS
          </h3>
          <AdminSelect
            label="State"
            value={state}
            onChange={(v) => setState(v as ArticleState)}
            options={[
              { value: "draft", label: "Draft" },
              { value: "published", label: "Published" },
              { value: "archived", label: "Archived" },
            ]}
          />
          <div className="mt-4">
            <AdminToggle
              label="Featured Article"
              checked={isFeatured}
              onChange={setIsFeatured}
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-footer-bg p-5">
          <h3 className="mb-4 font-inter text-xs font-medium tracking-wide text-text-muted">
            FEATURED IMAGE
          </h3>
          <ImageUpload
            value={featuredImageUrl}
            onChange={(url, storageId) => {
              setFeaturedImageUrl(url);
              setFeaturedImageStorageId(storageId);
            }}
          />
        </div>

        <div className="rounded-xl border border-border bg-footer-bg p-5">
          <h3 className="mb-4 font-inter text-xs font-medium tracking-wide text-text-muted">
            CATEGORIES
          </h3>
          <div className="space-y-2">
            {categories?.map((cat) => (
              <label
                key={cat.id}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
              >
                <input
                  type="checkbox"
                  checked={selectedCategoryIds.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                  className="accent-gold"
                />
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="font-inter text-sm text-text-secondary">
                  {cat.name.en}
                </span>
              </label>
            ))}
            {(categories?.length ?? 0) === 0 && (
              <p className="font-inter text-sm text-text-muted">
                No categories yet
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => handleSubmit("published")}
            disabled={loading}
            className="w-full rounded-lg bg-gold px-4 py-2.5 font-inter text-sm font-medium text-text-dark transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Publish"}
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            disabled={loading}
            className="w-full rounded-lg border border-border px-4 py-2.5 font-inter text-sm text-text-secondary transition-colors hover:bg-white/5 disabled:opacity-50"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/blog/articles")}
            className="w-full rounded-lg px-4 py-2.5 font-inter text-sm text-text-muted transition-colors hover:text-text-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
