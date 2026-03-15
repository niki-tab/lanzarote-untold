"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";
import { Button } from "@/presentation/components/ui/Button";
import type { Locale } from "@/infrastructure/i18n/config";
import { localizedPath } from "@/infrastructure/i18n/config";

const content = {
  en: {
    label: "LANZAROTE, CANARY ISLANDS",
    heading1: "Private & exclusive",
    heading2: "experiences in Lanzarote",
    description:
      "Curated Lanzarote experiences crafted around your desires. Private tours, hidden coves, volcanic trails, and local gastronomy. All designed by those who call this island home.",
    ctaPrimary: "BEGIN YOUR JOURNEY",
    ctaSecondary: "VIEW EXPERIENCES",
    heroAlt: "Volcanic landscape of Lanzarote with Atlantic Ocean views at sunset",
  },
  es: {
    label: "LANZAROTE, ISLAS CANARIAS",
    heading1: "Experiencias privadas",
    heading2: "y exclusivas en Lanzarote",
    description:
      "Experiencias en Lanzarote diseñadas a tu medida. Tours privados, calas escondidas, senderos volcánicos y gastronomía local. Todo creado por quienes llaman a esta isla hogar.",
    ctaPrimary: "COMIENZA TU VIAJE",
    ctaSecondary: "VER EXPERIENCIAS",
    heroAlt: "Paisaje volcánico de Lanzarote con vistas al océano Atlántico al atardecer",
  },
  de: {
    label: "LANZAROTE, KANARISCHE INSELN",
    heading1: "Private & exklusive",
    heading2: "Erlebnisse auf Lanzarote",
    description:
      "Kuratierte Lanzarote-Erlebnisse, maßgeschneidert für dich. Private Touren, versteckte Buchten, Vulkanwanderungen und lokale Gastronomie. Gestaltet von denen, die diese Insel Heimat nennen.",
    ctaPrimary: "REISE STARTEN",
    ctaSecondary: "ERLEBNISSE ANSEHEN",
    heroAlt: "Vulkanlandschaft von Lanzarote mit Blick auf den Atlantik bei Sonnenuntergang",
  },
  fr: {
    label: "LANZAROTE, ÎLES CANARIES",
    heading1: "Expériences privées",
    heading2: "et exclusives à Lanzarote",
    description:
      "Expériences à Lanzarote créées sur mesure. Tours privés, criques cachées, sentiers volcaniques et gastronomie locale. Tout conçu par ceux qui appellent cette île leur foyer.",
    ctaPrimary: "COMMENCEZ VOTRE VOYAGE",
    ctaSecondary: "VOIR LES EXPÉRIENCES",
    heroAlt: "Paysage volcanique de Lanzarote avec vue sur l'océan Atlantique au coucher du soleil",
  },
};

interface HeroSectionProps {
  lang?: Locale;
}

export function HeroSection({ lang = "en" }: HeroSectionProps) {
  const t = content[lang];
  const contactHref = localizedPath("/contact", lang);
  const experiencesHref = localizedPath("/experiences", lang);

  return (
    <section className="relative h-[420px] w-full overflow-hidden lg:h-[620px]">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1588613877465-89cb8a91d363?w=1920&q=80"
        alt={t.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #2A262400 0%, #2A262480 50%, #2A2624E0 80%, #2A2624 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end pb-10 pl-8 md:pl-20 lg:pb-20 lg:pl-20">
        <motion.div
          className="flex w-full flex-col gap-6 lg:w-[700px] lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel withLine>{t.label}</SectionLabel>

          <h1 className="font-cormorant text-[44px] font-light leading-[1.05] tracking-[-1px] text-text-primary lg:text-[72px]">
            {t.heading1}
            <br />
            {t.heading2}
          </h1>

          <p className="w-full max-w-[300px] font-inter text-sm font-light leading-[1.8] text-text-secondary lg:max-w-[540px] lg:text-base">
            {t.description}
          </p>

          <div className="flex flex-col gap-3 pr-5 md:flex-row md:items-center md:gap-5 md:pr-0">
            <Button href={contactHref} variant="primary" className="w-full justify-center md:w-auto">
              {t.ctaPrimary}
            </Button>
            <Button href={experiencesHref} variant="secondary" className="w-full justify-center md:w-auto">
              {t.ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
