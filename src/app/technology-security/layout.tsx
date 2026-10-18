import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology & Security | Solvantra Global",
  description:
    "Learn about Solvantra Global's approach to technology, security, and responsible business operations.",
  alternates: {
    canonical: "https://solvantra.global/technology-security",
  },
  openGraph: {
    title: "Technology & Security | Solvantra Global",
    description:
      "Learn about Solvantra Global's approach to technology, security, and responsible business operations.",
    url: "https://solvantra.global/technology-security",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Technology & Security — Solvantra Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology & Security | Solvantra Global",
    description:
      "Learn about Solvantra Global's approach to technology, security, and responsible business operations.",
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
      name: "Technology & Security",
      item: "https://solvantra.global/technology-security",
    },
  ],
};

export default function TechSecurityLayout({
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
