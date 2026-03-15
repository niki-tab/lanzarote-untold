import Image from "next/image";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    label: "WHO WE ARE",
    title: "Born on the island, built for you",
    paragraphs: [
      "Lanzarote Untold was created by people who live on this island and know it in ways no guidebook can capture. We are not a tour operator. We are a small team of locals who design private experiences around the things that make Lanzarote extraordinary. The volcanic landscapes. The centuries-old wine culture. The wild Atlantic coastline. And the people who have shaped this island for generations.",
      "We believe the best way to experience Lanzarote is through the eyes of someone who calls it home. That is why every experience we offer is guided by a local expert, tailored to your interests, and designed to show you the island beyond the tourist trail.",
    ],
    imageAlt:
      "Volcanic landscape of Lanzarote with traditional white architecture and ocean views",
  },
  es: {
    label: "QUIÉNES SOMOS",
    title: "Nacidos en la isla, creados para ti",
    paragraphs: [
      "Lanzarote Untold fue creado por personas que viven en esta isla y la conocen de formas que ninguna guía puede captar. No somos un touroperador. Somos un pequeño equipo de locales que diseñan experiencias privadas en torno a lo que hace a Lanzarote extraordinaria. Los paisajes volcánicos. La cultura vinícola centenaria. La costa atlántica salvaje. Y la gente que ha dado forma a esta isla durante generaciones.",
      "Creemos que la mejor forma de vivir Lanzarote es a través de los ojos de alguien que la llama hogar. Por eso cada experiencia que ofrecemos está guiada por un experto local, adaptada a tus intereses y diseñada para mostrarte la isla más allá de la ruta turística.",
    ],
    imageAlt:
      "Paisaje volcánico de Lanzarote con arquitectura blanca tradicional y vistas al océano",
  },
  de: {
    label: "WER WIR SIND",
    title: "Auf der Insel geboren, für dich geschaffen",
    paragraphs: [
      "Lanzarote Untold wurde von Menschen geschaffen, die auf dieser Insel leben und sie auf eine Weise kennen, die kein Reiseführer einfangen kann. Wir sind kein Reiseveranstalter. Wir sind ein kleines Team von Einheimischen, die private Erlebnisse rund um das gestalten, was Lanzarote außergewöhnlich macht. Die Vulkanlandschaften. Die jahrhundertealte Weinkultur. Die wilde Atlantikküste. Und die Menschen, die diese Insel seit Generationen geprägt haben.",
      "Wir glauben, dass man Lanzarote am besten durch die Augen eines Einheimischen erlebt. Deshalb wird jedes Erlebnis von einem lokalen Experten geführt, auf deine Interessen zugeschnitten und so gestaltet, dass du die Insel jenseits der Touristenpfade kennenlernst.",
    ],
    imageAlt:
      "Vulkanlandschaft von Lanzarote mit traditioneller weißer Architektur und Meerblick",
  },
  fr: {
    label: "QUI NOUS SOMMES",
    title: "Nés sur l'île, créés pour vous",
    paragraphs: [
      "Lanzarote Untold a été créé par des personnes qui vivent sur cette île et la connaissent d'une manière qu'aucun guide ne peut saisir. Nous ne sommes pas un tour-opérateur. Nous sommes une petite équipe de locaux qui conçoit des expériences privées autour de ce qui rend Lanzarote extraordinaire. Les paysages volcaniques. La culture vinicole séculaire. La côte atlantique sauvage. Et les habitants qui ont façonné cette île depuis des générations.",
      "Nous croyons que la meilleure façon de découvrir Lanzarote est à travers les yeux de quelqu'un qui l'appelle foyer. C'est pourquoi chaque expérience est guidée par un expert local, adaptée à vos intérêts et conçue pour vous montrer l'île au-delà des sentiers touristiques.",
    ],
    imageAlt:
      "Paysage volcanique de Lanzarote avec architecture blanche traditionnelle et vue sur l'océan",
  },
};

interface AboutIntroSectionProps {
  lang?: Locale;
}

export function AboutIntroSection({ lang = "en" }: AboutIntroSectionProps) {
  const t = content[lang];

  return (
    <section className="flex w-full flex-col gap-10 px-5 py-[60px] lg:flex-row lg:items-center lg:gap-20 lg:px-[120px] lg:py-[120px]">
      {/* Image */}
      <div className="relative h-[280px] w-full flex-shrink-0 lg:h-[480px] lg:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1588613877465-89cb8a91d363?w=1080&q=80"
          alt={t.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition: "center 70%" }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-5 text-center lg:w-1/2 lg:items-start lg:gap-6 lg:text-left">
        <SectionLabel withLine>{t.label}</SectionLabel>
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          {t.title}
        </h2>
        {t.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
