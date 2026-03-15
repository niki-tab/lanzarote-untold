import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/infrastructure/i18n/config";
import { localizedPath } from "@/infrastructure/i18n/config";

interface DesktopFooterProps {
  lang?: Locale;
}

const content = {
  en: {
    tagline: "CURATED EXPERIENCES",
    description:
      "Bespoke curated experiences in Lanzarote, Canary Islands. Crafted with local expertise and international elegance.",
    columns: [
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
    ],
    legal: "2026 Lanzarote Untold. All rights reserved.",
    legalLinks: ["Privacy", "Terms", "Cookies"],
  },
  es: {
    tagline: "EXPERIENCIAS EXCLUSIVAS",
    description:
      "Experiencias exclusivas en Lanzarote, Islas Canarias. Creadas con conocimiento local y elegancia internacional.",
    columns: [
      {
        title: "EXPLORAR",
        links: [
          { label: "Experiencias", href: "/experiences" },
          { label: "Experiencias privadas", href: "/private-experiences" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "EMPRESA",
        links: [
          { label: "Nosotros", href: "/about" },
          { label: "Contacto", href: "/contact" },
        ],
      },
      {
        title: "CONTACTO",
        links: [
          { label: "hello@lanzaroteuntold.com", href: "mailto:hello@lanzaroteuntold.com" },
          { label: "+34 928 000 000", href: "tel:+34928000000" },
          { label: "Arrecife, Lanzarote", href: "/contact" },
          { label: "Islas Canarias, España", href: "/contact" },
        ],
      },
    ],
    legal: "2026 Lanzarote Untold. Todos los derechos reservados.",
    legalLinks: ["Privacidad", "Términos", "Cookies"],
  },
  de: {
    tagline: "EXKLUSIVE ERLEBNISSE",
    description:
      "Exklusive Erlebnisse auf Lanzarote, Kanarische Inseln. Gestaltet mit lokaler Expertise und internationaler Eleganz.",
    columns: [
      {
        title: "ENTDECKEN",
        links: [
          { label: "Erlebnisse", href: "/experiences" },
          { label: "Private Erlebnisse", href: "/private-experiences" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "UNTERNEHMEN",
        links: [
          { label: "Über uns", href: "/about" },
          { label: "Kontakt", href: "/contact" },
        ],
      },
      {
        title: "KONTAKT",
        links: [
          { label: "hello@lanzaroteuntold.com", href: "mailto:hello@lanzaroteuntold.com" },
          { label: "+34 928 000 000", href: "tel:+34928000000" },
          { label: "Arrecife, Lanzarote", href: "/contact" },
          { label: "Kanarische Inseln, Spanien", href: "/contact" },
        ],
      },
    ],
    legal: "2026 Lanzarote Untold. Alle Rechte vorbehalten.",
    legalLinks: ["Datenschutz", "AGB", "Cookies"],
  },
  fr: {
    tagline: "EXPÉRIENCES EXCLUSIVES",
    description:
      "Expériences exclusives à Lanzarote, îles Canaries. Conçues avec une expertise locale et une élégance internationale.",
    columns: [
      {
        title: "EXPLORER",
        links: [
          { label: "Expériences", href: "/experiences" },
          { label: "Expériences privées", href: "/private-experiences" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "ENTREPRISE",
        links: [
          { label: "À propos", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "CONTACT",
        links: [
          { label: "hello@lanzaroteuntold.com", href: "mailto:hello@lanzaroteuntold.com" },
          { label: "+34 928 000 000", href: "tel:+34928000000" },
          { label: "Arrecife, Lanzarote", href: "/contact" },
          { label: "Îles Canaries, Espagne", href: "/contact" },
        ],
      },
    ],
    legal: "2026 Lanzarote Untold. Tous droits réservés.",
    legalLinks: ["Confidentialité", "Conditions", "Cookies"],
  },
};

export function DesktopFooter({ lang }: DesktopFooterProps) {
  const t = content[lang];

  return (
    <footer className="hidden w-full flex-col gap-12 bg-dark-bg px-20 pt-[60px] pb-10 lg:flex">
      <div className="flex w-full flex-row justify-between">
        {/* Brand */}
        <div className="flex w-[340px] flex-col gap-5">
          <div className="flex items-center lg:ml-[-20px] flex items-center gap-3">
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
                {t.tagline}
              </span>
            </div>
          </div>
          <p className="font-inter text-[13px] font-light leading-[1.7] text-text-muted">
            {t.description}
          </p>
        </div>

        {/* Nav Columns */}
        <div className="flex gap-20">
          {t.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
                {col.title}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={localizedPath(link.href, lang)}
                  className="font-inter text-[13px] text-text-muted transition-colors hover:text-text-primary"
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
      <div className="flex w-full flex-row items-center justify-between">
        <span className="font-inter text-xs text-footer-legal">
          {t.legal}
        </span>
        <div className="flex gap-6">
          {t.legalLinks.map((item) => (
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
