import type { Metadata } from "next";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";
import { getHomePageContent } from "@/application/use-cases/getHomePageContent";
import { HeroSection } from "@/presentation/components/sections/HeroSection";
import { AboutIntroSection } from "@/presentation/components/sections/AboutIntroSection";
import { HowWeWorkSection } from "@/presentation/components/sections/HowWeWorkSection";
import { ExperiencesSection } from "@/presentation/components/sections/ExperiencesSection";
import { DiscoverSection } from "@/presentation/components/sections/DiscoverSection";
import { SocialProofSection } from "@/presentation/components/sections/SocialProofSection";
import { FAQSection } from "@/presentation/components/sections/FAQSection";
import { CTASection } from "@/presentation/components/sections/CTASection";
import type { Locale } from "@/infrastructure/i18n/config";

const siteUrl = "https://lanzaroteuntold.com";

const content = {
  en: {
    meta: {
      title: "Lanzarote Untold | Curated Experiences & Private Tours",
      description:
        "Curated private experiences in Lanzarote. Wine tours, shore fishing, volcanic trails, salt flat visits and more. Designed by local experts. Enquire now.",
      keywords: [
        "lanzarote untold",
        "lanzarote experiences",
        "lanzarote private tours",
        "things to do in lanzarote",
        "lanzarote excursions",
        "lanzarote activities",
        "lanzarote hidden gems",
        "bespoke travel lanzarote",
        "lanzarote holiday",
      ],
    },
  },
  es: {
    meta: {
      title: "Lanzarote Untold | Experiencias Exclusivas y Tours Privados",
      description:
        "Experiencias privadas y exclusivas en Lanzarote. Rutas del vino, pesca costera, senderos volcánicos, salinas y más. Diseñadas por expertos locales. Reserva ahora.",
      keywords: [
        "lanzarote untold",
        "experiencias lanzarote",
        "tours privados lanzarote",
        "qué hacer en lanzarote",
        "lanzarote excursiones",
        "lanzarote actividades",
        "lanzarote planes",
        "viaje lanzarote",
        "vacaciones lanzarote",
      ],
    },
  },
  de: {
    meta: {
      title: "Lanzarote Untold | Exklusive Erlebnisse & Private Touren",
      description:
        "Kuratierte private Erlebnisse auf Lanzarote. Weintouren, Küstenangeln, Vulkanwanderungen, Salzgewinnungstouren und mehr. Von lokalen Experten gestaltet. Jetzt anfragen.",
      keywords: [
        "lanzarote untold",
        "lanzarote erlebnisse",
        "lanzarote private touren",
        "lanzarote aktivitäten",
        "lanzarote ausflüge",
        "lanzarote geheimtipps",
        "lanzarote urlaub",
        "lanzarote reise",
        "lanzarote was tun",
      ],
    },
  },
  fr: {
    meta: {
      title: "Lanzarote Untold | Expériences Exclusives & Tours Privés",
      description:
        "Expériences privées et exclusives à Lanzarote. Routes des vins, pêche côtière, sentiers volcaniques, salines et plus. Conçues par des experts locaux. Réservez maintenant.",
      keywords: [
        "lanzarote untold",
        "expériences lanzarote",
        "tours privés lanzarote",
        "lanzarote que faire",
        "lanzarote excursions",
        "lanzarote activités",
        "lanzarote visite",
        "voyage lanzarote",
        "vacances lanzarote",
      ],
    },
  },
} as const;

