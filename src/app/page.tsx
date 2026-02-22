import type { Metadata } from "next";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";
import { getHomePageContent } from "@/application/use-cases/getHomePageContent";
import { HeroSection } from "@/presentation/components/sections/HeroSection";
import { HowWeWorkSection } from "@/presentation/components/sections/HowWeWorkSection";
import { ExperiencesSection } from "@/presentation/components/sections/ExperiencesSection";
import { SocialProofSection } from "@/presentation/components/sections/SocialProofSection";
import { CTASection } from "@/presentation/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Isla Dorada | Luxury Lanzarote Experiences & Private Tours",
  description:
    "Bespoke luxury travel experiences in Lanzarote. Private tours, volcanic trails, wine caves, yacht charters — all curated by local experts. Lanzarote untold.",
  keywords: [
    "lanzarote untold",
    "luxury lanzarote experiences",
    "lanzarote private tours",
    "isla dorada",
    "bespoke travel lanzarote",
  ],
  openGraph: {
    title: "Isla Dorada | Luxury Lanzarote Experiences & Private Tours",
    description:
      "Bespoke luxury travel experiences in Lanzarote, crafted by those who call this island home.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isla Dorada | Luxury Lanzarote Experiences",
    description:
      "Bespoke luxury travel experiences in Lanzarote, crafted by those who call this island home.",
  },
};

const repository = new StaticContentRepository();

export default async function HomePage() {
  const { experiences, testimonials, stats, processSteps } =
    await getHomePageContent(repository);

  return (
    <main>
      <HeroSection />
      <HowWeWorkSection steps={processSteps} />
      <ExperiencesSection experiences={experiences} />
      <SocialProofSection stats={stats} testimonials={testimonials} />
      <CTASection />
    </main>
  );
}
