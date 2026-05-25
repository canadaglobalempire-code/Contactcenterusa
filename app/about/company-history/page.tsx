import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Company History | Contact Center USA",
  description:
    "See Contact Center USA's company history, 1999 founding, US-based growth, service milestones, and customer support infrastructure.",
  alternates: { canonical: "/about/company-history" },
};

export default function Page() {
  return <Content />;
}
