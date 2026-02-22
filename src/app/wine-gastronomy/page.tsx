import type { Metadata } from "next";
import { StubPage } from "@/presentation/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Wine & Gastronomy",
  description:
    "Private wine cave tours and exclusive dining experiences in Lanzarote. Discover the island's Michelin-starred gastronomy scene.",
  keywords: ["lanzarote wine tour", "lanzarote food tour"],
};

export default function WineGastronomyPage() {
  return (
    <StubPage
      title="Wine & Gastronomy"
      subtitle="Private wine cave tours, exclusive dining experiences, and the finest gastronomy Lanzarote has to offer."
    />
  );
}
