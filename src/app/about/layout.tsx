import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Solvantra Global | Our Mission & Approach",
  description:
    "Discover Solvantra Global's approach to connecting people, processes, and technology to help businesses operate smarter and grow stronger.",
  alternates: {
    canonical: "https://solvantra.global/about",
  },
  openGraph: {
    title: "About Solvantra Global | Our Mission & Approach",
    description:
      "Discover Solvantra Global's approach to connecting people, processes, and technology to help businesses operate smarter and grow stronger.",
    url: "https://solvantra.global/about",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_operations_team.jpg",
        width: 1200,
        height: 630,
        alt: "About Solvantra Global — Our Mission & Approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Solvantra Global | Our Mission & Approach",
    description:
      "Discover Solvantra Global's approach to connecting people, processes, and technology to help businesses operate smarter and grow stronger.",
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
      name: "About",
      item: "https://solvantra.global/about",
    },
  ],
};

export default function AboutLayout({
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