// FAQ structured data for rich snippets — must match rendered FAQSection content per locale
const faqStructuredData = {
  en: [
    { q: "Are all your experiences private?", a: "Yes. Every experience we offer is exclusively for you and your group. There are no shared tours, no strangers, and no fixed group sizes." },
    { q: "How far in advance should I book?", a: "We recommend booking at least two weeks in advance, especially during peak season. However, we can sometimes arrange experiences on shorter notice depending on availability." },
    { q: "What makes Lanzarote different from other Canary Islands?", a: "Lanzarote is a UNESCO Biosphere Reserve with a landscape unlike anywhere else on earth. Volcanic eruptions in the 1700s created a surreal terrain of black lava fields, hidden caves, and crater vineyards." },
    { q: "Do I need any special equipment or experience?", a: "No. We provide everything you need for every experience, from fishing gear to hiking equipment. Our guides adapt to all fitness levels and experience levels." },
    { q: "Can you create a custom experience not listed on your website?", a: "Absolutely. Many of our guests come to us with a specific idea or interest, and we design a bespoke experience around it." },
    { q: "What is your cancellation policy?", a: "We offer free cancellation up to 48 hours before your experience. If weather conditions make an outdoor experience unsafe, we will reschedule at no extra cost or offer a full refund." },
  ],
  es: [
    { q: "¿Son privadas todas vuestras experiencias?", a: "Sí. Cada experiencia que ofrecemos es exclusivamente para ti y tu grupo. No hay tours compartidos, ni desconocidos, ni tamaños de grupo fijos." },
    { q: "¿Con cuánta antelación debo reservar?", a: "Recomendamos reservar al menos dos semanas antes, especialmente en temporada alta. Sin embargo, a veces podemos organizar experiencias con menos tiempo según disponibilidad." },
    { q: "¿Qué hace a Lanzarote diferente de las otras Islas Canarias?", a: "Lanzarote es Reserva de la Biosfera de la UNESCO con un paisaje único en el mundo. Las erupciones volcánicas del siglo XVIII crearon un terreno surrealista de campos de lava negra, cuevas ocultas y viñedos en cráteres." },
    { q: "¿Necesito algún equipo o experiencia especial?", a: "No. Proporcionamos todo lo que necesitas para cada experiencia, desde equipo de pesca hasta material de senderismo. Nuestros guías se adaptan a todos los niveles de forma física y experiencia." },
    { q: "¿Podéis crear una experiencia personalizada que no aparezca en vuestra web?", a: "Por supuesto. Muchos de nuestros huéspedes vienen con una idea o interés específico y diseñamos una experiencia a medida." },
    { q: "¿Cuál es vuestra política de cancelación?", a: "Ofrecemos cancelación gratuita hasta 48 horas antes de la experiencia. Si las condiciones meteorológicas hacen que una experiencia al aire libre no sea segura, la reprogramaremos sin coste adicional u ofreceremos un reembolso completo." },
  ],
  de: [
    { q: "Sind alle Erlebnisse privat?", a: "Ja. Jedes Erlebnis, das wir anbieten, ist exklusiv für dich und deine Gruppe. Keine gemeinsamen Touren, keine Fremden, keine festen Gruppengrößen." },
    { q: "Wie weit im Voraus sollte ich buchen?", a: "Wir empfehlen, mindestens zwei Wochen im Voraus zu buchen, besonders in der Hochsaison. Manchmal können wir auch kurzfristiger Erlebnisse organisieren." },
    { q: "Was macht Lanzarote anders als die anderen Kanarischen Inseln?", a: "Lanzarote ist UNESCO-Biosphärenreservat mit einer Landschaft, die es nirgendwo sonst auf der Erde gibt. Vulkanausbrüche im 18. Jahrhundert schufen ein surreales Terrain aus schwarzen Lavafeldern, versteckten Höhlen und Krater-Weinbergen." },
    { q: "Brauche ich spezielle Ausrüstung oder Erfahrung?", a: "Nein. Wir stellen alles bereit, was du für jedes Erlebnis brauchst. Unsere Guides passen sich allen Fitness- und Erfahrungsstufen an." },
    { q: "Könnt ihr ein maßgeschneidertes Erlebnis erstellen?", a: "Absolut. Viele unserer Gäste kommen mit einer bestimmten Idee oder einem besonderen Interesse, und wir gestalten ein maßgeschneidertes Erlebnis." },
    { q: "Wie ist eure Stornierungsrichtlinie?", a: "Wir bieten kostenlose Stornierung bis 48 Stunden vor dem Erlebnis. Wenn Wetterbedingungen ein Outdoor-Erlebnis unsicher machen, planen wir kostenlos um oder bieten eine volle Rückerstattung." },
  ],
  fr: [
    { q: "Toutes vos expériences sont-elles privées ?", a: "Oui. Chaque expérience que nous proposons est exclusivement pour vous et votre groupe. Pas de tours partagés, pas d'inconnus, pas de taille de groupe fixe." },
    { q: "Combien de temps à l'avance dois-je réserver ?", a: "Nous recommandons de réserver au moins deux semaines à l'avance, surtout en haute saison. Cependant, nous pouvons parfois organiser des expériences plus rapidement selon les disponibilités." },
    { q: "Qu'est-ce qui rend Lanzarote différente des autres îles Canaries ?", a: "Lanzarote est Réserve de Biosphère UNESCO avec un paysage unique au monde. Les éruptions volcaniques du XVIIIe siècle ont créé un terrain surréaliste de champs de lave noire, de grottes cachées et de vignobles dans des cratères." },
    { q: "Ai-je besoin d'un équipement ou d'une expérience particulière ?", a: "Non. Nous fournissons tout ce dont vous avez besoin pour chaque expérience. Nos guides s'adaptent à tous les niveaux de forme physique et d'expérience." },
    { q: "Pouvez-vous créer une expérience sur mesure ?", a: "Absolument. Beaucoup de nos hôtes viennent avec une idée ou un intérêt spécifique, et nous concevons une expérience sur mesure." },
    { q: "Quelle est votre politique d'annulation ?", a: "Nous offrons l'annulation gratuite jusqu'à 48 heures avant l'expérience. Si les conditions météorologiques rendent une expérience en plein air dangereuse, nous la reprogrammerons sans frais supplémentaires ou offrirons un remboursement complet." },
  ],
};

