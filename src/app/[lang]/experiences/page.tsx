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
        title: "Wine Tour: El Grifo & Bodega Vulcano",
        description: "Private tasting at two iconic bodegas with a vineyard walk through La Geria",
        image:
          "https://images.pexels.com/photos/15173378/pexels-photo-15173378.jpeg",
        href: "/experiences/wine-tour",
        label: "WINE TOUR",
        alt: "Wine tasting at El Grifo bodega in Lanzarote La Geria",
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
        title: "Salt & Heritage",
        description: "Private tour of the Salinas de Janubio salt flats with Flor de Sal tasting",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "HERITAGE",
        alt: "Salinas de Janubio artisanal salt flats in Lanzarote",
      },
      {
        title: "North Trekking",
        description: "Private hiking tour: La Corona volcano, Famara cliffs, and the valley of Haria",
        image:
          "https://images.pexels.com/photos/32381590/pexels-photo-32381590.jpeg",
        href: "/experiences/north-trekking",
        label: "TREKKING",
        alt: "Hiking trail along Famara cliffs in northern Lanzarote",
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
      title: "Qué Hacer en Lanzarote: Experiencias Exclusivas | Lanzarote Untold",
      description:
        "Descubre qué hacer en Lanzarote. Tours privados al volcán, catas de vino, excursiones en barco, visitas a las salinas y más. Todo con guías locales. Reserva ahora.",
      keywords: [
        "qué hacer en lanzarote",
        "lanzarote qué ver",
        "lanzarote excursiones",
        "lanzarote actividades",
        "lanzarote tours",
        "lanzarote planes",
        "lanzarote experiencias",
      ],
    },
    hero: {
      label: "EXPERIENCIAS EXCLUSIVAS",
      title: "Qué Hacer en Lanzarote: Experiencias Exclusivas",
      subtitle:
        "Descubre las mejores actividades y excursiones en Lanzarote, pensadas para el viajero exigente. Cada experiencia se diseña alrededor de ti, tu ritmo, tus pasiones, tu historia.",
    },
    gridTitle: "Explora las excursiones en Lanzarote por categoría",
    testimonialsTitle: "Lo que dicen nuestros huéspedes sobre sus experiencias en Lanzarote",
    categories: [
      {
        title: "Ruta del Vino: El Grifo & Bodega Vulcano",
        description: "Cata privada en dos bodegas icónicas con paseo por los viñedos de La Geria",
        image:
          "https://images.pexels.com/photos/15173378/pexels-photo-15173378.jpeg",
        href: "/experiences/wine-tour",
        label: "RUTA DEL VINO",
        alt: "Cata de vinos en la bodega El Grifo en La Geria, Lanzarote",
      },
      {
        title: "Mar y Aventura",
        description: "Excursiones en barco, catamarán, buceo y pesca privada en Lanzarote",
        image:
          "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/sea-adventure",
        label: "MARÍTIMO",
        alt: "Excursión privada en barco por la costa de Lanzarote",
      },
      {
        title: "Sal y Patrimonio",
        description: "Visita privada a las Salinas de Janubio con degustación de Flor de Sal",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "PATRIMONIO",
        alt: "Salinas de Janubio, salinas artesanales en Lanzarote",
      },
      {
        title: "Trekking Norte",
        description: "Senderismo privado: volcán La Corona, acantilados de Famara y el valle de Haría",
        image:
          "https://images.pexels.com/photos/32381590/pexels-photo-32381590.jpeg",
        href: "/experiences/north-trekking",
        label: "TREKKING",
        alt: "Ruta de senderismo por los acantilados de Famara en el norte de Lanzarote",
      },
      {
        title: "Privado y a Medida",
        description: "Tours privados exclusivos e itinerarios a medida diseñados para ti",
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
      title: "Lanzarote Ausflüge & Sehenswürdigkeiten: Exklusive Erlebnisse | Lanzarote Untold",
      description:
        "Entdecke die besten Lanzarote Ausflüge und Sehenswürdigkeiten. Private Vulkantouren, Weinproben, Bootstouren, Salinenbesuche und mehr. Mit lokalen Experten. Jetzt anfragen.",
      keywords: [
        "lanzarote ausflüge",
        "lanzarote sehenswürdigkeiten",
        "lanzarote aktivitäten",
        "lanzarote touren",
        "lanzarote geheimtipps",
        "lanzarote erlebnisse",
        "lanzarote urlaub",
      ],
    },
    hero: {
      label: "EXKLUSIVE ERLEBNISSE",
      title: "Lanzarote Ausflüge & Sehenswürdigkeiten: Exklusive Erlebnisse",
      subtitle:
        "Entdecke die besten Aktivitäten und Ausflüge auf Lanzarote, kuratiert für anspruchsvolle Reisende. Jedes Erlebnis wird um dich herum gestaltet, dein Tempo, deine Leidenschaften, deine Geschichte.",
    },
    gridTitle: "Entdecke Lanzarote Ausflüge nach Kategorie",
    testimonialsTitle: "Was unsere Gäste über ihre Lanzarote Erlebnisse sagen",
    categories: [
      {
        title: "Weintour: El Grifo & Bodega Vulcano",
        description: "Private Verkostung in zwei ikonischen Bodegas mit Weinbergwanderung durch La Geria",
        image:
          "https://images.pexels.com/photos/15173378/pexels-photo-15173378.jpeg",
        href: "/experiences/wine-tour",
        label: "WEINTOUR",
        alt: "Weinverkostung in der Bodega El Grifo in La Geria, Lanzarote",
      },
      {
        title: "Meer & Abenteuer",
        description: "Bootstouren, Katamaran, Tauchen und privates Angeln auf Lanzarote",
        image:
          "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/sea-adventure",
        label: "MARITIM",
        alt: "Private Bootstour entlang der Küste von Lanzarote",
      },
      {
        title: "Salz & Kulturerbe",
        description: "Private Führung durch die Salinas de Janubio mit Flor de Sal Verkostung",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "KULTURERBE",
        alt: "Salinas de Janubio handwerkliche Salzgewinnung auf Lanzarote",
      },
      {
        title: "Nord-Trekking",
        description: "Private Wanderung: Vulkan La Corona, Famara-Klippen und das Tal von Haría",
        image:
          "https://images.pexels.com/photos/32381590/pexels-photo-32381590.jpeg",
        href: "/experiences/north-trekking",
        label: "TREKKING",
        alt: "Wanderweg entlang der Famara-Klippen im Norden von Lanzarote",
      },
      {
        title: "Privat & Maßgeschneidert",
        description: "Exklusive private Touren und maßgeschneiderte Reiserouten für dich",
        image:
          "https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        href: "/private-experiences",
        label: "EXKLUSIV",
        alt: "Maßgeschneidertes privates Erlebnis auf Lanzarote",
      },
    ],
  },
  fr: {
    meta: {
      title: "Que Faire à Lanzarote: Expériences Exclusives | Lanzarote Untold",
      description:
        "Découvrez que faire à Lanzarote. Visites privées du volcan, dégustations de vin, excursions en bateau, salines et plus. Guides locaux experts. Réservez maintenant.",
      keywords: [
        "lanzarote que faire",
        "lanzarote excursions",
        "lanzarote activités",
        "lanzarote visite",
        "lanzarote incontournables",
        "lanzarote voyage",
        "lanzarote expériences",
      ],
    },
    hero: {
      label: "EXPÉRIENCES EXCLUSIVES",
      title: "Que Faire à Lanzarote: Expériences Exclusives",
      subtitle:
        "Découvrez les meilleures activités et excursions à Lanzarote, pensées pour le voyageur exigeant. Chaque expérience est conçue autour de vous, votre rythme, vos passions, votre histoire.",
    },
    gridTitle: "Explorez les excursions à Lanzarote par catégorie",
    testimonialsTitle: "Ce que disent nos hôtes de leurs expériences à Lanzarote",
    categories: [
      {
        title: "Route des Vins: El Grifo & Bodega Vulcano",
        description: "Dégustation privée dans deux caves emblématiques avec balade dans les vignobles de La Geria",
        image:
          "https://images.pexels.com/photos/15173378/pexels-photo-15173378.jpeg",
        href: "/experiences/wine-tour",
        label: "ROUTE DES VINS",
        alt: "Dégustation de vin à la cave El Grifo dans La Geria, Lanzarote",
      },
      {
        title: "Mer & Aventure",
        description: "Excursions en bateau, catamaran, plongée et pêche privée à Lanzarote",
        image:
          "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
        href: "/experiences/sea-adventure",
        label: "MARITIME",
        alt: "Excursion privée en bateau le long de la côte de Lanzarote",
      },
      {
        title: "Sel & Patrimoine",
        description: "Visite privée des Salinas de Janubio avec dégustation de Flor de Sal",
        image:
          "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
        href: "/experiences/salt-flats",
        label: "PATRIMOINE",
        alt: "Salinas de Janubio, salines artisanales à Lanzarote",
      },
      {
        title: "Trek Nord",
        description: "Randonnée privée: volcan La Corona, falaises de Famara et la vallée de Haría",
        image:
          "https://images.pexels.com/photos/32381590/pexels-photo-32381590.jpeg",
        href: "/experiences/north-trekking",
        label: "TREKKING",
        alt: "Sentier de randonnée le long des falaises de Famara au nord de Lanzarote",
      },
      {
        title: "Privé & Sur Mesure",
        description: "Visites privées exclusives et itinéraires sur mesure conçus pour vous",
        image:
          "https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        href: "/private-experiences",
        label: "SUR MESURE",
        alt: "Expérience privée sur mesure à Lanzarote",
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
