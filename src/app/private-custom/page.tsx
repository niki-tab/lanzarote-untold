import type { Metadata } from "next";
import { StubPage } from "@/presentation/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Private & Custom",
  description:
    "Bespoke private tours and luxury custom experiences in Lanzarote. Tailored entirely to your desires.",
  keywords: ["lanzarote private tour", "lanzarote luxury experiences"],
};

export default function PrivateCustomPage() {
  return (
    <StubPage
      title="Private & Custom"
      subtitle="Entirely bespoke experiences designed around your vision. Tell us your dream, and we will make it reality."
    />
  );
}
