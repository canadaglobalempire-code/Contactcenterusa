import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Work-From-Home Solutions | Remote Agent Infrastructure | Contact Center USA",
  description:
    "Work-from-home contact center solutions including remote agent infrastructure, virtual desktop environments, secure connectivity, performance monitoring, and distributed workforce management.",
  alternates: { canonical: "/solutions/work-from-home-solutions" },
};

const features = [
  {
    title: "Remote Agent Infrastructure",
    desc: "Complete technology packages for remote agents including pre-configured laptops, headsets, secure VPN access, and cloud-based contact center software — enabling your workforce to deliver professional service from anywhere.",
  },
  {
    title: "Virtual Desktop & Cloud Environments",
    desc: "Secure virtual desktop infrastructure ensures every remote agent accesses the same tools, applications, and data as on-site staff. Centralized management simplifies updates, security patches, and configuration changes across your distributed workforce.",
  },
  {
    title: "Secure Connectivity & Compliance",
    desc: "Enterprise-grade VPN, multi-factor authentication, endpoint encryption, and DLP controls protect sensitive customer data regardless of agent location. We maintain compliance with PCI-DSS, HIPAA, and SOC 2 in every remote environment.",
  },
  {
    title: "Remote Performance Monitoring",
    desc: "Real-time dashboards track remote agent productivity, schedule adherence, quality scores, and engagement metrics. Screen monitoring, keystroke analytics, and activity logging ensure accountability without micromanagement.",
  },
  {
    title: "Virtual Training & Onboarding",
    desc: "Comprehensive virtual onboarding programs with interactive training modules, video assessments, simulated customer interactions, and remote mentoring that get new agents productive faster — no physical classroom required.",
  },
  {
    title: "Distributed Workforce Management",
    desc: "Workforce management tools optimized for distributed teams including flexible scheduling across time zones, shift-swapping, real-time adherence tracking, and communication platforms that keep remote agents connected and aligned.",
  },
];

const benefits = [
  "Complete remote agent technology packages",
  "Secure VDI and cloud desktop environments",
  "PCI-DSS and HIPAA compliant remote access",
  "Real-time remote performance monitoring",
  "Virtual training and onboarding programs",
  "Multi-timezone workforce management",
];

const stats = [
  { value: 50, suffix: "%", label: "Reduction in Facility Costs" },
  { value: 30, suffix: "%", label: "Wider Talent Pool Access" },
  { value: 99.5, suffix: "%", label: "Remote Agent Uptime", decimals: 1 },
  { value: 20, suffix: "%", label: "Improvement in Agent Retention" },
];

const testimonial = {
  quote:
    "Contact Center USA transitioned our entire 500-agent operation to work-from-home in under 30 days. Facility costs dropped 50%, agent retention improved 20%, and customer satisfaction actually went up. Their remote infrastructure and monitoring tools are best in class.",
  name: "P.G.",
  title: "SVP of Operations",
  company: "A National BPO Services Company",
  initials: "PG",
};

const faqs = [
  {
    question: "How do you ensure data security with remote agents?",
    answer:
      "We implement multiple security layers including enterprise VPN with split tunneling disabled, multi-factor authentication, endpoint encryption, virtual desktop isolation, data loss prevention policies, and continuous security monitoring. All remote environments are audited against PCI-DSS, HIPAA, and SOC 2 standards.",
  },
  {
    question: "Can remote agents perform as well as on-site agents?",
    answer:
      "Yes, and often better. Our remote performance data shows that work-from-home agents typically achieve equal or higher productivity, lower absenteeism, and better retention rates compared to on-site staff. The key is proper technology, monitoring, and engagement programs — all of which we provide.",
  },
  {
    question: "How do you handle equipment provisioning for remote agents?",
    answer:
      "We manage the full equipment lifecycle including procurement, pre-configuration, secure shipping, setup support, maintenance, and recovery. Agents receive standardized technology packages that are remotely managed and monitored by our IT team.",
  },
  {
    question: "What happens if a remote agent experiences technical issues?",
    answer:
      "Our 24/7 IT help desk provides immediate support for remote agents via phone, chat, and remote desktop. Most issues are resolved within 15 minutes. For hardware failures, we ship replacement equipment overnight and can temporarily reroute the agent's workload to maintain service levels.",
  },
  {
    question: "Can you support a hybrid model with both on-site and remote agents?",
    answer:
      "Absolutely. Many of our clients run hybrid operations. Our platform and processes are designed to manage on-site and remote agents seamlessly within the same queues, quality programs, and reporting dashboards — giving you maximum flexibility in workforce deployment.",
  },
];

const relatedServices = [
  {
    title: "Information Technology Services",
    desc: "Full IT support including help desk, cloud management, and network administration for remote teams.",
    href: "/solutions/information-technology-services",
  },
  {
    title: "Dialer & ACD Administration",
    desc: "Cloud-based telephony management optimized for distributed and remote agent environments.",
    href: "/solutions/dialer-acd-administration",
  },
  {
    title: "Call Monitoring Services",
    desc: "QA monitoring and coaching tools designed to maintain quality across remote workforces.",
    href: "/solutions/call-monitoring-services",
  },
];

export default function WorkFromHomeSolutionsPage() {
  return (
    <ServicePageTemplate
      badge="Work-From-Home Solutions"
      title="Work-From-Home Contact Center Solutions for the Modern Workforce"
      titleHighlight="Modern Workforce"
      subtitle="Enable secure, high-performing remote agents with complete infrastructure, monitoring, and management tools built for distributed contact centers."
      description="Our work-from-home solutions provide everything you need to run a distributed contact center that performs as well or better than traditional on-site operations. From secure remote infrastructure and virtual desktops to performance monitoring and virtual training, we deliver the technology, processes, and expertise to make remote work a strategic advantage for your business."
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
