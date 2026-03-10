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
      title: "Lanzarote Volcano Hiking: La Corona & Famara Cliffs Private Trek | Lanzarote Untold",
      description:
        "Private hiking tour through northern Lanzarote. Trek the La Corona volcano, walk the 500m Famara cliffs, and descend into the valley of a thousand palms in Haria. Enquire now.",
      keywords: [
        "lanzarote hiking",
        "lanzarote volcano tour",
        "lanzarote hidden gems",
        "lanzarote day trips",
        "famara cliffs lanzarote",
        "la corona volcano",
        "lanzarote private tour",
        "things to do in lanzarote",
      ],
    },
    hero: {
      label: "TREKKING & DISCOVERY",
      title: "La Corona Volcano & Famara Cliffs Private Trek",
      subtitle:
        "A private hiking experience through the volcanic north of Lanzarote. Ancient craters, 500-metre sea cliffs, and the valley of a thousand palms.",
    },
    experience: {
      label: "THE EXPERIENCE",
      title: "The north Lanzarote that most visitors never see",
      paragraphs: [
        "Northern Lanzarote is a different world. While the south draws the crowds, the north remains wild, quiet, and deeply beautiful. This is where the island reveals its raw geology, its hidden valleys, and its most dramatic landscapes.",
        "Our private trekking tour takes you through two protected natural areas: the Natural Monument of Volcan de la Corona and the Chinijo Archipelago Nature Park. You will hike with a local guide who grew up on these trails, someone who knows where the rare plants hide, where the birds nest along the cliffs, and which viewpoints will take your breath away.",
      ],
      imageAlt: "Volcanic hiking trail in northern Lanzarote near La Corona",
    },
    highlights: {
      label: "HIGHLIGHTS",
      title: "What makes this Lanzarote hiking experience unique",
    },
    features: [
      {
        title: "La Corona Volcano",
        description:
          "Climb to the crater of this ancient volcano and take in the immense caldera. Along the way, you will pass through vineyards growing in volcanic soil and walk across lava flows of massive basaltic blocks.",
      },
      {
        title: "The Lava Tunnel",
        description:
          "From the flanks of La Corona, observe one of the longest lava tunnels in the world: 7.6 kilometres long, with the final 1.6 kilometres running beneath the Atlantic Ocean.",
      },
      {
        title: "Famara Cliffs",
        description:
          "Walk along the edge of a 500-metre rock wall that drops straight into the sea. From here, the views across to La Graciosa and the Chinijo Archipelago are some of the most spectacular in the Canary Islands.",
      },
      {
        title: "Valley of a Thousand Palms",
        description:
          "Descend from the cliffs into the Haria valley, a lush oasis of white houses and over a thousand palm trees. A quiet, beautiful end to the trek.",
      },
      {
        title: "Private & Unhurried",
        description:
          "No group buses, no rigid schedule. This is your trek, at your pace. Stop where you want, ask what you want, and take the time to truly absorb the landscape.",
      },
      {
        title: "Protected Nature",
        description:
          "The entire route passes through protected areas. Your guide will point out endemic flora, migratory birds along the cliff edge, and geological formations millions of years in the making.",
      },
    ],
    route: {
      label: "THE ROUTE",
      title: "From volcanic crater to the palms of Haria",
      paragraphs: [
        "The trek begins in the village of Ye, at the foot of La Corona. You will climb through vineyards and lava fields to reach the crater rim, then follow the ridge east to see the lava tunnel stretching toward the coast. From there, the trail winds along the Famara cliffs, 500 metres above the Atlantic, with La Graciosa floating on the horizon.",
        "The final descent takes you through one of the ravines of the Haria valley, where the volcanic rock gives way to palm groves and whitewashed houses. Around 11 kilometres, 3.5 hours of walking, and a landscape that changes with every step.",
      ],
      imageAlt: "Famara cliffs overlooking La Graciosa island from Lanzarote",
    },
    testimonial: {
      quote:
        "We have hiked all over Europe and this was something completely different. The cliffs, the volcano, the palms at the end. Our guide made it feel like a private discovery, not a tour.",
      author: "Stefan & Anna Bergmann",
      location: "Munich, Germany",
    },
  },
  es: {
    meta: {
      title: "Senderismo en Lanzarote: Trekking Privado La Corona y Famara | Lanzarote Untold",
      description:
        "Ruta de senderismo privada por el norte de Lanzarote. Sube al volcán La Corona, recorre los acantilados de Famara de 500m y baja al valle de las mil palmeras de Haría. Reserva ahora.",
      keywords: [
        "senderismo lanzarote",
        "qué hacer en lanzarote",
        "lanzarote excursiones",
        "lanzarote tours",
        "acantilados de famara",
        "volcán la corona",
        "lanzarote actividades",
        "lanzarote planes",
      ],
    },
    hero: {
      label: "TREKKING Y DESCUBRIMIENTO",
      title: "Trekking Privado al Volcán La Corona y Acantilados de Famara",
      subtitle:
        "Una experiencia de senderismo privada por el norte volcánico de Lanzarote. Cráteres antiguos, acantilados de 500 metros y el valle de las mil palmeras.",
    },
    experience: {
      label: "LA EXPERIENCIA",
      title: "El norte de Lanzarote que la mayoría de visitantes nunca ve",
      paragraphs: [
        "El norte de Lanzarote es otro mundo. Mientras el sur atrae a las multitudes, el norte permanece salvaje, tranquilo y profundamente hermoso. Aquí es donde la isla revela su geología en bruto, sus valles escondidos y sus paisajes más dramáticos.",
        "Nuestro trekking privado te lleva por dos áreas naturales protegidas: el Monumento Natural del Volcán de la Corona y el Parque Natural del Archipiélago Chinijo. Caminarás con un guía local que creció en estos senderos, alguien que sabe dónde se esconden las plantas raras, dónde anidan las aves en los acantilados y qué miradores te dejarán sin palabras.",
      ],
      imageAlt: "Sendero volcánico en el norte de Lanzarote cerca de La Corona",
    },
    highlights: {
      label: "DESTACADOS",
      title: "Qué hace única esta experiencia de senderismo en Lanzarote",
    },
    features: [
      {
        title: "Volcán La Corona",
        description:
          "Sube hasta el cráter de este antiguo volcán y contempla la inmensa caldera. Por el camino, pasarás entre viñedos que crecen en suelo volcánico y caminarás sobre coladas de lava con enormes bloques basálticos.",
      },
      {
        title: "El Túnel de Lava",
        description:
          "Desde las laderas de La Corona, observa uno de los túneles de lava más largos del mundo: 7,6 kilómetros de longitud, con los últimos 1,6 kilómetros bajo el océano Atlántico.",
      },
      {
        title: "Acantilados de Famara",
        description:
          "Camina al borde de una pared de roca de 500 metros que cae directamente al mar. Desde aquí, las vistas hacia La Graciosa y el Archipiélago Chinijo son de las más espectaculares de Canarias.",
      },
      {
        title: "Valle de las Mil Palmeras",
        description:
          "Desciende desde los acantilados al valle de Haría, un oasis de casas blancas y más de mil palmeras. Un final tranquilo y hermoso para el trekking.",
      },
      {
        title: "Privado y Sin Prisas",
        description:
          "Sin autobuses de grupo, sin horario rígido. Este es tu trekking, a tu ritmo. Para donde quieras, pregunta lo que quieras y tómate el tiempo de absorber el paisaje.",
      },
      {
        title: "Naturaleza Protegida",
        description:
          "Toda la ruta transcurre por zonas protegidas. Tu guía te señalará flora endémica, aves migratorias en los acantilados y formaciones geológicas de millones de años.",
      },
    ],
    route: {
      label: "LA RUTA",
      title: "Del cráter volcánico a las palmeras de Haría",
      paragraphs: [
        "El trekking comienza en el pueblo de Ye, al pie de La Corona. Subirás entre viñedos y campos de lava hasta alcanzar el borde del cráter, luego seguirás la cresta hacia el este para ver el túnel de lava extendiéndose hacia la costa. Desde allí, el sendero serpentea por los acantilados de Famara, a 500 metros sobre el Atlántico, con La Graciosa flotando en el horizonte.",
        "El descenso final te lleva por uno de los barrancos del valle de Haría, donde la roca volcánica da paso a palmeras y casas encaladas. Unos 11 kilómetros, 3,5 horas de caminata y un paisaje que cambia con cada paso.",
      ],
      imageAlt: "Acantilados de Famara con vistas a La Graciosa desde Lanzarote",
    },
    testimonial: {
      quote:
        "Hemos caminado por toda Europa y esto fue algo completamente diferente. Los acantilados, el volcán, las palmeras al final. Nuestro guía hizo que se sintiera como un descubrimiento privado, no un tour.",
      author: "Stefan & Anna Bergmann",
      location: "Múnich, Alemania",
    },
  },
  de: {
    meta: {
      title: "Lanzarote Wandern: Private Trekkingtour La Corona & Famara Klippen | Lanzarote Untold",
      description:
        "Private Wanderung durch den Norden von Lanzarote. Besteige den Vulkan La Corona, wandere entlang der 500m hohen Famara-Klippen und steige ins Tal der tausend Palmen ab. Jetzt anfragen.",
      keywords: [
        "lanzarote wandern",
        "lanzarote vulkan tour",
        "lanzarote geheimtipps",
        "lanzarote ausflüge",
        "famara klippen lanzarote",
        "la corona vulkan",
        "lanzarote touren",
        "lanzarote sehenswürdigkeiten",
      ],
    },
    hero: {
      label: "TREKKING & ENTDECKUNG",
      title: "Private Trekkingtour: Vulkan La Corona & Famara-Klippen",
      subtitle:
        "Ein privates Wandererlebnis durch den vulkanischen Norden von Lanzarote. Uralte Krater, 500 Meter hohe Meeresklippen und das Tal der tausend Palmen.",
    },
    experience: {
      label: "DAS ERLEBNIS",
      title: "Der Norden Lanzarotes, den die meisten Besucher nie sehen",
      paragraphs: [
        "Der Norden von Lanzarote ist eine andere Welt. Während der Süden die Massen anzieht, bleibt der Norden wild, ruhig und zutiefst schön. Hier offenbart die Insel ihre rohe Geologie, ihre versteckten Täler und ihre dramatischsten Landschaften.",
        "Unsere private Trekkingtour führt dich durch zwei geschützte Naturgebiete: das Naturdenkmal Vulkan de la Corona und den Naturpark Archipiélago Chinijo. Du wanderst mit einem lokalen Guide, der auf diesen Pfaden aufgewachsen ist, jemand, der weiß, wo die seltenen Pflanzen wachsen, wo die Vögel an den Klippen nisten und welche Aussichtspunkte dir den Atem rauben werden.",
      ],
      imageAlt: "Vulkanischer Wanderweg im Norden von Lanzarote nahe La Corona",
    },
    highlights: {
      label: "HÖHEPUNKTE",
      title: "Was dieses Lanzarote Wandererlebnis einzigartig macht",
    },
    features: [
      {
        title: "Vulkan La Corona",
        description:
          "Steige zum Krater dieses uralten Vulkans auf und nimm die gewaltige Caldera in dich auf. Unterwegs kommst du an Weinbergen auf vulkanischem Boden vorbei und wanderst über Lavaströme mit riesigen Basaltblöcken.",
      },
      {
        title: "Der Lavatunnel",
        description:
          "Von den Flanken des La Corona aus beobachtest du einen der längsten Lavatunnel der Welt: 7,6 Kilometer lang, wobei die letzten 1,6 Kilometer unter dem Atlantischen Ozean verlaufen.",
      },
      {
        title: "Famara-Klippen",
        description:
          "Wandere am Rand einer 500 Meter hohen Felswand, die senkrecht ins Meer fällt. Die Aussicht auf La Graciosa und den Chinijo-Archipel gehört zu den spektakulärsten der Kanarischen Inseln.",
      },
      {
        title: "Tal der Tausend Palmen",
        description:
          "Steige von den Klippen ins Haría-Tal ab, eine grüne Oase aus weißen Häusern und über tausend Palmen. Ein ruhiges, wunderschönes Ende der Wanderung.",
      },
      {
        title: "Privat & Ohne Eile",
        description:
          "Keine Gruppenbusse, kein starrer Zeitplan. Das ist deine Wanderung, in deinem Tempo. Halte an, wo du möchtest, frage, was du willst, und nimm dir die Zeit, die Landschaft wirklich aufzunehmen.",
      },
      {
        title: "Geschützte Natur",
        description:
          "Die gesamte Route führt durch Schutzgebiete. Dein Guide zeigt dir endemische Flora, Zugvögel an den Klippen und geologische Formationen, die Millionen Jahre alt sind.",
      },
    ],
    route: {
      label: "DIE ROUTE",
      title: "Vom Vulkankrater zu den Palmen von Haría",
      paragraphs: [
        "Die Wanderung beginnt im Dorf Ye, am Fuß des La Corona. Du steigst durch Weinberge und Lavafelder zum Kraterrand auf, folgst dann dem Grat nach Osten, um den Lavatunnel Richtung Küste zu sehen. Von dort schlängelt sich der Weg entlang der Famara-Klippen, 500 Meter über dem Atlantik, mit La Graciosa am Horizont.",
        "Der letzte Abstieg führt durch eine der Schluchten des Haría-Tals, wo das Vulkangestein Palmenhainen und weißen Häusern weicht. Rund 11 Kilometer, 3,5 Stunden Wanderung und eine Landschaft, die sich mit jedem Schritt verändert.",
      ],
      imageAlt: "Famara-Klippen mit Blick auf La Graciosa von Lanzarote",
    },
    testimonial: {
      quote:
        "Wir sind durch ganz Europa gewandert und das hier war etwas völlig anderes. Die Klippen, der Vulkan, die Palmen am Ende. Unser Guide hat es wie eine private Entdeckung wirken lassen, nicht wie eine Tour.",
      author: "Stefan & Anna Bergmann",
      location: "München, Deutschland",
    },
  },
  fr: {
    meta: {
      title: "Randonnée à Lanzarote: Trek Privé La Corona & Falaises de Famara | Lanzarote Untold",
      description:
        "Randonnée privée dans le nord de Lanzarote. Grimpez le volcan La Corona, longez les falaises de Famara de 500m et descendez dans la vallée aux mille palmiers de Haría. Réservez.",
      keywords: [
        "lanzarote randonnée",
        "lanzarote que faire",
        "lanzarote excursions",
        "lanzarote visite",
        "falaises de famara",
        "volcan la corona",
        "lanzarote activités",
        "lanzarote incontournables",
      ],
    },
    hero: {
      label: "TREKKING & DÉCOUVERTE",
      title: "Trek Privé: Volcan La Corona & Falaises de Famara",
      subtitle:
        "Une expérience de randonnée privée à travers le nord volcanique de Lanzarote. Cratères anciens, falaises de 500 mètres et la vallée aux mille palmiers.",
    },
    experience: {
      label: "L'EXPÉRIENCE",
      title: "Le nord de Lanzarote que la plupart des visiteurs ne voient jamais",
      paragraphs: [
        "Le nord de Lanzarote est un autre monde. Alors que le sud attire les foules, le nord reste sauvage, paisible et profondément beau. C'est ici que l'île révèle sa géologie brute, ses vallées cachées et ses paysages les plus spectaculaires.",
        "Notre trek privé vous emmène à travers deux espaces naturels protégés : le Monument Naturel du Volcan de la Corona et le Parc Naturel de l'Archipel Chinijo. Vous marcherez avec un guide local qui a grandi sur ces sentiers, quelqu'un qui sait où se cachent les plantes rares, où nichent les oiseaux le long des falaises et quels points de vue vous couperont le souffle.",
      ],
      imageAlt: "Sentier volcanique dans le nord de Lanzarote près de La Corona",
    },
    highlights: {
      label: "POINTS FORTS",
      title: "Ce qui rend cette randonnée à Lanzarote unique",
    },
    features: [
      {
        title: "Volcan La Corona",
        description:
          "Grimpez jusqu'au cratère de cet ancien volcan et contemplez l'immense caldeira. En chemin, vous traverserez des vignobles sur sol volcanique et marcherez sur des coulées de lave aux énormes blocs basaltiques.",
      },
      {
        title: "Le Tunnel de Lave",
        description:
          "Depuis les flancs de La Corona, observez l'un des plus longs tunnels de lave au monde : 7,6 kilomètres de long, dont les derniers 1,6 kilomètres sous l'océan Atlantique.",
      },
      {
        title: "Falaises de Famara",
        description:
          "Marchez au bord d'une paroi rocheuse de 500 mètres qui plonge directement dans la mer. Les vues sur La Graciosa et l'Archipel Chinijo sont parmi les plus spectaculaires des Canaries.",
      },
      {
        title: "Vallée aux Mille Palmiers",
        description:
          "Descendez des falaises dans la vallée de Haría, une oasis de maisons blanches et de plus de mille palmiers. Une fin paisible et magnifique pour le trek.",
      },
      {
        title: "Privé et Sans Hâte",
        description:
          "Pas de bus de groupe, pas d'horaire rigide. C'est votre trek, à votre rythme. Arrêtez-vous où vous voulez, posez toutes vos questions et prenez le temps d'absorber le paysage.",
      },
      {
        title: "Nature Protégée",
        description:
          "L'ensemble de l'itinéraire traverse des zones protégées. Votre guide vous montrera la flore endémique, les oiseaux migrateurs sur les falaises et des formations géologiques vieilles de millions d'années.",
      },
    ],
    route: {
      label: "L'ITINÉRAIRE",
      title: "Du cratère volcanique aux palmiers de Haría",
      paragraphs: [
        "Le trek commence au village de Ye, au pied de La Corona. Vous monterez à travers vignobles et champs de lave jusqu'au bord du cratère, puis suivrez la crête vers l'est pour voir le tunnel de lave s'étendant vers la côte. De là, le sentier serpente le long des falaises de Famara, à 500 mètres au-dessus de l'Atlantique, avec La Graciosa flottant à l'horizon.",
        "La descente finale vous mène par l'un des ravins de la vallée de Haría, où la roche volcanique cède la place aux palmeraies et maisons blanchies à la chaux. Environ 11 kilomètres, 3h30 de marche et un paysage qui change à chaque pas.",
      ],
      imageAlt: "Falaises de Famara avec vue sur La Graciosa depuis Lanzarote",
    },
    testimonial: {
      quote:
        "Nous avons randonné dans toute l'Europe et c'était quelque chose de complètement différent. Les falaises, le volcan, les palmiers à la fin. Notre guide a fait en sorte que ce soit une découverte privée, pas une visite organisée.",
      author: "Stefan & Anna Bergmann",
      location: "Munich, Allemagne",
    },
  },
} as const;

