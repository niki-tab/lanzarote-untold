import type { Metadata } from "next";
import { StubPage } from "@/presentation/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover unique things to do in Lanzarote. From volcanic adventures to private yacht charters, explore curated Lanzarote activities.",
  keywords: ["things to do in lanzarote", "lanzarote activities"],
};

export default function ExperiencesPage() {
  return (
    <StubPage
      title="Experiences"
      subtitle="Discover our full collection of curated Lanzarote experiences, from volcanic adventures to coastal retreats."
    />
  );
}
