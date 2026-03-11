import type { Experience } from "@/domain/types";

export const experiences: Experience[] = [
  {
    id: "exp-wine-tour",
    title: "Wine Tour: El Grifo & Bodega Vulcano",
    category: "WINE TOUR",
    image:
      "https://images.pexels.com/photos/15173378/pexels-photo-15173378.jpeg",
    slug: "/experiences/wine-tour",
  },
  {
    id: "exp-yacht",
    title: "Private Fishing Trips",
    category: "MARITIME",
    image:
      "https://images.unsplash.com/photo-1638829570198-347823e74d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE0Mzc4Mjd8&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "/experiences/sea-adventure",
  },
  {
    id: "exp-salt",
    title: "Salinas de Janubio Private Tour",
    category: "HERITAGE",
    image:
      "https://images.pexels.com/photos/32781223/pexels-photo-32781223.jpeg",
    slug: "/experiences/salt-flats",
  },
];
