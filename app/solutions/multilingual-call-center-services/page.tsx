import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Multilingual Call Center USA | Bilingual BPO USA & Multilingual Customer Support",
  description:
    "Multilingual call center services from a 100% US-based bilingual BPO. Native Spanish and 20+ languages for multilingual customer support — reach 42M+ Spanish-speaking consumers in the US.",
  keywords: [
    "multilingual call center",
    "bilingual bpo usa",
    "multilingual customer support",
    "spanish call center",
    "bilingual call center services",
    "multilingual bpo",
    "spanish customer support",
    "translation and localization services",
  ],
  alternates: { canonical: "/solutions/multilingual-call-center-services" },
};

export default function Page() {
  return <Content />;
}
