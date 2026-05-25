import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Call Center Services | Contact Center USA",
  description:
    "Call Center Services from Contact Center USA. Learn services, coverage, industries, and quote options for US-based outsourcing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
