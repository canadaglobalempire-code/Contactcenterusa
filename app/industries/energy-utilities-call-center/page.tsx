import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Energy & Utilities Call Center Services | Utility Customer Support | Contact Center USA",
  description:
    "Energy and utilities call center services including outage management, billing inquiries, smart meter support, energy conservation programs, and crisis response. Trusted by utility companies nationwide.",
  alternates: { canonical: "/industries/energy-utilities-call-center" },
};

const features = [
  {
    title: "Outage Management & Reporting",
    desc: "24/7 outage reporting and status communication with automated outage detection, real-time restoration updates, priority escalation for life-threatening situations, and proactive notification campaigns to affected service areas.",
  },
  {
    title: "Billing & Payment Support",
    desc: "Comprehensive billing inquiry handling including rate plan explanations, payment arrangement setup, budget billing enrollment, usage analysis, and dispute resolution to reduce call escalations and improve customer satisfaction.",
  },
  {
    title: "Energy Conservation Programs",
    desc: "Dedicated support for demand-side management and energy efficiency programs including rebate processing, home energy audit scheduling, appliance recycling coordination, and conservation tip campaigns.",
  },
  {
    title: "Smart Meter & AMI Support",
    desc: "Specialized support for advanced metering infrastructure including smart meter installation scheduling, usage portal assistance, real-time consumption alerts, and time-of-use rate program enrollment.",
  },
  {
    title: "Crisis & Emergency Response",
    desc: "Rapid-deployment crisis response teams for natural disasters, extreme weather events, and infrastructure emergencies with surge staffing, multi-channel communication, and coordination with field operations.",
  },
  {
    title: "Service Start, Stop & Transfer",
    desc: "Streamlined move-in and move-out processing with automated service activation, final bill generation, deposit management, and seamless account transfers that reduce processing time and customer effort.",
  },
];

const benefits = [
  "PUC & regulatory compliance",
  "24/7/365 emergency response",
  "CIS & billing system integration",
  "Surge capacity for storm events",
  "Bilingual English/Spanish agents",
  "IVR & self-service optimization",
];

const stats = [
  { value: 99.5, suffix: "%", label: "Uptime During Storm Events", decimals: 1 },
  { value: 40, suffix: "%", label: "Reduction in Call Escalations" },
  { value: 4, suffix: "M+", label: "Utility Calls Handled" },
  { value: 24, suffix: "/7", label: "Emergency Response" },
];

const testimonial = {
  quote:
    "During Hurricane season, Contact Center USA scaled from 50 to 300 agents in 48 hours. Their crisis response team kept our customers informed and our call abandonment rate under 3%. They are an essential partner.",
  name: "R.C.",
  title: "Director of Customer Operations",
  company: "A Regional Energy Utility",
  initials: "RC",
};

const faqs = [
  {
    question: "How do you handle sudden call volume spikes during outages or storms?",
    answer:
      "We maintain dedicated surge capacity pools and automated storm-mode protocols. When outage volumes spike, we activate overflow agents within minutes, deploy targeted IVR messages with restoration estimates, and launch proactive outbound notifications to reduce inbound call pressure.",
  },
  {
    question: "Are your agents trained on utility-specific regulations and compliance?",
    answer:
      "Yes. Our agents complete training on PUC regulations, NERC standards, and state-specific utility requirements. We maintain compliance documentation, record all interactions, and conduct regular audits to ensure every customer interaction meets regulatory standards.",
  },
  {
    question: "Can you integrate with our customer information system (CIS)?",
    answer:
      "Absolutely. We integrate with all major utility CIS platforms including Oracle Utilities, SAP IS-U, and Cayenta. Our agents work directly in your systems for real-time account access, service order processing, and accurate billing information.",
  },
  {
    question: "Do you support demand response and energy efficiency program enrollment?",
    answer:
      "Yes. We handle complete program enrollment workflows including eligibility verification, application processing, rebate fulfillment, and follow-up communication. We can also run outbound campaigns to drive program participation rates.",
  },
  {
    question: "What is your experience with municipal utilities versus investor-owned utilities?",
    answer:
      "We serve both municipal and investor-owned utilities across the country. We understand the different regulatory environments, rate structures, and customer expectations for each model, and customize our approach accordingly to meet your specific operational requirements.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with intelligent routing for utility customer inquiries.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Back Office Support",
    desc: "Streamlined back-office processing for service orders, billing adjustments, and account management.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Omnichannel Solutions",
    desc: "Seamless customer communication across phone, email, chat, text, and self-service portals.",
    href: "/services/omnichannel-contact-center-solutions",
  },
];

export default function EnergyUtilitiesPage() {
  return (
    <ServicePageTemplate
      badge="Energy & Utilities Call Center Services"
      title="Reliable Call Center Solutions for Energy & Utility Companies"
      titleHighlight="Energy & Utility Companies"
      subtitle="From outage management to billing support, we help energy and utility companies deliver reliable customer service that meets regulatory standards and exceeds expectations."
      description="Our energy and utilities call center is built for the unique demands of the utility industry — storm surge response, regulatory compliance, complex billing structures, and critical infrastructure communication. We partner with municipal utilities, cooperatives, and investor-owned utilities to deliver customer experiences that build trust and reduce operational costs."
      features={features}
      benefits={benefits}
      image="/images/cc-office-wide.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
