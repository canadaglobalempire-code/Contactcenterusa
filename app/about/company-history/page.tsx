import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Company History | Contact Center USA — Founded 1999, 3000+ Employees",
  description:
    "Discover the history of Contact Center USA — founded in 1999, now 3,000+ employees strong with over 30 years of combined leadership experience in US-based call center outsourcing.",
};

export default function Page() {
  return <Content />;
}
