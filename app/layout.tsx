import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INVENTOG - Innovative Software Solutions",
  description:
    "INVENTOG delivers cutting-edge software development, web applications, and digital transformation solutions for modern businesses.",
  keywords:
    "software development, web development, digital transformation, cloud solutions, enterprise software, INVENTOG",
  authors: [{ name: "INVENTOG" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inventog.com",
    siteName: "INVENTOG",
    title: "INVENTOG - Innovative Software Solutions",
    description:
      "Leading software development company specializing in digital transformation and enterprise solutions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        width: 1200,
        height: 630,
        alt: "INVENTOG Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INVENTOG - Innovative Software Solutions",
    description:
      "Leading software development company specializing in digital transformation and enterprise solutions.",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <AnimatePresence mode="wait">
              <main className="flex-1">{children}</main>
            </AnimatePresence>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
