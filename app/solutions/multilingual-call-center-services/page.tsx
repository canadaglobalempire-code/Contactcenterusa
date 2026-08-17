import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Multilingual Call Center Services | Native Speakers",
  description:
    "Multilingual call center services with native-speaking agents. Spanish, Portuguese, French and more, with no per-minute interpreter fees. Get a quote.",
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
