import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Customer Service Outsourcing | US-Based Support",
  description: "Top customer service outsourcing company in the USA. Outsource customer service to 500+ US-based agents. 24/7 omnichannel support, ecommerce customer service outsourcing, healthcare customer service, and more. No contracts. Get a free quote.",
  keywords: ["customer service outsourcing", "outsourcing customer service", "outsource customer service", "customer service outsourcing companies", "ecommerce customer service outsourcing", "customer support outsourcing services", "outsourced customer service"],
  alternates: { canonical: "/solutions/customer-service-outsourcing" },
};

export default function Page() {
  return <Content />;
}
