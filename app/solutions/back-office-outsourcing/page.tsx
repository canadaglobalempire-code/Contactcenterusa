import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Back Office Outsourcing Services | Data Entry & Document Processing",
  description:
    "Streamline your back office operations with US-based teams handling data entry, document processing, email management, and order fulfillment. Reduce costs by up to 40% with 99.5% accuracy.",
  alternates: { canonical: "/solutions/back-office-outsourcing" },
};

export default function Page() {
  return <Content />;
}
