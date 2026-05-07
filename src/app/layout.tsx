import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Abhishek Srivastava",

  description:
    "I design systems that solve real user problems. Portfolio of Abhishek Srivastava.",

  manifest: "/favicon/site.webmanifest",

icons: {
  icon: [
    { url: "/favicon/favicon.ico" },
    { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  ],

  apple: "/favicon/apple-touch-icon.png",

  shortcut: "/favicon/favicon.ico",
},

  openGraph: {
    title: "Abhishek Srivastava",
    description:
      "I design systems that solve real user problems. Portfolio of Abhishek Srivastava.",

    url: "https://abhisheksrivastava.design",

    siteName: "Abhishek Srivastava",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Srivastava Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Abhishek Srivastava",

    description:
      "I design systems that solve real user problems. Portfolio of Abhishek Srivastava.",

    images: ["https://abhisheksrivastava.design/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-grid font-sans selection:bg-primary/30 min-h-screen flex flex-col relative">
        <div className="particles-container"></div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
