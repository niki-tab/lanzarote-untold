import type { Metadata } from "next";
import { StubPage } from "@/presentation/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin your bespoke Lanzarote experience. Contact Lanzarote Untold for a complimentary consultation.",
  keywords: ["book lanzarote experience"],
};

export default function ContactPage() {
  return (
    <StubPage
      title="Get in Touch"
      subtitle="Begin with a complimentary consultation. Share your vision and let us craft your perfect Lanzarote experience."
    />
  );
}
