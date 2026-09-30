import type { Metadata } from "next";
import Content from "./Content";
import { pageMeta } from "@/lib/seo-config";

const title = "Multilingual Call Center Services | Native Speakers";
const description =
  "Multilingual call center services with native-speaking agents. Spanish, Portuguese, French and more, with no per-minute interpreter fees. Get a quote.";

export const metadata: Metadata = {
  title,
  description,
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
  ...pageMeta(title, description, "/solutions/multilingual-call-center-services"),
};

export default function Page() {
  return <Content />;
}
