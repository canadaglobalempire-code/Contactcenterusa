import type { Metadata } from "next";
import { ContactHero } from "./ContactHero";
import { ContactFormSection } from "./ContactFormSection";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact Center USA — get a free consultation for US-based call center outsourcing services. Speak to our experts today.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
