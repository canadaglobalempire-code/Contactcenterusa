import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Why Work With Us | Contact Center USA",
  description:
    "Learn why teams choose Contact Center USA for US-based agents, flexible programs, clear reporting, compliance support, and scalable customer care.",
  alternates: { canonical: "/about/why-work-with-us" },
};

export default function Page() {
  return <Content />;
}
