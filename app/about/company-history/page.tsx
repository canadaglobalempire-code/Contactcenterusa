import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Company History | Contact Center USA — Founded 1999, 500+ Employees",
  description:
    "Discover the history of Contact Center USA — founded in 1999, now 500+ employees strong with over 30 years of combined leadership experience in US-based call center outsourcing.",
  alternates: { canonical: "/about/company-history" },
};

export default function Page() {
  return <Content />;
}
