import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ImageTextSection } from "@/presentation/components/sections/ImageTextSection";
import { SocialProofSection } from "@/presentation/components/sections/SocialProofSection";
import { CTASection } from "@/presentation/components/sections/CTASection";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";

export const metadata: Metadata = {
  title: "About Us — Our Story & Philosophy",
  description:
    "Meet the team behind Lanzarote Untold. Local expertise, international elegance, and a passion for crafting unforgettable experiences. Learn more.",
  keywords: [
    "lanzarote travel agency",
    "lanzarote concierge",
    "lanzarote local experts",
  ],
  openGraph: {
    title: "About Lanzarote Untold — Our Story & Philosophy",
    description:
      "Meet the team behind Lanzarote Untold. Local expertise, international elegance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lanzarote Untold",
    description:
      "Meet the team behind Lanzarote Untold. Local expertise, international elegance.",
  },
};

const repository = new StaticContentRepository();

export default async function AboutPage() {
  const [stats, testimonials] = await Promise.all([
    repository.getStats(),
    repository.getTestimonials(),
  ]);

  return (
    <main>
      <PageHero
        label="ABOUT US"
        title="Lanzarote's local experts, built for the world"
        subtitle="We are a small team of locals and travellers united by one belief: Lanzarote deserves to be experienced, not just visited."
        backgroundImage="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <ImageTextSection
        label="WHO WE ARE"
        title="Local roots, global perspective"
        paragraphs={[
          "Lanzarote Untold was founded by local experts who have called this island home for over a decade. We are not a typical Lanzarote travel agency — we are curators of experiences, connectors of people, and storytellers of a place we love deeply.",
          "Our network spans generations of local families, artisans, fishermen, and winemakers. As your personal Lanzarote concierge, we turn these relationships — built on trust and mutual respect — into experiences that are truly unique.",
        ]}
        image="https://images.unsplash.com/photo-1588613877465-89cb8a91d363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Team at Lanzarote landscape viewpoint"
      />

      <SocialProofSection stats={stats} testimonials={testimonials} />

      <ImageTextSection
        label="OUR PHILOSOPHY"
        title="Less is more, always"
        paragraphs={[
          "We believe the best travel experiences are intimate, unhurried, and deeply personal. That's why we work with a limited number of guests at any time — so every journey receives our full attention.",
          "We don't sell packages. We don't run group tours. We listen to what matters to you, and then we create something that couldn't exist for anyone else. This is travel as it should be.",
        ]}
        image="https://images.unsplash.com/photo-1630332458006-da1d94e4c2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Quiet moment in Lanzarote volcanic landscape"
        reversed
      />

      <CTASection />
    </main>
  );
}
