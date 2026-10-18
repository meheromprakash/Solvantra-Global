import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Consulting & Digital Solutions | Solvantra Global",
  description:
    "Explore Solvantra Global's services for business operations, digital transformation, customer experience, and technology-enabled growth.",
  alternates: {
    canonical: "https://solvantra.global/services",
  },
  openGraph: {
    title: "Business Consulting & Digital Solutions | Solvantra Global",
    description:
      "Explore Solvantra Global's services for business operations, digital transformation, customer experience, and technology-enabled growth.",
    url: "https://solvantra.global/services",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Solvantra Global — Business Operations & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Consulting & Digital Solutions | Solvantra Global",
    description:
      "Explore Solvantra Global's services for business operations, digital transformation, customer experience, and technology-enabled growth.",
    images: ["/images/hero_golden_hour_globe.jpg"],
  },
};

const breadcrumbsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://solvantra.global",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://solvantra.global/services",
    },
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      {children}
    </>
  );
}
