import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Business Solutions | Solvantra Global",
  description:
    "Discover Solvantra Global's real estate business solutions for improved operations, client experiences, and technology-enabled business growth.",
  alternates: {
    canonical: "https://solvantra.global/real-estate",
  },
  openGraph: {
    title: "Real Estate Business Solutions | Solvantra Global",
    description:
      "Discover Solvantra Global's real estate business solutions for improved operations, client experiences, and technology-enabled business growth.",
    url: "https://solvantra.global/real-estate",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/industry_real_estate.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Business Solutions — Solvantra Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Business Solutions | Solvantra Global",
    description:
      "Discover Solvantra Global's real estate business solutions for improved operations, client experiences, and technology-enabled business growth.",
    images: ["/images/industry_real_estate.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate Business Solutions",
  provider: {
    "@type": "Organization",
    name: "Solvantra Global",
    url: "https://solvantra.global",
    email: "info@solvantra.global",
  },
  description:
    "Discover Solvantra Global's real estate business solutions for improved operations, client experiences, and technology-enabled business growth.",
  url: "https://solvantra.global/real-estate",
  serviceType: "Real Estate Operations & Enquiry Handling",
  termsOfService: "https://solvantra.global/terms",
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
      name: "Real Estate",
      item: "https://solvantra.global/real-estate",
    },
  ],
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
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
