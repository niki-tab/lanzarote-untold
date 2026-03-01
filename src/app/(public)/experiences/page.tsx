import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { SocialProofSection } from "@/presentation/components/sections/SocialProofSection";
import { CTASection } from "@/presentation/components/sections/CTASection";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";

export const metadata: Metadata = {
  title: "Things to Do in Lanzarote — Exclusive Experiences",
  description:
    "Discover exclusive things to do in Lanzarote. Private volcano tours, wine tastings, sea adventures — all curated by local experts. Enquire now.",
  keywords: [
    "things to do in lanzarote",
    "lanzarote activities",
    "lanzarote excursions",
    "lanzarote experiences",
  ],
  openGraph: {
    title: "Things to Do in Lanzarote — Exclusive Experiences",
    description:
      "Discover exclusive things to do in Lanzarote, curated by those who call this island home.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Things to Do in Lanzarote — Exclusive Experiences",
    description:
      "Discover exclusive things to do in Lanzarote, curated by those who call this island home.",
  },
};

const categories = [
  {
    title: "Wine & Gastronomy",
    description: "Private wine tours, local bodegas, and Michelin-starred dining in Lanzarote",
    image:
      "https://images.unsplash.com/photo-1572935041470-cef27cedab8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU3OTF8&ixlib=rb-4.1.0&q=80&w=1080",
    href: "/experiences/wine-gastronomy",
    label: "GASTRONOMY",
  },
  {
    title: "Sea & Adventure",
    description: "Lanzarote boat trips, catamaran charters, diving, and private fishing",
    image:
      "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
    href: "/experiences/sea-adventure",
    label: "MARITIME",
  },
  {
    title: "Volcano & Nature",
    description: "Lanzarote volcano tours, hidden hiking trails, and untouched landscapes",
    image:
      "https://images.unsplash.com/photo-1652040287142-de0541acb2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU2MTV8&ixlib=rb-4.1.0&q=80&w=1080",
    href: "/experiences/volcano-nature",
    label: "ADVENTURE",
  },
  {
    title: "Private & Custom",
    description: "Luxury Lanzarote private tours and bespoke itineraries designed around you",
    image:
      "https://images.unsplash.com/photo-1544957347-2c015a5024ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/private-experiences",
    label: "BESPOKE",
  },
];

const repository = new StaticContentRepository();

export default async function ExperiencesPage() {
  const [stats, testimonials] = await Promise.all([
    repository.getStats(),
    repository.getTestimonials(),
  ]);

  return (
    <main>
      <PageHero
        label="SIGNATURE EXPERIENCES"
        title="Things to Do in Lanzarote — Exclusive Experiences"
        subtitle="Discover the best Lanzarote activities and excursions, curated for the discerning traveller. Every experience is crafted around you — your pace, your passions, your story."
        backgroundImage="https://images.unsplash.com/photo-1588613877465-89cb8a91d363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      {/* Category Grid */}
      <section className="flex flex-col gap-10 px-5 py-[60px] lg:gap-16 lg:px-[120px] lg:py-[120px]">
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          Explore Lanzarote excursions by category
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative flex h-[300px] overflow-hidden lg:h-[400px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #2A262400 20%, #2A2624CC 100%)",
              }}
            />
            <div className="relative mt-auto flex w-full items-end justify-between p-6 lg:p-8">
              <div className="flex flex-col gap-2">
                <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
                  {cat.label}
                </span>
                <h3 className="font-cormorant text-2xl font-normal leading-[1.15] text-text-primary lg:text-[28px]">
                  {cat.title}
                </h3>
                <p className="max-w-[300px] font-inter text-sm font-light text-text-secondary">
                  {cat.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-gold" />
            </div>
          </Link>
        ))}
        </div>
      </section>

      <SocialProofSection stats={stats} testimonials={testimonials} />
      <CTASection />
    </main>
  );
}
