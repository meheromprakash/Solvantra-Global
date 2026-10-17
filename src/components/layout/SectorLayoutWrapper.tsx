"use client";

import React from "react";
import { usePathname } from "next/navigation";

export type SectorType = "property" | "home" | "health";

export function getSectorFromPath(pathname: string | null): SectorType | undefined {
  if (!pathname) return undefined;

  if (
    pathname === "/real-estate" ||
    pathname.startsWith("/real-estate/") ||
    pathname === "/who-we-help/real-estate" ||
    pathname.startsWith("/who-we-help/real-estate/")
  ) {
    return "property";
  }

  if (
    pathname === "/home-services" ||
    pathname.startsWith("/home-services/") ||
    pathname === "/who-we-help/home-services" ||
    pathname.startsWith("/who-we-help/home-services/")
  ) {
    return "home";
  }

  if (
    pathname === "/healthcare" ||
    pathname.startsWith("/healthcare/") ||
    pathname === "/who-we-help/healthcare" ||
    pathname.startsWith("/who-we-help/healthcare/")
  ) {
    return "health";
  }

  return undefined;
}

export default function SectorLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const sector = getSectorFromPath(pathname);

  return (
    <div
      data-sector={sector}
      className="min-h-full flex flex-col flex-1 w-full"
    >
      {children}
    </div>
  );
}
