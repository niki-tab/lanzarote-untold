import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ImageTextSection } from "@/presentation/components/sections/ImageTextSection";
import { FeatureGrid } from "@/presentation/components/sections/FeatureGrid";
import { TestimonialStrip } from "@/presentation/components/sections/TestimonialStrip";
import { CTASection } from "@/presentation/components/sections/CTASection";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    meta: {
      title: "Salinas de Janubio Private Tour & Salt Tasting | Lanzarote Untold",
      description:
        "Private guided tour of the Salinas de Janubio, the largest artisanal salt flats in the Canary Islands. Taste Flor de Sal, savour local wine. Enquire now.",
      keywords: [
        "salinas de janubio",
        "lanzarote salt flats",
        "lanzarote private tour",
        "flor de sal lanzarote",
        "lanzarote excursions",
        "things to do in lanzarote",
        "lanzarote hidden gems",
      ],
    },
    hero: {
      label: "SALT & HERITAGE",
      title: "Salinas de Janubio Private Tour & Salt Tasting",
      subtitle:
        "Walk the largest artisanal salt flats in the Canary Islands with a private guide. Taste Flor de Sal, savour local wine, and discover 127 years of living tradition.",
    },
    experience: {
      label: "THE EXPERIENCE",
      title: "Where the sea becomes salt in Lanzarote",
      paragraphs: [
        "In 1730, volcanic eruptions sealed a natural lagoon on the southwest coast of Lanzarote. A century and a half later, the families of Janubio turned it into something remarkable: the largest artisanal salt flats in the Canary Islands, and the only ones still in operation.",
        "Our private tour takes you inside this living heritage site. You will walk among the salt pans with a local guide who knows every stone, every channel, and every story. No coaches, no queues. Just the sound of the wind, the shimmer of the crystals, and the slow rhythm of work that has not changed in over 127 years.",
      ],
      imageAlt: "Salinas de Janubio artisanal salt pans in Lanzarote",
    },
    highlights: {
      label: "HIGHLIGHTS",
      title: "What makes the Salinas de Janubio experience unique",
    },
    features: [
      {
        title: "Private Guided Walk",
        description:
          "A gentle, unhurried walk through the salt pans with an expert local guide. No crowds, no buses, no fixed schedule. Just you, the landscape, and over a century of stories.",
      },
      {
        title: "Flor de Sal Tasting",
        description:
          "End your visit at the Bodega de la Sal, where you will taste the delicate Flor de Sal and the distinct Flavours of Janubio, paired with local tomatoes, cheese, and wine.",
      },
      {
        title: "127 Years of Heritage",
        description:
          "The Salinas de Janubio have been harvesting salt without interruption since 1895, passed from generation to generation. You will walk the same paths as the families who built them.",
      },
      {
        title: "Volcanic Landscape",
        description:
          "The salt flats sit at the foot of Timanfaya, in a natural lagoon formed by the eruptions of 1730. The scenery is unlike anything else on the island.",
      },
      {
        title: "Wildlife & Nature",
        description:
          "Over 70 species of migratory birds pass through these salt pans, including plovers, sandpipers, and even flamingos. A quiet paradise for nature lovers.",
      },
      {
        title: "Artisanal Process",
        description:
          "Watch the salt workers harvest by hand, the way it has always been done. From seawater to crystal, the entire process is manual, patient, and beautiful.",
      },
    ],
    tasting: {
      label: "THE TASTING",
      title: "From the Salinas de Janubio to your palate",
      paragraphs: [
        "The tour ends at the Bodega de la Sal, a tasting room overlooking the flats. Here you will sample Flor de Sal, the most delicate salt harvested only from the surface of the pans, along with the distinct flavoured salts of Janubio.",
        "Each tasting is paired with local produce: ripe Lanzarote tomatoes, artisan cheese, and a glass of wine from the volcanic vineyards of La Geria.",
      ],
      imageAlt: "Flor de Sal tasting with local wine at Salinas de Janubio",
    },
    testimonial: {
      quote:
        "We almost skipped the salt flats. Thank God we didn't. Our guide brought the whole place alive. The tasting with wine overlooking the pans was one of the best moments of our trip.",
      author: "James & Catherine Whitfield",
      location: "London, United Kingdom",
    },
  },
  es: {
    meta: {
      title: "Visita Privada a las Salinas de Janubio con Degustación | Lanzarote Untold",
      description:
        "Tour privado y guiado por las Salinas de Janubio, las salinas artesanales más grandes de Canarias. Degusta Flor de Sal y vino local. Reserva ahora.",
      keywords: [
        "salinas de janubio",
        "qué hacer en lanzarote",
        "lanzarote excursiones",
        "lanzarote tours",
        "flor de sal lanzarote",
        "lanzarote actividades",
      ],
    },
    hero: {
      label: "SAL Y PATRIMONIO",
      title: "Visita Privada a las Salinas de Janubio con Degustación",
      subtitle:
        "Recorre las salinas artesanales más grandes de Canarias con un guía privado. Degusta Flor de Sal, disfruta de vino local y descubre 127 años de tradición viva.",
    },
    experience: {
      label: "LA EXPERIENCIA",
      title: "Donde el mar se convierte en sal en Lanzarote",
      paragraphs: [
        "En 1730, las erupciones volcánicas sellaron una laguna natural en la costa suroeste de Lanzarote. Un siglo y medio después, las familias de Janubio la convirtieron en algo extraordinario: las salinas artesanales más grandes de Canarias y las únicas que siguen en funcionamiento.",
        "Nuestro tour privado te lleva al interior de este patrimonio vivo. Caminarás entre las charcas de sal con un guía local que conoce cada piedra, cada canal y cada historia. Sin autobuses, sin colas. Solo el sonido del viento, el brillo de los cristales y el ritmo pausado de un trabajo que no ha cambiado en más de 127 años.",
      ],
      imageAlt: "Salinas de Janubio, charcas artesanales de sal en Lanzarote",
    },
    highlights: {
      label: "DESTACADOS",
      title: "Qué hace única la experiencia en las Salinas de Janubio",
    },
    features: [
      {
        title: "Paseo Privado Guiado",
        description:
          "Un paseo tranquilo y sin prisas por las salinas con un guía local experto. Sin multitudes, sin autobuses, sin horario fijo. Solo tú, el paisaje y más de un siglo de historias.",
      },
      {
        title: "Degustación de Flor de Sal",
        description:
          "Termina tu visita en la Bodega de la Sal, donde probarás la delicada Flor de Sal y los Sabores de Janubio, acompañados de tomates locales, queso y vino.",
      },
      {
        title: "127 Años de Patrimonio",
        description:
          "Las Salinas de Janubio llevan cosechando sal sin interrupción desde 1895, de generación en generación. Caminarás por los mismos senderos que las familias que las construyeron.",
      },
      {
        title: "Paisaje Volcánico",
        description:
          "Las salinas se encuentran al pie de Timanfaya, en una laguna natural formada por las erupciones de 1730. El paisaje no se parece a nada en la isla.",
      },
      {
        title: "Fauna y Naturaleza",
        description:
          "Más de 70 especies de aves migratorias pasan por estas salinas, incluyendo chorlitejos, correlimos e incluso flamencos. Un paraíso tranquilo para los amantes de la naturaleza.",
      },
      {
        title: "Proceso Artesanal",
        description:
          "Observa a los salineros cosechar a mano, como siempre se ha hecho. Del agua de mar al cristal, todo el proceso es manual, paciente y hermoso.",
      },
    ],
    tasting: {
      label: "LA DEGUSTACIÓN",
      title: "De las Salinas de Janubio a tu paladar",
      paragraphs: [
        "El tour termina en la Bodega de la Sal, una sala de degustación con vistas a las salinas. Aquí probarás la Flor de Sal, la sal más delicada que se cosecha solo de la superficie de las charcas, junto con las sales aromatizadas de Janubio.",
        "Cada degustación se acompaña de productos locales: tomates maduros de Lanzarote, queso artesano y una copa de vino de los viñedos volcánicos de La Geria.",
      ],
      imageAlt: "Degustación de Flor de Sal con vino local en Salinas de Janubio",
    },
    testimonial: {
      quote:
        "Casi nos saltamos las salinas. Menos mal que no lo hicimos. Nuestro guía hizo que todo cobrara vida. La degustación con vino frente a las charcas fue uno de los mejores momentos de nuestro viaje.",
      author: "James & Catherine Whitfield",
      location: "Londres, Reino Unido",
    },
  },
  de: {
    meta: {
      title: "Salinas de Janubio Private Tour & Salzverkostung | Lanzarote Untold",
      description:
        "Private Führung durch die Salinas de Janubio, die größten handwerklichen Salinen der Kanarischen Inseln. Flor de Sal Verkostung und lokaler Wein. Jetzt anfragen.",
      keywords: [
        "salinas de janubio",
        "lanzarote ausflüge",
        "lanzarote touren",
        "lanzarote sehenswürdigkeiten",
        "lanzarote geheimtipps",
        "lanzarote aktivitäten",
      ],
    },
    hero: {
      label: "SALZ & KULTURERBE",
      title: "Salinas de Janubio Private Tour & Salzverkostung",
      subtitle:
        "Erkunde die größten handwerklichen Salinen der Kanarischen Inseln mit einem privaten Guide. Koste Flor de Sal, genieße lokalen Wein und entdecke 127 Jahre lebendige Tradition.",
    },
    experience: {
      label: "DAS ERLEBNIS",
      title: "Wo das Meer auf Lanzarote zu Salz wird",
      paragraphs: [
        "1730 versiegelten Vulkanausbrüche eine natürliche Lagune an der Südwestküste von Lanzarote. Anderthalb Jahrhunderte später verwandelten die Familien von Janubio sie in etwas Bemerkenswertes: die größten handwerklichen Salinen der Kanarischen Inseln und die einzigen, die noch in Betrieb sind.",
        "Unsere private Tour führt dich in dieses lebendige Kulturerbe. Du wirst mit einem lokalen Guide durch die Salzpfannen wandern, der jeden Stein, jeden Kanal und jede Geschichte kennt. Keine Busse, keine Warteschlangen. Nur das Rauschen des Windes, das Schimmern der Kristalle und der langsame Rhythmus einer Arbeit, die sich seit über 127 Jahren nicht verändert hat.",
      ],
      imageAlt: "Salinas de Janubio handwerkliche Salzpfannen auf Lanzarote",
    },
    highlights: {
      label: "HÖHEPUNKTE",
      title: "Was das Salinas de Janubio Erlebnis einzigartig macht",
    },
    features: [
      {
        title: "Private Führung",
        description:
          "Ein gemütlicher, ungehetzter Spaziergang durch die Salzpfannen mit einem erfahrenen lokalen Guide. Keine Menschenmassen, keine Busse, kein fester Zeitplan. Nur du, die Landschaft und über ein Jahrhundert an Geschichten.",
      },
      {
        title: "Flor de Sal Verkostung",
        description:
          "Beende deinen Besuch in der Bodega de la Sal, wo du die zarte Flor de Sal und die besonderen Aromen von Janubio probierst, begleitet von lokalen Tomaten, Käse und Wein.",
      },
      {
        title: "127 Jahre Kulturerbe",
        description:
          "Die Salinas de Janubio ernten seit 1895 ununterbrochen Salz, von Generation zu Generation weitergegeben. Du wirst dieselben Wege gehen wie die Familien, die sie erbaut haben.",
      },
      {
        title: "Vulkanlandschaft",
        description:
          "Die Salinen liegen am Fuß von Timanfaya, in einer natürlichen Lagune, die durch die Eruptionen von 1730 entstanden ist. Die Landschaft ist einzigartig auf der Insel.",
      },
      {
        title: "Tierwelt & Natur",
        description:
          "Über 70 Arten von Zugvögeln passieren diese Salinen, darunter Regenpfeifer, Strandläufer und sogar Flamingos. Ein ruhiges Paradies für Naturliebhaber.",
      },
      {
        title: "Handwerklicher Prozess",
        description:
          "Beobachte die Salinenarbeiter bei der Handernte, wie es schon immer gemacht wurde. Vom Meerwasser zum Kristall ist der gesamte Prozess manuell, geduldig und wunderschön.",
      },
    ],
    tasting: {
      label: "DIE VERKOSTUNG",
      title: "Von den Salinas de Janubio auf deinen Gaumen",
      paragraphs: [
        "Die Tour endet in der Bodega de la Sal, einem Verkostungsraum mit Blick auf die Salinen. Hier probierst du Flor de Sal, das feinste Salz, das nur von der Oberfläche der Pfannen geerntet wird, zusammen mit den aromatisierten Salzen von Janubio.",
        "Jede Verkostung wird mit lokalen Erzeugnissen begleitet: reife Tomaten aus Lanzarote, handwerklicher Käse und ein Glas Wein aus den vulkanischen Weinbergen von La Geria.",
      ],
      imageAlt: "Flor de Sal Verkostung mit lokalem Wein an den Salinas de Janubio",
    },
    testimonial: {
      quote:
        "Wir hatten die Salinen fast ausgelassen. Gott sei Dank haben wir es nicht getan. Unser Guide hat den ganzen Ort zum Leben erweckt. Die Verkostung mit Wein vor den Salzpfannen war einer der besten Momente unserer Reise.",
      author: "James & Catherine Whitfield",
      location: "London, Vereinigtes Königreich",
    },
  },
  fr: {
    meta: {
      title: "Visite Privée des Salinas de Janubio avec Dégustation | Lanzarote Untold",
      description:
        "Visite privée et guidée des Salinas de Janubio, les plus grandes salines artisanales des Canaries. Dégustation de Flor de Sal et vin local. Réservez maintenant.",
      keywords: [
        "salinas de janubio",
        "lanzarote que faire",
        "lanzarote excursions",
        "lanzarote visite",
        "flor de sal lanzarote",
        "lanzarote activités",
      ],
    },
    hero: {
      label: "SEL ET PATRIMOINE",
      title: "Visite Privée des Salinas de Janubio avec Dégustation",
      subtitle:
        "Parcourez les plus grandes salines artisanales des Canaries avec un guide privé. Dégustez la Flor de Sal, savourez du vin local et découvrez 127 ans de tradition vivante.",
    },
    experience: {
      label: "L'EXPÉRIENCE",
      title: "Là où la mer devient sel à Lanzarote",
      paragraphs: [
        "En 1730, des éruptions volcaniques ont scellé un lagon naturel sur la côte sud-ouest de Lanzarote. Un siècle et demi plus tard, les familles de Janubio l'ont transformé en quelque chose de remarquable : les plus grandes salines artisanales des Canaries et les seules encore en activité.",
        "Notre visite privée vous emmène au cœur de ce patrimoine vivant. Vous marcherez parmi les bassins de sel avec un guide local qui connaît chaque pierre, chaque canal et chaque histoire. Pas de cars, pas de files d'attente. Juste le bruit du vent, le scintillement des cristaux et le rythme lent d'un travail qui n'a pas changé depuis plus de 127 ans.",
      ],
      imageAlt: "Salinas de Janubio, bassins de sel artisanaux à Lanzarote",
    },
    highlights: {
      label: "POINTS FORTS",
      title: "Ce qui rend l'expérience aux Salinas de Janubio unique",
    },
    features: [
      {
        title: "Promenade Privée Guidée",
        description:
          "Une promenade douce et sans hâte à travers les salines avec un guide local expert. Pas de foule, pas de bus, pas d'horaire fixe. Juste vous, le paysage et plus d'un siècle d'histoires.",
      },
      {
        title: "Dégustation de Flor de Sal",
        description:
          "Terminez votre visite à la Bodega de la Sal, où vous goûterez la délicate Flor de Sal et les Saveurs de Janubio, accompagnées de tomates locales, fromage et vin.",
      },
      {
        title: "127 Ans de Patrimoine",
        description:
          "Les Salinas de Janubio récoltent le sel sans interruption depuis 1895, transmis de génération en génération. Vous marcherez sur les mêmes chemins que les familles qui les ont construites.",
      },
      {
        title: "Paysage Volcanique",
        description:
          "Les salines se trouvent au pied de Timanfaya, dans un lagon naturel formé par les éruptions de 1730. Le paysage est unique sur l'île.",
      },
      {
        title: "Faune et Nature",
        description:
          "Plus de 70 espèces d'oiseaux migrateurs traversent ces salines, dont des pluviers, des bécasseaux et même des flamants roses. Un paradis paisible pour les amoureux de la nature.",
      },
      {
        title: "Processus Artisanal",
        description:
          "Observez les sauniers récolter à la main, comme cela a toujours été fait. De l'eau de mer au cristal, tout le processus est manuel, patient et magnifique.",
      },
    ],
    tasting: {
      label: "LA DÉGUSTATION",
      title: "Des Salinas de Janubio à votre palais",
      paragraphs: [
        "La visite se termine à la Bodega de la Sal, une salle de dégustation surplombant les salines. Vous y goûterez la Flor de Sal, le sel le plus délicat récolté uniquement à la surface des bassins, ainsi que les sels aromatisés de Janubio.",
        "Chaque dégustation est accompagnée de produits locaux : tomates mûres de Lanzarote, fromage artisanal et un verre de vin des vignobles volcaniques de La Geria.",
      ],
      imageAlt: "Dégustation de Flor de Sal avec vin local aux Salinas de Janubio",
    },
    testimonial: {
      quote:
        "Nous avons failli passer à côté des salines. Dieu merci, nous ne l'avons pas fait. Notre guide a donné vie à tout l'endroit. La dégustation de vin face aux bassins a été l'un des meilleurs moments de notre voyage.",
      author: "James & Catherine Whitfield",
      location: "Londres, Royaume-Uni",
    },
  },
} as const;

