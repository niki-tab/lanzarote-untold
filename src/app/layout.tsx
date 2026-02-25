import type { Metadata } from "next";
import { cormorant, inter } from "@/infrastructure/config/fonts";
import { getTravelAgencyStructuredData } from "@/infrastructure/seo/structuredData";
import { StaticContentRepository } from "@/infrastructure/adapters/StaticContentRepository";
import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lanzarote Untold | Bespoke Travel Lanzarote",
    template: "%s | Lanzarote Untold",
  },
  description:
    "Bespoke luxury travel experiences in Lanzarote, Canary Islands. Crafted with local expertise and international elegance.",
  metadataBase: new URL("https://isladorda.com"),
  icons: {
    icon: "/img/logo.png",
    apple: "/img/logo.png",
  },
};

const repository = new StaticContentRepository();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = await repository.getNavigation();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getTravelAgencyStructuredData()),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} bg-dark-bg text-text-primary antialiased`}
        suppressHydrationWarning
      >
        <Header navigation={navigation} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