function getTouristTripStructuredData(locale: string) {
  const names: Record<string, string> = {
    en: "La Corona Volcano & Famara Cliffs Private Trek",
    es: "Trekking Privado al Volcán La Corona y Acantilados de Famara",
    de: "Private Trekkingtour: Vulkan La Corona & Famara-Klippen",
    fr: "Trek Privé: Volcan La Corona & Falaises de Famara",
  };
  const descriptions: Record<string, string> = {
    en: "Private hiking tour through northern Lanzarote. Trek the La Corona volcano, walk the 500m Famara cliffs, and descend into the valley of a thousand palms in Haria.",
    es: "Ruta de senderismo privada por el norte de Lanzarote. Sube al volcán La Corona, recorre los acantilados de Famara y baja al valle de las mil palmeras de Haría.",
    de: "Private Wanderung durch den Norden von Lanzarote. Besteige den Vulkan La Corona, wandere entlang der Famara-Klippen und steige ins Tal der tausend Palmen ab.",
    fr: "Randonnée privée dans le nord de Lanzarote. Grimpez le volcan La Corona, longez les falaises de Famara et descendez dans la vallée aux mille palmiers de Haría.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: names[locale] ?? names.en,
    description: descriptions[locale] ?? descriptions.en,
    touristType: ["Hiking", "Nature", "Adventure"],
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
          name: "Ascent to La Corona volcano crater through vineyards and lava fields",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trek along the 500m Famara cliffs with views of La Graciosa and Chinijo Archipelago",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Descent through the valley of a thousand palms into Haria",
        },
      ],
    },
    contentLocation: {
      "@type": "Place",
      name: "Northern Lanzarote: La Corona, Famara Cliffs, Haria",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Haria",
        addressRegion: "Lanzarote",
        addressCountry: "ES",
      },
    },
  };
}

type NorthTrekkingPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: NorthTrekkingPageProps): Promise<Metadata> {
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

export default async function NorthTrekkingPage({ params }: NorthTrekkingPageProps) {
  const { lang } = await params;
  const locale = (lang as keyof typeof content) || "en";
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
        backgroundImage="https://images.pexels.com/photos/22856263/pexels-photo-22856263.jpeg"
      />

      <ImageTextSection
        label={t.experience.label}
        title={t.experience.title}
        paragraphs={[...t.experience.paragraphs]}
        image="https://images.unsplash.com/photo-1571900670723-a317a66e3fb7"
        imageAlt={t.experience.imageAlt}
      />

      <FeatureGrid
        label={t.highlights.label}
        title={t.highlights.title}
        features={[...t.features]}
      />

      <ImageTextSection
        label={t.route.label}
        title={t.route.title}
        paragraphs={[...t.route.paragraphs]}
        image="https://images.pexels.com/photos/14715105/pexels-photo-14715105.jpeg"
        imageAlt={t.route.imageAlt}
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
