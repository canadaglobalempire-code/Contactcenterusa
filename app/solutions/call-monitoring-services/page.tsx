import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Call Monitoring Services | QA & Call Scoring | Contact Center USA",
  description:
    "Professional call monitoring services including quality assurance, call recording, agent scoring, and real-time coaching. Improve service quality and compliance across your contact center.",
  alternates: { canonical: "/solutions/call-monitoring-services" },
};

const features = [
  {
    title: "Live Call Monitoring & Whisper Coaching",
    desc: "Supervisors can listen to calls in real time and provide whisper coaching to agents without the customer hearing, enabling on-the-spot corrections and faster skill development across your team.",
  },
  {
    title: "Automated Call Recording & Storage",
    desc: "Every inbound and outbound call is automatically recorded, encrypted, and stored in compliance with PCI-DSS and HIPAA standards. Easily search, retrieve, and export recordings for training or dispute resolution.",
  },
  {
    title: "Custom QA Scorecards",
    desc: "We build tailored quality assurance scorecards aligned to your brand standards, compliance requirements, and customer experience goals — then score every evaluated interaction consistently against those benchmarks.",
  },
  {
    title: "Speech Analytics & Sentiment Detection",
    desc: "AI-powered speech analytics identify trending topics, detect customer sentiment in real time, and flag calls that need immediate supervisor attention — turning raw call data into actionable business intelligence.",
  },
  {
    title: "Agent Performance Dashboards",
    desc: "Interactive dashboards give supervisors and managers instant visibility into agent-level metrics including QA scores, adherence trends, first-call resolution rates, and coaching completion tracking.",
  },
  {
    title: "Compliance & Regulatory Auditing",
    desc: "Automated compliance monitoring ensures every call meets TCPA, PCI-DSS, HIPAA, and industry-specific regulatory requirements. Flagged calls are routed for immediate review to mitigate risk before it escalates.",
  },
];

const benefits = [
  "Real-time call listening and coaching",
  "PCI-DSS and HIPAA compliant recording",
  "AI-powered speech analytics",
  "Custom QA scorecards and benchmarks",
  "Agent performance trend reporting",
  "Automated compliance flagging",
];

const stats = [
  { value: 40, suffix: "%", label: "Improvement in QA Scores" },
  { value: 99.9, suffix: "%", label: "Call Recording Uptime", decimals: 1 },
  { value: 2, suffix: "M+", label: "Calls Monitored Annually" },
  { value: 25, suffix: "%", label: "Reduction in Compliance Issues" },
];

const testimonial = {
  quote:
    "Since partnering with Contact Center USA for call monitoring, our QA scores have improved by 40% and compliance violations dropped to near zero. Their scorecards and coaching workflows transformed how we develop our agents.",
  name: "Karen Liu",
  title: "Director of Quality Assurance",
  company: "A National Insurance Provider",
  initials: "KL",
};

const faqs = [
  {
    question: "How does live call monitoring work without disrupting the customer?",
    answer:
      "Our platform supports silent monitoring, whisper coaching, and barge-in capabilities. Supervisors join the call in listen-only mode by default. Whisper mode lets them coach the agent privately, and barge-in allows direct intervention when needed — all invisible to the customer unless the supervisor chooses otherwise.",
  },
  {
    question: "Are call recordings stored securely and in compliance with regulations?",
    answer:
      "Yes. All recordings are encrypted at rest and in transit, stored in SOC 2 Type II certified data centers, and retained according to your specific compliance requirements. We support PCI-DSS, HIPAA, TCPA, and industry-specific regulations with configurable retention policies.",
  },
  {
    question: "Can you customize QA scorecards for our specific needs?",
    answer:
      "Absolutely. We work with your quality and training teams to build scorecards that reflect your brand voice, compliance obligations, and customer experience priorities. Scorecards can be weighted, categorized, and updated as your standards evolve.",
  },
  {
    question: "What kind of insights does speech analytics provide?",
    answer:
      "Our speech analytics engine detects customer sentiment, identifies trending keywords and phrases, flags compliance risks, and surfaces coaching opportunities. You receive automated reports highlighting call drivers, escalation patterns, and areas where targeted training can improve outcomes.",
  },
  {
    question: "How quickly can we get started with call monitoring services?",
    answer:
      "Most clients are fully operational within two to three weeks. We handle platform configuration, scorecard development, agent calibration sessions, and supervisor training during onboarding to ensure your monitoring program delivers value from day one.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with custom scripts, intelligent routing, and quality-monitored agents.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Customer Experience Management",
    desc: "End-to-end CX strategy including journey mapping, NPS programs, and voice-of-customer analytics.",
    href: "/solutions/customer-experience-management",
  },
  {
    title: "Technical Support Outsourcing",
    desc: "Tiered technical support with monitored quality and compliance across every interaction.",
    href: "/solutions/technical-support-outsourcing",
  },
];

export default function CallMonitoringServicesPage() {
  return (
    <ServicePageTemplate
      badge="Call Monitoring Services"
      title="Professional Call Monitoring & Quality Assurance Solutions"
      titleHighlight="Quality Assurance"
      subtitle="Elevate agent performance, ensure compliance, and deliver consistently exceptional customer experiences with our comprehensive call monitoring platform."
      description="Our call monitoring services combine real-time listening, AI-powered analytics, and custom QA scorecards to give you complete visibility into every customer interaction. From live whisper coaching to automated compliance auditing, we provide the tools and expertise to continuously improve your contact center quality."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-monitor.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
