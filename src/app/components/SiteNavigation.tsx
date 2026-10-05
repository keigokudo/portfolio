"use client";

import { SiteHeader } from "@krnjs/react-ui";
import { usePathname } from "next/navigation";

export default function SiteNavigation() {
  const pathname = usePathname();

  return <SiteHeader brand="Portfolio" currentPath={pathname} />;
}
