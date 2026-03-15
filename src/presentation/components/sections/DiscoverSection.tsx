import Link from "next/link";
import { ArrowRight, Wine, Fish, Mountain, Compass, Sparkles } from "lucide-react";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";
import type { Locale } from "@/infrastructure/i18n/config";
import { localizedPath } from "@/infrastructure/i18n/config";

const iconMap = {
  wine: Wine,
  fish: Fish,
  mountain: Mountain,
  compass: Compass,
  sparkles: Sparkles,
};

const content = {
  en: {
    label: "WHAT WE OFFER",
    title: "Experiences you will not find anywhere else",
    subtitle:
      "Every experience is private, guided by locals, and designed around you. No group tours, no fixed schedules, no compromises.",
    items: [
      {
        icon: "wine" as const,
        title: "Wine Tours",
        description:
          "Visit Lanzarote's oldest wineries in La Geria, walk through volcanic vineyards where vines grow in hand-carved hollows, and taste Malvasia wines that cannot be found outside the island. Private tastings at El Grifo and Bodega Vulcano.",
        href: "/experiences/wine-tour",
      },
      {
        icon: "fish" as const,
        title: "Shore Fishing",
        description:
          "Fish the volcanic coast with a local guide who knows every ledge and current. Spinning for bonito and barracuda at dawn, or bottom fishing for red snapper after dark. All gear provided, no boat needed.",
        href: "/experiences/shore-fishing",
      },
      {
        icon: "mountain" as const,
        title: "Salt Flats & Heritage",
        description:
          "A private tour of Salinas de Janubio, one of the last working salt flats in the Canary Islands. Walk the salt pans with a guide who explains centuries of tradition, from harvesting techniques to the ecosystem that thrives around them.",
        href: "/experiences/salt-flats",
      },
      {
        icon: "compass" as const,
        title: "Volcanic Trekking",
        description:
          "Hike the dramatic landscapes of northern Lanzarote, from the towering cliffs of Famara to hidden trails through ancient lava fields. Your guide reads the terrain and the weather to take you where the views are and the crowds are not.",
        href: "/experiences/north-trekking",
      },
      {
        icon: "sparkles" as const,
        title: "Custom Experiences",
        description:
          "Your trip, your way. Tell us what you dream of and we will design it from scratch. A private dinner on a volcanic crater. A sunrise yoga session on a hidden beach. A full week itinerary that connects every corner of the island. If it can be done on Lanzarote, we make it happen.",
        href: "/private-experiences",
      },
    ],
  },
  es: {
    label: "LO QUE OFRECEMOS",
    title: "Experiencias que no encontrarás en ningún otro lugar",
    subtitle:
      "Cada experiencia es privada, guiada por locales y diseñada a tu medida. Sin grupos, sin horarios fijos, sin compromisos.",
    items: [
      {
        icon: "wine" as const,
        title: "Rutas del Vino",
        description:
          "Visita las bodegas más antiguas de Lanzarote en La Geria, pasea entre viñedos volcánicos donde las vides crecen en hoyos excavados a mano y degusta vinos Malvasía que no encontrarás fuera de la isla. Catas privadas en El Grifo y Bodega Vulcano.",
        href: "/experiences/wine-tour",
      },
      {
        icon: "fish" as const,
        title: "Pesca Costera",
        description:
          "Pesca en la costa volcánica con un guía local que conoce cada saliente y cada corriente. Spinning para bonitos y barracudas al amanecer, o pesca de fondo para pargos tras la puesta de sol. Todo el equipo incluido.",
        href: "/experiences/shore-fishing",
      },
      {
        icon: "mountain" as const,
        title: "Salinas y Patrimonio",
        description:
          "Un tour privado por las Salinas de Janubio, una de las últimas salinas en activo de Canarias. Recorre las eras de sal con un guía que explica siglos de tradición, desde las técnicas de recolección hasta el ecosistema que las rodea.",
        href: "/experiences/salt-flats",
      },
      {
        icon: "compass" as const,
        title: "Trekking Volcánico",
        description:
          "Recorre los dramáticos paisajes del norte de Lanzarote, desde los imponentes acantilados de Famara hasta senderos ocultos entre campos de lava milenarios. Tu guía lee el terreno y el clima para llevarte donde están las vistas y no las multitudes.",
        href: "/experiences/north-trekking",
      },
      {
        icon: "sparkles" as const,
        title: "Experiencias a Medida",
        description:
          "Tu viaje, a tu manera. Cuéntanos lo que sueñas y lo diseñaremos desde cero. Una cena privada en un cráter volcánico. Yoga al amanecer en una playa escondida. Un itinerario de una semana que conecte cada rincón de la isla. Si se puede hacer en Lanzarote, nosotros lo hacemos realidad.",
        href: "/private-experiences",
      },
    ],
  },
  de: {
    label: "WAS WIR BIETEN",
    title: "Erlebnisse, die du nirgendwo sonst findest",
    subtitle:
      "Jedes Erlebnis ist privat, von Einheimischen geführt und auf dich zugeschnitten. Keine Gruppentouren, keine festen Zeiten, keine Kompromisse.",
    items: [
      {
        icon: "wine" as const,
        title: "Weintouren",
        description:
          "Besuche Lanzarotes älteste Weingüter in La Geria, wandere durch vulkanische Weinberge, wo Reben in handgegrabenen Mulden wachsen, und probiere Malvasia-Weine, die es außerhalb der Insel nicht gibt. Private Verkostungen bei El Grifo und Bodega Vulcano.",
        href: "/experiences/wine-tour",
      },
      {
        icon: "fish" as const,
        title: "Küstenangeln",
        description:
          "Angle an der Vulkanküste mit einem lokalen Guide, der jeden Felsvorsprung und jede Strömung kennt. Spinnfischen auf Bonito und Barrakuda bei Sonnenaufgang oder Grundangeln auf Schnapper nach Einbruch der Dunkelheit. Komplette Ausrüstung inklusive.",
        href: "/experiences/shore-fishing",
      },
      {
        icon: "mountain" as const,
        title: "Salzgewinnung & Kulturerbe",
        description:
          "Eine private Tour durch die Salinas de Janubio, eine der letzten aktiven Salzgewinnungsanlagen der Kanarischen Inseln. Wandere über die Salzpfannen mit einem Guide, der Jahrhunderte der Tradition erklärt.",
        href: "/experiences/salt-flats",
      },
      {
        icon: "compass" as const,
        title: "Vulkan-Trekking",
        description:
          "Wandere durch die dramatischen Landschaften im Norden Lanzarotes, von den imposanten Klippen von Famara bis zu versteckten Pfaden durch uralte Lavafelder. Dein Guide liest das Terrain und das Wetter, um dich dorthin zu bringen, wo die Aussichten sind und die Massen nicht.",
        href: "/experiences/north-trekking",
      },
      {
        icon: "sparkles" as const,
        title: "Maßgeschneiderte Erlebnisse",
        description:
          "Deine Reise, auf deine Art. Erzähl uns, wovon du träumst, und wir gestalten es von Grund auf. Ein privates Abendessen auf einem Vulkankrater. Yoga bei Sonnenaufgang an einem versteckten Strand. Ein einwöchiges Programm, das jeden Winkel der Insel verbindet. Wenn es auf Lanzarote möglich ist, machen wir es wahr.",
        href: "/private-experiences",
      },
    ],
  },
  fr: {
    label: "CE QUE NOUS OFFRONS",
    title: "Des expériences introuvables ailleurs",
    subtitle:
      "Chaque expérience est privée, guidée par des locaux et conçue pour vous. Pas de groupes, pas d'horaires fixes, pas de compromis.",
    items: [
      {
        icon: "wine" as const,
        title: "Routes des Vins",
        description:
          "Visitez les plus anciennes caves de Lanzarote à La Geria, promenez-vous dans des vignobles volcaniques où les vignes poussent dans des creux creusés à la main, et dégustez des vins Malvasia introuvables hors de l'île. Dégustations privées à El Grifo et Bodega Vulcano.",
        href: "/experiences/wine-tour",
      },
      {
        icon: "fish" as const,
        title: "Pêche Côtière",
        description:
          "Pêchez sur la côte volcanique avec un guide local qui connaît chaque rebord et chaque courant. Spinning pour la bonite et le barracuda à l'aube, ou pêche de fond pour le vivaneau après la tombée de la nuit. Tout l'équipement inclus.",
        href: "/experiences/shore-fishing",
      },
      {
        icon: "mountain" as const,
        title: "Salines & Patrimoine",
        description:
          "Une visite privée des Salinas de Janubio, l'une des dernières salines en activité des Canaries. Parcourez les bassins de sel avec un guide qui explique des siècles de tradition, des techniques de récolte à l'écosystème qui les entoure.",
        href: "/experiences/salt-flats",
      },
      {
        icon: "compass" as const,
        title: "Trekking Volcanique",
        description:
          "Randonnez à travers les paysages spectaculaires du nord de Lanzarote, des imposantes falaises de Famara aux sentiers cachés à travers d'anciens champs de lave. Votre guide lit le terrain et la météo pour vous emmener là où se trouvent les panoramas, loin des foules.",
        href: "/experiences/north-trekking",
      },
      {
        icon: "sparkles" as const,
        title: "Expériences Sur Mesure",
        description:
          "Votre voyage, à votre façon. Dites-nous ce dont vous rêvez et nous le concevrons de zéro. Un dîner privé sur un cratère volcanique. Du yoga au lever du soleil sur une plage cachée. Un itinéraire d'une semaine reliant chaque recoin de l'île. Si c'est possible à Lanzarote, nous le réalisons.",
        href: "/private-experiences",
      },
    ],
  },
};

