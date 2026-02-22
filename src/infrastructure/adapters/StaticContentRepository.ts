import type { IContentRepository } from "@/application/ports/IContentRepository";
import type {
  Experience,
  Testimonial,
  Stat,
  NavigationItem,
  ProcessStep,
} from "@/domain/types";
import { experiences } from "@/infrastructure/data/experiences";
import { testimonials } from "@/infrastructure/data/testimonials";
import { stats } from "@/infrastructure/data/stats";
import { navigation } from "@/infrastructure/data/navigation";
import { processSteps } from "@/infrastructure/data/processSteps";

export class StaticContentRepository implements IContentRepository {
  async getExperiences(): Promise<Experience[]> {
    return experiences;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return testimonials;
  }

  async getStats(): Promise<Stat[]> {
    return stats;
  }

  async getNavigation(): Promise<NavigationItem[]> {
    return navigation;
  }

  async getProcessSteps(): Promise<ProcessStep[]> {
    return processSteps;
  }
}
