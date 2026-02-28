import type { Metadata } from "next";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { ImageTextSection } from "@/presentation/components/sections/ImageTextSection";
import { FeatureGrid } from "@/presentation/components/sections/FeatureGrid";
import { TestimonialStrip } from "@/presentation/components/sections/TestimonialStrip";
import { CTASection } from "@/presentation/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Lanzarote Wine Tour & Bodega Tasting — Private Experiences",
  description:
    "Private wine tours and bodega tastings in Lanzarote. Visit hidden vineyards, meet local winemakers, and savour exclusive gastronomy. Enquire now.",
  keywords: [
    "lanzarote wine tour",
    "lanzarote wine tasting",
    "lanzarote food tour",
    "lanzarote bodega",
  ],
  openGraph: {
    title: "Lanzarote Wine Tour & Bodega Tasting — Private Experiences",
    description:
      "Private wine tours and bodega tastings in Lanzarote, crafted by those who call this island home.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanzarote Wine Tour & Bodega Tasting",
    description:
      "Private wine tours and bodega tastings in Lanzarote, crafted by those who call this island home.",
  },
};

const features = [
  {
    title: "Private Bodega Visits",
    description:
      "Access family-owned bodegas that never appear on tourist routes. Meet the winemakers, walk the volcanic vineyards, and taste wines straight from the barrel.",
  },
  {
    title: "Local Winemakers",
    description:
      "We connect you with third-generation winemakers who share their craft, their stories, and their passion for Lanzarote's unique terroir.",
  },
  {
    title: "Michelin-Starred Dining",
    description:
      "From intimate private dinners in volcanic caves to tables at the island's most celebrated restaurants, every meal becomes a memory.",
  },
  {
    title: "Artisan Cheese Tasting",
    description:
      "Discover Lanzarote's award-winning goat cheeses at small family farms, paired with local wines and freshly baked bread.",
  },
  {
    title: "Vineyard Sunset Experiences",
    description:
      "Watch the sun set over La Geria's volcanic vineyards with a private tasting, accompanied by local charcuterie and conversation.",
  },
  {
    title: "Cooking with Locals",
    description:
      "Join a local family in their kitchen. Learn traditional recipes passed down through generations, then share the meal together.",
  },
];

export default async function WineGastronomyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return (
    <main>
      <PageHero
        label="WINE & GASTRONOMY"
        title="Lanzarote Wine Tour & Bodega Tasting — Private Experiences"
        subtitle="The most authentic wine tasting and food tour in Lanzarote. Private access to the island's extraordinary vineyards, bodegas, and kitchens."
        backgroundImage="https://images.unsplash.com/photo-1572935041470-cef27cedab8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0OTU3OTF8&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <ImageTextSection
        label="THE EXPERIENCE"
        title="Beyond the tourist trail"
        paragraphs={[
          "Lanzarote's wine culture is unlike anywhere on earth. Vines grow in hand-dug pits called zocos, sheltered from Atlantic winds by crescent-shaped stone walls. The result is a terroir that produces wines of extraordinary character.",
          "Our private wine tasting experiences take you behind the scenes — to the bodegas, the families, and the traditions that make Lanzarote's gastronomy so remarkable. This is not a standard food tour — it's an intimate journey into the island's culinary soul.",
        ]}
        image="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Lanzarote vineyard with volcanic landscape"
      />

      <FeatureGrid
        label="HIGHLIGHTS"
        title="What makes it extraordinary"
        features={features}
      />

      <ImageTextSection
        label="EXCLUSIVE ACCESS"
        title="Doors that only open for us"
        paragraphs={[
          "Over twelve years of building relationships with Lanzarote's farming families, we've earned access to places that simply aren't available to the public. Private cellars, family kitchens, and vineyards that have never hosted a tour group.",
          "This is gastronomy as it should be — intimate, authentic, and deeply personal.",
        ]}
        image="https://images.unsplash.com/photo-1474722883778-792e7990302f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        imageAlt="Private wine tasting in Lanzarote bodega"
        reversed
      />

      <TestimonialStrip
        quote="The volcanic landscape dinner was something from another world. Our concierge knew exactly what we wanted before we did."
        author="Hans & Elise Mueller"
        location="Zurich, Switzerland"
      />

      <CTASection />
    </main>
  );
}
