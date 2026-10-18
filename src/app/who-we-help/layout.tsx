import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solvantra.global/industries",
  },
};

export default function WhoWeHelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
