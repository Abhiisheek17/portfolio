import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Abhishek Srivastava",
  description: "I design systems that solve real user problems. Portfolio of Abhishek Srivastava.",
  icons: {
    icon: "/images/favicon/favicon.ico",
    shortcut: "/images/favicon/favicon.ico",
    apple: "/images/favicon/favicon.png",
  }
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
