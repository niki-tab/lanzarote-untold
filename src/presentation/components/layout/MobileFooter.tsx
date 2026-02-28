import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/infrastructure/i18n/config";
import { localizedPath } from "@/infrastructure/i18n/config";

interface MobileFooterProps {
  lang: Locale;
}

const footerColumns = [
  {
    title: "EXPLORE",
    links: [
      { label: "Experiences", href: "/experiences" },
      { label: "Private Experiences", href: "/private-experiences" },
      { label: "Journal", href: "/blog" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "hello@lanzaroteuntold.com", href: "mailto:hello@lanzaroteuntold.com" },
      { label: "+34 928 000 000", href: "tel:+34928000000" },
      { label: "Arrecife, Lanzarote", href: "/contact" },
      { label: "Canary Islands, Spain", href: "/contact" },
    ],
  },
];

export function MobileFooter({ lang }: MobileFooterProps) {
  return (
    <footer className="flex w-full flex-col gap-8 bg-dark-bg px-5 pt-10 pb-6 lg:hidden">
      {/* Brand */}
      <div className="flex w-full flex-col gap-5">
        <div className="flex items-center gap-3">
          <Image
            src="/img/logo.png"
            alt="Lanzarote Untold"
            width={90}
            height={90}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="font-cormorant text-base font-medium tracking-[4px] text-text-primary">
              Lanzarote Untold
            </span>
            <span className="font-inter text-[8px] font-normal tracking-[3px] text-gold">
              CURATED EXPERIENCES
            </span>
          </div>
        </div>
        <p className="font-inter text-[13px] font-light leading-[1.7] text-text-muted">
          Bespoke curated experiences in Lanzarote, Canary Islands.
          Crafted with local expertise and international elegance.
        </p>
      </div>

      {/* Nav Columns */}
      <div className="grid grid-cols-3 gap-4">
        {footerColumns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
              {col.title}
            </span>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={localizedPath(link.href, lang)}
                className="font-inter text-[12px] text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-footer-divider" />

      {/* Bottom Bar */}
      <div className="flex w-full flex-col items-center gap-4">
        <span className="font-inter text-xs text-footer-legal">
          2026 Lanzarote Untold. All rights reserved.
        </span>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <Link
              key={item}
              href="#"
              className="font-inter text-xs text-footer-legal transition-colors hover:text-text-muted"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
