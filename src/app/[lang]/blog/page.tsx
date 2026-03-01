import type { Metadata } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import { PageHero } from "@/presentation/components/sections/PageHero";
import { BlogGrid } from "@/presentation/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "The Journal — Stories from Lanzarote",
  description:
    "Discover hidden gems, local insights, and travel stories from Lanzarote. The Lanzarote Untold journal.",
  keywords: [
    "lanzarote blog",
    "lanzarote hidden gems",
    "lanzarote travel guide",
  ],
  openGraph: {
    title: "The Journal — Stories from Lanzarote",
    description:
      "Discover hidden gems, local insights, and travel stories from Lanzarote.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Journal — Stories from Lanzarote",
    description:
      "Discover hidden gems, local insights, and travel stories from Lanzarote.",
  },
};

export const dynamic = "force-dynamic";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
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
        label="THE JOURNAL"
        title="Stories from Lanzarote"
        subtitle="Local insights, hidden gems, and travel stories from those who call this island home."
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
          />
        ) : (
          <div className="flex min-h-[30vh] flex-col items-center justify-center gap-6">
            <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
              COMING SOON
            </span>
            <h2 className="text-center font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
              We&apos;re writing our first stories
            </h2>
            <p className="max-w-[500px] text-center font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
              Our journal will feature insider guides, hidden gems, and the untold
              stories of Lanzarote. Check back soon or get in touch to be notified
              when we publish.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
