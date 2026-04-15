import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Social Media Customer Support | 24/7 Monitoring & Response",
  description:
    "Monitor, engage, and protect your brand across every social platform with dedicated US-based teams. Under 5-minute average response time, 24/7 monitoring, and crisis management.",
  alternates: { canonical: "/solutions/social-media-customer-support" },
};

export default function Page() {
  return <Content />;
}
