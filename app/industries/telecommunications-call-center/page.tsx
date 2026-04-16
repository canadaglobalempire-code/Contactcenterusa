import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Telecommunications Call Center Services | Telecom Support | Contact Center USA",
  description:
    "Telecommunications call center services including technical support tiers 1-3, billing support, service activation, equipment troubleshooting, and subscriber retention. Trusted by telecom providers nationwide.",
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
    />
  );
}
