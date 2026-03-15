import Link from "next/link";
import { Plus } from "lucide-react";

interface AdminPageHeaderProps {
  title: string;
  actionLabel?: string;
  actionHref?: string;
}

export function AdminPageHeader({
  title,
  actionLabel,
  actionHref,
}: AdminPageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="font-cormorant text-3xl font-medium text-text-primary">
        {title}
      </h1>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 font-inter text-sm font-medium text-text-dark transition-opacity hover:opacity-90"
        >
          <Plus size={16} />
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
