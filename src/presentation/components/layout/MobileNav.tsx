"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavigationItem } from "@/domain/types";

interface MobileNavProps {
  navigation: NavigationItem[];
}

export function MobileNav({ navigation }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const links = navigation.filter((item) => !item.isCTA);
  const cta = navigation.find((item) => item.isCTA);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        aria-label="Toggle menu"
      >
        <span
          className={`h-px w-5 bg-text-primary transition-all duration-300 ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-text-primary transition-all duration-300 ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-6 border-t border-card-border bg-dark-bg px-5 py-8">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-inter text-[13px] tracking-[1px] text-text-muted transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
          {cta && (
            <Link
              href={cta.href}
              onClick={() => setIsOpen(false)}
              className="w-full border border-gold py-3 text-center font-inter text-[11px] font-medium tracking-[2px] text-gold transition-opacity hover:opacity-80"
            >
              {cta.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
