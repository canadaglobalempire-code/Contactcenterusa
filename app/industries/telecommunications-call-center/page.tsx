import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Telecommunications Call Center | Contact Center USA",
  description:
    "US-based telecommunications call center support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "telecom call center",
    "telecommunications bpo usa",
    "telecom customer service outsourcing",
    "wireless carrier support",
    "broadband customer service",
    "mvno call center",
    "cable tv customer service",
    "msp customer support outsourcing",
  ],
  alternates: { canonical: "/industries/telecommunications-call-center" },
};

const features = [
  {
    title: "Tiered Technical Support (1-3)",
    desc: "Comprehensive technical support from basic connectivity troubleshooting to advanced network diagnostics. Our agents resolve issues at the lowest tier possible, reducing escalations and improving first-call resolution across voice, data, and wireless services.",
  },
  {
    title: "Billing & Account Management",
    desc: "Expert billing support covering plan changes, payment processing, usage disputes, rate comparisons, and account adjustments. Our agents understand complex telecom billing structures and can explain charges clearly to reduce repeat calls.",
  },
  {
    title: "Service Activation & Provisioning",
    desc: "Smooth new service activation including number porting, equipment provisioning, feature configuration, and welcome programs. We guide customers through setup and verify service quality before closing the interaction.",
  },
  {
    title: "Equipment Troubleshooting",
    desc: "Device-specific support for smartphones, routers, modems, and CPE equipment. Our agents are trained on major device platforms and can perform remote diagnostics, firmware updates, and configuration changes to resolve issues without dispatching technicians.",
  },
  {
    title: "Subscriber Retention & Win-Back",
    desc: "Specialized retention agents who engage at-risk subscribers with targeted offers, plan optimization, and loyalty incentives. Our win-back campaigns re-engage former customers with competitive return offers that rebuild the subscriber base.",
  },
  {
    title: "Network Outage Communication",
    desc: "Real-time outage communication management with proactive subscriber notification, automated status updates, ticket creation, credit processing, and post-restoration follow-up to maintain trust during service disruptions.",
  },
];

const benefits = [
  "85%+ first-call resolution rate",
  "24/7/365 technical support",
  "OSS/BSS system integrations",
  "Bilingual English/Spanish agents",
  "Reduced technician dispatch rates",
  "Predictive churn analytics",
];

const stats = [
  { value: 85, suffix: "%", label: "First-Call Resolution" },
  { value: 28, suffix: "%", label: "Reduction in Subscriber Churn" },
  { value: 6, suffix: "M+", label: "Telecom Calls Handled" },
  { value: 40, suffix: "%", label: "Fewer Technician Dispatches" },
];

const testimonial = {
  quote:
    "Contact Center USA handles our tier 1 and tier 2 technical support across all product lines. First-call resolution jumped from 68% to 85%, and our technician dispatch rate dropped 40%. The ROI was evident within the first quarter.",
  name: "D.N.",
  title: "Chief Customer Officer",
  company: "A Major Telecom Provider",
  initials: "DN",
};

