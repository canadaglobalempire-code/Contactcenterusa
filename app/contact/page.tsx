import type { Metadata } from "next";
import { ContactHero } from "./ContactHero";
import { ContactFormSection } from "./ContactFormSection";

export const metadata: Metadata = {
  title: "Call Center Quote Request | Contact Center USA",
  description:
    "Request a call center outsourcing quote from Contact Center USA. Share your volume, channels, hours, and timeline to get the right support model.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
