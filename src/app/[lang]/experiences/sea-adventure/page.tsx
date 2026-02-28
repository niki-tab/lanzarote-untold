import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ImageTextSection } from "@/presentation/components/sections/ImageTextSection";
import { FeatureGrid } from "@/presentation/components/sections/FeatureGrid";
import { TestimonialStrip } from "@/presentation/components/sections/TestimonialStrip";
import { CTASection } from "@/presentation/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Lanzarote Boat Trips, Diving & Sea Adventures",
  description:
    "Private boat trips, diving expeditions and sea adventures in Lanzarote. Catamaran charters, fishing with locals, hidden coves. Enquire now.",
  keywords: [
    "lanzarote boat trip",
    "lanzarote diving",
    "lanzarote catamaran",
    "lanzarote fishing",
    "lanzarote sailing",
  ],
  openGraph: {
    title: "Lanzarote Boat Trips, Diving & Sea Adventures",
    description:
      "Private boat trips, diving and sea adventures in Lanzarote, crafted by those who call this island home.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanzarote Boat Trips, Diving & Sea Adventures",
    description:
      "Private boat trips, diving and sea adventures in Lanzarote, crafted by those who call this island home.",
  },
};

const features = [
  {
    title: "Private Fishing Trips",
    description:
      "Fish alongside local fishermen who know these waters intimately. Traditional techniques, secret spots, and a catch you'll remember forever.",
  },
  {
    title: "Catamaran Charters",
    description:
      "Your own catamaran, your own crew, your own route. Sail to hidden coves, swim in crystal waters, and dine on board as the sun sets.",
  },
  {
    title: "Diving Expeditions",
    description:
      "Explore Lanzarote's underwater world with expert guides. Volcanic reefs, the Museo Atlántico, and marine life found nowhere else in Europe.",
  },
  {
    title: "Hidden Cove Excursions",
    description:
      "We know the beaches that don't appear on maps. Private access to secluded coves where the only footprints in the sand will be yours.",
  },
  {
    title: "Sunset Sailing",
    description:
      "Watch the Atlantic sun paint the sky from the deck of a private yacht. Champagne, canapés, and the sound of the ocean.",
  },
  {
    title: "Whale & Dolphin Encounters",
    description:
      "Responsible, small-group encounters with the marine life that calls these waters home. Expert marine biologists guide every trip.",
  },
];

export default async function SeaAdventurePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return (
    <main>
      <PageHero
        label="SEA & ADVENTURE"
        title="Lanzarote Boat Trips, Diving & Sea Adventures"
        subtitle="Private maritime experiences along the most spectacular coastline in the Canaries."
        backgroundImage="https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <ImageTextSection
        label="THE EXPERIENCE"
        title="The Atlantic, on your terms"
        paragraphs={[
          "Lanzarote sits at the edge of the Atlantic, where warm currents from Africa meet the deep blue of the open ocean. The result is a marine paradise — crystal-clear waters, volcanic reefs teeming with life, and coastlines that have barely changed in centuries.",
          "Our sea experiences connect you with the fishermen, sailors, and divers who know these waters best. No overcrowded excursion boats. No rigid itineraries. Just the ocean, your crew, and the freedom to explore.",
        ]}
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Crystal clear waters off Lanzarote coast"
      />

      <FeatureGrid
        label="HIGHLIGHTS"
        title="What awaits on the water"
        features={features}
      />

      <ImageTextSection
        label="LOCAL KNOWLEDGE"
        title="Captains who know every current"
        paragraphs={[
          "Our maritime partners are third-generation fishermen and lifelong sailors. They know where the dolphins gather at dawn, which coves are sheltered from the wind, and where the biggest catches hide.",
          "This local knowledge transforms a Lanzarote boat trip into something extraordinary — an authentic connection with the sea and the people who live by it.",
        ]}
        image="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Local fisherman on Lanzarote boat"
        reversed
      />

      <TestimonialStrip
        quote="The private fishing trip was the highlight of our holiday. Our captain took us to spots we would never have found alone. Unforgettable."
        author="Marco & Lucia Bianchi"
        location="Milan, Italy"
      />

      <CTASection />
    </main>
  );
}
