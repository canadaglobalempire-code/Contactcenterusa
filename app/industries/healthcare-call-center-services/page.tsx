import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Healthcare BPO Services | HIPAA Compliant Call Center USA | Contact Center USA",
  description:
    "One of the best healthcare BPO services providers in the USA. HIPAA compliant call center for hospitals, clinics, pharma, and DME — patient scheduling, triage, insurance verification, and 24/7 nurse hotlines.",
  keywords: [
    "healthcare bpo services",
    "healthcare call center usa",
    "hipaa compliant call center",
    "medical call center outsourcing",
    "patient support outsourcing",
    "healthcare customer service bpo",
    "hospital call center services",
    "clinic answering service",
  ],
  alternates: { canonical: "/industries/healthcare-call-center-services" },
};

const features = [
  {
    title: "HIPAA-Compliant Communications",
    desc: "Every interaction is protected under strict HIPAA guidelines with encrypted channels, secure data handling, and fully trained agents who understand protected health information requirements.",
  },
  {
    title: "Patient Appointment Scheduling",
    desc: "Seamless scheduling, rescheduling, and cancellation management integrated with your EHR and practice management systems to reduce no-shows and optimize provider calendars.",
  },
  {
    title: "Medical Triage Support",
    desc: "Registered nurse-supervised triage protocols help patients get directed to the right level of care, reducing unnecessary ER visits and improving patient outcomes.",
  },
  {
    title: "Insurance Verification & Pre-Auth",
    desc: "Real-time insurance eligibility checks and prior authorization processing to streamline the revenue cycle and reduce claim denials before patients arrive.",
  },
  {
    title: "Prescription Refill Management",
    desc: "Automated and agent-assisted prescription refill lines that integrate with pharmacy systems, ensuring patients receive timely medication without burdening clinical staff.",
  },
  {
    title: "After-Hours & Emergency Dispatch",
    desc: "24/7 after-hours answering services with escalation protocols that connect urgent cases to on-call providers while routing routine inquiries for next-day follow-up.",
  },
];

const benefits = [
  "100% HIPAA-compliant processes",
  "24/7/365 patient support",
  "EHR & EMR integrations",
  "Reduced patient no-show rates",
  "Bilingual English/Spanish agents",
  "Custom call scripting & protocols",
];

const stats = [
  { value: 99.8, suffix: "%", label: "HIPAA Compliance Rate", decimals: 1 },
  { value: 40, suffix: "%", label: "Reduction in No-Shows" },
  { value: 2, suffix: "M+", label: "Patient Calls Handled" },
  { value: 24, suffix: "/7", label: "Always-On Support" },
];

const testimonial = {
  quote:
    "Contact Center USA transformed our patient communication. Wait times dropped by 60% and our HIPAA compliance is airtight. They truly understand the healthcare space.",
  name: "S.M.",
  title: "Chief Operating Officer",
  company: "A Regional Hospital Network",
  initials: "SM",
};

