import type { Metadata } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { BlogGrid } from "@/presentation/components/blog/BlogGrid";
import type { Locale } from "@/infrastructure/i18n/config";

const content = {
  en: {
    meta: {
      title: "The Journal - Stories from Lanzarote | Lanzarote Untold",
      description:
        "Discover hidden gems, local insights, and travel stories from Lanzarote. The Lanzarote Untold journal.",
      keywords: [
        "lanzarote blog",
        "lanzarote hidden gems",
        "lanzarote travel guide",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "THE JOURNAL",
      title: "Stories from Lanzarote",
      subtitle:
        "Local insights, hidden gems, and travel stories from those who call this island home.",
    },
    comingSoon: {
      label: "COMING SOON",
      title: "We\u2019re writing our first stories",
      body: "Our journal will feature insider guides, hidden gems, and the untold stories of Lanzarote. Check back soon or get in touch to be notified when we publish.",
    },
  },
  es: {
    meta: {
      title: "El Diario - Historias de Lanzarote | Lanzarote Untold",
      description:
        "Descubre rincones secretos, consejos locales e historias de viaje de Lanzarote. El diario de Lanzarote Untold.",
      keywords: [
        "blog lanzarote",
        "lanzarote secretos",
        "guía de viaje lanzarote",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "EL DIARIO",
      title: "Historias de Lanzarote",
      subtitle:
        "Consejos locales, rincones secretos e historias de viaje de quienes llaman hogar a esta isla.",
    },
    comingSoon: {
      label: "MUY PRONTO",
      title: "Estamos escribiendo nuestras primeras historias",
      body: "Nuestro diario incluirá guías locales, rincones secretos y las historias no contadas de Lanzarote. Vuelve pronto o contáctanos para que te avisemos cuando publiquemos.",
    },
  },
  de: {
    meta: {
      title: "Das Journal - Geschichten aus Lanzarote | Lanzarote Untold",
      description:
        "Entdecke Geheimtipps, lokale Einblicke und Reisegeschichten aus Lanzarote. Das Lanzarote Untold Journal.",
      keywords: [
        "lanzarote blog",
        "lanzarote geheimtipps",
        "lanzarote reiseführer",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "DAS JOURNAL",
      title: "Geschichten aus Lanzarote",
      subtitle:
        "Lokale Einblicke, Geheimtipps und Reisegeschichten von denen, die diese Insel ihr Zuhause nennen.",
    },
    comingSoon: {
      label: "BALD VERFÜGBAR",
      title: "Wir schreiben unsere ersten Geschichten",
      body: "Unser Journal wird Insider-Guides, Geheimtipps und die unerzählten Geschichten von Lanzarote enthalten. Schau bald wieder vorbei oder kontaktiere uns, um benachrichtigt zu werden.",
    },
  },
  fr: {
    meta: {
      title: "Le Journal - Histoires de Lanzarote | Lanzarote Untold",
      description:
        "Découvrez les trésors cachés, les conseils locaux et les récits de voyage de Lanzarote. Le journal de Lanzarote Untold.",
      keywords: [
        "blog lanzarote",
        "lanzarote secrets",
        "guide voyage lanzarote",
        "lanzarote untold",
      ],
    },
    hero: {
      label: "LE JOURNAL",
      title: "Histoires de Lanzarote",
      subtitle:
        "Conseils locaux, trésors cachés et récits de voyage de ceux qui appellent cette île leur maison.",
    },
    comingSoon: {
      label: "BIENTÔT DISPONIBLE",
      title: "Nous écrivons nos premières histoires",
      body: "Notre journal présentera des guides locaux, des trésors cachés et les histoires inédites de Lanzarote. Revenez bientôt ou contactez-nous pour être informé de nos publications.",
    },
  },
} as const;

type BlogPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
  const { meta } = content[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export const dynamic = "force-dynamic";

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || "en";
  const t = content[locale];

  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  let initialData: any = { data: [], total: 0, page: 1, pageSize: 9, totalPages: 0 };
  let featured: any = null;
  let categories: any[] = [];

  try {
    [initialData, featured, categories] = await Promise.all([
      convex.query(api.articles.listPublished, { page: 1, pageSize: 9 }),
      convex.query(api.articles.getFeatured, {}),
      convex.query(api.categories.list, { isActive: true }),
    ]);
  } catch {
    // Convex not available yet — show empty state
  }

  const hasContent = initialData.data.length > 0 || featured;

  return (
    <main>
      <PageHero
        label={t.hero.label}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        backgroundImage="https://images.unsplash.com/photo-1706473841789-56f397f3f0ae"
        imagePosition="center 60%"
        imageSize="100% auto"
      />

      <section className="px-5 py-[60px] lg:px-[120px] lg:py-[100px]">
        {hasContent ? (
          <BlogGrid
            initialData={initialData}
            featured={featured}
            categories={categories}
            lang={locale}
          />
        ) : (
          <div className="flex min-h-[30vh] flex-col items-center justify-center gap-6">
            <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
              {t.comingSoon.label}
            </span>
            <h2 className="text-center font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
              {t.comingSoon.title}
            </h2>
            <p className="max-w-[500px] text-center font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
              {t.comingSoon.body}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
