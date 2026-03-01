import { LayoutDashboard, FolderOpen, FileText } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Categories",
    description: "Manage blog categories",
    href: "/admin/blog/categories",
    icon: FolderOpen,
  },
  {
    title: "Articles",
    description: "Manage blog articles",
    href: "/admin/blog/articles",
    icon: FileText,
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <LayoutDashboard className="text-gold" size={28} />
        <h1 className="font-cormorant text-3xl font-medium text-text-primary">
          Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-border bg-footer-bg p-6 transition-all hover:border-gold/30 hover:bg-footer-bg/80"
          >
            <card.icon
              className="mb-4 text-gold transition-transform group-hover:scale-110"
              size={32}
            />
            <h2 className="mb-1 font-cormorant text-xl font-medium text-text-primary">
              {card.title}
            </h2>
            <p className="font-inter text-sm font-light text-text-secondary">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
