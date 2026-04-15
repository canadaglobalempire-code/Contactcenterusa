import type { Metadata } from "next";
import { CustomerAcquisitionContent } from "./Content";

export const metadata: Metadata = {
  title: "Customer Acquisition Outsourcing | Lead Generation Services",
  description:
    "Drive growth with customer acquisition outsourcing and lead generation call center services. US-based outbound campaigns, B2B/B2C marketing, appointment setting, and full-cycle sales support delivering 35% more qualified leads and 3x ROI from Contact Center USA.",
  alternates: { canonical: "/services/customer-acquisition-outsourcing" },
};

export default function CustomerAcquisitionPage() {
  return <CustomerAcquisitionContent />;
}
