import type { ProcessStep } from "@/domain/types";

export const processSteps: ProcessStep[] = [
  {
    id: "step-consult",
    number: "01",
    title: "Consult",
    description:
      "Share your vision with our travel architects. We want to know what excites you, what moves you, and what you dream about.",
    icon: "message-circle",
  },
  {
    id: "step-curate",
    number: "02",
    title: "Curate",
    description:
      "Our local experts design a bespoke itinerary - from private yacht charters to wine cave dinners - every detail considered.",
    icon: "compass",
  },
  {
    id: "step-experience",
    number: "03",
    title: "Experience",
    description:
      "Arrive and let go. Your dedicated concierge handles everything while you immerse yourself in the magic of Lanzarote.",
    icon: "sparkles",
  },
];
