import type { Metadata } from "next";
import { StubPage } from "@/presentation/components/ui/StubPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Isla Dorada, Lanzarote's premier travel agency and concierge service. Local expertise, international elegance.",
  keywords: ["lanzarote travel agency", "lanzarote concierge"],
};

export default function AboutPage() {
  return (
    <StubPage
      title="About Isla Dorada"
      subtitle="Our story, our team, and our passion for crafting unforgettable Lanzarote experiences."
    />
  );
}
