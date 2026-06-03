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
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQ3KW3C5SY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZQ3KW3C5SY');`}
        </Script>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wboieqwa8s");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceCatalogSchema()),
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
