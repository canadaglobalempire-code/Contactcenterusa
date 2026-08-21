import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Our Industry Experience | Contact Center USA",
  description:
    "Where our 25+ years of US-based contact center experience runs deepest \u2014 the sectors we staff, the compliance each demands, and the teams behind them.",
  alternates: { canonical: "/about/industries" },
};

export default function Page() {
  return <Content />;
}
