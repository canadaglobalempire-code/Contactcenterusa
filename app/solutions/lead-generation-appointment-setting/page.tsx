import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Lead Generation Services | Cold Calling & Appointment Setting",
  description:
    "Fill your sales pipeline with qualified leads through strategic cold calling, BANT qualification, and appointment setting by US-based agents. 35% lower cost per lead and 3x pipeline growth.",
  alternates: { canonical: "/solutions/lead-generation-appointment-setting" },
};

export default function Page() {
  return <Content />;
}
