import type { Metadata } from "next";
import { CaseStudiesContent } from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Call Center Case Studies",
  description:
    "Explore call center outsourcing case studies and examples of customer support, sales, technical support, and BPO programs.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
