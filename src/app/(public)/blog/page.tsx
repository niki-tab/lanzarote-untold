import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";

export const metadata: Metadata = {
  title: "The Journal — Stories from Lanzarote",
  description:
    "Discover hidden gems, local insights, and travel stories from Lanzarote. The Lanzarote Untold journal — coming soon.",
  keywords: [
    "lanzarote blog",
    "lanzarote hidden gems",
    "lanzarote travel guide",
  ],
  openGraph: {
    title: "The Journal — Stories from Lanzarote",
    description:
      "Discover hidden gems, local insights, and travel stories from Lanzarote.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Journal — Stories from Lanzarote",
    description:
      "Discover hidden gems, local insights, and travel stories from Lanzarote.",
  },
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        label="THE JOURNAL"
        title="Stories from Lanzarote"
        subtitle="Local insights, hidden gems, and travel stories from those who call this island home."
        backgroundImage="https://images.unsplash.com/photo-1630332458006-da1d94e4c2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <section className="flex min-h-[40vh] flex-col items-center justify-center gap-6 px-5 py-[60px] lg:px-[120px] lg:py-[120px]">
        <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
          COMING SOON
        </span>
        <h2 className="text-center font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          We&apos;re writing our first stories
        </h2>
        <p className="max-w-[500px] text-center font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
          Our journal will feature insider guides, hidden gems, and the untold
          stories of Lanzarote. Check back soon or get in touch to be notified
          when we publish.
        </p>
      </section>
    </main>
  );
}
