import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ContactForm } from "@/presentation/components/sections/ContactForm";
import { FAQSection } from "@/presentation/components/sections/FAQSection";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    meta: {
      title: "Contact & Book Your Lanzarote Experience | Lanzarote Untold",
      description:
        "Book a private tour or experience in Lanzarote. Complimentary consultation via WhatsApp, email, or phone. We respond within 24 hours.",
      keywords: [
        "book lanzarote experience",
        "lanzarote private tour",
        "lanzarote excursions",
        "contact lanzarote untold",
      ],
    },
    hero: {
      label: "CONTACT",
      title: "Book Your Lanzarote Experience",
      subtitle:
        "Tell us about your dream private tour or experience in Lanzarote. We respond to every enquiry within 24 hours.",
    },
    faqLabel: "FREQUENTLY ASKED",
    faqTitle: "Common questions",
    faqs: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend reaching out at least 2-4 weeks before your trip for the best availability. However, we can often accommodate shorter notice. Don't hesitate to contact us even for last-minute requests.",
      },
      {
        question: "What is included in a consultation?",
        answer:
          "Our complimentary consultation is a conversation about your travel style, interests, dates, and budget. There's no commitment. We simply want to understand what would make your Lanzarote experience perfect.",
      },
      {
        question: "Can you arrange accommodation?",
        answer:
          "Yes. We have access to a curated selection of private villas, boutique hotels, and exclusive properties across Lanzarote. We'll recommend options that match your preferences and budget.",
      },
      {
        question: "Are experiences suitable for families?",
        answer:
          "Absolutely. Many of our experiences can be tailored for families, including private boat trips, nature walks, and cooking experiences. We'll adjust the pace and content to suit all ages.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We understand plans can change. Most experiences can be rescheduled or cancelled up to 48 hours in advance with a full refund. Specific terms vary by experience and will be confirmed at booking.",
      },
      {
        question: "Do you offer group experiences?",
        answer:
          "We specialise in private and small-group experiences. For larger groups such as corporate events or celebrations, we create bespoke programmes. Contact us to discuss your requirements.",
      },
    ],
  },
  es: {
    meta: {
      title: "Contacto | Lanzarote Untold",
      description:
        "Reserva un tour privado o experiencia en Lanzarote. Consulta gratuita por WhatsApp, email o teléfono. Respondemos en 24 horas.",
      keywords: [
        "reservar experiencia lanzarote",
        "lanzarote tours",
        "lanzarote excursiones",
        "contacto lanzarote untold",
      ],
    },
    hero: {
      label: "CONTACTO",
      title: "Reserva tu experiencia en Lanzarote",
      subtitle:
        "Cuéntanos tu tour privado o experiencia ideal en Lanzarote. Respondemos a cada consulta en 24 horas.",
    },
    faqLabel: "PREGUNTAS FRECUENTES",
    faqTitle: "Preguntas habituales",
    faqs: [
      {
        question: "¿Con cuánta antelación debo reservar?",
        answer:
          "Recomendamos contactar al menos 2-4 semanas antes de tu viaje para mejor disponibilidad. Sin embargo, a menudo podemos acomodar solicitudes con menor antelación. No dudes en contactarnos incluso para peticiones de último momento.",
      },
      {
        question: "¿Qué incluye la consulta?",
        answer:
          "Nuestra consulta gratuita es una conversación sobre tu estilo de viaje, intereses, fechas y presupuesto. No hay compromiso. Simplemente queremos entender qué haría tu experiencia en Lanzarote perfecta.",
      },
      {
        question: "¿Podéis organizar alojamiento?",
        answer:
          "Sí. Tenemos acceso a una selección de villas privadas, hoteles boutique y propiedades exclusivas en Lanzarote. Te recomendaremos opciones que se ajusten a tus preferencias y presupuesto.",
      },
      {
        question: "¿Las experiencias son adecuadas para familias?",
        answer:
          "Por supuesto. Muchas de nuestras experiencias se pueden adaptar para familias, incluyendo paseos en barco privados, rutas por la naturaleza y experiencias culinarias. Ajustamos el ritmo y contenido para todas las edades.",
      },
      {
        question: "¿Cuál es vuestra política de cancelación?",
        answer:
          "Entendemos que los planes pueden cambiar. La mayoría de experiencias se pueden reprogramar o cancelar hasta 48 horas antes con reembolso completo. Los términos específicos varían según la experiencia y se confirman al reservar.",
      },
      {
        question: "¿Ofrecéis experiencias para grupos?",
        answer:
          "Nos especializamos en experiencias privadas y de grupos reducidos. Para grupos más grandes como eventos corporativos o celebraciones, creamos programas a medida. Contacta con nosotros para hablar de tus necesidades.",
      },
    ],
  },
  de: {
    meta: {
      title: "Kontakt | Lanzarote Untold",
      description:
        "Buche eine private Tour oder ein Erlebnis auf Lanzarote. Kostenlose Beratung per WhatsApp, E-Mail oder Telefon. Wir antworten innerhalb von 24 Stunden.",
      keywords: [
        "lanzarote touren",
        "lanzarote ausflüge",
        "lanzarote reise buchen",
        "kontakt lanzarote untold",
      ],
    },
    hero: {
      label: "KONTAKT",
      title: "Buche dein Lanzarote Erlebnis",
      subtitle:
        "Erzähl uns von deiner Traum-Tour oder deinem Wunscherlebnis auf Lanzarote. Wir antworten auf jede Anfrage innerhalb von 24 Stunden.",
    },
    faqLabel: "HÄUFIG GEFRAGT",
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        question: "Wie weit im Voraus sollte ich buchen?",
        answer:
          "Wir empfehlen, mindestens 2-4 Wochen vor deiner Reise Kontakt aufzunehmen. Wir können aber oft auch kurzfristige Anfragen berücksichtigen. Zögere nicht, uns auch für Last-Minute-Wünsche zu kontaktieren.",
      },
      {
        question: "Was beinhaltet die Beratung?",
        answer:
          "Unsere kostenlose Beratung ist ein Gespräch über deinen Reisestil, Interessen, Termine und Budget. Es gibt keine Verpflichtung. Wir möchten einfach verstehen, was dein Lanzarote-Erlebnis perfekt machen würde.",
      },
      {
        question: "Könnt ihr Unterkünfte organisieren?",
        answer:
          "Ja. Wir haben Zugang zu einer Auswahl an privaten Villen, Boutique-Hotels und exklusiven Unterkünften auf Lanzarote. Wir empfehlen Optionen, die zu deinen Vorstellungen und deinem Budget passen.",
      },
      {
        question: "Sind die Erlebnisse für Familien geeignet?",
        answer:
          "Auf jeden Fall. Viele unserer Erlebnisse können für Familien angepasst werden, darunter private Bootstouren, Naturwanderungen und Kocherlebnisse. Wir passen Tempo und Inhalt für alle Altersgruppen an.",
      },
      {
        question: "Wie ist eure Stornierungspolitik?",
        answer:
          "Wir verstehen, dass sich Pläne ändern können. Die meisten Erlebnisse können bis 48 Stunden vorher umgebucht oder storniert werden mit voller Rückerstattung. Genaue Bedingungen variieren je nach Erlebnis und werden bei der Buchung bestätigt.",
      },
      {
        question: "Bietet ihr Gruppenerlebnisse an?",
        answer:
          "Wir sind auf private Erlebnisse und kleine Gruppen spezialisiert. Für größere Gruppen wie Firmenevents oder Feiern erstellen wir maßgeschneiderte Programme. Kontaktiere uns, um deine Anforderungen zu besprechen.",
      },
    ],
  },
  fr: {
    meta: {
      title: "Contact | Lanzarote Untold",
      description:
        "Réservez une visite privée ou une expérience à Lanzarote. Consultation gratuite par WhatsApp, email ou téléphone. Réponse sous 24 heures.",
      keywords: [
        "lanzarote excursions",
        "lanzarote voyage",
        "réserver expérience lanzarote",
        "contact lanzarote untold",
      ],
    },
    hero: {
      label: "CONTACT",
      title: "Réservez votre expérience à Lanzarote",
      subtitle:
        "Parlez-nous de votre visite privée ou expérience idéale à Lanzarote. Nous répondons à chaque demande sous 24 heures.",
    },
    faqLabel: "QUESTIONS FRÉQUENTES",
    faqTitle: "Questions courantes",
    faqs: [
      {
        question: "Combien de temps à l'avance dois-je réserver ?",
        answer:
          "Nous recommandons de nous contacter au moins 2 à 4 semaines avant votre voyage pour la meilleure disponibilité. Cependant, nous pouvons souvent accueillir des demandes de dernière minute. N'hésitez pas à nous contacter.",
      },
      {
        question: "Que comprend la consultation ?",
        answer:
          "Notre consultation gratuite est une conversation sur votre style de voyage, vos intérêts, vos dates et votre budget. Il n'y a aucun engagement. Nous voulons simplement comprendre ce qui rendrait votre expérience à Lanzarote parfaite.",
      },
      {
        question: "Pouvez-vous organiser l'hébergement ?",
        answer:
          "Oui. Nous avons accès à une sélection de villas privées, d'hôtels boutique et de propriétés exclusives à Lanzarote. Nous vous recommanderons des options adaptées à vos préférences et à votre budget.",
      },
      {
        question: "Les expériences conviennent-elles aux familles ?",
        answer:
          "Absolument. Beaucoup de nos expériences peuvent être adaptées aux familles, notamment les sorties en bateau privées, les promenades nature et les expériences culinaires. Nous ajustons le rythme et le contenu pour tous les âges.",
      },
      {
        question: "Quelle est votre politique d'annulation ?",
        answer:
          "Nous comprenons que les plans peuvent changer. La plupart des expériences peuvent être reprogrammées ou annulées jusqu'à 48 heures à l'avance avec un remboursement complet. Les conditions spécifiques varient selon l'expérience et seront confirmées lors de la réservation.",
      },
      {
        question: "Proposez-vous des expériences de groupe ?",
        answer:
          "Nous sommes spécialisés dans les expériences privées et en petit groupe. Pour les groupes plus importants comme les événements d'entreprise ou les célébrations, nous créons des programmes sur mesure. Contactez-nous pour discuter de vos besoins.",
      },
    ],
  },
} as const;

type ContactPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
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

function getFaqStructuredData(faqs: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
  const t = content[locale];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqStructuredData(t.faqs)),
        }}
      />
      <PageHero
        label={t.hero.label}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        backgroundImage="https://images.pexels.com/photos/32738293/pexels-photo-32738293.jpeg"
        imageSize="100% auto"
      />

      <ContactForm lang={locale} />
      <FAQSection
        faqs={[...t.faqs]}
        label={t.faqLabel}
        title={t.faqTitle}
      />
    </main>
  );
}
