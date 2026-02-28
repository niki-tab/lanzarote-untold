import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ImageTextSection } from "@/presentation/components/sections/ImageTextSection";
import { FeatureGrid } from "@/presentation/components/sections/FeatureGrid";
import { HowWeWorkSection } from "@/presentation/components/sections/HowWeWorkSection";
import { TestimonialStrip } from "@/presentation/components/sections/TestimonialStrip";
import { CTASection } from "@/presentation/components/sections/CTASection";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";

export const metadata: Metadata = {
  title: "Private & Bespoke Experiences in Lanzarote",
  description:
    "Bespoke private experiences in Lanzarote. Custom itineraries, concierge-level service, exclusive access. Not found on TripAdvisor. Enquire now.",
  keywords: [
    "lanzarote private tour",
    "lanzarote unique experiences",
    "lanzarote unique experiences",
    "lanzarote vip",
  ],
  openGraph: {
    title: "Private & Bespoke Experiences in Lanzarote",
    description:
      "Bespoke private experiences in Lanzarote, designed entirely around your desires.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private & Bespoke Experiences in Lanzarote",
    description:
      "Bespoke private experiences in Lanzarote, designed entirely around your desires.",
  },
};

const features = [
  {
    title: "Entirely Bespoke",
    description:
      "No templates, no fixed itineraries. Every detail is designed around your preferences, your pace, and your passions.",
  },
  {
    title: "24/7 Concierge",
    description:
      "Your dedicated concierge is available around the clock. Last-minute changes, spontaneous requests — nothing is too much.",
  },
  {
    title: "VIP & Exclusive Access",
    description:
      "Doors that don't open for the public. VIP access to private estates, closed restaurants, and unique experiences that exist only for our guests.",
  },
  {
    title: "Local Connections",
    description:
      "Twelve years of relationships with the island's families, artisans, and experts. Our network is your gateway to the real Lanzarote.",
  },
  {
    title: "Small & Intimate",
    description:
      "We work with a limited number of guests at any time. This ensures every experience receives our complete attention and care.",
  },
  {
    title: "Not on TripAdvisor",
    description:
      "The experiences we create can't be found on booking platforms. They exist because of our relationships, not algorithms.",
  },
];

const repository = new StaticContentRepository();

export default async function PrivateExperiencesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  const processSteps = await repository.getProcessSteps();

  return (
    <main>
      <PageHero
        label="PRIVATE & BESPOKE"
        title="Private & Bespoke Experiences in Lanzarote"
        subtitle="Custom itineraries designed entirely around your desires. Concierge-level service from start to finish."
        backgroundImage="https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <ImageTextSection
        label="YOUR JOURNEY"
        title="Travel designed around you"
        paragraphs={[
          "Every traveller is different. Some want adventure, others want tranquility. Some arrive with a plan, others want to be surprised. Whatever your vision, our curated Lanzarote experiences make it real.",
          "A private tour with Lanzarote Untold goes beyond what any booking platform can offer. We create moments that are personal, meaningful, and impossible to replicate — because they're designed for you and you alone.",
        ]}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Exclusive private villa in Lanzarote"
      />

      <FeatureGrid
        label="WHAT SETS US APART"
        title="The difference is in the details"
        features={features}
      />

      <HowWeWorkSection steps={processSteps} />

      <TestimonialStrip
        quote="Lanzarote Untold transformed what could have been a simple holiday into the most meaningful week of our lives. Every detail felt personal."
        author="Victoria & James Ashworth"
        location="London, United Kingdom"
      />

      <CTASection />
    </main>
  );
}
