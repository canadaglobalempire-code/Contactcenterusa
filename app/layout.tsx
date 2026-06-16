import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/shared/MobileStickyCTA";
import {
  generateOrganizationSchema,
  generateServiceCatalogSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://contactcenterusa.com"),
  applicationName: "Contact Center USA",
  creator: "Contact Center USA",
  publisher: "Contact Center USA",
  category: "Call Center Outsourcing",
  verification: {
    google: [
      "Q8nqe1KtPCYANReH_fxQPK1EQsrnSpuUDKga_j0m7cc",
      "JSWdLp8JtC2UjSUlethPvkCKwUQtUUWsE6Cfld2YDFQ",
    ],
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
    template: "%s",
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
    url: "https://contactcenterusa.com",
    siteName: "Contact Center USA",
    title: "Contact Center USA | US-Based Call Center Outsourcing Services",
    description:
      "Looking for reliable US-based call center services? Contact Center USA offers 24/7 inbound & outbound support with dedicated agents. No contracts. Get a free quote today.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Center USA - US-based call center outsourcing services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Center USA | US-Based Call Center Outsourcing Services",
    description:
      "Looking for reliable US-based call center services? Contact Center USA offers 24/7 inbound & outbound support with dedicated agents. No contracts. Get a free quote today.",
    images: [
      {
        url: "/twitter-image",
        alt: "Contact Center USA - US-based call center outsourcing services",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PJDXM78DK3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PJDXM78DK3');`}
        </Script>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "x2didnc0ex");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceCatalogSchema()).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1 pb-[72px] lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
