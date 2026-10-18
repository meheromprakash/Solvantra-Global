import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Solvantra Global",
  description:
    "Explore Solvantra Global's industry-focused solutions designed to address business operations, customer experience, and digital growth needs.",
  alternates: {
    canonical: "https://solvantra.global/industries",
  },
  openGraph: {
    title: "Industries We Serve | Solvantra Global",
    description:
      "Explore Solvantra Global's industry-focused solutions designed to address business operations, customer experience, and digital growth needs.",
    url: "https://solvantra.global/industries",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_operations_team.jpg",
        width: 1200,
        height: 630,
        alt: "Industries We Serve — Solvantra Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Solvantra Global",
    description:
      "Explore Solvantra Global's industry-focused solutions designed to address business operations, customer experience, and digital growth needs.",
    images: ["/images/hero_operations_team.jpg"],
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
      name: "Industries",
      item: "https://solvantra.global/industries",
    },
  ],
};

export default function IndustriesLayout({
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
