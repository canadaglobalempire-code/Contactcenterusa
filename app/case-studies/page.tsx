import type { Metadata } from "next";
import { CaseStudiesContent } from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | Client Success Stories",
  description:
    "Explore how Contact Center USA has helped businesses across healthcare, ecommerce, financial services, and technology achieve measurable results with US-based call center outsourcing.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
