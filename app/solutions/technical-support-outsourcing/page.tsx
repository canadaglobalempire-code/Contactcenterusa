import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Technical Support Outsourcing | Tier 1-3 Help Desk Services",
  description:
    "Expert Tier 1-3 technical support from trained US-based technicians. 82% first-call resolution, 50% lower cost per ticket, and 24/7 coverage for software, hardware, and IT help desk.",
  alternates: { canonical: "/solutions/technical-support-outsourcing" },
};

export default function Page() {
  return <Content />;
}
