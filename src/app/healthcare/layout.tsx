import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Business Solutions | Solvantra Global",
  description:
    "Explore Solvantra Global's healthcare-focused business solutions designed to support operational efficiency, patient experience, and technology-enabled growth.",
  alternates: {
    canonical: "https://solvantra.global/healthcare",
  },
  openGraph: {
    title: "Healthcare Business Solutions | Solvantra Global",
    description:
      "Explore Solvantra Global's healthcare-focused business solutions designed to support operational efficiency, patient experience, and technology-enabled growth.",
    url: "https://solvantra.global/healthcare",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/industry_healthcare.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Business Solutions — Solvantra Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Business Solutions | Solvantra Global",
    description:
      "Explore Solvantra Global's healthcare-focused business solutions designed to support operational efficiency, patient experience, and technology-enabled growth.",
    images: ["/images/industry_healthcare.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare Business Solutions",
  provider: {
    "@type": "Organization",
    name: "Solvantra Global",
    url: "https://solvantra.global",
    email: "info@solvantra.global",
  },
  description:
    "Explore Solvantra Global's healthcare-focused business solutions designed to support operational efficiency, patient experience, and technology-enabled growth.",
  url: "https://solvantra.global/healthcare",
  serviceType: "Healthcare Operations & Revenue Cycle Management",
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
      name: "Healthcare",
      item: "https://solvantra.global/healthcare",
    },
  ],
};

export default function HealthcareLayout({
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
