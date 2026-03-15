import { getTravelAgencyStructuredData } from "@/infrastructure/seo/structuredData";
import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import { locales, localizedPath } from "@/infrastructure/i18n/config";
import type { Locale } from "@/infrastructure/i18n/config";
import { getNavigation } from "@/infrastructure/data/navigation";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const navigation = getNavigation(locale);

  // Prefix internal hrefs for the current locale
  const localizedNavigation = navigation.map((item) => ({
    ...item,
    href: localizedPath(item.href, locale),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getTravelAgencyStructuredData()),
        }}
      />
      <Header navigation={localizedNavigation} lang={locale} />
      {children}
      <Footer lang={locale} />
    </>
  );
}
