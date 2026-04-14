import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions | Contact Center USA",
  description:
    "Explore Contact Center USA's full range of US-based call center solutions — from customer service and technical support to lead generation, back office, and multilingual services.",
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
