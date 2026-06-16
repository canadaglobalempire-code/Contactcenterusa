import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo-config";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Call Center Outsourcing Case Studies | Contact Center USA",
  description:
    "Explore call center outsourcing case studies and examples of customer support, sales, technical support, and BPO programs.",
  alternates: { canonical: "/case-studies" },
  ...pageMeta(
    "Call Center Outsourcing Case Studies | Contact Center USA",
    "Explore call center outsourcing case studies and examples of customer support, sales, technical support, and BPO programs.",
    "/case-studies"
  ),
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://contactcenterusa.com" },
    { name: "Case Studies", url: "https://contactcenterusa.com/case-studies" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
