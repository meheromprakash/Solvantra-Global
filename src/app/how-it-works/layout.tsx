import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Solvantra Global",
  description:
    "Discover how Solvantra Global approaches business challenges, aligns processes and technology, and supports practical implementation.",
  alternates: {
    canonical: "https://solvantra.global/how-it-works",
  },
  openGraph: {
    title: "How It Works | Solvantra Global",
    description:
      "Discover how Solvantra Global approaches business challenges, aligns processes and technology, and supports practical implementation.",
    url: "https://solvantra.global/how-it-works",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_operations_team.jpg",
        width: 1200,
        height: 630,
        alt: "How It Works — Solvantra Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Solvantra Global",
    description:
      "Discover how Solvantra Global approaches business challenges, aligns processes and technology, and supports practical implementation.",
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
      name: "How It Works",
      item: "https://solvantra.global/how-it-works",
    },
  ],
};

export default function HowItWorksLayout({
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
