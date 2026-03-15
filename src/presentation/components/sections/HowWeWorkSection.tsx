import { MessageCircle, Compass, Sparkles } from "lucide-react";
import type { Locale } from "@/infrastructure/i18n/config";

const icons = [MessageCircle, Compass, Sparkles];

const content = {
  en: {
    label: "THE EXPERIENCE",
    title: "Tailored to perfection",
    description:
      "Every journey begins with a conversation. We listen, we understand, and then we create something extraordinary.",
    steps: [
      {
        title: "Consult",
        description:
          "Share your vision with our travel architects. We want to know what excites you, what moves you, and what you dream about.",
      },
      {
        title: "Curate",
        description:
          "Our local experts design a bespoke itinerary. From private wine cave dinners to volcanic coast adventures, every detail considered.",
      },
      {
        title: "Experience",
        description:
          "Arrive and let go. Your dedicated concierge handles everything while you immerse yourself in the magic of Lanzarote.",
      },
    ],
  },
  es: {
    label: "LA EXPERIENCIA",
    title: "A tu medida",
    description:
      "Cada viaje comienza con una conversación. Escuchamos, entendemos y luego creamos algo extraordinario.",
    steps: [
      {
        title: "Consulta",
        description:
          "Comparte tu visión con nuestros arquitectos de viaje. Queremos saber qué te emociona, qué te mueve y con qué sueñas.",
      },
      {
        title: "Diseño",
        description:
          "Nuestros expertos locales diseñan un itinerario a medida. Desde cenas privadas en cuevas de vino hasta aventuras en la costa volcánica, cada detalle cuenta.",
      },
      {
        title: "Experiencia",
        description:
          "Llega y déjate llevar. Tu concierge personal se encarga de todo mientras te sumerges en la magia de Lanzarote.",
      },
    ],
  },
  de: {
    label: "DAS ERLEBNIS",
    title: "Maßgeschneidert bis ins Detail",
    description:
      "Jede Reise beginnt mit einem Gespräch. Wir hören zu, wir verstehen, und dann schaffen wir etwas Außergewöhnliches.",
    steps: [
      {
        title: "Beratung",
        description:
          "Teile deine Vision mit unseren Reisearchitekten. Wir möchten wissen, was dich begeistert, was dich bewegt und wovon du träumst.",
      },
      {
        title: "Gestaltung",
        description:
          "Unsere lokalen Experten gestalten ein maßgeschneidertes Programm. Von privaten Abendessen in Weinhöhlen bis zu Abenteuern an der Vulkanküste, jedes Detail zählt.",
      },
      {
        title: "Erlebnis",
        description:
          "Ankunft und loslassen. Dein persönlicher Concierge kümmert sich um alles, während du in die Magie von Lanzarote eintauchst.",
      },
    ],
  },
  fr: {
    label: "L'EXPÉRIENCE",
    title: "Sur mesure, à la perfection",
    description:
      "Chaque voyage commence par une conversation. Nous écoutons, nous comprenons, puis nous créons quelque chose d'extraordinaire.",
    steps: [
      {
        title: "Consultation",
        description:
          "Partagez votre vision avec nos architectes de voyage. Nous voulons savoir ce qui vous passionne, ce qui vous émeut et ce dont vous rêvez.",
      },
      {
        title: "Création",
        description:
          "Nos experts locaux conçoivent un itinéraire sur mesure. Des dîners privés dans des caves à vin aux aventures sur la côte volcanique, chaque détail compte.",
      },
      {
        title: "Expérience",
        description:
          "Arrivez et laissez-vous porter. Votre concierge dédié s'occupe de tout pendant que vous vous imprégnez de la magie de Lanzarote.",
      },
    ],
  },
};

interface HowWeWorkSectionProps {
  lang?: Locale;
}

export function HowWeWorkSection({ lang = "en" }: HowWeWorkSectionProps) {
  const t = content[lang];

  return (
    <section className="flex w-full flex-col items-center gap-10 px-8 py-[60px] md:px-20 lg:gap-20 lg:px-20 lg:py-[120px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5">
        <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
          {t.label}
        </span>
        <h2 className="font-cormorant text-4xl font-light tracking-[-1px] text-text-primary lg:text-5xl">
          {t.title}
        </h2>
        <p className="w-full max-w-[300px] text-center font-inter text-sm font-light leading-[1.8] text-text-muted lg:max-w-[560px] lg:text-base">
          {t.description}
        </p>
      </div>

      {/* Steps */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-10">
        {t.steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="flex flex-1 flex-col gap-4 border border-[#5E3E3A] bg-gold p-6 lg:gap-6 lg:p-10"
            >
              <span className="font-cormorant text-4xl font-light leading-[0.85] text-[#221e1c] lg:text-[52px]">
                {index + 1}
              </span>
              <h3 className="font-cormorant text-[22px] font-medium text-white lg:text-[26px]">
                {step.title}
              </h3>
              <p className="font-inter text-sm font-light leading-[1.8] text-black">
                {step.description}
              </p>
              {Icon && <Icon className="h-5 w-5 text-white" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
