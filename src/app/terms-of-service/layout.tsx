import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Solvantra Global",
  description:
    "Review the Terms of Service governing access to and use of the Solvantra Global website and business operations support services.",
  alternates: {
    canonical: "https://solvantra.global/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Solvantra Global",
    description:
      "Review the Terms of Service governing access to and use of the Solvantra Global website and business operations support services.",
    url: "https://solvantra.global/terms-of-service",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Solvantra Global Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Solvantra Global",
    description:
      "Review the Terms of Service governing access to and use of the Solvantra Global website and business operations support services.",
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
      name: "Terms of Service",
      item: "https://solvantra.global/terms-of-service",
    },
  ],
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {children}
    </>
  );
}
