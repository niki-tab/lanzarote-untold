import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ImageTextSection } from "@/presentation/components/sections/ImageTextSection";
import { CTASection } from "@/presentation/components/sections/CTASection";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    meta: {
      title: "About Us | Lanzarote's Local Travel Experts",
      description:
        "Lanzarote locals who travelled the world and came back. We are the concierge and travel agency that knows every corner of this island. Meet the team.",
      keywords: [
        "lanzarote travel agency",
        "lanzarote concierge",
        "lanzarote local experts",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "ABOUT US",
      title: "Lanzarote's local experts, built for the world",
      subtitle:
        "We are a small team of locals and travellers united by one belief: Lanzarote deserves to be experienced, not just visited.",
    },
    whoWeAre: {
      label: "WHO WE ARE",
      title: "Local roots, global perspective",
      paragraphs: [
        "We were born and raised on Lanzarote, but we didn't stay put. We spent years living across the world, absorbing different cultures and ways of seeing things. Then we came back, because Lanzarote never lets go of you.",
        "That mix is what makes Lanzarote Untold different. We have the local roots, the family connections, the fishermen and winemakers who have known us since we were kids. But we also understand what international travellers are looking for, because we have been travellers ourselves.",
      ],
      imageAlt: "Lanzarote volcanic landscape",
    },
    philosophy: {
      label: "OUR PHILOSOPHY",
      title: "Less is more, always",
      paragraphs: [
        "We believe the best travel experiences are intimate, unhurried, and deeply personal. That's why we work with a limited number of guests at any time, so every journey receives our full attention.",
        "We don't sell packages. We don't run group tours. We listen to what matters to you, and then we create something that couldn't exist for anyone else. This is travel as it should be.",
      ],
      imageAlt: "Quiet moment in Lanzarote volcanic landscape",
    },
  },
  es: {
    meta: {
      title: "Sobre Nosotros | Expertos Locales en Lanzarote",
      description:
        "Nacimos en Lanzarote, viajamos por el mundo y volvimos. Somos la agencia de viajes y concierge que conoce cada rincon de esta isla. Conoce al equipo.",
      keywords: [
        "agencia de viajes lanzarote",
        "concierge lanzarote",
        "experiencias lanzarote",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "SOBRE NOSOTROS",
      title: "Expertos locales de Lanzarote, hechos para el mundo",
      subtitle:
        "Somos un equipo pequeno de locales y viajeros unidos por una idea: Lanzarote merece ser vivida, no solo visitada.",
    },
    whoWeAre: {
      label: "QUIENES SOMOS",
      title: "Raices locales, perspectiva global",
      paragraphs: [
        "Nacimos y crecimos en Lanzarote, pero no nos quedamos quietos. Pasamos anos viviendo por el mundo, absorbiendo otras culturas y formas de ver las cosas. Luego volvimos, porque Lanzarote no te suelta.",
        "Esa mezcla es lo que hace diferente a Lanzarote Untold. Tenemos las raices locales, las conexiones familiares, los pescadores y bodegueros que nos conocen desde que eramos pequenos. Pero tambien entendemos lo que busca el viajero internacional, porque nosotros mismos hemos sido viajeros.",
      ],
      imageAlt: "Paisaje volcanico de Lanzarote",
    },
    philosophy: {
      label: "NUESTRA FILOSOFIA",
      title: "Menos es mas, siempre",
      paragraphs: [
        "Creemos que las mejores experiencias de viaje son intimas, sin prisas y profundamente personales. Por eso trabajamos con un numero limitado de huespedes, para que cada viaje reciba toda nuestra atencion.",
        "No vendemos paquetes. No hacemos tours en grupo. Escuchamos lo que te importa y creamos algo que no podria existir para nadie mas. Asi es como debe ser viajar.",
      ],
      imageAlt: "Momento de calma en el paisaje volcanico de Lanzarote",
    },
  },
  de: {
    meta: {
      title: "Uber Uns | Lokale Reiseexperten auf Lanzarote",
      description:
        "Auf Lanzarote geboren, durch die Welt gereist und zuruckgekehrt. Wir sind die Reiseagentur und der Concierge, der jeden Winkel dieser Insel kennt.",
      keywords: [
        "lanzarote reise",
        "lanzarote touren",
        "lanzarote ausfluge",
        "lanzarote geheimtipps",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "UBER UNS",
      title: "Lanzarotes lokale Experten, gemacht fur die Welt",
      subtitle:
        "Wir sind ein kleines Team aus Einheimischen und Reisenden, vereint durch eine Uberzeugung: Lanzarote verdient es, erlebt zu werden, nicht nur besucht.",
    },
    whoWeAre: {
      label: "WER WIR SIND",
      title: "Lokale Wurzeln, globale Perspektive",
      paragraphs: [
        "Wir sind auf Lanzarote geboren und aufgewachsen, aber wir sind nicht geblieben. Wir haben Jahre in der Welt gelebt, andere Kulturen aufgenommen und neue Blickwinkel gewonnen. Dann sind wir zuruckgekommen, weil Lanzarote einen nicht loslasst.",
        "Diese Mischung macht Lanzarote Untold besonders. Wir haben die lokalen Wurzeln, die familiaren Verbindungen, die Fischer und Winzer, die uns seit unserer Kindheit kennen. Aber wir verstehen auch, was internationale Reisende suchen, weil wir selbst Reisende waren.",
      ],
      imageAlt: "Vulkanlandschaft auf Lanzarote",
    },
    philosophy: {
      label: "UNSERE PHILOSOPHIE",
      title: "Weniger ist mehr, immer",
      paragraphs: [
        "Wir glauben, dass die besten Reiseerlebnisse intim, ohne Eile und zutiefst personlich sind. Deshalb arbeiten wir mit einer begrenzten Anzahl von Gasten, damit jede Reise unsere volle Aufmerksamkeit bekommt.",
        "Wir verkaufen keine Pakete. Wir machen keine Gruppentouren. Wir horen zu, was euch wichtig ist, und erschaffen etwas, das fur niemand anderen existieren konnte. So sollte Reisen sein.",
      ],
      imageAlt: "Ruhiger Moment in der Vulkanlandschaft von Lanzarote",
    },
  },
  fr: {
    meta: {
      title: "A Propos | Experts Locaux a Lanzarote",
      description:
        "Nes a Lanzarote, nous avons voyage a travers le monde avant de revenir. Agence de voyage et concierge qui connait chaque recoin de cette ile.",
      keywords: [
        "agence de voyage lanzarote",
        "lanzarote voyage",
        "lanzarote excursions",
        "concierge lanzarote",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "A PROPOS",
      title: "Les experts locaux de Lanzarote, faits pour le monde",
      subtitle:
        "Nous sommes une petite equipe de locaux et de voyageurs unis par une conviction : Lanzarote merite d'etre vecue, pas seulement visitee.",
    },
    whoWeAre: {
      label: "QUI SOMMES-NOUS",
      title: "Racines locales, regard sur le monde",
      paragraphs: [
        "Nous sommes nes et avons grandi a Lanzarote, mais nous ne sommes pas restes. Nous avons passe des annees a vivre a travers le monde, a decouvrir d'autres cultures et d'autres facons de voir les choses. Puis nous sommes revenus, parce que Lanzarote ne vous lache jamais.",
        "Ce melange est ce qui rend Lanzarote Untold different. Nous avons les racines locales, les liens familiaux, les pecheurs et vignerons qui nous connaissent depuis notre enfance. Mais nous comprenons aussi ce que recherchent les voyageurs internationaux, parce que nous avons ete voyageurs nous-memes.",
      ],
      imageAlt: "Paysage volcanique de Lanzarote",
    },
    philosophy: {
      label: "NOTRE PHILOSOPHIE",
      title: "Moins c'est plus, toujours",
      paragraphs: [
        "Nous croyons que les meilleures experiences de voyage sont intimes, sans precipitation et profondement personnelles. C'est pourquoi nous travaillons avec un nombre limite de voyageurs, pour que chaque sejour recoive toute notre attention.",
        "Nous ne vendons pas de forfaits. Nous ne faisons pas de visites en groupe. Nous ecoutons ce qui compte pour vous, puis nous creons quelque chose qui ne pourrait exister pour personne d'autre. C'est comme ca que le voyage devrait etre.",
      ],
      imageAlt: "Moment de calme dans le paysage volcanique de Lanzarote",
    },
  },
} as const;

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
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

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
  const t = content[locale];

  return (
    <main>
      <PageHero
        label={t.hero.label}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        backgroundImage="https://images.pexels.com/photos/4374743/pexels-photo-4374743.jpeg"
      />

      <ImageTextSection
        label={t.whoWeAre.label}
        title={t.whoWeAre.title}
        paragraphs={[...t.whoWeAre.paragraphs]}
        image="https://images.unsplash.com/photo-1636743743971-368b945a32eb"
        imageAlt={t.whoWeAre.imageAlt}
      />

      <ImageTextSection
        label={t.philosophy.label}
        title={t.philosophy.title}
        paragraphs={[...t.philosophy.paragraphs]}
        image="https://images.pexels.com/photos/8963240/pexels-photo-8963240.jpeg"
        imageAlt={t.philosophy.imageAlt}
        reversed
      />

      <div className="mt-10 lg:mt-16">
        <CTASection lang={locale} />
      </div>
    </main>
  );
}
