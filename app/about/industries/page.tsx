import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Industries We Serve | Contact Center USA",
  description:
    "Explore the industries Contact Center USA supports, including healthcare, finance, ecommerce, technology, insurance, retail, and public sector teams.",
  alternates: { canonical: "/about/industries" },
};

export default function Page() {
  return <Content />;
}
