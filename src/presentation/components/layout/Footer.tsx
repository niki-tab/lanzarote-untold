import Link from "next/link";

const footerColumns = [
  {
    title: "EXPLORE",
    links: [
      { label: "Experiences", href: "/experiences" },
      { label: "Lanzarote", href: "/volcano-nature" },
      { label: "Private Villas", href: "/private-custom" },
      { label: "Journal", href: "/contact" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Partnerships", href: "/about" },
      { label: "Careers", href: "/about" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "hello@isladorda.com", href: "mailto:hello@isladorda.com" },
      { label: "+34 928 000 000", href: "tel:+34928000000" },
      { label: "Arrecife, Lanzarote", href: "/contact" },
      { label: "Canary Islands, Spain", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-8 bg-dark-bg px-5 pt-10 pb-6 lg:gap-12 lg:px-[120px] lg:pt-[60px] lg:pb-10">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
        {/* Brand */}
        <div className="flex w-full flex-col gap-5 lg:w-[340px]">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-[14px] bg-gradient-to-br from-gold to-gold-end">
              <span className="font-cormorant text-xs font-semibold tracking-[1px] text-text-dark">
                ID
              </span>
            </div>
            <span className="font-cormorant text-base font-medium tracking-[4px] text-text-primary">
              ISLA DORADA
            </span>
          </div>
          <p className="font-inter text-[13px] font-light leading-[1.7] text-text-muted">
            Bespoke luxury travel experiences in Lanzarote, Canary Islands.
            Crafted with local expertise and international elegance.
          </p>
        </div>

        {/* Nav Columns */}
        <div className="grid grid-cols-3 gap-4 lg:flex lg:gap-20">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
                {col.title}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-inter text-[12px] text-text-muted transition-colors hover:text-text-primary lg:text-[13px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-footer-divider" />

      {/* Bottom Bar */}
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
        <span className="font-inter text-xs text-footer-legal">
          2026 Isla Dorada. All rights reserved.
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
