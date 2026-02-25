export function getTravelAgencyStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Lanzarote Untold",
    description:
      "Bespoke luxury travel experiences in Lanzarote, Canary Islands. Crafted with local expertise and international elegance.",
    url: "https://isladorda.com",
    telephone: "+34 928 000 000",
    email: "hello@isladorda.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Arrecife",
      addressRegion: "Lanzarote",
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "Place",
      name: "Lanzarote, Canary Islands",
    },
    priceRange: "$$$$",
  };
}
