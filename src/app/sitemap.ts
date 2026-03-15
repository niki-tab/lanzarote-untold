import type { MetadataRoute } from "next";

const siteUrl = "https://lanzaroteuntold.com";

const routes = [
  "/",
  "/about",
  "/contact",
  "/experiences",
  "/experiences/wine-tour",
  "/experiences/shore-fishing",
  "/experiences/salt-flats",
  "/experiences/north-trekking",
  "/experiences/sea-adventure",
  "/private-experiences",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const enUrl = `${siteUrl}${route === "/" ? "" : route}`;

    entries.push({
      url: enUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: enUrl,
          es: `${siteUrl}/es${route === "/" ? "" : route}`,
          de: `${siteUrl}/de${route === "/" ? "" : route}`,
          fr: `${siteUrl}/fr${route === "/" ? "" : route}`,
        },
      },
    });
  }

  return entries;
}
