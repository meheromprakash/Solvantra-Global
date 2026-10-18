import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Services Business Solutions | Solvantra Global",
  description:
    "Explore Solvantra Global's solutions for home service businesses, focused on operational efficiency, customer experience, and business growth.",
  alternates: {
    canonical: "https://solvantra.global/home-services",
  },
  openGraph: {
    title: "Home Services Business Solutions | Solvantra Global",
    description:
      "Explore Solvantra Global's solutions for home service businesses, focused on operational efficiency, customer experience, and business growth.",
    url: "https://solvantra.global/home-services",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/industry_home_services.jpg",
        width: 1200,
        height: 630,
        alt: "Home Services Business Solutions — Solvantra Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Services Business Solutions | Solvantra Global",
    description:
      "Explore Solvantra Global's solutions for home service businesses, focused on operational efficiency, customer experience, and business growth.",
    images: ["/images/industry_home_services.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Services Business Solutions",
  provider: {
    "@type": "Organization",
    name: "Solvantra Global",
    url: "https://solvantra.global",
    email: "info@solvantra.global",
  },
  description:
    "Explore Solvantra Global's solutions for home service businesses, focused on operational efficiency, customer experience, and business growth.",
  url: "https://solvantra.global/home-services",
  serviceType: "Home Services Dispatch & Scheduling",
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
      name: "Home Services",
      item: "https://solvantra.global/home-services",
    },
  ],
};

export default function HomeServicesLayout({
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
