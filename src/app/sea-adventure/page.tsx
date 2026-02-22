import type { Metadata } from "next";
import { StubPage } from "@/presentation/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Sea & Adventure",
  description:
    "Private boat trips, catamaran cruises, and fishing charters around Lanzarote. Experience the Atlantic like never before.",
  keywords: ["lanzarote boat trip", "lanzarote catamaran"],
};

export default function SeaAdventurePage() {
  return (
    <StubPage
      title="Sea & Adventure"
      subtitle="Private yacht charters, fishing expeditions, and ocean adventures across Lanzarote's stunning coastline."
    />
  );
}
