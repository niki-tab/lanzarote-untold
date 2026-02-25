import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-gold text-text-dark font-medium",
  secondary:
    "border border-[#F5F5F050] text-text-primary",
  outline:
    "border border-gold text-gold font-medium",
} as const;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 px-9 py-4 font-inter text-xs tracking-[2px] transition-opacity bg-dark-bg hover:opacity-80 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
