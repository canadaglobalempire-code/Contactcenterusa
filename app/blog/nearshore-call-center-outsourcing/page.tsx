import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Nearshore Call Center Outsourcing: Complete Guide for US Businesses",
  description:
    "Complete guide to nearshore call center outsourcing for US businesses. Compare nearshore vs offshore outsourcing, top nearshore locations (Mexico, Colombia, Costa Rica, El Salvador), pricing, benefits, and why US-based onshore call centers may be the best choice.",
  keywords: [
    "nearshore call center",
    "nearshore contact center",
    "nearshore call center outsourcing",
    "nearshore outsourcing",
    "call center mexico",
    "call center el salvador",
    "philippines call center outsourcing",
    "offshore outsourcing",
    "nearshore BPO",
    "call center outsourcing latin america",
    "nearshore vs offshore call center",
    "US based call center",
  ],
  alternates: { canonical: "/blog/nearshore-call-center-outsourcing" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Nearshore Call Center Outsourcing: Complete Guide for US Businesses",
            description: "Complete guide to nearshore call center outsourcing for US businesses. Compare nearshore locations, pricing, benefits, and learn why many companies are choosing US-based onshore call centers.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-04",
            dateModified: "2026-04-14",
            url: "https://www.contactcenterusa.com/blog/nearshore-call-center-outsourcing",
          }),
        }}
      />
      <Content />
    </>
  );
}