interface DiscoverSectionProps {
  lang?: Locale;
}

export function DiscoverSection({ lang = "en" }: DiscoverSectionProps) {
  const t = content[lang];

  return (
    <section className="flex w-full flex-col gap-10 px-5 py-[60px] lg:gap-16 lg:px-[120px] lg:py-[120px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 text-center">
        <SectionLabel withLine>{t.label}</SectionLabel>
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          {t.title}
        </h2>
        <p className="max-w-[560px] font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
          {t.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        {t.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          const href = localizedPath(item.href, lang);
          const isLast = index === t.items.length - 1;

          return (
            <Link
              key={item.title}
              href={href}
              className={`group flex flex-col gap-4 border p-6 transition-colors lg:gap-5 lg:p-10 ${isLast ? "border-gold/30 bg-gold/[0.04] hover:border-gold/50 lg:col-span-2" : "border-border hover:border-gold/40"}`}
            >
              <div className={`flex items-center gap-4 ${isLast ? "lg:justify-center" : ""}`}>
                <div className={`flex h-10 w-10 items-center justify-center border ${isLast ? "border-gold/50" : "border-gold/30"}`}>
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-cormorant text-[22px] font-medium leading-[1.2] text-text-primary lg:text-[26px]">
                  {item.title}
                </h3>
              </div>
              <p className={`font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base ${isLast ? "lg:mx-auto lg:max-w-[640px] lg:text-center" : ""}`}>
                {item.description}
              </p>
              <span className={`flex items-center gap-2 font-inter text-[12px] tracking-[1px] text-gold transition-opacity group-hover:opacity-80 ${isLast ? "lg:justify-center" : ""}`}>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
