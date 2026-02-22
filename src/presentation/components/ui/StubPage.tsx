import Link from "next/link";

interface StubPageProps {
  title: string;
  subtitle: string;
}

export function StubPage({ title, subtitle }: StubPageProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-8 px-[120px] py-[120px]">
      <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
        COMING SOON
      </span>
      <h1 className="text-center font-cormorant text-6xl font-light tracking-[-1px] text-text-primary">
        {title}
      </h1>
      <p className="max-w-[500px] text-center font-inter text-base font-light leading-[1.8] text-text-secondary">
        {subtitle}
      </p>
      <Link
        href="/"
        className="border border-gold px-9 py-4 font-inter text-xs font-medium tracking-[2px] text-gold transition-opacity hover:opacity-80"
      >
        RETURN HOME
      </Link>
    </main>
  );
}
