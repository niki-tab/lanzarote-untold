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
      title:
        "Lanzarote Shore Fishing: Private Guided Trip | Lanzarote Untold",
      description:
        "Private guided shore fishing on Lanzarote's volcanic coast. Spinning and bottom fishing for Atlantic bonito, barracuda, amberjack and more. All gear included. Enquire now.",
      keywords: [
        "lanzarote fishing",
        "lanzarote shore fishing",
        "lanzarote fishing trip",
        "lanzarote excursions",
        "things to do in lanzarote",
        "lanzarote activities",
        "lanzarote hidden gems",
        "lanzarote private tour",
      ],
    },
    hero: {
      label: "SEA & FISHING",
      title: "Shore Fishing on Lanzarote's Volcanic Coast",
      subtitle:
        "A private fishing experience where the Atlantic meets black volcanic rock. Your guide, your gear, your pace. Spin for bonito at dawn or fish the deep ledges after dark.",
    },
    experience: {
      label: "THE EXPERIENCE",
      title: "Where lava meets the Atlantic",
      paragraphs: [
        "Lanzarote's coastline is not like other islands. Volcanic eruptions carved a shoreline of black rock shelves, hidden coves, and underwater structures that attract some of the richest marine life in the eastern Atlantic. It is a coastline that most visitors drive past without knowing what lies beneath the surface.",
        "Our private shore fishing trip takes you to the spots that only locals know. Your guide has fished these waters for years and will take you to the right place at the right time, with the right technique. No boats, no marinas, no crowds. Just you, the volcanic shore, and the pull of the ocean.",
      ],
      imageAlt:
        "Volcanic coastline of Lanzarote with black rock formations meeting the Atlantic Ocean",
    },
    highlights: {
      label: "HIGHLIGHTS",
      title: "What makes shore fishing in Lanzarote extraordinary",
    },
    features: [
      {
        title: "Spinning at Dawn",
        description:
          "The early morning sessions are electric. Cast lures from volcanic ledges as the sun rises over the Atlantic. Target Atlantic bonito, barracuda, amberjack, bluefish, and mackerel.",
      },
      {
        title: "Bottom Fishing After Dark",
        description:
          "As night falls, the deeper species come to feed. Heavier tackle, bigger bait, and the chance to land red snapper, grouper, and conger eel from the rocky shore under the stars.",
      },
      {
        title: "All Gear Provided",
        description:
          "Rods, reels, lures, lines, bait, lights, and everything you need. Quality spinning and bottom fishing equipment, all included. Just bring yourself and a sense of adventure.",
      },
      {
        title: "Secret Spots",
        description:
          "Your guide knows every ledge, every channel, every current shift along the volcanic coast. These are not tourist spots. They are the places where the fish are.",
      },
      {
        title: "Choose Your Session",
        description:
          "A four-hour session at dawn or dusk for focused fishing, or a full-day trip that combines fishing with a hike along the volcanic shore, discovering hidden coves between casts.",
      },
      {
        title: "Private & Flexible",
        description:
          "No group schedules. Your guide adapts to conditions, to the fish, and to you. If the bonito are running to the south, you go south. If you want to stay an extra hour, you stay.",
      },
    ],
    coast: {
      label: "THE COAST",
      title: "A volcanic shore teeming with life beneath the surface",
      paragraphs: [
        "The underwater landscape of Lanzarote is as dramatic as its surface. Volcanic rock formations create caves, channels, and drop-offs where the cool, nutrient-rich Canary Current drives powerful upwelling from the deep. The result is an extraordinary concentration of marine life in waters that most visitors never think to explore.",
        "From the wild northern coast to the rugged volcanic shores of the south, every stretch of Lanzarote's coastline holds different species and different challenges. Your guide reads the water, the wind, and the tide to put you in the best position. This is fishing shaped by the island itself.",
      ],
      imageAlt:
        "Rocky volcanic shore of Lanzarote with crystal clear Atlantic waters",
    },
    testimonial: {
      quote:
        "I have fished in Norway, Scotland, and the Azores, but Lanzarote surprised me completely. The volcanic coast is incredible. My guide knew exactly where to go and I landed a bonito and two barracuda before breakfast.",
      author: "Thomas Eriksson",
      location: "Stockholm, Sweden",
    },
  },
  es: {
    meta: {
      title:
        "Pesca en Lanzarote: Excursión Privada Guiada | Lanzarote Untold",
      description:
        "Pesca guiada y privada en la costa volcánica de Lanzarote. Spinning y pesca de fondo para bonito, barracuda, medregal y más. Todo el equipo incluido. Reserva ahora.",
      keywords: [
        "pesca en lanzarote",
        "pesca lanzarote",
        "excursión pesca lanzarote",
        "lanzarote excursiones",
        "qué hacer en lanzarote",
        "lanzarote actividades",
        "lanzarote planes",
        "lanzarote tours",
      ],
    },
    hero: {
      label: "MAR Y PESCA",
      title: "Pesca en la Costa Volcánica de Lanzarote",
      subtitle:
        "Una experiencia de pesca privada donde el Atlántico se encuentra con la roca volcánica negra. Tu guía, tu equipo, tu ritmo. Spinning para bonitos al amanecer o pesca de fondo bajo las estrellas.",
    },
    experience: {
      label: "LA EXPERIENCIA",
      title: "Donde la lava se encuentra con el Atlántico",
      paragraphs: [
        "La costa de Lanzarote no es como la de otras islas. Las erupciones volcánicas tallaron una costa de plataformas de roca negra, calas escondidas y estructuras submarinas que atraen una de las vidas marinas más ricas del Atlántico oriental. Es una costa que la mayoría de los visitantes recorren sin saber lo que hay bajo la superficie.",
        "Nuestra excursión privada de pesca te lleva a los puntos que solo conocen los locales. Tu guía lleva años pescando en estas aguas y te llevará al lugar correcto, en el momento correcto, con la técnica adecuada. Sin barcos, sin puertos, sin multitudes. Solo tú, la costa volcánica y la fuerza del océano.",
      ],
      imageAlt:
        "Costa volcánica de Lanzarote con formaciones de roca negra junto al océano Atlántico",
    },
    highlights: {
      label: "DESTACADOS",
      title: "Qué hace extraordinaria la pesca en Lanzarote",
    },
    features: [
      {
        title: "Spinning al Amanecer",
        description:
          "Las sesiones de madrugada son eléctricas. Lanza señuelos desde plataformas volcánicas mientras el sol sale sobre el Atlántico. Bonitos, barracudas, medregales, anjovas y caballas.",
      },
      {
        title: "Pesca de Fondo de Noche",
        description:
          "Al caer la noche, las especies de fondo salen a alimentarse. Equipo más pesado, cebo más grande y la posibilidad de sacar pargos, meros y congrios desde la costa rocosa bajo las estrellas.",
      },
      {
        title: "Todo el Equipo Incluido",
        description:
          "Cañas, carretes, señuelos, líneas, cebo, luces y todo lo que necesitas. Equipo de calidad para spinning y pesca de fondo, todo incluido. Solo trae ganas de aventura.",
      },
      {
        title: "Puntos Secretos",
        description:
          "Tu guía conoce cada saliente, cada canal, cada cambio de corriente a lo largo de la costa volcánica. No son puntos turísticos. Son los lugares donde están los peces.",
      },
      {
        title: "Elige Tu Sesión",
        description:
          "Una sesión de cuatro horas al amanecer o al atardecer para pesca concentrada, o un día completo que combina pesca con una caminata por la costa volcánica, descubriendo calas escondidas entre lance y lance.",
      },
      {
        title: "Privado y Flexible",
        description:
          "Sin horarios de grupo. Tu guía se adapta a las condiciones, a los peces y a ti. Si los bonitos están al sur, vas al sur. Si quieres quedarte una hora más, te quedas.",
      },
    ],
    coast: {
      label: "LA COSTA",
      title: "Una costa volcánica rebosante de vida bajo la superficie",
      paragraphs: [
        "El paisaje submarino de Lanzarote es tan dramático como su superficie. Las formaciones de roca volcánica crean cuevas, canales y caídas donde la corriente fría y rica en nutrientes de Canarias impulsa un potente afloramiento desde las profundidades. El resultado es una concentración extraordinaria de vida marina en aguas que la mayoría de visitantes nunca piensa en explorar.",
        "Desde la costa norte salvaje hasta las costas volcánicas escarpadas del sur, cada tramo de la costa de Lanzarote alberga especies diferentes y desafíos distintos. Tu guía lee el agua, el viento y la marea para colocarte en la mejor posición. Esto es pesca moldeada por la propia isla.",
      ],
      imageAlt:
        "Costa rocosa volcánica de Lanzarote con aguas cristalinas del Atlántico",
    },
    testimonial: {
      quote:
        "He pescado en Noruega, Escocia y las Azores, pero Lanzarote me sorprendió completamente. La costa volcánica es increíble. Mi guía sabía exactamente dónde ir y saqué un bonito y dos barracudas antes del desayuno.",
      author: "Thomas Eriksson",
      location: "Estocolmo, Suecia",
    },
  },
  de: {
    meta: {
      title:
        "Lanzarote Küstenangeln: Privater Angelausflug | Lanzarote Untold",
      description:
        "Privates geführtes Küstenangeln an Lanzarotes Vulkanküste. Spinnfischen und Grundangeln auf Bonito, Barrakuda, Amberjack und mehr. Komplette Ausrüstung inklusive. Jetzt anfragen.",
      keywords: [
        "lanzarote angeln",
        "lanzarote küstenangeln",
        "lanzarote angelausflug",
        "lanzarote ausflüge",
        "lanzarote aktivitäten",
        "lanzarote geheimtipps",
        "lanzarote touren",
        "lanzarote urlaub",
      ],
    },
    hero: {
      label: "MEER & ANGELN",
      title: "Küstenangeln an Lanzarotes Vulkanküste",
      subtitle:
        "Ein privates Angelerlebnis, wo der Atlantik auf schwarzes Vulkangestein trifft. Dein Guide, deine Ausrüstung, dein Tempo. Spinnfischen auf Bonito bei Sonnenaufgang oder Grundangeln unter den Sternen.",
    },
    experience: {
      label: "DAS ERLEBNIS",
      title: "Wo Lava auf den Atlantik trifft",
      paragraphs: [
        "Lanzarotes Küste gleicht keiner anderen Insel. Vulkanausbrüche formten eine Küste aus schwarzen Felsplatten, versteckten Buchten und Unterwasserstrukturen, die einige der reichsten Meereslebewesen im östlichen Atlantik anziehen. Es ist eine Küste, an der die meisten Besucher vorbeifahren, ohne zu wissen, was unter der Oberfläche liegt.",
        "Unser privater Küstenangelausflug bringt dich zu den Spots, die nur Einheimische kennen. Dein Guide fischt seit Jahren in diesen Gewässern und bringt dich zur richtigen Zeit an den richtigen Ort, mit der richtigen Technik. Keine Boote, keine Häfen, keine Menschenmassen. Nur du, die Vulkanküste und die Kraft des Ozeans.",
      ],
      imageAlt:
        "Vulkanküste von Lanzarote mit schwarzen Felsformationen am Atlantik",
    },
    highlights: {
      label: "HÖHEPUNKTE",
      title: "Was das Küstenangeln auf Lanzarote außergewöhnlich macht",
    },
    features: [
      {
        title: "Spinnfischen bei Sonnenaufgang",
        description:
          "Die frühen Morgensessions sind elektrisierend. Wirf Köder von Vulkanfelsen, während die Sonne über dem Atlantik aufgeht. Zielarten: Bonito, Barrakuda, Amberjack, Blaufisch und Makrele.",
      },
      {
        title: "Grundangeln nach Einbruch der Dunkelheit",
        description:
          "Wenn die Nacht hereinbricht, kommen die tieferen Arten zum Fressen. Schwereres Gerät, größere Köder und die Chance, Schnapper, Zackenbarsch und Meeraal unter den Sternen von der Felsküste zu landen.",
      },
      {
        title: "Komplette Ausrüstung Inklusive",
        description:
          "Ruten, Rollen, Köder, Schnüre, Lampen und alles, was du brauchst. Hochwertige Spinn- und Grundangelausrüstung, alles inklusive. Bring einfach dich selbst und Abenteuerlust mit.",
      },
      {
        title: "Geheime Spots",
        description:
          "Dein Guide kennt jeden Felsvorsprung, jeden Kanal, jede Strömungsänderung entlang der Vulkanküste. Das sind keine Touristenspots. Das sind die Stellen, wo die Fische sind.",
      },
      {
        title: "Wähle Deine Session",
        description:
          "Eine vierstündige Session bei Sonnenaufgang oder Sonnenuntergang zum konzentrierten Angeln, oder ein ganztägiger Ausflug, der Angeln mit einer Wanderung entlang der Vulkanküste verbindet.",
      },
      {
        title: "Privat & Flexibel",
        description:
          "Keine Gruppenzeitpläne. Dein Guide passt sich den Bedingungen an, den Fischen und dir. Wenn die Bonitos im Süden beißen, gehst du nach Süden. Wenn du eine Stunde länger bleiben willst, bleibst du.",
      },
    ],
    coast: {
      label: "DIE KÜSTE",
      title: "Eine Vulkanküste voller Leben unter der Oberfläche",
      paragraphs: [
        "Die Unterwasserlandschaft von Lanzarote ist so dramatisch wie ihre Oberfläche. Vulkanische Felsformationen schaffen Höhlen, Kanäle und Abbruchkanten, wo der kühle, nährstoffreiche Kanarenstrom einen kraftvollen Auftrieb aus der Tiefe antreibt. Das Ergebnis ist eine außergewöhnliche Konzentration von Meeresleben in Gewässern, die die meisten Besucher nie zu erkunden denken.",
        "Von der wilden Nordküste bis zu den schroffen Vulkanküsten im Süden birgt jeder Abschnitt von Lanzarotes Küste andere Arten und andere Herausforderungen. Dein Guide liest das Wasser, den Wind und die Gezeiten, um dich in die beste Position zu bringen. Das ist Angeln, geformt von der Insel selbst.",
      ],
      imageAlt:
        "Felsige Vulkanküste von Lanzarote mit kristallklarem Atlantikwasser",
    },
    testimonial: {
      quote:
        "Ich habe in Norwegen, Schottland und den Azoren geangelt, aber Lanzarote hat mich völlig überrascht. Die Vulkanküste ist unglaublich. Mein Guide wusste genau, wo es hingeht, und ich hatte einen Bonito und zwei Barrakudas vor dem Frühstück.",
      author: "Thomas Eriksson",
      location: "Stockholm, Schweden",
    },
  },
  fr: {
    meta: {
      title:
        "Pêche à Lanzarote: Sortie Privée Guidée | Lanzarote Untold",
      description:
        "Pêche côtière guidée et privée sur la côte volcanique de Lanzarote. Spinning et pêche de fond pour bonite, barracuda, sériole et plus. Tout l'équipement inclus. Réservez maintenant.",
      keywords: [
        "pêche lanzarote",
        "pêche côtière lanzarote",
        "sortie pêche lanzarote",
        "lanzarote excursions",
        "lanzarote que faire",
        "lanzarote activités",
        "lanzarote visite",
        "lanzarote voyage",
      ],
    },
    hero: {
      label: "MER & PÊCHE",
      title: "Pêche sur la Côte Volcanique de Lanzarote",
      subtitle:
        "Une expérience de pêche privée là où l'Atlantique rencontre la roche volcanique noire. Votre guide, votre équipement, votre rythme. Spinning pour la bonite à l'aube ou pêche de fond sous les étoiles.",
    },
    experience: {
      label: "L'EXPÉRIENCE",
      title: "Là où la lave rencontre l'Atlantique",
      paragraphs: [
        "Le littoral de Lanzarote ne ressemble à aucune autre île. Les éruptions volcaniques ont sculpté un rivage de plateformes de roche noire, de criques cachées et de structures sous-marines qui attirent l'une des vies marines les plus riches de l'Atlantique oriental. C'est un littoral que la plupart des visiteurs longent sans savoir ce qui se cache sous la surface.",
        "Notre sortie de pêche privée vous emmène sur les spots que seuls les locaux connaissent. Votre guide pêche dans ces eaux depuis des années et vous amènera au bon endroit, au bon moment, avec la bonne technique. Pas de bateaux, pas de ports, pas de foule. Juste vous, la côte volcanique et la force de l'océan.",
      ],
      imageAlt:
        "Côte volcanique de Lanzarote avec formations de roche noire face à l'océan Atlantique",
    },
    highlights: {
      label: "POINTS FORTS",
      title: "Ce qui rend la pêche à Lanzarote extraordinaire",
    },
    features: [
      {
        title: "Spinning à l'Aube",
        description:
          "Les sessions matinales sont électrisantes. Lancez vos leurres depuis les plateformes volcaniques tandis que le soleil se lève sur l'Atlantique. Bonites, barracudas, sérioles, tassergals et maquereaux.",
      },
      {
        title: "Pêche de Fond de Nuit",
        description:
          "À la tombée de la nuit, les espèces de fond viennent se nourrir. Matériel plus lourd, appâts plus gros et la possibilité de sortir des vivaneaux, mérous et congres depuis la côte rocheuse sous les étoiles.",
      },
      {
        title: "Tout l'Équipement Inclus",
        description:
          "Cannes, moulinets, leurres, lignes, appâts, lampes et tout ce dont vous avez besoin. Équipement de qualité pour le spinning et la pêche de fond, tout inclus. Apportez juste votre soif d'aventure.",
      },
      {
        title: "Spots Secrets",
        description:
          "Votre guide connaît chaque rebord, chaque chenal, chaque changement de courant le long de la côte volcanique. Ce ne sont pas des spots touristiques. Ce sont les endroits où se trouvent les poissons.",
      },
      {
        title: "Choisissez Votre Session",
        description:
          "Une session de quatre heures à l'aube ou au crépuscule pour une pêche concentrée, ou une journée complète combinant pêche et randonnée le long de la côte volcanique, découvrant des criques cachées entre les lancers.",
      },
      {
        title: "Privé et Flexible",
        description:
          "Pas d'horaire de groupe. Votre guide s'adapte aux conditions, aux poissons et à vous. Si les bonites mordent au sud, vous allez au sud. Si vous voulez rester une heure de plus, vous restez.",
      },
    ],
    coast: {
      label: "LA CÔTE",
      title: "Un rivage volcanique grouillant de vie sous la surface",
      paragraphs: [
        "Le paysage sous-marin de Lanzarote est aussi spectaculaire que sa surface. Les formations de roche volcanique créent des grottes, des chenaux et des tombants où le courant froid et riche en nutriments des Canaries provoque une puissante remontée d'eau profonde. Le résultat est une concentration extraordinaire de vie marine dans des eaux que la plupart des visiteurs ne pensent jamais à explorer.",
        "De la côte nord sauvage aux rivages volcaniques escarpés du sud, chaque portion du littoral de Lanzarote abrite des espèces différentes et des défis différents. Votre guide lit l'eau, le vent et la marée pour vous placer dans la meilleure position. C'est la pêche façonnée par l'île elle-même.",
      ],
      imageAlt:
        "Côte rocheuse volcanique de Lanzarote avec eaux cristallines de l'Atlantique",
    },
    testimonial: {
      quote:
        "J'ai pêché en Norvège, en Écosse et aux Açores, mais Lanzarote m'a complètement surpris. La côte volcanique est incroyable. Mon guide savait exactement où aller et j'ai sorti une bonite et deux barracudas avant le petit-déjeuner.",
      author: "Thomas Eriksson",
      location: "Stockholm, Suède",
    },
  },
} as const;

