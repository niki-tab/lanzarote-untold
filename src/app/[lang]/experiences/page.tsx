import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { CTASection } from "@/presentation/components/sections/CTASection";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";
import { localizedPath } from "@/infrastructure/i18n/config";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    meta: {
      title: "Things to Do in Lanzarote: Exclusive Experiences | Lanzarote Untold",
      description:
        "Discover the best things to do in Lanzarote. Private volcano tours, wine tastings, boat trips, salt flat visits and more. All curated by local experts. Enquire now.",
      keywords: [
        "things to do in lanzarote",
        "lanzarote excursions",
        "lanzarote activities",
        "lanzarote experiences",
        "best things to do lanzarote",
        "lanzarote hidden gems",
        "lanzarote private tour",
      ],
    },
    hero: {
      label: "SIGNATURE EXPERIENCES",
      title: "Things to Do in Lanzarote: Exclusive Experiences",
      subtitle:
        "Discover the best Lanzarote activities and excursions, curated for the discerning traveller. Every experience is crafted around you, your pace, your passions, your story.",
    },
    gridTitle: "Explore Lanzarote excursions by category",
    testimonialsTitle: "What our guests say about their Lanzarote experiences",
    categories: [
      {
        title: "Wine & Gastronomy",
        description: "Private wine tours, local bodegas, and Michelin-starred dining in Lanzarote",
        image:
          "https://images.unsplash.com/photo-1572935041470-cef27cedab8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU3OTF8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/wine-gastronomy",
        label: "GASTRONOMY",
        alt: "Private wine tasting in Lanzarote volcanic vineyards",
      },
      {
        title: "Sea & Adventure",
        description: "Lanzarote boat trips, catamaran charters, diving, and private fishing",
        image:
          "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/sea-adventure",
        label: "MARITIME",
        alt: "Private boat trip along the coast of Lanzarote",
      },
      {
        title: "Volcano & Nature",
        description: "Lanzarote volcano tours, hidden hiking trails, and untouched landscapes",
        image:
          "https://images.unsplash.com/photo-1652040287142-de0541acb2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU2MTV8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/volcano-nature",
        label: "ADVENTURE",
        alt: "Private volcano tour through Lanzarote fire mountains",
      },
      {
        title: "Salt & Heritage",
        description: "Private tour of the Salinas de Janubio salt flats with Flor de Sal tasting",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "HERITAGE",
        alt: "Salinas de Janubio artisanal salt flats in Lanzarote",
      },
      {
        title: "Private & Custom",
        description: "Exclusive Lanzarote private tours and bespoke itineraries designed around you",
        image:
          "https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        href: "/private-experiences",
        label: "BESPOKE",
        alt: "Bespoke private experience in Lanzarote",
      },
    ],
  },
  es: {
    meta: {
      title: "Que Hacer en Lanzarote: Experiencias Exclusivas | Lanzarote Untold",
      description:
        "Descubre que hacer en Lanzarote. Tours privados al volcan, catas de vino, excursiones en barco, visitas a las salinas y mas. Todo con guias locales. Reserva ahora.",
      keywords: [
        "que hacer en lanzarote",
        "lanzarote que ver",
        "lanzarote excursiones",
        "lanzarote actividades",
        "lanzarote tours",
        "lanzarote planes",
        "lanzarote experiencias",
      ],
    },
    hero: {
      label: "EXPERIENCIAS EXCLUSIVAS",
      title: "Que Hacer en Lanzarote: Experiencias Exclusivas",
      subtitle:
        "Descubre las mejores actividades y excursiones en Lanzarote, pensadas para el viajero exigente. Cada experiencia se disena alrededor de ti, tu ritmo, tus pasiones, tu historia.",
    },
    gridTitle: "Explora las excursiones en Lanzarote por categoria",
    testimonialsTitle: "Lo que dicen nuestros huespedes sobre sus experiencias en Lanzarote",
    categories: [
      {
        title: "Vino y Gastronomia",
        description: "Catas de vino privadas, bodegas locales y alta gastronomia en Lanzarote",
        image:
          "https://images.unsplash.com/photo-1572935041470-cef27cedab8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU3OTF8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/wine-gastronomy",
        label: "GASTRONOMIA",
        alt: "Cata de vino privada en vinedos volcanicos de Lanzarote",
      },
      {
        title: "Mar y Aventura",
        description: "Excursiones en barco, catamaran, buceo y pesca privada en Lanzarote",
        image:
          "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/sea-adventure",
        label: "MARITIMO",
        alt: "Excursion privada en barco por la costa de Lanzarote",
      },
      {
        title: "Volcan y Naturaleza",
        description: "Tours al volcan de Lanzarote, rutas de senderismo y paisajes virgenes",
        image:
          "https://images.unsplash.com/photo-1652040287142-de0541acb2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU2MTV8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/volcano-nature",
        label: "AVENTURA",
        alt: "Tour privado por los volcanes de Lanzarote",
      },
      {
        title: "Sal y Patrimonio",
        description: "Visita privada a las Salinas de Janubio con degustacion de Flor de Sal",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "PATRIMONIO",
        alt: "Salinas de Janubio, salinas artesanales en Lanzarote",
      },
      {
        title: "Privado y a Medida",
        description: "Tours privados exclusivos e itinerarios a medida disenados para ti",
        image:
          "https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        href: "/private-experiences",
        label: "A MEDIDA",
        alt: "Experiencia privada a medida en Lanzarote",
      },
    ],
  },
  de: {
    meta: {
      title: "Lanzarote Ausfluge & Sehenswurdigkeiten: Exklusive Erlebnisse | Lanzarote Untold",
      description:
        "Entdecke die besten Lanzarote Ausfluge und Sehenswurdigkeiten. Private Vulkantouren, Weinproben, Bootstouren, Salinenbesuche und mehr. Mit lokalen Experten. Jetzt anfragen.",
      keywords: [
        "lanzarote ausfluge",
        "lanzarote sehenswurdigkeiten",
        "lanzarote aktivitaten",
        "lanzarote touren",
        "lanzarote geheimtipps",
        "lanzarote erlebnisse",
        "lanzarote urlaub",
      ],
    },
    hero: {
      label: "EXKLUSIVE ERLEBNISSE",
      title: "Lanzarote Ausfluge & Sehenswurdigkeiten: Exklusive Erlebnisse",
      subtitle:
        "Entdecke die besten Aktivitaten und Ausfluge auf Lanzarote, kuratiert fur anspruchsvolle Reisende. Jedes Erlebnis wird um dich herum gestaltet, dein Tempo, deine Leidenschaften, deine Geschichte.",
    },
    gridTitle: "Entdecke Lanzarote Ausfluge nach Kategorie",
    testimonialsTitle: "Was unsere Gaste uber ihre Lanzarote Erlebnisse sagen",
    categories: [
      {
        title: "Wein & Gastronomie",
        description: "Private Weinproben, lokale Bodegas und Spitzengastronomie auf Lanzarote",
        image:
          "https://images.unsplash.com/photo-1572935041470-cef27cedab8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU3OTF8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/wine-gastronomy",
        label: "GASTRONOMIE",
        alt: "Private Weinverkostung in den vulkanischen Weinbergen von Lanzarote",
      },
      {
        title: "Meer & Abenteuer",
        description: "Bootstouren, Katamaran, Tauchen und privates Angeln auf Lanzarote",
        image:
          "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/sea-adventure",
        label: "MARITIM",
        alt: "Private Bootstour entlang der Kuste von Lanzarote",
      },
      {
        title: "Vulkan & Natur",
        description: "Lanzarote Vulkantouren, versteckte Wanderwege und unberuhrte Landschaften",
        image:
          "https://images.unsplash.com/photo-1652040287142-de0541acb2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU2MTV8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/volcano-nature",
        label: "ABENTEUER",
        alt: "Private Vulkantour durch die Feuerberge von Lanzarote",
      },
      {
        title: "Salz & Kulturerbe",
        description: "Private Fuhrung durch die Salinas de Janubio mit Flor de Sal Verkostung",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "KULTURERBE",
        alt: "Salinas de Janubio handwerkliche Salzgewinnung auf Lanzarote",
      },
      {
        title: "Privat & Massgeschneidert",
        description: "Exklusive private Touren und massgeschneiderte Reiserouten fur dich",
        image:
          "https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        href: "/private-experiences",
        label: "EXKLUSIV",
        alt: "Massgeschneidertes privates Erlebnis auf Lanzarote",
      },
    ],
  },
  fr: {
    meta: {
      title: "Que Faire a Lanzarote: Experiences Exclusives | Lanzarote Untold",
      description:
        "Decouvrez que faire a Lanzarote. Visites privees du volcan, degustations de vin, excursions en bateau, salines et plus. Guides locaux experts. Reservez maintenant.",
      keywords: [
        "lanzarote que faire",
        "lanzarote excursions",
        "lanzarote activites",
        "lanzarote visite",
        "lanzarote incontournables",
        "lanzarote voyage",
        "lanzarote experiences",
      ],
    },
    hero: {
      label: "EXPERIENCES EXCLUSIVES",
      title: "Que Faire a Lanzarote: Experiences Exclusives",
      subtitle:
        "Decouvrez les meilleures activites et excursions a Lanzarote, pensees pour le voyageur exigeant. Chaque experience est concue autour de vous, votre rythme, vos passions, votre histoire.",
    },
    gridTitle: "Explorez les excursions a Lanzarote par categorie",
    testimonialsTitle: "Ce que disent nos hotes de leurs experiences a Lanzarote",
    categories: [
      {
        title: "Vin & Gastronomie",
        description: "Degustations de vin privees, caves locales et haute gastronomie a Lanzarote",
        image:
          "https://images.unsplash.com/photo-1572935041470-cef27cedab8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU3OTF8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/wine-gastronomy",
        label: "GASTRONOMIE",
        alt: "Degustation de vin privee dans les vignobles volcaniques de Lanzarote",
      },
      {
        title: "Mer & Aventure",
        description: "Excursions en bateau, catamaran, plongee et peche privee a Lanzarote",
        image:
          "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/sea-adventure",
        label: "MARITIME",
        alt: "Excursion privee en bateau le long de la cote de Lanzarote",
      },
      {
        title: "Volcan & Nature",
        description: "Visites du volcan de Lanzarote, sentiers de randonnee et paysages preserves",
        image:
          "https://images.unsplash.com/photo-1652040287142-de0541acb2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU2MTV8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/volcano-nature",
        label: "AVENTURE",
        alt: "Visite privee des volcans et montagnes de feu de Lanzarote",
      },
      {
        title: "Sel & Patrimoine",
        description: "Visite privee des Salinas de Janubio avec degustation de Flor de Sal",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "PATRIMOINE",
        alt: "Salinas de Janubio, salines artisanales a Lanzarote",
      },
      {
        title: "Prive & Sur Mesure",
        description: "Visites privees exclusives et itineraires sur mesure concus pour vous",
        image:
          "https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        href: "/private-experiences",
        label: "SUR MESURE",
        alt: "Experience privee sur mesure a Lanzarote",
      },
    ],
  },
} as const;

