import type {
  Experience,
  Testimonial,
  Stat,
  NavigationItem,
  ProcessStep,
} from "@/domain/types";

export interface IContentRepository {
  getExperiences(): Promise<Experience[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getStats(): Promise<Stat[]>;
  getNavigation(): Promise<NavigationItem[]>;
  getProcessSteps(): Promise<ProcessStep[]>;
}