function getTouristTripStructuredData(locale: string) {
  const names: Record<string, string> = {
    en: "Lanzarote Shore Fishing: Private Guided Trip",
    es: "Pesca en Lanzarote: Excursión Privada Guiada",
    de: "Lanzarote Küstenangeln: Privater Angelausflug",
    fr: "Pêche à Lanzarote: Sortie Privée Guidée",
  };
  const descriptions: Record<string, string> = {
    en: "Private guided shore fishing on Lanzarote's volcanic coast. Spinning and bottom fishing with all gear included. Target Atlantic bonito, barracuda, amberjack and more.",
    es: "Pesca guiada y privada en la costa volcánica de Lanzarote. Spinning y pesca de fondo con todo el equipo incluido. Bonito, barracuda, medregal y más.",
    de: "Privates geführtes Küstenangeln an Lanzarotes Vulkanküste. Spinnfischen und Grundangeln mit kompletter Ausrüstung. Bonito, Barrakuda, Amberjack und mehr.",
    fr: "Pêche côtière guidée et privée sur la côte volcanique de Lanzarote. Spinning et pêche de fond avec tout l'équipement inclus. Bonite, barracuda, sériole et plus.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: names[locale] ?? names.en,
    description: descriptions[locale] ?? descriptions.en,
    touristType: ["Fishing", "Adventure", "Nature"],
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
          name: "Meet your guide and travel to the fishing spot on the volcanic coast",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shore fishing session: spinning or bottom fishing with all gear provided",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Optional full-day trip with coastal hike between fishing spots",
        },
      ],
    },
    contentLocation: {
      "@type": "Place",
      name: "Volcanic Coast, Lanzarote",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yaiza",
        addressRegion: "Lanzarote",
        addressCountry: "ES",
      },
    },
  };
}

type ShoreFishingPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ShoreFishingPageProps): Promise<Metadata> {
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

export default async function ShoreFishingPage({
  params,
}: ShoreFishingPageProps) {
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
        backgroundImage="https://images.unsplash.com/photo-1768855531535-6570e2c00cf1?w=1920&q=80"
      />

      <ImageTextSection
        label={t.experience.label}
        title={t.experience.title}
        paragraphs={[...t.experience.paragraphs]}
        image="https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt={t.experience.imageAlt}
        imagePosition="center 75%"
      />

      <FeatureGrid
        label={t.highlights.label}
        title={t.highlights.title}
        features={[...t.features]}
      />

      <ImageTextSection
        label={t.coast.label}
        title={t.coast.title}
        paragraphs={[...t.coast.paragraphs]}
        image="https://images.pexels.com/photos/32756613/pexels-photo-32756613.jpeg"
        imageAlt={t.coast.imageAlt}
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
