import type {
  Experience,
  Testimonial,
  Stat,
  NavigationItem,
  ProcessStep,
} from "@/domain/types";
import type { IContentRepository } from "@/application/ports/IContentRepository";

export interface HomePageContent {
  experiences: Experience[];
  testimonials: Testimonial[];
  stats: Stat[];
  navigation: NavigationItem[];
  processSteps: ProcessStep[];
}

export async function getHomePageContent(
  repository: IContentRepository
): Promise<HomePageContent> {
  const [experiences, testimonials, stats, navigation, processSteps] =
    await Promise.all([
      repository.getExperiences(),
      repository.getTestimonials(),
      repository.getStats(),
      repository.getNavigation(),
      repository.getProcessSteps(),
    ]);

  return { experiences, testimonials, stats, navigation, processSteps };
}
