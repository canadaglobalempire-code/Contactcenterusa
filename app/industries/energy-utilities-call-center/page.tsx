import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Energy Call Center & Utilities BPO in USA | Contact Center USA",
  description:
    "US-based energy call center and utilities BPO services — utility customer service outsourcing, outage management, billing, smart meter support, and storm-mode surge for electric, gas, and water utilities.",
  keywords: [
    "energy call center",
    "utilities bpo",
    "utility customer service outsourcing",
    "electric utility call center",
    "gas utility bpo services",
    "water utility customer support",
    "storm surge call center",
    "smart meter support outsourcing",
  ],
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Energy Call Center in USA",
    heading: "The energy call center engineered for storm mode, regulatory scrutiny, and the worst day on your grid.",
    accent: "worst day on your grid",
    body: [
      "Contact Center USA is one of the best energy call center providers in the USA — a 100% US-based utilities BPO with CIS integrations, PUC-aligned agent certification, and storm-mode surge capacity designed for investor-owned, municipal, and cooperative utilities.",
      "For electric, gas, water, and multi-utility operators evaluating utility customer service outsourcing, we deliver lower abandonment during outages, fewer regulatory escalations, and consistent customer trust across the service lifecycle.",
    ],
    stats: [
      { stat: "6x", label: "Call volume surge absorbed during Cat 3+ hurricanes without queue collapse" },
      { stat: "-40%", label: "Reduction in escalations and PUC complaints after cutover" },
      { stat: "4M+", label: "Utility customer interactions handled annually across our book of business" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Utility Support vs. Contact Center USA BPO",
    intro:
      "Utilities face a brutal staffing math problem: storms, freezes, and heat waves create 5–10x volume spikes that no fixed roster can cover. Here's how internal centers compare to a specialized utilities BPO.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Storm-Mode Surge",
        left: "Abandonment rates climb above 20% within 2 hours of a major outage event.",
        right: "Storm-mode protocols scale staffing 6x, hold abandonment under 5% through the event.",
        leftYes: false,
      },
      {
        label: "Regulatory & PUC Posture",
        left: "Compliance training reactive — complaint letters drive corrective action after the fact.",
        right: "PUC-aligned training, 100% call recording, and audit-ready documentation by default.",
        leftYes: false,
      },
      {
        label: "CIS Integration",
        left: "Oracle Utilities, SAP IS-U, and Cayenta access is seat-limited across the organization.",
        right: "Full CIS integration with real-time account access, service orders, and billing adjustments.",
        leftYes: false,
      },
      {
        label: "Emergency vs. Non-Emergency Routing",
        left: "Hazard and outage calls compete with billing queries on the same queue.",
        right: "Dedicated emergency lanes with priority routing and gas-leak/wires-down escalation paths.",
        leftYes: false,
      },
      {
        label: "Demand Response Programs",
        left: "Energy-efficiency programs handled by third parties with fragmented customer experience.",
        right: "End-to-end DR and rebate program support integrated with your core customer experience.",
        leftYes: false,
      },
      {
        label: "Cost Efficiency",
        left: "Fixed labor and facility cost whether it's a calm Tuesday or an ice storm.",
        right: "Variable cost model aligned to call volume — pay for the storm day, not the idle week.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Utilities BPO Onboarding & Storm-Mode Build",
    intro:
      "Every utility partnership follows the same five-stage onboarding — engineered to protect customer data, integrate with your CIS, and prove storm-mode readiness before your first severe-weather event.",
    steps: [
      {
        title: "Utility Discovery",
        body: "Service territory, regulators, CIS stack, rate structures, and outage playbooks mapped together.",
      },
      {
        title: "CIS & OMS Integration",
        body: "Secure connections to Oracle Utilities, SAP IS-U, Cayenta, outage management, and IVR platforms.",
      },
      {
        title: "Regulatory Certification",
        body: "Agents certified on PUC rules, gas-safety protocols, SCRA, and state-specific utility regulations.",
      },
      {
        title: "Storm-Mode Drill",
        body: "Simulated major-outage drill that stress-tests surge activation, IVR takeover, and proactive outbound.",
      },
      {
        title: "Production Cutover",
        body: "Full production launch with daily KPI review during the first severe-weather season.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Utility Sub-Segments Our BPO Supports",
    intro:
      "Electric, gas, water, and multi-utility operators all face different regulatory overlays and customer expectations. Our utilities BPO model flexes to the ownership structure and operating profile of each.",
    items: [
      {
        icon: "zap",
        stat: "Electric",
        title: "Electric Utilities",
        body: "IOU, municipal, and co-op electric service — outage, billing, rates, and smart meter support.",
      },
      {
        icon: "zap",
        stat: "Gas",
        title: "Natural Gas Utilities",
        body: "Gas-leak escalation, safety outreach, heating-season surge, and demand-response enrollment.",
      },
      {
        icon: "home",
        stat: "Water",
        title: "Water & Wastewater",
        body: "Billing, boil-water notices, service requests, and conservation programs for municipal water.",
      },
      {
        icon: "signal",
        stat: "Retail",
        title: "Retail Energy Providers",
        body: "Enrollment, plan renewal, TPV, and billing support for deregulated REP markets.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Utilities Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore utility customer service outsourcing exposes utilities to PUC risk — regulators and commissioners expect domestic handling for critical infrastructure conversations. Generalist BPOs can't absorb the 5–10x storm surges that define the US utility operating model.",
      "Contact Center USA is different: a 100% US-based energy call center with storm-mode playbooks, CIS-integrated agents, and supervisors who've run severe-weather events alongside utility ops leaders.",
    ],
    bullets: [
      "100% US-based utilities BPO workforce — critical infrastructure stays domestic",
      "CIS integration with Oracle Utilities, SAP IS-U, Cayenta, and custom platforms",
      "PUC-aligned training, 100% call recording, and audit-ready documentation",
      "Storm-mode surge staffing proven across hurricanes, ice storms, and heat domes",
      "Emergency, billing, payment arrangement, and demand-response lanes on one platform",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your energy call center to a US-based utilities BPO?",
    accent: "US-based utilities BPO",
    body: "If your abandonment rates climb during outages, your PUC escalations are trending up, or your demand-response programs aren't hitting enrollment targets, request a free consultation. We'll build a storm-mode staffing plan and expected impact on abandonment, escalations, and cost per interaction.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
