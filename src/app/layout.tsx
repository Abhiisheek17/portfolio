import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Abhishek Srivastava",
  description: "I design systems that solve real user problems. Portfolio of Abhishek Srivastava.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23000000%22/><text x=%2250%22 y=%2268%22 font-family=%22sans-serif%22 font-size=%2255%22 font-weight=%22900%22 fill=%22%23FFFFFF%22 text-anchor=%22middle%22>AS</text></svg>"
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
      </body>
    </html>
  );
}
