import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Solvantra Global | Business Growth Solutions",
  description:
    "Learn how Solvantra Global combines people, processes, and technology to support smarter operations and sustainable business growth.",
  alternates: {
    canonical: "https://solvantra.global/why-solvantra",
  },
  openGraph: {
    title: "Why Choose Solvantra Global | Business Growth Solutions",
    description:
      "Learn how Solvantra Global combines people, processes, and technology to support smarter operations and sustainable business growth.",
    url: "https://solvantra.global/why-solvantra",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Why Choose Solvantra Global — Business Growth Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Solvantra Global | Business Growth Solutions",
    description:
      "Learn how Solvantra Global combines people, processes, and technology to support smarter operations and sustainable business growth.",
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
      name: "Why Solvantra",
      item: "https://solvantra.global/why-solvantra",
    },
  ],
};

export default function WhySolvantraLayout({
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
