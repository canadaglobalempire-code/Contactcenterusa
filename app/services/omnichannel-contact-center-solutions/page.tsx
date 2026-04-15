import type { Metadata } from "next";
import { OmnichannelContent } from "./Content";

export const metadata: Metadata = {
  title: "Omnichannel Contact Center Solutions | Seamless CX",
  description:
    "Deliver seamless omnichannel call center and multichannel customer support experiences across voice, chat, email, social, and SMS. 92% first-contact resolution with 7 unified channels and seamless handoff powered by Contact Center USA.",
  alternates: { canonical: "/services/omnichannel-contact-center-solutions" },
};

export default function OmnichannelSolutionsPage() {
  return <OmnichannelContent />;
}
