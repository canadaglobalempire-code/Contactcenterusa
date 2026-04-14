import type { Metadata } from "next";
import { ContactCenterSoftwareContent } from "./Content";

export const metadata: Metadata = {
  title: "Contact Center Software | Cloud, AI & Omnichannel Solutions",
  description:
    "Best cloud contact center software with AI automation, omnichannel support, workforce management, quality assurance, and real-time analytics. HIPAA-compliant healthcare contact center software, enterprise & SMB solutions, CRM integrations, and transparent pricing. 99.99% uptime guaranteed.",
};

export default function ContactCenterSoftwarePage() {
  return <ContactCenterSoftwareContent />;
}
