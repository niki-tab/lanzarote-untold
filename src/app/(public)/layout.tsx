import { getTravelAgencyStructuredData } from "@/infrastructure/seo/structuredData";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";
import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";

const repository = new StaticContentRepository();

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = await repository.getNavigation();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getTravelAgencyStructuredData()),
        }}
      />
      <Header navigation={navigation} />
      {children}
      <Footer />
    </>
  );
}
