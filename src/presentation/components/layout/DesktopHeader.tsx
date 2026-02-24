import Link from "next/link";
import Image from "next/image";
import type { NavigationItem } from "@/domain/types";

interface DesktopHeaderProps {
  navigation: NavigationItem[];
}

export function DesktopHeader({ navigation }: DesktopHeaderProps) {
  const links = navigation.filter((item) => !item.isCTA);
  const cta = navigation.find((item) => item.isCTA);

  return (
    <header className="hidden w-full items-center justify-between bg-dark-bg px-20 py-6 md:flex">
      <Link href="/" className="-ml-6 lg: flex items-center gap-3 ">
        <Image
          src="/img/logo.png"
          alt="Lanzarote Untold"
          width={90}
          height={90}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-cormorant text-lg font-medium tracking-[4px] text-text-primary">
            Lanzarote Untold
          </span>
          <span className="font-inter text-[7px] font-normal tracking-[3px] text-gold">
            LUXURY EXPERIENCES
          </span>
        </div>
      </Link>

      <nav className="flex items-center gap-10">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="font-inter text-[13px] tracking-[1px] text-text-muted transition-colors hover:text-text-primary"
          >
            {item.label}
          </Link>
        ))}
        {cta && (
          <Link
            href={cta.href}
            className="border border-gold px-7 py-3 font-inter text-[11px] font-medium tracking-[2px] text-gold transition-opacity hover:opacity-80"
          >
            {cta.label}
          </Link>
        )}
      </nav>
    </header>
  );
}
