import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Call Center Solutions | Contact Center USA",
  description:
    "Call Center Solutions from Contact Center USA. Learn services, coverage, industries, and quote options for US-based outsourcing.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
