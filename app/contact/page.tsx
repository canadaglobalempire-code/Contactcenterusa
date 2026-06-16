import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo-config";
import { ContactHero } from "./ContactHero";
import { ContactFormSection } from "./ContactFormSection";

const title = "Call Center Quote Request | Contact Center USA";
const description =
  "Request a call center outsourcing quote from Contact Center USA. Share your volume, channels, hours, and timeline to get the right support model.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  ...pageMeta(title, description, "/contact"),
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
