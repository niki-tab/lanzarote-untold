import type { Metadata } from "next";
import { cormorant, inter } from "@/infrastructure/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lanzarote Untold | Bespoke Travel Lanzarote",
    template: "%s | Lanzarote Untold",
  },
  description:
    "Bespoke curated experiences in Lanzarote, Canary Islands. Crafted with local expertise and international elegance.",
  metadataBase: new URL("https://lanzaroteuntold.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} bg-dark-bg text-text-primary antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
