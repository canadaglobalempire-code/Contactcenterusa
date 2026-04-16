import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Dialer & ACD Administration | Call Routing Solutions | Contact Center USA",
  description:
    "Predictive dialer and ACD administration services including call routing optimization, campaign management, IVR configuration, and workforce management integration for high-performance contact centers.",
  alternates: { canonical: "/solutions/dialer-acd-administration" },
};

const features = [
  {
    title: "Predictive Dialer Management",
    desc: "We configure, optimize, and manage predictive dialer campaigns to maximize agent talk time, minimize idle periods, and maintain TCPA compliance — driving higher connect rates and better conversion outcomes for outbound programs.",
  },
  {
    title: "ACD Configuration & Call Routing",
    desc: "Intelligent automatic call distribution that routes inbound calls to the right agent based on skills, language, priority, customer history, and real-time queue conditions to reduce wait times and improve first-call resolution.",
  },
  {
    title: "IVR Design & Optimization",
    desc: "Custom interactive voice response menus that guide callers efficiently, deflect routine inquiries to self-service, and collect critical information before connecting to a live agent — improving both containment rates and caller satisfaction.",
  },
  {
    title: "Campaign Management & Pacing",
    desc: "End-to-end outbound campaign management including list loading, pacing adjustments, time-zone compliance, disposition tracking, and real-time performance optimization to hit your outreach targets without burning through your data.",
  },
  {
    title: "Workforce Management Integration",
    desc: "We integrate your dialer and ACD systems with workforce management platforms to align agent scheduling, skill-based routing, and real-time adherence tracking — ensuring you have the right agents available at peak demand periods.",
  },
  {
    title: "Reporting & Real-Time Monitoring",
    desc: "Comprehensive dashboards display real-time queue status, agent states, abandonment rates, service levels, and campaign performance metrics. Automated alerts notify supervisors when KPIs fall outside acceptable thresholds.",
  },
];

const benefits = [
  "Predictive dialer optimization and TCPA compliance",
  "Skills-based intelligent call routing",
  "Custom IVR design and self-service deflection",
  "Real-time queue and campaign monitoring",
  "Workforce management system integration",
  "Automated alerting and threshold management",
];

const stats = [
  { value: 45, suffix: "%", label: "Increase in Agent Talk Time" },
  { value: 30, suffix: "%", label: "Reduction in Call Wait Times" },
  { value: 98, suffix: "%", label: "Service Level Achievement" },
  { value: 20, suffix: "%", label: "Improvement in Connect Rates" },
];

const testimonial = {
  quote:
    "Contact Center USA re-engineered our entire dialer and ACD configuration. Agent talk time increased 45%, wait times dropped by a third, and our outbound connect rates hit levels we did not think were possible. Their technical expertise is outstanding.",
  name: "James Rivera",
  title: "VP of Contact Center Operations",
  company: "A Regional Financial Services Firm",
  initials: "JR",
};

const faqs = [
  {
    question: "What dialer and ACD platforms do you support?",
    answer:
      "We support all major platforms including Five9, NICE CXone, Genesys Cloud, Avaya, Cisco UCCE, Amazon Connect, Twilio Flex, and RingCentral. Our team holds certifications across these platforms and can manage multi-vendor environments.",
  },
  {
    question: "How do you ensure TCPA compliance for outbound dialing?",
    answer:
      "We implement multi-layered compliance including DNC list scrubbing, time-zone restrictions, consent management, pacing controls, and real-time compliance monitoring. Every campaign configuration is reviewed against current TCPA regulations before launch.",
  },
  {
    question: "Can you optimize our existing IVR without a full replacement?",
    answer:
      "Yes. We regularly optimize existing IVR systems by analyzing call flow data, identifying abandonment points, simplifying menu structures, and adding self-service options. Many clients see significant improvements without replacing their underlying platform.",
  },
  {
    question: "Do you provide after-hours and weekend support for system issues?",
    answer:
      "We offer 24/7 system monitoring and support for critical dialer and ACD issues. Our operations center monitors system health continuously, and our engineering team is on call for emergency configuration changes, outage response, and rapid troubleshooting.",
  },
  {
    question: "How quickly can you onboard and start managing our systems?",
    answer:
      "Typical onboarding takes two to four weeks depending on system complexity. We begin with a thorough audit of your current configuration, identify optimization opportunities, implement changes in a staged rollout, and provide knowledge transfer to your internal team.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound services powered by optimized ACD routing and intelligent call distribution.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Outbound Call Center",
    desc: "High-performance outbound campaigns managed with predictive dialer expertise and compliance focus.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Information Technology Services",
    desc: "IT infrastructure support including telephony systems, cloud platforms, and network administration.",
    href: "/solutions/information-technology-services",
  },
];

export default function DialerAcdAdministrationPage() {
  return (
    <ServicePageTemplate
      badge="Dialer & ACD Administration"
      title="Expert Dialer & ACD Administration for High-Performance Contact Centers"
      titleHighlight="High-Performance Contact Centers"
      subtitle="Maximize agent productivity, optimize call routing, and maintain compliance with professionally managed dialer and ACD systems."
      description="Our dialer and ACD administration services take the complexity out of contact center telephony. From predictive dialer optimization and skills-based routing to IVR design and real-time monitoring, we manage the technology so your team can focus on delivering results. Whether you run inbound, outbound, or blended operations, our certified engineers ensure your systems perform at peak efficiency."
      features={features}
      benefits={benefits}
      image="/images/cc-team-collab.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