const faqs = [
  {
    question: "Are your healthcare call center agents HIPAA certified?",
    answer:
      "Yes, every agent handling healthcare calls completes comprehensive HIPAA training and certification before taking a single call. We conduct annual recertification and regular audits to ensure ongoing compliance with all federal privacy regulations.",
  },
  {
    question: "Can you integrate with our existing EHR system?",
    answer:
      "Absolutely. We integrate with all major EHR and practice management platforms including Epic, Cerner, Athenahealth, and eClinicalWorks. Our IT team works directly with your systems administrators to ensure seamless, real-time data synchronization.",
  },
  {
    question: "How do you handle after-hours medical emergencies?",
    answer:
      "Our after-hours protocols are customized to your practice. We use nurse-supervised triage guidelines to assess urgency, connect critical cases to on-call providers within minutes, and route non-urgent matters for next-business-day follow-up.",
  },
  {
    question: "What languages do your healthcare agents support?",
    answer:
      "Our core team provides fluent English and Spanish support. For additional languages, we offer real-time interpreter services covering over 200 languages to ensure every patient receives care in their preferred language.",
  },
  {
    question: "How quickly can you onboard our healthcare organization?",
    answer:
      "Most healthcare clients are fully onboarded within 2-4 weeks. This includes HIPAA compliance setup, EHR integration, custom script development, agent training on your specific protocols, and thorough quality assurance testing before go-live.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Healthcare BPO in USA",
    heading: "The trusted healthcare call center USA providers turn to when patient experience and HIPAA compliance are non-negotiable.",
    accent: "non-negotiable",
    body: [
      "Contact Center USA is one of the best healthcare BPO services providers in the USA — a 100% US-based, HIPAA compliant call center serving hospitals, multi-specialty clinics, pharma manufacturers, and DME suppliers with patient-grade communication workflows.",
      "For health systems searching for a reliable healthcare call center USA partner, we combine clinically-informed triage protocols, EHR-integrated scheduling, and an independently audited privacy program that has never produced a material HIPAA finding in over a decade of operation.",
    ],
    stats: [
      { stat: "HIPAA", label: "Independently audited privacy program with zero material findings" },
      { stat: "40%", label: "Average reduction in patient no-shows across onboarded clients" },
      { stat: "2M+", label: "Patient interactions handled annually across voice, chat, and SMS" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Healthcare Staff vs. Contact Center USA BPO",
    intro:
      "Every provider weighs the same decision: expand front-desk and triage headcount internally or outsource to a specialized HIPAA compliant call center. Here's how the two compare on the factors that determine patient experience, compliance, and cost.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "HIPAA Training & Privacy Program",
        left: "Ad-hoc onboarding, annual refresher at best, documentation scattered across HR systems.",
        right: "Mandatory certification before first call, quarterly refreshers, independently audited program.",
        leftYes: false,
      },
      {
        label: "EHR Integration Depth",
        left: "Limited to whatever your EHR vendor offers out of the box; customization requires IT tickets.",
        right: "Live Epic, Cerner, Athenahealth, eClinicalWorks, and NextGen integrations with real-time sync.",
        leftYes: false,
      },
      {
        label: "24/7 Triage & After-Hours Coverage",
        left: "Requires overnight staffing, shift differentials, and nurse supervision — rarely cost-effective.",
        right: "Registered nurse-supervised triage available 24/7/365 with documented escalation protocols.",
        leftYes: false,
      },
      {
        label: "Insurance Verification & Prior Auth",
        left: "Backlogs at month-end; denials increase when verification staff are stretched thin.",
        right: "Real-time eligibility checks and prior auth processing tied to the revenue cycle workflow.",
        leftYes: false,
      },
      {
        label: "Surge Capacity (Open Enrollment, Flu Season)",
        left: "Hiring cycles of 60-90 days; seasonal spikes go to voicemail and hurt patient satisfaction.",
        right: "Pre-trained bench scales 3-5x within 2-4 weeks of forecast handoff.",
        leftYes: false,
      },
      {
        label: "Bilingual & Multi-Language Support",
        left: "Dependent on internal bilingual staff availability; often rely on external interpreter lines.",
        right: "Fluent English/Spanish core team plus on-demand interpreter coverage in 200+ languages.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our HIPAA Compliant Healthcare Onboarding Process",
    intro:
      "Every health system, specialty group, pharma program, and DME supplier flows through the same rigorous five-stage workflow — engineered to protect PHI and go live without disrupting patient care.",
    steps: [
      {
        title: "Discovery & BAA Execution",
        body: "Workflow mapping, PHI risk assessment, and signed Business Associate Agreement before any data handoff.",
      },
      {
        title: "EHR & System Integration",
        body: "Secure API connections to Epic, Cerner, Athena, NextGen or your practice management system under audit logging.",
      },
      {
        title: "Clinical Protocol Buildout",
        body: "Custom scripts, triage guidelines, insurance scripts, and escalation paths reviewed by clinical leadership.",
      },
      {
        title: "Agent Certification & QA",
        body: "HIPAA certification, specialty-specific training, and shadow calls before any agent handles live PHI.",
      },
      {
        title: "Go-Live & Continuous Improvement",
        body: "Staged launch with daily quality monitoring, weekly KPI review, and quarterly HIPAA compliance audits.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Healthcare Sub-Segments We Serve",
    intro:
      "Healthcare isn't one market — it's a portfolio of sub-segments with distinct regulatory overlays, patient populations, and revenue cycles. Our healthcare BPO services are tuned to each.",
    items: [
      {
        icon: "building",
        stat: "Hospitals",
        title: "Hospitals & Health Systems",
        body: "Centralized patient access, nurse triage, pre-admission, and post-discharge outreach for IDNs and regional systems.",
      },
      {
        icon: "stethoscope",
        stat: "Clinics",
        title: "Clinics & Multi-Specialty Groups",
        body: "Appointment scheduling, insurance verification, and prescription refill workflows for primary care and specialty clinics.",
      },
      {
        icon: "heart-pulse",
        stat: "Pharma",
        title: "Pharma & Patient Support",
        body: "Patient support programs, adherence outreach, hub services, and field reimbursement coordination for pharma manufacturers.",
      },
      {
        icon: "shield",
        stat: "DME",
        title: "DME & Home Health",
        body: "Order intake, insurance re-verification, compliance documentation, and refill reminders for DME and home health suppliers.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Providers Choose Contact Center USA for HIPAA Compliant Call Center Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore vendors frequently trip on HIPAA obligations because US privacy law doesn't extend cleanly across borders. Generic domestic call centers treat healthcare like any other vertical — they lack the clinical training, EHR fluency, and escalation discipline that patient communication demands.",
      "Contact Center USA is different: a 100% US-based healthcare BPO services operation with clinically-informed agents, EHR-integrated workflows, and a privacy program that's survived audits from the largest health systems in the country.",
    ],
    bullets: [
      "100% US-based workforce from SOC 2 Type II certified facilities",
      "Registered nurse-supervised triage available 24/7/365",
      "Native integrations with Epic, Cerner, Athenahealth, eClinicalWorks, NextGen",
      "Bilingual English/Spanish core team plus 200+ language interpreter access",
      "2-4 week go-live from signed BAA with staged launch and daily QA",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better healthcare BPO partner?",
    accent: "better healthcare BPO",
    body: "Whether you're a hospital drowning in patient access volume, a clinic losing revenue to insurance denials, a pharma team scaling a patient support hub, or a DME supplier wrestling with compliance documentation — we can show you expected impact before you commit. Request a free consultation and we'll walk you through integration scope, compliance posture, and go-live timeline.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with custom scripts and routing for healthcare providers.",
    href: "/services/inbound",
  },
  {
    title: "After-Hours Answering",
    desc: "24/7 live answering services so your patients always reach a real person.",
    href: "/services/after-hours",
  },
  {
    title: "Bilingual Support",
    desc: "English and Spanish-speaking agents to serve diverse patient populations.",
    href: "/services/bilingual",
  },
];

export default function HealthcarePage() {
  return (
    <ServicePageTemplate
      badge="Healthcare Call Center Services"
      title="Expert Call Center Solutions for Healthcare Providers"
      titleHighlight="Healthcare Providers"
      subtitle="HIPAA-compliant patient communication services that improve outcomes, reduce wait times, and let your clinical team focus on care delivery."
      description="Our healthcare call center combines deep industry expertise with rigorous HIPAA compliance to deliver patient experiences that reflect the quality of your practice. From appointment scheduling and insurance verification to after-hours triage, we handle the communication workload so your staff can focus on what matters most — patient care."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-row.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
