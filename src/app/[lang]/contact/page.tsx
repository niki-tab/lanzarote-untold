import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ContactForm } from "@/presentation/components/sections/ContactForm";
import { FAQSection } from "@/presentation/components/sections/FAQSection";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    meta: {
      title: "Contact & Book Your Lanzarote Experience",
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
      title: "Contacto | Reserva Tu Experiencia en Lanzarote",
      description:
        "Reserva un tour privado o experiencia en Lanzarote. Consulta gratuita por WhatsApp, email o telefono. Respondemos en 24 horas.",
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
        "Cuentanos tu tour privado o experiencia ideal en Lanzarote. Respondemos a cada consulta en 24 horas.",
    },
    faqLabel: "PREGUNTAS FRECUENTES",
    faqTitle: "Preguntas habituales",
    faqs: [
      {
        question: "¿Con cuanta antelacion debo reservar?",
        answer:
          "Recomendamos contactar al menos 2-4 semanas antes de tu viaje para mejor disponibilidad. Sin embargo, a menudo podemos acomodar solicitudes con menor antelacion. No dudes en contactarnos incluso para peticiones de ultimo momento.",
      },
      {
        question: "¿Que incluye la consulta?",
        answer:
          "Nuestra consulta gratuita es una conversacion sobre tu estilo de viaje, intereses, fechas y presupuesto. No hay compromiso. Simplemente queremos entender que haria tu experiencia en Lanzarote perfecta.",
      },
      {
        question: "¿Podeis organizar alojamiento?",
        answer:
          "Si. Tenemos acceso a una seleccion de villas privadas, hoteles boutique y propiedades exclusivas en Lanzarote. Te recomendaremos opciones que se ajusten a tus preferencias y presupuesto.",
      },
      {
        question: "¿Las experiencias son adecuadas para familias?",
        answer:
          "Por supuesto. Muchas de nuestras experiencias se pueden adaptar para familias, incluyendo paseos en barco privados, rutas por la naturaleza y experiencias culinarias. Ajustamos el ritmo y contenido para todas las edades.",
      },
      {
        question: "¿Cual es vuestra politica de cancelacion?",
        answer:
          "Entendemos que los planes pueden cambiar. La mayoria de experiencias se pueden reprogramar o cancelar hasta 48 horas antes con reembolso completo. Los terminos especificos varian segun la experiencia y se confirman al reservar.",
      },
      {
        question: "¿Ofreceis experiencias para grupos?",
        answer:
          "Nos especializamos en experiencias privadas y de grupos reducidos. Para grupos mas grandes como eventos corporativos o celebraciones, creamos programas a medida. Contacta con nosotros para hablar de tus necesidades.",
      },
    ],
  },
  de: {
    meta: {
      title: "Kontakt | Buche Dein Lanzarote Erlebnis",
      description:
        "Buche eine private Tour oder ein Erlebnis auf Lanzarote. Kostenlose Beratung per WhatsApp, E-Mail oder Telefon. Wir antworten innerhalb von 24 Stunden.",
      keywords: [
        "lanzarote touren",
        "lanzarote ausfluge",
        "lanzarote reise buchen",
        "kontakt lanzarote untold",
      ],
    },
    hero: {
      label: "KONTAKT",
      title: "Buche dein Lanzarote Erlebnis",
      subtitle:
        "Erzahl uns von deiner Traum-Tour oder deinem Wunscherlebnis auf Lanzarote. Wir antworten auf jede Anfrage innerhalb von 24 Stunden.",
    },
    faqLabel: "HAUFIG GEFRAGT",
    faqTitle: "Haufige Fragen",
    faqs: [
      {
        question: "Wie weit im Voraus sollte ich buchen?",
        answer:
          "Wir empfehlen, mindestens 2-4 Wochen vor deiner Reise Kontakt aufzunehmen. Wir konnen aber oft auch kurzfristige Anfragen berucksichtigen. Zogere nicht, uns auch fur Last-Minute-Wunsche zu kontaktieren.",
      },
      {
        question: "Was beinhaltet die Beratung?",
        answer:
          "Unsere kostenlose Beratung ist ein Gesprach uber deinen Reisestil, Interessen, Termine und Budget. Es gibt keine Verpflichtung. Wir mochten einfach verstehen, was dein Lanzarote-Erlebnis perfekt machen wurde.",
      },
      {
        question: "Konnt ihr Unterkunfte organisieren?",
        answer:
          "Ja. Wir haben Zugang zu einer Auswahl an privaten Villen, Boutique-Hotels und exklusiven Unterkünften auf Lanzarote. Wir empfehlen Optionen, die zu deinen Vorstellungen und deinem Budget passen.",
      },
      {
        question: "Sind die Erlebnisse fur Familien geeignet?",
        answer:
          "Auf jeden Fall. Viele unserer Erlebnisse konnen fur Familien angepasst werden, darunter private Bootstouren, Naturwanderungen und Kocherlebnisse. Wir passen Tempo und Inhalt fur alle Altersgruppen an.",
      },
      {
        question: "Wie ist eure Stornierungspolitik?",
        answer:
          "Wir verstehen, dass sich Plane andern konnen. Die meisten Erlebnisse konnen bis 48 Stunden vorher umgebucht oder storniert werden mit voller Ruckerstattung. Genaue Bedingungen variieren je nach Erlebnis und werden bei der Buchung bestatigt.",
      },
      {
        question: "Bietet ihr Gruppenerlebnisse an?",
        answer:
          "Wir sind auf private Erlebnisse und kleine Gruppen spezialisiert. Fur grossere Gruppen wie Firmenevents oder Feiern erstellen wir massgeschneiderte Programme. Kontaktiere uns, um deine Anforderungen zu besprechen.",
      },
    ],
  },
  fr: {
    meta: {
      title: "Contact | Reservez Votre Experience a Lanzarote",
      description:
        "Reservez une visite privee ou une experience a Lanzarote. Consultation gratuite par WhatsApp, email ou telephone. Reponse sous 24 heures.",
      keywords: [
        "lanzarote excursions",
        "lanzarote voyage",
        "reserver experience lanzarote",
        "contact lanzarote untold",
      ],
    },
    hero: {
      label: "CONTACT",
      title: "Reservez votre experience a Lanzarote",
      subtitle:
        "Parlez-nous de votre visite privee ou experience ideale a Lanzarote. Nous repondons a chaque demande sous 24 heures.",
    },
    faqLabel: "QUESTIONS FREQUENTES",
    faqTitle: "Questions courantes",
    faqs: [
      {
        question: "Combien de temps a l'avance dois-je reserver ?",
        answer:
          "Nous recommandons de nous contacter au moins 2 a 4 semaines avant votre voyage pour la meilleure disponibilite. Cependant, nous pouvons souvent accueillir des demandes de derniere minute. N'hesitez pas a nous contacter.",
      },
      {
        question: "Que comprend la consultation ?",
        answer:
          "Notre consultation gratuite est une conversation sur votre style de voyage, vos interets, vos dates et votre budget. Il n'y a aucun engagement. Nous voulons simplement comprendre ce qui rendrait votre experience a Lanzarote parfaite.",
      },
      {
        question: "Pouvez-vous organiser l'hebergement ?",
        answer:
          "Oui. Nous avons acces a une selection de villas privees, d'hotels boutique et de proprietes exclusives a Lanzarote. Nous vous recommanderons des options adaptees a vos preferences et a votre budget.",
      },
      {
        question: "Les experiences conviennent-elles aux familles ?",
        answer:
          "Absolument. Beaucoup de nos experiences peuvent etre adaptees aux familles, notamment les sorties en bateau privees, les promenades nature et les experiences culinaires. Nous ajustons le rythme et le contenu pour tous les ages.",
      },
      {
        question: "Quelle est votre politique d'annulation ?",
        answer:
          "Nous comprenons que les plans peuvent changer. La plupart des experiences peuvent etre reprogrammees ou annulees jusqu'a 48 heures a l'avance avec un remboursement complet. Les conditions specifiques varient selon l'experience et seront confirmees lors de la reservation.",
      },
      {
        question: "Proposez-vous des experiences de groupe ?",
        answer:
          "Nous sommes specialises dans les experiences privees et en petit groupe. Pour les groupes plus importants comme les evenements d'entreprise ou les celebrations, nous creons des programmes sur mesure. Contactez-nous pour discuter de vos besoins.",
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
