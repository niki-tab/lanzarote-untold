"use client";

import type { BlogCategory } from "@/domain/types";

interface BlogCategoryFilterProps {
  categories: BlogCategory[];
  activeId: string | null;
  onChange: (id: string | null) => void;
}

export function BlogCategoryFilter({
  categories,
  activeId,
  onChange,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`rounded-full border px-4 py-2 font-inter text-xs tracking-wide transition-colors ${
          !activeId
            ? "border-gold bg-gold/10 text-gold"
            : "border-border text-text-muted hover:border-gold/30 hover:text-text-secondary"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`rounded-full border px-4 py-2 font-inter text-xs tracking-wide transition-colors ${
            activeId === cat.id
              ? "border-gold bg-gold/10 text-gold"
              : "border-border text-text-muted hover:border-gold/30 hover:text-text-secondary"
          }`}
        >
          {cat.name.en}
        </button>
      ))}
    </div>
  );
}
