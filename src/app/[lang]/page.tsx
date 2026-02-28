import type { Metadata } from "next";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";
import { getHomePageContent } from "@/application/use-cases/getHomePageContent";
import { HeroSection } from "@/presentation/components/sections/HeroSection";
import { HowWeWorkSection } from "@/presentation/components/sections/HowWeWorkSection";
import { ExperiencesSection } from "@/presentation/components/sections/ExperiencesSection";
import { SocialProofSection } from "@/presentation/components/sections/SocialProofSection";
import { CTASection } from "@/presentation/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Lanzarote Untold | Curated Experiences & Private Tours",
  description:
    "Unique curated experiences in Lanzarote. Private tours, volcanic trails, wine caves, yacht charters — all designed by local experts. Enquire now.",
  keywords: [
    "lanzarote untold",
    "lanzarote unique experiences",
    "lanzarote private tours",
    "bespoke travel lanzarote",
  ],
  openGraph: {
    title: "Lanzarote Untold | Curated Experiences & Private Tours",
    description:
      "Unique curated experiences in Lanzarote, crafted by those who call this island home.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanzarote Untold | Curated Experiences & Private Tours",
    description:
      "Unique curated experiences in Lanzarote, crafted by those who call this island home.",
  },
};

const repository = new StaticContentRepository();

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
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