function getTouristTripStructuredData(locale: string) {
  const names: Record<string, string> = {
    en: "Salinas de Janubio Private Tour & Salt Tasting",
    es: "Visita Privada a las Salinas de Janubio con Degustación",
    de: "Salinas de Janubio Private Tour & Salzverkostung",
    fr: "Visite Privée des Salinas de Janubio avec Dégustation",
  };
  const descriptions: Record<string, string> = {
    en: "Private guided tour of the largest artisanal salt flats in the Canary Islands. Walk the 127-year-old pans, taste Flor de Sal, and savour local wine.",
    es: "Tour privado y guiado por las salinas artesanales más grandes de Canarias. Recorre las charcas de 127 años, degusta Flor de Sal y disfruta de vino local.",
    de: "Private Führung durch die größten handwerklichen Salinen der Kanarischen Inseln. Erkunde die 127 Jahre alten Salzpfannen, koste Flor de Sal und genieße lokalen Wein.",
    fr: "Visite privée et guidée des plus grandes salines artisanales des Canaries. Parcourez les bassins de 127 ans, dégustez la Flor de Sal et savourez du vin local.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: names[locale] ?? names.en,
    description: descriptions[locale] ?? descriptions.en,
    touristType: ["Cultural", "Food & Drink", "Nature"],
    provider: {
      "@type": "TravelAgency",
      name: "Lanzarote Untold",
      url: "https://lanzaroteuntold.com",
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Guided walk through the Salinas de Janubio salt pans",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Flor de Sal and flavoured salt tasting at Bodega de la Sal",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Local wine, cheese, and tomato pairing",
        },
      ],
    },
    contentLocation: {
      "@type": "Place",
      name: "Salinas de Janubio",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yaiza",
        addressRegion: "Lanzarote",
        addressCountry: "ES",
      },
    },
  };
}

type SaltFlatsPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: SaltFlatsPageProps): Promise<Metadata> {
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

export default async function SaltFlatsPage({ params }: SaltFlatsPageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
  const t = content[locale];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getTouristTripStructuredData(locale)),
        }}
      />

      <PageHero
        label={t.hero.label}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        backgroundImage="https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg"
      />

      <ImageTextSection
        label={t.experience.label}
        title={t.experience.title}
        paragraphs={[...t.experience.paragraphs]}
        image="https://images.pexels.com/photos/34779944/pexels-photo-34779944.jpeg"
        imageAlt={t.experience.imageAlt}
      />

      <FeatureGrid
        label={t.highlights.label}
        title={t.highlights.title}
        features={[...t.features]}
      />

      <ImageTextSection
        label={t.tasting.label}
        title={t.tasting.title}
        paragraphs={[...t.tasting.paragraphs]}
        image="https://images.pexels.com/photos/8472735/pexels-photo-8472735.jpeg"
        imageAlt={t.tasting.imageAlt}
        reversed
      />

      <TestimonialStrip
        quote={t.testimonial.quote}
        author={t.testimonial.author}
        location={t.testimonial.location}
      />

      <CTASection lang={locale} />
    </main>
  );
}