function getHomeStructuredData(locale: Locale) {
  const faqs = faqStructuredData[locale];

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Lanzarote Untold",
      url: siteUrl,
      description:
        "Curated private experiences in Lanzarote, Canary Islands. Wine tours, shore fishing, volcanic trails, and more.",
      publisher: {
        "@type": "Organization",
        name: "Lanzarote Untold",
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Lanzarote Untold",
      url: siteUrl,
      description:
        "Bespoke curated experiences in Lanzarote, Canary Islands. Crafted with local expertise and international elegance.",
      areaServed: {
        "@type": "Place",
        name: "Lanzarote, Canary Islands, Spain",
      },
      knowsAbout: [
        "Private tours in Lanzarote",
        "Wine tours in Lanzarote",
        "Shore fishing in Lanzarote",
        "Volcanic hiking in Lanzarote",
        "Salt flats tours in Lanzarote",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];
}

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
  const { meta } = content[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical: siteUrl,
      languages: {
        en: siteUrl,
        es: `${siteUrl}/es`,
        de: `${siteUrl}/de`,
        fr: `${siteUrl}/fr`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: siteUrl,
      siteName: "Lanzarote Untold",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

const repository = new StaticContentRepository();

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
  const { experiences, testimonials, stats } =
    await getHomePageContent(repository);

  const structuredData = getHomeStructuredData(locale);

  return (
    <main>
      {structuredData.map((sd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sd) }}
        />
      ))}

      <HeroSection lang={locale} />
      <AboutIntroSection lang={locale} />
      <HowWeWorkSection lang={locale} />
      <ExperiencesSection experiences={experiences} lang={locale} />
      <DiscoverSection lang={locale} />
      <SocialProofSection stats={stats} testimonials={testimonials} />
      <FAQSection lang={locale} />
      <CTASection lang={locale} />
    </main>
  );
}