function getItemListStructuredData(locale: string) {
  const t = content[locale as keyof typeof content] ?? content.en;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.hero.title,
    description: t.meta.description,
    numberOfItems: t.categories.length,
    itemListElement: t.categories.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cat.title,
      description: cat.description,
      url: `https://lanzaroteuntold.com${locale === "en" ? "" : `/${locale}`}${cat.href}`,
    })),
    provider: {
      "@type": "TravelAgency",
      name: "Lanzarote Untold",
      url: "https://lanzaroteuntold.com",
    },
  };
}

type ExperiencesPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ExperiencesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as keyof typeof content) || "en";
  const { meta } = content[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

const repository = new StaticContentRepository();

export default async function ExperiencesPage({ params }: ExperiencesPageProps) {
  const { lang } = await params;
  const locale = (lang as keyof typeof content) || "en";
  const t = content[locale];
  const testimonials = await repository.getTestimonials();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getItemListStructuredData(locale)),
        }}
      />

      <PageHero
        label={t.hero.label}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        backgroundImage="https://images.pexels.com/photos/18501166/pexels-photo-18501166.jpeg"
        imagePosition=""
      />

      {/* Category Grid */}
      <section className="flex flex-col gap-10 px-5 py-[60px] lg:gap-16 lg:px-[120px] lg:py-[120px]">
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          {t.gridTitle}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {t.categories.map((cat) => (
          <Link
            key={cat.href}
            href={localizedPath(cat.href, locale)}
            className="group relative flex h-[300px] overflow-hidden lg:h-[400px]"
          >
            <Image
              src={cat.image}
              alt={cat.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #2A262400 20%, #2A2624CC 100%)",
              }}
            />
            <div className="relative mt-auto flex w-full items-end justify-between p-6 lg:p-8">
              <div className="flex flex-col gap-2">
                <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
                  {cat.label}
                </span>
                <h3 className="font-cormorant text-2xl font-normal leading-[1.15] text-text-primary lg:text-[28px]">
                  {cat.title}
                </h3>
                <p className="max-w-[300px] font-inter text-sm font-light text-text-secondary">
                  {cat.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-gold" />
            </div>
          </Link>
        ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex w-full flex-col items-center gap-10 px-8 pb-[60px] md:px-20 lg:gap-16 lg:px-20 lg:pb-[120px]">
        <h2 className="text-center font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-left lg:text-5xl">
          {t.testimonialsTitle}
        </h2>
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-1 flex-col gap-4 border border-border bg-dark-bg p-6 lg:gap-6 lg:p-10"
            >
              <p className="font-cormorant text-lg italic leading-[1.6] text-text-primary lg:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-1">
                <span className="font-inter text-[13px] font-medium tracking-[1px] text-text-primary">
                  {testimonial.authorName}
                </span>
                <span className="font-inter text-xs text-text-muted">
                  {testimonial.authorLocation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection lang={locale} />
    </main>
  );
}
