import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import Header from "@/components/navbar";
import Footer from "@/components/Footer";
import ScrollToTopWithProgress from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Boompanda Sampling",
  description: "We disrtibute the sampling all over india",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen bg-background text-black  antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Header />
          <main className=" mx-auto  pt-20">{children}</main>
          <ScrollToTopWithProgress />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
