import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Solvantra Global | Business Consulting & Digital Solutions",
  description:
    "Solvantra Global helps businesses improve operations, customer experience, and growth by bringing people, processes, and technology together.",
  alternates: {
    canonical: "https://solvantra.global/",
  },
  openGraph: {
    title: "Solvantra Global | Business Consulting & Digital Solutions",
    description:
      "Solvantra Global helps businesses improve operations, customer experience, and growth by bringing people, processes, and technology together.",
    url: "https://solvantra.global/",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Solvantra Global — Driving Business, Soulfully.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvantra Global | Business Consulting & Digital Solutions",
    description:
      "Solvantra Global helps businesses improve operations, customer experience, and growth by bringing people, processes, and technology together.",
    images: ["/images/hero_golden_hour_globe.jpg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
