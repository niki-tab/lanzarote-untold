"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";
import type { Locale } from "@/infrastructure/i18n/config";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  label?: string;
  title?: string;
  lang?: Locale;
}

const homeContent = {
  en: {
    label: "FREQUENTLY ASKED",
    title: "Questions before you go",
    items: [
      {
        question: "Are all your experiences private?",
        answer:
          "Yes. Every experience we offer is exclusively for you and your group. There are no shared tours, no strangers, and no fixed group sizes. Whether it is a wine tour for two or a fishing trip for six, the experience is yours alone.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least two weeks in advance, especially during peak season. However, we can sometimes arrange experiences on shorter notice depending on availability. Contact us and we will do our best.",
      },
      {
        question: "What makes Lanzarote different from other Canary Islands?",
        answer:
          "Lanzarote is a UNESCO Biosphere Reserve with a landscape unlike anywhere else on earth. Volcanic eruptions in the 1700s created a surreal terrain of black lava fields, hidden caves, and crater vineyards. The island has strict building regulations that preserve its raw beauty, and a cultural legacy shaped by artist César Manrique. It is quieter, wilder, and more authentic than its neighbours.",
      },
      {
        question: "Do I need any special equipment or experience?",
        answer:
          "No. We provide everything you need for every experience, from fishing gear to hiking equipment. Our guides adapt to all fitness levels and experience levels. All you need to bring is comfortable clothing and a sense of curiosity.",
      },
      {
        question: "Can you create a custom experience not listed on your website?",
        answer:
          "Absolutely. Many of our guests come to us with a specific idea or interest, and we design a bespoke experience around it. From private dinners on a volcanic crater to sunrise yoga on a hidden beach, if it can be done on Lanzarote, we can make it happen.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We offer free cancellation up to 48 hours before your experience. If weather conditions make an outdoor experience unsafe, we will reschedule at no extra cost or offer a full refund. Your flexibility matters to us.",
      },
    ],
  },
  es: {
    label: "PREGUNTAS FRECUENTES",
    title: "Preguntas antes de tu viaje",
    items: [
      {
        question: "¿Son privadas todas vuestras experiencias?",
        answer:
          "Sí. Cada experiencia que ofrecemos es exclusivamente para ti y tu grupo. No hay tours compartidos, ni desconocidos, ni tamaños de grupo fijos. Ya sea una ruta del vino para dos o una excursión de pesca para seis, la experiencia es solo tuya.",
      },
      {
        question: "¿Con cuánta antelación debo reservar?",
        answer:
          "Recomendamos reservar al menos dos semanas antes, especialmente en temporada alta. Sin embargo, a veces podemos organizar experiencias con menos tiempo según disponibilidad. Contáctanos y haremos todo lo posible.",
      },
      {
        question: "¿Qué hace a Lanzarote diferente de las otras Islas Canarias?",
        answer:
          "Lanzarote es Reserva de la Biosfera de la UNESCO con un paisaje único en el mundo. Las erupciones volcánicas del siglo XVIII crearon un terreno surrealista de campos de lava negra, cuevas ocultas y viñedos en cráteres. La isla tiene estrictas regulaciones de construcción que preservan su belleza salvaje y un legado cultural marcado por el artista César Manrique. Es más tranquila, más salvaje y más auténtica que sus vecinas.",
      },
      {
        question: "¿Necesito algún equipo o experiencia especial?",
        answer:
          "No. Proporcionamos todo lo que necesitas para cada experiencia, desde equipo de pesca hasta material de senderismo. Nuestros guías se adaptan a todos los niveles de forma física y experiencia. Solo necesitas traer ropa cómoda y ganas de descubrir.",
      },
      {
        question: "¿Podéis crear una experiencia personalizada que no aparezca en vuestra web?",
        answer:
          "Por supuesto. Muchos de nuestros huéspedes vienen con una idea o interés específico y diseñamos una experiencia a medida. Desde cenas privadas en un cráter volcánico hasta yoga al amanecer en una playa escondida, si se puede hacer en Lanzarote, nosotros lo hacemos realidad.",
      },
      {
        question: "¿Cuál es vuestra política de cancelación?",
        answer:
          "Ofrecemos cancelación gratuita hasta 48 horas antes de la experiencia. Si las condiciones meteorológicas hacen que una experiencia al aire libre no sea segura, la reprogramaremos sin coste adicional u ofreceremos un reembolso completo. Tu flexibilidad nos importa.",
      },
    ],
  },
  de: {
    label: "HÄUFIG GEFRAGT",
    title: "Fragen vor deiner Reise",
    items: [
      {
        question: "Sind alle Erlebnisse privat?",
        answer:
          "Ja. Jedes Erlebnis, das wir anbieten, ist exklusiv für dich und deine Gruppe. Keine gemeinsamen Touren, keine Fremden, keine festen Gruppengrößen. Ob Weintour zu zweit oder Angelausflug zu sechst – das Erlebnis gehört dir allein.",
      },
      {
        question: "Wie weit im Voraus sollte ich buchen?",
        answer:
          "Wir empfehlen, mindestens zwei Wochen im Voraus zu buchen, besonders in der Hochsaison. Manchmal können wir auch kurzfristiger Erlebnisse organisieren. Kontaktiere uns und wir geben unser Bestes.",
      },
      {
        question: "Was macht Lanzarote anders als die anderen Kanarischen Inseln?",
        answer:
          "Lanzarote ist UNESCO-Biosphärenreservat mit einer Landschaft, die es nirgendwo sonst auf der Erde gibt. Vulkanausbrüche im 18. Jahrhundert schufen ein surreales Terrain aus schwarzen Lavafeldern, versteckten Höhlen und Krater-Weinbergen. Die Insel hat strenge Bauvorschriften, die ihre wilde Schönheit bewahren, und ein kulturelles Erbe, das vom Künstler César Manrique geprägt wurde.",
      },
      {
        question: "Brauche ich spezielle Ausrüstung oder Erfahrung?",
        answer:
          "Nein. Wir stellen alles bereit, was du für jedes Erlebnis brauchst – von Angelausrüstung bis Wanderequipment. Unsere Guides passen sich allen Fitness- und Erfahrungsstufen an. Du brauchst nur bequeme Kleidung und Neugier.",
      },
      {
        question: "Könnt ihr ein maßgeschneidertes Erlebnis erstellen?",
        answer:
          "Absolut. Viele unserer Gäste kommen mit einer bestimmten Idee oder einem besonderen Interesse, und wir gestalten ein maßgeschneidertes Erlebnis. Von privaten Abendessen auf einem Vulkankrater bis zu Yoga bei Sonnenaufgang an einem versteckten Strand – wenn es auf Lanzarote möglich ist, machen wir es wahr.",
      },
      {
        question: "Wie ist eure Stornierungsrichtlinie?",
        answer:
          "Wir bieten kostenlose Stornierung bis 48 Stunden vor dem Erlebnis. Wenn Wetterbedingungen ein Outdoor-Erlebnis unsicher machen, planen wir kostenlos um oder bieten eine volle Rückerstattung. Deine Flexibilität ist uns wichtig.",
      },
    ],
  },
  fr: {
    label: "QUESTIONS FRÉQUENTES",
    title: "Questions avant votre voyage",
    items: [
      {
        question: "Toutes vos expériences sont-elles privées ?",
        answer:
          "Oui. Chaque expérience que nous proposons est exclusivement pour vous et votre groupe. Pas de tours partagés, pas d'inconnus, pas de taille de groupe fixe. Qu'il s'agisse d'une route des vins pour deux ou d'une sortie pêche pour six, l'expérience est la vôtre.",
      },
      {
        question: "Combien de temps à l'avance dois-je réserver ?",
        answer:
          "Nous recommandons de réserver au moins deux semaines à l'avance, surtout en haute saison. Cependant, nous pouvons parfois organiser des expériences plus rapidement selon les disponibilités. Contactez-nous et nous ferons de notre mieux.",
      },
      {
        question: "Qu'est-ce qui rend Lanzarote différente des autres îles Canaries ?",
        answer:
          "Lanzarote est Réserve de Biosphère UNESCO avec un paysage unique au monde. Les éruptions volcaniques du XVIIIe siècle ont créé un terrain surréaliste de champs de lave noire, de grottes cachées et de vignobles dans des cratères. L'île a des réglementations strictes qui préservent sa beauté sauvage et un héritage culturel marqué par l'artiste César Manrique.",
      },
      {
        question: "Ai-je besoin d'un équipement ou d'une expérience particulière ?",
        answer:
          "Non. Nous fournissons tout ce dont vous avez besoin pour chaque expérience, du matériel de pêche à l'équipement de randonnée. Nos guides s'adaptent à tous les niveaux de forme physique et d'expérience. Apportez simplement des vêtements confortables et votre curiosité.",
      },
      {
        question: "Pouvez-vous créer une expérience sur mesure ?",
        answer:
          "Absolument. Beaucoup de nos hôtes viennent avec une idée ou un intérêt spécifique, et nous concevons une expérience sur mesure. Des dîners privés sur un cratère volcanique au yoga au lever du soleil sur une plage cachée – si c'est possible à Lanzarote, nous le réalisons.",
      },
      {
        question: "Quelle est votre politique d'annulation ?",
        answer:
          "Nous offrons l'annulation gratuite jusqu'à 48 heures avant l'expérience. Si les conditions météorologiques rendent une expérience en plein air dangereuse, nous la reprogrammerons sans frais supplémentaires ou offrirons un remboursement complet. Votre flexibilité compte pour nous.",
      },
    ],
  },
};

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left lg:py-8"
        aria-expanded={isOpen}
      >
        <h3 className="pr-4 font-cormorant text-xl font-medium leading-[1.3] text-text-primary lg:text-2xl">
          {question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-6 lg:pb-8" : "max-h-0"}`}
      >
        <p className="font-inter text-sm font-light leading-[1.8] text-text-secondary lg:max-w-[720px] lg:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection({ faqs, label, title, lang = "en" }: FAQSectionProps) {
  const t = homeContent[lang];
  const items = faqs ?? t.items;
  const sectionLabel = label ?? t.label;
  const sectionTitle = title ?? t.title;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex w-full flex-col gap-10 px-5 py-[60px] lg:gap-16 lg:px-[120px] lg:py-[120px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 text-center">
        <SectionLabel withLine>{sectionLabel}</SectionLabel>
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          {sectionTitle}
        </h2>
      </div>

      {/* Questions */}
      <div className="mx-auto w-full max-w-[800px] border-t border-border">
        {items.map((item, i) => (
          <FAQItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
