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
        "Lanzarote Wine Tour: El Grifo & Bodega Vulcano Private Tasting | Lanzarote Untold",
      description:
        "Private wine tour visiting two of Lanzarote's finest bodegas. Taste Malvasía wines at El Grifo (est. 1775) and organic wines at Bodega Vulcano. Walk volcanic vineyards in La Geria. Enquire now.",
      keywords: [
        "lanzarote wine tour",
        "lanzarote wine tasting",
        "lanzarote bodega",
        "el grifo lanzarote",
        "la geria wine tour",
        "lanzarote excursions",
        "things to do in lanzarote",
        "lanzarote hidden gems",
      ],
    },
    hero: {
      label: "WINE & TERROIR",
      title: "Lanzarote Wine Tour: El Grifo & Bodega Vulcano",
      subtitle:
        "A private tour through two centuries of volcanic winemaking. Walk the vineyards of La Geria, taste Malvasía at Spain's oldest Canarian winery, and discover Lanzarote's only certified vegan bodega.",
    },
    experience: {
      label: "THE EXPERIENCE",
      title: "Two bodegas, one volcanic story",
      paragraphs: [
        "Lanzarote's vineyards are a landscape like no other. Vines grow in hand-dug pits called zocos, sheltered from Atlantic winds by crescent-shaped stone walls built one by one across the black volcanic ash. It is viticulture born from eruption, patience, and stubborn ingenuity.",
        "Our private wine tour takes you inside this world. You will walk the vineyards of La Geria with a local guide, then sit down at two exceptional bodegas to taste wines that could only exist here. No coaches, no crowds. Just the vines, the volcanic earth, and a glass of something remarkable.",
      ],
      imageAlt:
        "Volcanic vineyard in La Geria with traditional stone zocos in Lanzarote",
    },
    highlights: {
      label: "HIGHLIGHTS",
      title: "What makes the Lanzarote wine tour experience unique",
    },
    features: [
      {
        title: "El Grifo: Since 1775",
        description:
          "Visit one of the ten oldest wineries in Spain. Walk through the Vineyard of the Impossible, explore the wine museum, and taste six wines guided by the head sommelier, including the legendary sweet Malvasía.",
      },
      {
        title: "Bodega Vulcano: Vegan & Bold",
        description:
          "Lanzarote's only certified vegan winery. A behind-the-scenes look at their vineyard in Masdache and a guided tasting of four wines, paired with local goat cheese.",
      },
      {
        title: "La Geria Vineyard Walk",
        description:
          "Walk the most photographed wine region in the Canaries. Your guide will explain how islanders turned a volcanic catastrophe into one of the most extraordinary terroirs on earth.",
      },
      {
        title: "Malvasía Volcánica",
        description:
          "Lanzarote's signature grape. From crisp dry whites to luscious sweet dessert wines, you will taste the full range of what this ancient variety can do in volcanic soil.",
      },
      {
        title: "Local Cheese & Produce",
        description:
          "Every tasting is paired with Lanzarote goat cheese, ripe local tomatoes, and artisan charcuterie. The flavours of the island, alongside the wine.",
      },
      {
        title: "Private & Unhurried",
        description:
          "No group timings, no itinerary pressure. Your guide adapts to your pace. Linger at a vineyard, ask every question, take the slow road between bodegas.",
      },
    ],
    bodegas: {
      label: "THE BODEGAS",
      title: "From 250 years of tradition to the new wave of Lanzarote wine",
      paragraphs: [
        "El Grifo was founded in 1775, just decades after the volcanic eruptions that reshaped Lanzarote forever. Its cellars house 250 years of winemaking memory. The labels were designed by César Manrique, and the sweet Malvasía is still made using the same sun-drying technique recorded in the great-grandfather's accounting books.",
        "Bodega Vulcano represents Lanzarote's new generation. Founded by a family with deep island roots, it became the first bodega to use a must bank system, keeping unfermented grape juice at low temperatures. The result is wines of extraordinary freshness. Two bodegas, two philosophies, one volcanic island.",
      ],
      imageAlt:
        "Wine barrels aging inside a traditional Lanzarote bodega cellar",
    },
    testimonial: {
      quote:
        "We have visited wine regions across France and Italy, but nothing prepared us for Lanzarote. Walking those volcanic vineyards and tasting wine where it was made, with nobody else around, was extraordinary.",
      author: "Sophie & Laurent Duval",
      location: "Lyon, France",
    },
  },
  es: {
    meta: {
      title:
        "Ruta del Vino en Lanzarote: El Grifo & Bodega Vulcano | Lanzarote Untold",
      description:
        "Tour privado de vinos por dos de las mejores bodegas de Lanzarote. Cata de Malvasía en El Grifo (desde 1775) y vinos ecológicos en Bodega Vulcano. Recorre los viñedos volcánicos de La Geria.",
      keywords: [
        "ruta del vino lanzarote",
        "cata de vinos lanzarote",
        "lanzarote bodega",
        "el grifo lanzarote",
        "la geria lanzarote",
        "lanzarote excursiones",
        "qué hacer en lanzarote",
        "lanzarote actividades",
      ],
    },
    hero: {
      label: "VINO Y TERROIR",
      title: "Ruta del Vino en Lanzarote: El Grifo & Bodega Vulcano",
      subtitle:
        "Un tour privado por dos siglos de viticultura volcánica. Recorre los viñedos de La Geria, cata Malvasía en la bodega canaria más antigua de España y descubre la única bodega vegana certificada de Lanzarote.",
    },
    experience: {
      label: "LA EXPERIENCIA",
      title: "Dos bodegas, una historia volcánica",
      paragraphs: [
        "Los viñedos de Lanzarote son un paisaje sin igual. Las viñas crecen en hoyos excavados a mano llamados zocos, protegidos del viento atlántico por muros de piedra semicirculares construidos uno a uno sobre la ceniza volcánica negra. Es una viticultura nacida de la erupción, la paciencia y el ingenio.",
        "Nuestro tour privado de vinos te lleva al corazón de este mundo. Caminarás por los viñedos de La Geria con un guía local y después te sentarás en dos bodegas excepcionales a degustar vinos que solo podrían existir aquí. Sin autobuses, sin multitudes. Solo las viñas, la tierra volcánica y una copa de algo extraordinario.",
      ],
      imageAlt:
        "Viñedo volcánico en La Geria con zocos tradicionales en Lanzarote",
    },
    highlights: {
      label: "DESTACADOS",
      title: "Qué hace única la ruta del vino en Lanzarote",
    },
    features: [
      {
        title: "El Grifo: Desde 1775",
        description:
          "Visita una de las diez bodegas más antiguas de España. Recorre el Viñedo de lo Imposible, explora el museo del vino y degusta seis vinos guiados por el sommelier principal, incluida la legendaria Malvasía dulce.",
      },
      {
        title: "Bodega Vulcano: Vegana y Audaz",
        description:
          "La única bodega vegana certificada de Lanzarote. Una visita entre bastidores a su viñedo en Masdache y una cata guiada de cuatro vinos, acompañados de queso de cabra local.",
      },
      {
        title: "Paseo por los Viñedos de La Geria",
        description:
          "Camina por la región vinícola más fotografiada de Canarias. Tu guía te explicará cómo los isleños convirtieron una catástrofe volcánica en uno de los terroirs más extraordinarios del mundo.",
      },
      {
        title: "Malvasía Volcánica",
        description:
          "La uva insignia de Lanzarote. Desde blancos secos y frescos hasta vinos dulces de postre, probarás toda la gama de lo que esta variedad ancestral puede ofrecer en suelo volcánico.",
      },
      {
        title: "Queso Local y Productos de la Tierra",
        description:
          "Cada cata se acompaña de queso de cabra de Lanzarote, tomates maduros locales y embutido artesano. Los sabores de la isla, junto al vino.",
      },
      {
        title: "Privado y Sin Prisas",
        description:
          "Sin horarios de grupo, sin presión. Tu guía se adapta a tu ritmo. Quédate en un viñedo, pregunta todo lo que quieras, toma el camino lento entre bodegas.",
      },
    ],
    bodegas: {
      label: "LAS BODEGAS",
      title: "De 250 años de tradición a la nueva ola del vino de Lanzarote",
      paragraphs: [
        "El Grifo fue fundada en 1775, apenas décadas después de las erupciones volcánicas que transformaron Lanzarote para siempre. Sus bodegas guardan 250 años de memoria vinícola. Las etiquetas fueron diseñadas por César Manrique y la Malvasía dulce se sigue elaborando con la misma técnica de secado al sol que aparece en los libros de contabilidad del bisabuelo.",
        "Bodega Vulcano representa la nueva generación de Lanzarote. Fundada por una familia con profundas raíces isleñas, fue la primera bodega en usar un sistema de banco de mosto, manteniendo el zumo sin fermentar a bajas temperaturas. El resultado son vinos de una frescura extraordinaria. Dos bodegas, dos filosofías, una isla volcánica.",
      ],
      imageAlt:
        "Barricas de vino en el interior de una bodega tradicional de Lanzarote",
    },
    testimonial: {
      quote:
        "Hemos visitado regiones vinícolas en Francia e Italia, pero nada nos preparó para Lanzarote. Caminar por esos viñedos volcánicos y catar vino donde se elabora, sin nadie más alrededor, fue extraordinario.",
      author: "Sophie & Laurent Duval",
      location: "Lyon, Francia",
    },
  },
  de: {
    meta: {
      title:
        "Lanzarote Weintour: El Grifo & Bodega Vulcano Verkostung | Lanzarote Untold",
      description:
        "Private Weintour zu zwei der besten Bodegas auf Lanzarote. Malvasía-Verkostung bei El Grifo (gegr. 1775) und Bio-Weine bei Bodega Vulcano. Wanderung durch die Vulkanweinberge von La Geria.",
      keywords: [
        "lanzarote weintour",
        "lanzarote weinprobe",
        "lanzarote bodega",
        "el grifo lanzarote",
        "la geria weinprobe",
        "lanzarote ausflüge",
        "lanzarote geheimtipps",
        "lanzarote touren",
      ],
    },
    hero: {
      label: "WEIN & TERROIR",
      title: "Lanzarote Weintour: El Grifo & Bodega Vulcano",
      subtitle:
        "Eine private Tour durch zwei Jahrhunderte vulkanischen Weinbaus. Wandere durch die Weinberge von La Geria, verkoste Malvasía in Spaniens ältester kanarischer Bodega und entdecke Lanzarotes einzige zertifizierte vegane Kellerei.",
    },
    experience: {
      label: "DAS ERLEBNIS",
      title: "Zwei Bodegas, eine vulkanische Geschichte",
      paragraphs: [
        "Lanzarotes Weinberge sind eine Landschaft ohne Vergleich. Reben wachsen in handgegrabenen Mulden, genannt Zocos, geschützt vor den Atlantikwinden durch halbmondförmige Steinmauern, die eine nach der anderen über die schwarze Vulkanasche gebaut wurden. Es ist ein Weinbau, geboren aus Eruption, Geduld und hartnäckigem Einfallsreichtum.",
        "Unsere private Weintour führt dich in diese Welt. Du wirst mit einem lokalen Guide durch die Weinberge von La Geria wandern und dann in zwei außergewöhnlichen Bodegas Weine verkosten, die nur hier existieren könnten. Keine Busse, keine Menschenmassen. Nur die Reben, die vulkanische Erde und ein Glas von etwas Bemerkenswertem.",
      ],
      imageAlt:
        "Vulkanischer Weinberg in La Geria mit traditionellen Zocos auf Lanzarote",
    },
    highlights: {
      label: "HÖHEPUNKTE",
      title: "Was die Lanzarote Weintour einzigartig macht",
    },
    features: [
      {
        title: "El Grifo: Seit 1775",
        description:
          "Besuche eine der zehn ältesten Kellereien Spaniens. Wandere durch den Weinberg des Unmöglichen, erkunde das Weinmuseum und verkoste sechs Weine unter Anleitung des Chefsommeliers, darunter die legendäre süße Malvasía.",
      },
      {
        title: "Bodega Vulcano: Vegan & Mutig",
        description:
          "Lanzarotes einzige zertifizierte vegane Kellerei. Ein Blick hinter die Kulissen ihres Weinbergs in Masdache und eine geführte Verkostung von vier Weinen, begleitet von lokalem Ziegenkäse.",
      },
      {
        title: "La Geria Weinbergwanderung",
        description:
          "Wandere durch die meistfotografierte Weinregion der Kanaren. Dein Guide erklärt, wie die Insulaner eine vulkanische Katastrophe in eines der außergewöhnlichsten Terroirs der Welt verwandelten.",
      },
      {
        title: "Malvasía Volcánica",
        description:
          "Lanzarotes Signaturtraube. Von knackig trockenen Weißweinen bis zu üppigen süßen Dessertweinen, du wirst die ganze Bandbreite erleben, die diese alte Rebsorte in vulkanischem Boden entfalten kann.",
      },
      {
        title: "Lokaler Käse & Erzeugnisse",
        description:
          "Jede Verkostung wird von Lanzarotes Ziegenkäse, reifen lokalen Tomaten und handwerklicher Charcuterie begleitet. Die Aromen der Insel, neben dem Wein.",
      },
      {
        title: "Privat & Ohne Eile",
        description:
          "Keine Gruppenzeiten, kein Zeitdruck. Dein Guide passt sich deinem Tempo an. Verweile an einem Weinberg, stelle jede Frage, nimm den langsamen Weg zwischen den Bodegas.",
      },
    ],
    bodegas: {
      label: "DIE BODEGAS",
      title: "Von 250 Jahren Tradition zur neuen Welle des Lanzarote-Weins",
      paragraphs: [
        "El Grifo wurde 1775 gegründet, nur Jahrzehnte nach den Vulkanausbrüchen, die Lanzarote für immer veränderten. Die Keller beherbergen 250 Jahre Weinbaugeschichte. Die Etiketten wurden von César Manrique gestaltet, und die süße Malvasía wird noch immer mit derselben Sonnentrocknungstechnik hergestellt, die in den Buchführungsbüchern des Urgroßvaters verzeichnet ist.",
        "Bodega Vulcano steht für Lanzarotes neue Generation. Gegründet von einer Familie mit tiefen Inselwurzeln, war sie die erste Bodega, die ein Mostbanksystem einsetzte und ungefilterten Traubensaft bei niedrigen Temperaturen lagerte. Das Ergebnis sind Weine von außergewöhnlicher Frische. Zwei Bodegas, zwei Philosophien, eine vulkanische Insel.",
      ],
      imageAlt:
        "Weinfässer in einer traditionellen Lanzarote Bodega",
    },
    testimonial: {
      quote:
        "Wir haben Weinregionen in Frankreich und Italien besucht, aber nichts hat uns auf Lanzarote vorbereitet. Durch die vulkanischen Weinberge zu wandern und Wein dort zu verkosten, wo er gemacht wird, ohne jemand anderen dabei, war außergewöhnlich.",
      author: "Sophie & Laurent Duval",
      location: "Lyon, Frankreich",
    },
  },
  fr: {
    meta: {
      title:
        "Route des Vins de Lanzarote: El Grifo & Bodega Vulcano | Lanzarote Untold",
      description:
        "Visite privée de deux des meilleures caves de Lanzarote. Dégustation de Malvasía à El Grifo (fondée en 1775) et vins bio à Bodega Vulcano. Balade dans les vignobles volcaniques de La Geria.",
      keywords: [
        "route des vins lanzarote",
        "dégustation vin lanzarote",
        "lanzarote bodega",
        "el grifo lanzarote",
        "la geria lanzarote",
        "lanzarote excursions",
        "lanzarote que faire",
        "lanzarote visite",
      ],
    },
    hero: {
      label: "VIN & TERROIR",
      title: "Route des Vins de Lanzarote: El Grifo & Bodega Vulcano",
      subtitle:
        "Une visite privée à travers deux siècles de viticulture volcanique. Parcourez les vignobles de La Geria, dégustez la Malvasía dans la plus ancienne cave canarienne d'Espagne et découvrez la seule cave végane certifiée de Lanzarote.",
    },
    experience: {
      label: "L'EXPÉRIENCE",
      title: "Deux caves, une histoire volcanique",
      paragraphs: [
        "Les vignobles de Lanzarote sont un paysage sans pareil. Les vignes poussent dans des fosses creusées à la main appelées zocos, protégées des vents atlantiques par des murets de pierre en croissant construits un à un sur la cendre volcanique noire. C'est une viticulture née de l'éruption, de la patience et d'une ingéniosité obstinée.",
        "Notre visite privée des vins vous emmène au cœur de cet univers. Vous marcherez dans les vignobles de La Geria avec un guide local, puis vous vous installerez dans deux caves exceptionnelles pour déguster des vins qui ne pourraient exister nulle part ailleurs. Pas de cars, pas de foule. Juste les vignes, la terre volcanique et un verre de quelque chose de remarquable.",
      ],
      imageAlt:
        "Vignoble volcanique à La Geria avec zocos traditionnels à Lanzarote",
    },
    highlights: {
      label: "POINTS FORTS",
      title: "Ce qui rend la route des vins de Lanzarote unique",
    },
    features: [
      {
        title: "El Grifo: Depuis 1775",
        description:
          "Visitez l'une des dix plus anciennes caves d'Espagne. Parcourez le Vignoble de l'Impossible, explorez le musée du vin et dégustez six vins guidés par le sommelier en chef, dont la légendaire Malvasía douce.",
      },
      {
        title: "Bodega Vulcano: Végane & Audacieuse",
        description:
          "La seule cave végane certifiée de Lanzarote. Un regard en coulisses sur leur vignoble à Masdache et une dégustation guidée de quatre vins, accompagnés de fromage de chèvre local.",
      },
      {
        title: "Balade dans les Vignobles de La Geria",
        description:
          "Parcourez la région viticole la plus photographiée des Canaries. Votre guide vous expliquera comment les insulaires ont transformé une catastrophe volcanique en l'un des terroirs les plus extraordinaires au monde.",
      },
      {
        title: "Malvasía Volcánica",
        description:
          "Le cépage signature de Lanzarote. Des blancs secs et vifs aux vins de dessert doux et généreux, vous découvrirez toute la gamme de ce que cette variété ancienne peut offrir en sol volcanique.",
      },
      {
        title: "Fromage Local et Produits du Terroir",
        description:
          "Chaque dégustation est accompagnée de fromage de chèvre de Lanzarote, de tomates locales mûres et de charcuterie artisanale. Les saveurs de l'île, aux côtés du vin.",
      },
      {
        title: "Privé et Sans Hâte",
        description:
          "Pas d'horaire de groupe, pas de pression. Votre guide s'adapte à votre rythme. Attardez-vous dans un vignoble, posez toutes vos questions, prenez la route tranquille entre les caves.",
      },
    ],
    bodegas: {
      label: "LES CAVES",
      title:
        "De 250 ans de tradition à la nouvelle vague du vin de Lanzarote",
      paragraphs: [
        "El Grifo a été fondée en 1775, quelques décennies seulement après les éruptions volcaniques qui ont remodelé Lanzarote à jamais. Ses caves abritent 250 ans de mémoire viticole. Les étiquettes ont été dessinées par César Manrique, et la Malvasía douce est toujours élaborée selon la même technique de séchage au soleil consignée dans les livres de comptes de l'arrière-grand-père.",
        "Bodega Vulcano représente la nouvelle génération de Lanzarote. Fondée par une famille aux racines insulaires profondes, elle fut la première cave à utiliser un système de banque de moût, conservant le jus de raisin non fermenté à basse température. Le résultat: des vins d'une fraîcheur extraordinaire. Deux caves, deux philosophies, une île volcanique.",
      ],
      imageAlt:
        "Fûts de vin dans une cave traditionnelle de Lanzarote",
    },
    testimonial: {
      quote:
        "Nous avons visité des régions viticoles en France et en Italie, mais rien ne nous avait préparés à Lanzarote. Marcher dans ces vignobles volcaniques et déguster le vin là où il est fait, sans personne d'autre autour, c'était extraordinaire.",
      author: "Sophie & Laurent Duval",
      location: "Lyon, France",
    },
  },
} as const;

