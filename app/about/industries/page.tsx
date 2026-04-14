import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Industries We Serve | Contact Center USA — 16+ Industries",
  description:
    "Contact Center USA serves 16+ industries including healthcare, financial services, telecommunications, ecommerce, insurance, travel, and more. Tailored call center solutions for every sector.",
};

export default function Page() {
  return <Content />;
}
