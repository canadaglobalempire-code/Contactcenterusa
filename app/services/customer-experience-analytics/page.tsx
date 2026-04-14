import type { Metadata } from "next";
import { CXAnalyticsContent } from "./Content";

export const metadata: Metadata = {
  title: "CX Analytics",
  description:
    "Unlock powerful customer experience analytics and call center analytics with journey mapping, sentiment analysis, quality monitoring, NPS/CSAT tracking, and real-time performance dashboards. Achieve a 45% CSAT improvement with 100+ KPI tracking from Contact Center USA.",
};

export default function CXAnalyticsPage() {
  return <CXAnalyticsContent />;
}
