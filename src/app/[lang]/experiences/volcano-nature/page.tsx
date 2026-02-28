import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ImageTextSection } from "@/presentation/components/sections/ImageTextSection";
import { FeatureGrid } from "@/presentation/components/sections/FeatureGrid";
import { TestimonialStrip } from "@/presentation/components/sections/TestimonialStrip";
import { CTASection } from "@/presentation/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Lanzarote Volcano Tour & Natural Wonders",
  description:
    "Private volcano tours and nature experiences in Lanzarote. Hidden trails, fire mountains, and landscapes tourists never see. Enquire now.",
  keywords: [
    "lanzarote volcano tour",
    "lanzarote day trips",
    "lanzarote hidden gems",
    "lanzarote hiking",
  ],
  openGraph: {
    title: "Lanzarote Volcano Tour & Natural Wonders",
    description:
      "Private volcano tours and nature experiences in Lanzarote, crafted by those who call this island home.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanzarote Volcano Tour & Natural Wonders",
    description:
      "Private volcano tours and nature experiences in Lanzarote, crafted by those who call this island home.",
  },
};

const features = [
  {
    title: "Private Volcano Tours",
    description:
      "Walk across landscapes that look like another planet. Our guides take you beyond the tourist routes to volcanic formations that few visitors ever see.",
  },
  {
    title: "Hidden Hiking Trails",
    description:
      "Trails known only to locals that wind through lava fields, along dramatic clifftops, and through valleys of extraordinary beauty.",
  },
  {
    title: "Timanfaya Beyond the Bus",
    description:
      "Experience Timanfaya National Park the way it deserves — with private access, expert geological insight, and time to truly absorb its power.",
  },
  {
    title: "Sunrise & Sunset Expeditions",
    description:
      "Watch the volcanic landscape transform in the golden light of dawn or dusk. These private moments are among the most powerful on the island.",
  },
  {
    title: "Geological Discovery",
    description:
      "Lanzarote is a UNESCO Biosphere Reserve with geological stories spanning millions of years. Our expert guides bring every formation to life.",
  },
  {
    title: "Stargazing Experiences",
    description:
      "Lanzarote's clear skies and minimal light pollution create extraordinary conditions for stargazing. Private sessions with astronomy experts.",
  },
];

export default async function VolcanoNaturePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return (
    <main>
      <PageHero
        label="VOLCANO & NATURE"
        title="Lanzarote Volcano Tour & Natural Wonders"
        subtitle="Private expeditions through the island's most extraordinary volcanic landscapes."
        backgroundImage="https://images.unsplash.com/photo-1652040287142-de0541acb2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU2MTV8&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <ImageTextSection
        label="THE EXPERIENCE"
        title="A landscape like no other"
        paragraphs={[
          "Lanzarote was forged by fire. The eruptions of the 1730s transformed a third of the island into an otherworldly terrain of lava fields, volcanic cones, and underground caves. Today, this landscape remains one of the most dramatic on Earth.",
          "Our private volcano day trips take you deep into this world — beyond the coach parks and the queues, to places where you can feel the raw power of the Earth beneath your feet. These are Lanzarote day trips as they should be: unhurried, intimate, and unforgettable.",
        ]}
        image="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Volcanic landscape of Lanzarote"
      />

      <FeatureGrid
        label="HIGHLIGHTS"
        title="What makes it extraordinary"
        features={features}
      />

      <ImageTextSection
        label="HIDDEN GEMS"
        title="The Lanzarote tourists never see"
        paragraphs={[
          "For every landmark that appears in the guidebook, there are ten that don't. Hidden lava tubes, secret beaches formed in volcanic craters, and hiking trails with viewpoints stretching to the African coast.",
          "Our guides were born on this island. They know every path, every formation, and every story. This is their Lanzarote — and they want to share it with you.",
        ]}
        image="https://images.unsplash.com/photo-1630332458006-da1d94e4c2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Hidden volcanic trail in Lanzarote"
        reversed
      />

      <TestimonialStrip
        quote="We thought we knew Lanzarote. Then our guide took us to places we didn't know existed. The sunrise hike was life-changing."
        author="Sophie & Thomas Laurent"
        location="Paris, France"
      />

      <CTASection />
    </main>
  );
}
