import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo-config";

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
  return (
    <>
      {children}
    </>
  );
}
