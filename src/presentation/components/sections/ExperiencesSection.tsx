import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/domain/types";
import type { Locale } from "@/infrastructure/i18n/config";
import { localizedPath } from "@/infrastructure/i18n/config";

const sectionContent = {
  en: {
    label: "SIGNATURE EXPERIENCES",
    title1: "Unique Lanzarote experiences",
    title2: "for the discerning traveller",
    viewAll: "View all experiences",
  },
  es: {
    label: "EXPERIENCIAS EXCLUSIVAS",
    title1: "Experiencias únicas en Lanzarote",
    title2: "para el viajero exigente",
    viewAll: "Ver todas las experiencias",
  },
  de: {
    label: "SIGNATURE-ERLEBNISSE",
    title1: "Einzigartige Lanzarote-Erlebnisse",
    title2: "für den anspruchsvollen Reisenden",
    viewAll: "Alle Erlebnisse ansehen",
  },
  fr: {
    label: "EXPÉRIENCES SIGNATURE",
    title1: "Expériences uniques à Lanzarote",
    title2: "pour le voyageur exigeant",
    viewAll: "Voir toutes les expériences",
  },
};

interface ExperiencesSectionProps {
  experiences: Experience[];
  lang?: Locale;
}

function ExperienceCard({
  experience,
  size,
  lang = "en",
}: {
  experience: Experience;
  size: "large" | "small";
  lang?: Locale;
}) {
  const isLarge = size === "large";
  const href = localizedPath(experience.slug, lang);

  return (
    <Link
      href={href}
      className="group relative flex min-h-[200px] overflow-hidden lg:min-h-0"
      style={{ height: "100%" }}
    >
      <Image
        src={experience.image}
        alt={experience.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, #2A262400 ${isLarge ? "30%" : "20%"}, ${isLarge ? "#2A2624CC" : "#2A2624CC"} 100%)`,
        }}
      />
      <div className="relative mt-auto flex flex-col gap-2 p-6 lg:p-8">
        <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
          {experience.category}
        </span>
        <h3
          className={`font-cormorant font-normal leading-[1.15] text-text-primary ${isLarge ? "text-2xl lg:text-[28px]" : "text-xl lg:text-2xl"}`}
        >
          {experience.title}
        </h3>
      </div>
    </Link>
  );
}

export function ExperiencesSection({ experiences, lang = "en" }: ExperiencesSectionProps) {
  const [main, ...rest] = experiences;
  const t = sectionContent[lang];
  const experiencesHref = localizedPath("/experiences", lang);

  return (
    <section className="flex w-full flex-col gap-10 px-8 py-[60px] md:px-20 lg:gap-[60px] lg:px-20 lg:py-[120px]">
      {/* Header */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4 lg:gap-5">
          <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
            {t.label}
          </span>
          <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
            {t.title1}
            <br />
            {t.title2}
          </h2>
        </div>
        <Link
          href={experiencesHref}
          className="flex items-center gap-2 font-inter text-[13px] tracking-[1px] text-gold transition-opacity hover:opacity-80"
        >
          {t.viewAll}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="flex h-auto w-full flex-col gap-4 lg:h-[460px] lg:flex-row lg:gap-6">
        {/* Left - Large Card */}
        <div className="flex h-[280px] flex-col gap-4 lg:h-full lg:flex-1 lg:gap-6">
          <ExperienceCard experience={main} size="large" lang={lang} />
        </div>

        {/* Right - 2 Stacked Cards */}
        <div className="flex flex-col gap-4 lg:h-full lg:flex-1 lg:gap-6">
          {rest.map((exp) => (
            <div key={exp.id} className="h-[200px] lg:h-full">
              <ExperienceCard experience={exp} size="small" lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
