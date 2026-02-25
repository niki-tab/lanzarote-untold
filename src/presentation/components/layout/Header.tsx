import Link from "next/link";
import type { NavigationItem } from "@/domain/types";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  navigation: NavigationItem[];
}

export function Header({ navigation }: HeaderProps) {
  const links = navigation.filter((item) => !item.isCTA);
  const cta = navigation.find((item) => item.isCTA);

  return (
    <header className="relative flex w-full items-center justify-between bg-dark-bg px-5 py-4 md:px-20 md:py-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-[18px] bg-gradient-to-br from-gold to-gold-end">
          <span className="font-cormorant text-sm font-semibold tracking-[1px] text-text-dark">
            ID
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-cormorant text-lg font-medium tracking-[4px] text-text-primary">
            ISLA DORADA
          </span>
          <span className="font-inter text-[9px] font-normal tracking-[3px] text-gold">
            Bespoke Travel
          </span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-10 md:flex">
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
            className="border border-gold px-7 py-3 font-inter text-[11px] font-medium tracking-[2px] text-gold transition-opacity hover:bg-gold hover:text-text-dark"
          >
            {cta.label}
          </Link>
        )}
      </nav>

      {/* Mobile nav */}
      <MobileNav navigation={navigation} />
    </header>
  );
}
