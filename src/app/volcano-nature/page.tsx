import type { Metadata } from "next";
import { StubPage } from "@/presentation/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Volcano & Nature",
  description:
    "Explore Lanzarote's volcanic landscapes, hidden gems, and breathtaking natural wonders with private guided tours.",
  keywords: ["lanzarote volcano tour", "lanzarote hidden gems"],
};

export default function VolcanoNaturePage() {
  return (
    <StubPage
      title="Volcano & Nature"
      subtitle="Guided volcanic trail expeditions and nature encounters through Lanzarote's most breathtaking landscapes."
    />
  );
}
