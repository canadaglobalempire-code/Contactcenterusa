import type { Metadata } from "next";
import { DigitalCXContent } from "./Content";

export const metadata: Metadata = {
  title: "Digital Customer Experience Services | CX Transformation",
  description:
    "Modernize your digital customer experience with omnichannel CX services including digital transformation, social media management, live chat, email support, and mobile app support. 95% customer satisfaction with 24/7 digital support from Contact Center USA.",
  alternates: { canonical: "/services/digital-customer-experience-services" },
};

export default function DigitalCXServicesPage() {
  return <DigitalCXContent />;
}
