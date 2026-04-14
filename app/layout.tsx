import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.contactcenterusa.com"),
  verification: {
    google: "Q8nqe1KtPCYANReH_fxQPK1EQsrnSpuUDKga_j0m7cc",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Contact Center USA | US-Based Call Center Outsourcing Services",
    template: "%s | Contact Center USA",
  },
  description:
    "Looking for reliable US-based call center services? Contact Center USA offers 24/7 inbound & outbound support with dedicated agents. No contracts. Get a free quote today.",
  keywords: [
    "contact center USA",
    "call center outsourcing",
    "US-based call center",
    "customer support outsourcing",
    "inbound call center services",
    "outbound call center services",
  ],
  authors: [{ name: "Contact Center USA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Contact Center USA",
    title: "Contact Center USA | US-Based Call Center Outsourcing Services",
    description:
      "Looking for reliable US-based call center services? Contact Center USA offers 24/7 inbound & outbound support with dedicated agents. No contracts. Get a free quote today.",
    images: [
      {
        url: "/images/logo-v3.png",
        width: 1200,
        height: 630,
        alt: "Contact Center USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Center USA | US-Based Call Center Outsourcing Services",
    description:
      "Looking for reliable US-based call center services? Contact Center USA offers 24/7 inbound & outbound support with dedicated agents. No contracts. Get a free quote today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
