import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Solvantra Global",
  description:
    "Learn how Solvantra Global collects, uses, shares, and protects personal information across our website and business operations support services.",
  alternates: {
    canonical: "https://solvantra.global/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Solvantra Global",
    description:
      "Learn how Solvantra Global collects, uses, shares, and protects personal information across our website and business operations support services.",
    url: "https://solvantra.global/privacy-policy",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Solvantra Global Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Solvantra Global",
    description:
      "Learn how Solvantra Global collects, uses, shares, and protects personal information across our website and business operations support services.",
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
      name: "Privacy Policy",
      item: "https://solvantra.global/privacy-policy",
    },
  ],
};

export default function PrivacyPolicyLayout({
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
