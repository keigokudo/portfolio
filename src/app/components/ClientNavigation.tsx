"use client";

import { Header } from "@krnjs/react-ui";

export default function ClientNavigation() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return <Header logo={<span>Logo</span>} navItems={navItems} />;
}