function getTouristTripStructuredData(locale: string) {
  const names: Record<string, string> = {
    en: "Lanzarote Wine Tour: El Grifo & Bodega Vulcano Private Tasting",
    es: "Ruta del Vino en Lanzarote: El Grifo & Bodega Vulcano",
    de: "Lanzarote Weintour: El Grifo & Bodega Vulcano Verkostung",
    fr: "Route des Vins de Lanzarote: El Grifo & Bodega Vulcano",
  };
  const descriptions: Record<string, string> = {
    en: "Private wine tour visiting El Grifo (est. 1775) and Bodega Vulcano. Walk volcanic vineyards in La Geria, taste Malvasía wines, and enjoy local cheese pairings.",
    es: "Tour privado de vinos por El Grifo (desde 1775) y Bodega Vulcano. Paseo por los viñedos volcánicos de La Geria, cata de vinos Malvasía y maridaje con queso local.",
    de: "Private Weintour zu El Grifo (gegr. 1775) und Bodega Vulcano. Wanderung durch Vulkanweinberge in La Geria, Malvasía-Verkostung und lokale Käsebegleitung.",
    fr: "Visite privée des vins à El Grifo (fondée en 1775) et Bodega Vulcano. Balade dans les vignobles volcaniques de La Geria, dégustation de Malvasía et fromages locaux.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: names[locale] ?? names.en,
    description: descriptions[locale] ?? descriptions.en,
    touristType: ["Wine & Gastronomy", "Cultural"],
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
          name: "Vineyard walk through La Geria volcanic wine region",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "El Grifo: museum tour and six-wine guided tasting with sommelier",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bodega Vulcano: vineyard visit and four-wine tasting with local cheese",
        },
      ],
    },
    contentLocation: {
      "@type": "Place",
      name: "La Geria, Lanzarote",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Bartolomé",
        addressRegion: "Lanzarote",
        addressCountry: "ES",
      },
    },
  };
}

type WineTourPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: WineTourPageProps): Promise<Metadata> {
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

export default async function WineTourPage({ params }: WineTourPageProps) {
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
        backgroundImage="https://images.pexels.com/photos/15173368/pexels-photo-15173368.jpeg"
      />

      <ImageTextSection
        label={t.experience.label}
        title={t.experience.title}
        paragraphs={[...t.experience.paragraphs]}
        image="/img/grifo-2.webp"
        imageAlt={t.experience.imageAlt}
      />

      <FeatureGrid
        label={t.highlights.label}
        title={t.highlights.title}
        features={[...t.features]}
      />

      <ImageTextSection
        label={t.bodegas.label}
        title={t.bodegas.title}
        paragraphs={[...t.bodegas.paragraphs]}
        image="/img/grifo-10.webp"
        imageAlt={t.bodegas.imageAlt}
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
