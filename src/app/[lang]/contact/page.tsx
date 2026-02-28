import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ContactForm } from "@/presentation/components/sections/ContactForm";
import { FAQSection } from "@/presentation/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Contact & Book Your Experience",
  description:
    "Begin your bespoke Lanzarote experience. Contact us for a complimentary consultation via WhatsApp, email, or phone. We respond within 24 hours.",
  keywords: [
    "book lanzarote experience",
    "lanzarote private tour booking",
    "contact lanzarote untold",
  ],
  openGraph: {
    title: "Contact & Book — Lanzarote Untold",
    description:
      "Begin your bespoke Lanzarote experience. Complimentary consultation within 24 hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Book — Lanzarote Untold",
    description:
      "Begin your bespoke Lanzarote experience. Complimentary consultation within 24 hours.",
  },
};

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend reaching out at least 2-4 weeks before your trip for the best availability. However, we can often accommodate shorter notice — don't hesitate to contact us even for last-minute requests.",
  },
  {
    question: "What is included in a consultation?",
    answer:
      "Our complimentary consultation is a conversation about your travel style, interests, dates, and budget. There's no commitment — we simply want to understand what would make your Lanzarote experience perfect.",
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
      "We specialise in private and small-group experiences. For larger groups (corporate events, celebrations), we create bespoke programmes. Contact us to discuss your requirements.",
  },
];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return (
    <main>
      <PageHero
        label="CONTACT"
        title="Book Your Lanzarote Experience"
        subtitle="Tell us about your dream private tour or experience in Lanzarote. We respond to every enquiry within 24 hours."
        backgroundImage="https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <ContactForm />
      <FAQSection faqs={faqs} />
    </main>
  );
}
