"use client";

import { SiteHeader } from "@krnjs/react-ui/portfolio";
import { usePathname } from "next/navigation";

export default function SiteNavigation() {
  const pathname = usePathname();

  return <SiteHeader brand="Keigo Kudo" currentPath={pathname} />;
}