const faqs = [
  {
    question: "What technical support tiers do your agents handle?",
    answer:
      "We provide all three tiers of technical support. Tier 1 handles basic connectivity, password resets, and account inquiries. Tier 2 covers advanced troubleshooting, network diagnostics, and equipment configuration. Tier 3 addresses complex network issues with our senior technical team, coordinating with your NOC when needed.",
  },
  {
    question: "Can you integrate with our OSS/BSS platforms?",
    answer:
      "Yes. We integrate with major telecom operational and business support systems including Amdocs, CSG, Netcracker, and custom platforms. Our agents work directly in your systems for real-time provisioning, trouble ticketing, and account management.",
  },
  {
    question: "How do you train agents on our specific products and network?",
    answer:
      "We develop custom training programs in partnership with your product and engineering teams. This includes hands-on lab environments that replicate your network, device-specific certification tracks, and ongoing knowledge base updates as you launch new products or features.",
  },
  {
    question: "What is your approach to reducing technician dispatches?",
    answer:
      "We use a combination of enhanced troubleshooting scripts, remote diagnostic tools, and agent training to resolve issues without truck rolls. Our agents perform signal level checks, remote reboots, firmware updates, and configuration changes that eliminate unnecessary field visits.",
  },
  {
    question: "How do you handle number porting and carrier switch requests?",
    answer:
      "Our agents manage the complete porting process including eligibility verification, LOA documentation, port scheduling, and post-port validation. We also implement retention workflows that engage porting-out subscribers with save offers before processing the transfer.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Telecom BPO in USA",
    heading: "The telecom call center partner carriers rely on when subscriber churn, truck-roll costs, and technical NPS all have to move in the right direction.",
    accent: "the right direction",
    body: [
      "Contact Center USA is one of the best telecom call center providers in the USA — a 100% US-based telecommunications BPO USA operation trusted by wireless carriers, wireline providers, broadband and fiber operators, MVNOs, cable operators, and MSOs.",
      "For telecom leaders evaluating telecom customer service outsourcing, the metrics that matter are first-call resolution, technician dispatch avoidance, and subscriber save rate on porting-out interactions. We deliver meaningful movement on all three.",
    ],
    stats: [
      { stat: "85%", label: "First-call resolution across Tier 1 and Tier 2 technical support queues" },
      { stat: "40%", label: "Average reduction in technician dispatch rate after program launch" },
      { stat: "28%", label: "Average reduction in subscriber churn via targeted retention workflows" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Telecom Operations vs. Contact Center USA BPO",
    intro:
      "Every telecom operator weighs the same decision: maintain internal tier 1-2 capacity or outsource to a specialized telecommunications BPO USA operator. Here's how the two compare on the factors that drive cost-to-serve and subscriber lifetime value.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "OSS/BSS Platform Fluency",
        left: "Agents trained on your current stack; M&A and platform migrations create knowledge gaps.",
        right: "Active experience on Amdocs, CSG, Netcracker, Salesforce Comms Cloud, and custom OSS/BSS platforms.",
        leftYes: false,
      },
      {
        label: "Technician Dispatch Reduction",
        left: "Limited remote diagnostics; truck rolls default when agents run out of troubleshooting options.",
        right: "Enhanced remote diagnostics, signal-level checks, and firmware pushes that eliminate unnecessary dispatches.",
        leftYes: false,
      },
      {
        label: "Number Porting & LNP Workflow",
        left: "Port requests handled ad hoc; porting-out save opportunities routinely missed.",
        right: "Structured LNP workflow with eligibility verification and save offer protocol before port approval.",
        leftYes: false,
      },
      {
        label: "Outage & CAT Communication",
        left: "Outage communication ad hoc; subscribers flood social media with complaints during events.",
        right: "Proactive outage communication playbooks with ticket automation, status updates, and credit processing.",
        leftYes: false,
      },
      {
        label: "Retention & Win-Back",
        left: "Retention outreach deprioritized during volume spikes; churn compounds each billing cycle.",
        right: "Dedicated retention and win-back queue with save authority and plan optimization scripts.",
        leftYes: false,
      },
      {
        label: "24/7 Technical Coverage",
        left: "Overnight tier 2 thin; complex outage recovery bottlenecks on skeleton staffing.",
        right: "24/7/365 tier 1-2 coverage with NOC coordination protocols for tier 3 escalation.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Telecom BPO Onboarding Process",
    intro:
      "Every wireless carrier, wireline provider, MVNO, and cable operator flows through the same structured five-stage workflow — engineered to protect subscriber experience through migration while we ramp to full production.",
    steps: [
      {
        title: "Stack Discovery & Vendor Risk",
        body: "OSS/BSS mapping, InfoSec review, CPNI handling certification, and call flow documentation.",
      },
      {
        title: "OSS/BSS Integration",
        body: "Secure connections to Amdocs, CSG, Netcracker, Salesforce Comms Cloud, or your custom platforms.",
      },
      {
        title: "Troubleshooting & Retention Scripts",
        body: "Tier 1-2 diagnostic trees, LNP save scripts, outage communication playbooks, and CPNI-aware protocols.",
      },
      {
        title: "Agent Certification",
        body: "Product and platform certification, CPNI training, and shadow calls before live subscriber contact.",
      },
      {
        title: "Go-Live & Optimization",
        body: "Phased production launch with FCR, dispatch avoidance, and churn dashboards reviewed weekly.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Telecom Sub-Segments We Serve",
    intro:
      "Telecom spans several distinct sub-segments, each with unique technical realities and subscriber dynamics. Our telecom customer service outsourcing programs are tuned to each.",
    items: [
      {
        icon: "signal",
        stat: "Wireless",
        title: "Wireless Carriers & MVNOs",
        body: "Tier 1-2 support, device troubleshooting, activation, LNP, and retention for postpaid and prepaid wireless brands.",
      },
      {
        icon: "radio",
        stat: "Broadband",
        title: "Broadband, Fiber & Wireline",
        body: "Modem and router diagnostics, provisioning, install coordination, and SLA-bound broadband support.",
      },
      {
        icon: "tv",
        stat: "Cable",
        title: "Cable, MSO & Streaming",
        body: "Video, broadband, and voice bundle support for cable MSOs and streaming-era operators, with retention workflows.",
      },
      {
        icon: "briefcase",
        stat: "B2B",
        title: "Business & Enterprise Telecom",
        body: "UCaaS, SIP trunking, SD-WAN, and managed network support with named account coordination and SLAs.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Telecom Operators Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore telecom support frequently fails on accent, CPNI awareness, and the nuanced troubleshooting that distinguishes remote resolution from unnecessary truck rolls. Generic domestic call centers treat telecom like any other vertical — missing the OSS/BSS fluency and retention discipline that actually move churn.",
      "Contact Center USA is different: a 100% US-based telecom call center with active experience across the major OSS/BSS platforms, CPNI-certified agents, and retention programs that are audited against actual save rate.",
    ],
    bullets: [
      "100% US-based tier 1-2 technical, billing, and retention agents",
      "CPNI-certified workforce with documented handling procedures",
      "Active experience on Amdocs, CSG, Netcracker, Salesforce Comms Cloud",
      "Remote diagnostics and firmware push capability that reduces truck rolls",
      "Dedicated retention queue with save authority that moves churn numbers",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better telecom BPO partner?",
    accent: "better telecom BPO",
    body: "Whether you're a wireless carrier fighting churn, a fiber operator scaling activation capacity, a cable MSO navigating the streaming-era subscriber base, or an MVNO launching nationally — we can show you the FCR, dispatch avoidance, and churn impact before you commit. Request a free consultation and we'll walk through OSS/BSS integration, CPNI handling, and go-live timeline.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Technical Support",
    desc: "Multi-tier technical support with certified agents trained on your specific platforms.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Customer Retention",
    desc: "Data-driven retention programs that reduce churn and increase subscriber lifetime value.",
    href: "/solutions/customer-service-outsourcing",
  },
  {
    title: "A.I. Automation",
    desc: "Intelligent automation for routine inquiries, freeing agents for complex technical issues.",
    href: "/services/ai-call-center-automation",
  },
];

export default function TelecommunicationsPage() {
  return (
    <ServicePageTemplate
      badge="Telecommunications Call Center Services"
      title="Expert Call Center Solutions for Telecommunications Providers"
      titleHighlight="Telecommunications Providers"
      subtitle="From tier 1 troubleshooting to advanced network support, we help telecom providers deliver the technical expertise and customer care that reduces churn and drives subscriber growth."
      description="Our telecommunications call center combines deep technical knowledge with proven customer experience strategies to support wireless, wireline, broadband, and MVNO providers. We handle millions of telecom interactions annually — resolving technical issues, processing service changes, retaining at-risk subscribers, and driving revenue through upgrade campaigns. Our agents become a seamless extension of your brand."
      features={features}
      benefits={benefits}
      image="/images/cc-man-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
