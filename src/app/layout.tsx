import type { Metadata } from "next";
import { SiteFooter } from "@krnjs/react-ui/portfolio";
import "@krnjs/react-ui/styles.css";
import "./globals.css";
import SiteNavigation from "./components/SiteNavigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://keigokudo.vercel.app"),
  title: {
    default: "Software Engineer Portfolio",
    template: "%s | Software Engineer Portfolio",
  },
  description:
    "Software engineering portfolio focused on React, TypeScript, Next.js, Node.js, production systems, integrations, and reliable delivery.",
  openGraph: {
    title: "Software Engineer Portfolio",
    description:
      "Software engineering portfolio focused on React, TypeScript, Next.js, Node.js, production systems, integrations, and reliable delivery.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Software Engineer Portfolio",
    description:
      "Software engineering portfolio focused on React, TypeScript, Next.js, Node.js, production systems, integrations, and reliable delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="portfolio-foundation">
        <SiteNavigation />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
