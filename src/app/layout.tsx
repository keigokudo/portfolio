import type { Metadata } from "next";
import { SiteFooter } from "@krnjs/react-ui";
import "@krnjs/react-ui/styles.css";
import "./globals.css";
import SiteNavigation from "./components/SiteNavigation";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Software engineering portfolio",
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
