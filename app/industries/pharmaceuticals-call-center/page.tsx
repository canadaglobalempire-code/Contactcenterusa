import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Pharmaceutical Call Center USA | Pharma BPO Services | Pharmaceutical Customer Service Outsourcing",
  description:
    "US-based pharmaceutical call center and pharma BPO services. FDA-compliant patient support, adverse event reporting, HCP lines, and pharmaceutical customer service outsourcing with HIPAA certification.",
  keywords: [
    "pharmaceutical call center",
    "pharma bpo services",
    "pharmaceutical customer service outsourcing",
    "patient assistance program outsourcing",
    "adverse event reporting bpo",
    "pharma contact center services",
    "hcp support outsourcing",
    "pharma hub services",
  ],
  alternates: { canonical: "/industries/pharmaceuticals-call-center" },
};

const features = [
  {
    title: "Patient Assistance Programs",
    desc: "End-to-end management of patient assistance and co-pay programs including eligibility screening, enrollment processing, benefit verification, refill coordination, and outcomes tracking to help patients access the medications they need.",
  },
  {
    title: "Adverse Event Reporting",
    desc: "FDA-compliant adverse event intake and reporting with trained pharmacovigilance agents who capture complete case information, follow MedWatch guidelines, and ensure timely submission within regulatory timeframes.",
  },
  {
    title: "Medical Information & Drug Inquiries",
    desc: "Accurate, compliant responses to drug information requests from patients, caregivers, and healthcare providers — covering dosing, interactions, storage, availability, and formulary status with pharmacist oversight.",
  },
  {
    title: "Clinical Trial Support",
    desc: "Patient recruitment screening, enrollment coordination, visit scheduling, and retention support for clinical trials. Our agents help maintain enrollment targets and reduce dropout rates with proactive participant engagement.",
  },
  {
    title: "HCP & Provider Support Lines",
    desc: "Dedicated healthcare provider support for product inquiries, sample requests, formulary questions, medical science liaison referrals, and speaker program coordination — staffed by agents who understand the provider workflow.",
  },
  {
    title: "Product Launch & Specialty Support",
    desc: "Rapid-deployment support for new product launches including hub services, specialty pharmacy coordination, prior authorization assistance, and patient onboarding programs that accelerate time-to-therapy.",
  },
];

const benefits = [
  "FDA & HIPAA compliant operations",
  "Pharmacovigilance-trained agents",
  "Specialty pharmacy coordination",
  "Bilingual English/Spanish support",
  "Real-time adverse event escalation",
  "SOC 2 Type II certified infrastructure",
];

const stats = [
  { value: 99.9, suffix: "%", label: "Regulatory Compliance Rate", decimals: 1 },
  { value: 45, suffix: "%", label: "Faster AE Report Processing" },
  { value: 2, suffix: "M+", label: "Patient Interactions Handled" },
  { value: 100, suffix: "%", label: "On-Time AE Submissions" },
];

const testimonial = {
  quote:
    "Contact Center USA manages our patient assistance program and adverse event reporting for three branded products. Their pharmacovigilance training is rigorous, and we have never missed an FDA submission deadline. They are a true extension of our team.",
  name: "A.R.",
  title: "VP Medical Affairs",
  company: "A Leading Pharmaceutical Company",
  initials: "AR",
};

const faqs = [
  {
    question: "Are your agents trained in FDA adverse event reporting requirements?",
    answer:
      "Yes. Every agent on pharmaceutical accounts completes comprehensive pharmacovigilance training including MedWatch reporting, serious vs. non-serious AE classification, 15-day expedited reporting requirements, and periodic safety report protocols. We conduct quarterly refresher training and regular quality audits.",
  },
  {
    question: "How do you maintain HIPAA compliance for pharmaceutical programs?",
    answer:
      "We implement the same HIPAA safeguards used in healthcare: encrypted communications, access controls, BAA agreements, secure PHI handling, and comprehensive audit trails. All agents complete HIPAA certification before handling any patient data.",
  },
  {
    question: "Can you support specialty pharmacy hub services?",
    answer:
      "Absolutely. We provide full hub services including benefits investigation, prior authorization support, specialty pharmacy coordination, patient onboarding, adherence monitoring, and refill management. We integrate with major specialty pharmacies and payer systems.",
  },
  {
    question: "How do you handle medical information requests that require clinical expertise?",
    answer:
      "Our frontline agents handle standard drug information inquiries using approved response documents. Complex clinical questions are escalated to our pharmacist-supervised medical information team or routed to your medical science liaison team per your established protocols.",
  },
  {
    question: "What experience do you have with product launch support?",
    answer:
      "We have supported over 20 pharmaceutical product launches. Our launch playbook includes pre-launch agent training, rapid staffing ramp, hub service activation, provider support line setup, and real-time volume monitoring. We can be launch-ready within 4-6 weeks.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Pharmaceutical Call Center in USA",
    heading: "The pharma BPO services partner manufacturers trust when compliance and patient outcomes both matter.",
    accent: "compliance and patient outcomes",
    body: [
      "Contact Center USA is one of the best pharmaceutical call center providers in the USA — a 100% US-based pharma BPO services partner delivering FDA-compliant adverse event reporting, HIPAA-certified patient assistance programs, specialty pharmacy hub services, and HCP support lines for branded and specialty products.",
      "For medical affairs, patient services, and commercial leaders searching for pharmaceutical customer service outsourcing that can actually carry regulatory weight, we staff pharmacovigilance-trained agents, pharmacist-supervised MI teams, and SOC 2 Type II-certified infrastructure with zero missed FDA submissions across our book.",
    ],
    stats: [
      { stat: "100%", label: "On-time FDA adverse event submissions across client book" },
      { stat: "99.9%", label: "Measured regulatory compliance rate on audited programs" },
      { stat: "2M+", label: "Patient, caregiver, and HCP interactions handled annually" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Pharma Team vs. Pharmaceutical Customer Service Outsourcing",
    intro:
      "Pharma manufacturers often debate keeping patient services and PV in-house vs. partnering with a specialized pharma BPO. Here's how the models actually compare on regulatory risk, speed to launch, and cost.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Regulatory Expertise",
        left: "PV training often inconsistent; MedWatch and 15-day rules applied unevenly across staff.",
        right: "Dedicated pharmacovigilance curriculum, quarterly refreshers, and audited QA program.",
        leftYes: false,
      },
      {
        label: "Launch Readiness",
        left: "6–9 months to hire, train, and stand up hub, HCP, and PAP lines in-house.",
        right: "Launch-ready in 4–6 weeks with trained reserve pool and proven playbooks.",
        leftYes: false,
      },
      {
        label: "Cost per Program",
        left: "Fully loaded in-house hub costs $1.5–$3M annually before tech and facility spend.",
        right: "30–45% lower program cost with shared tech stack and managed-service model.",
        leftYes: false,
      },
      {
        label: "HIPAA & SOC 2 Posture",
        left: "Compliance evidence dispersed across functions; BAA and audit trail gaps common.",
        right: "SOC 2 Type II-certified with BAAs, audited access controls, and full trail.",
        leftYes: false,
      },
      {
        label: "Specialty Pharmacy Coordination",
        left: "Limited integrations with specialty pharmacies and payers — patient onboarding slow.",
        right: "Pre-built integrations with major SP networks and payer eligibility systems.",
        leftYes: false,
      },
      {
        label: "Scalability & Surge",
        left: "Hiring cycles mean launches, recalls, and safety events can't be staffed in time.",
        right: "Scale up or down in days for launches, safety events, and PAP enrollment spikes.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Pharma BPO Services Engagement Flow",
    intro:
      "Every pharmaceutical program runs through the same five-stage flow — engineered to meet FDA, HIPAA, and manufacturer SOP requirements without slowing commercial launch.",
    steps: [
      {
        title: "Program Design & SOPs",
        body: "We co-author PAP, PV, MI, and HCP SOPs with your medical affairs and compliance leaders.",
      },
      {
        title: "Team Build & Certification",
        body: "US-based agents complete HIPAA, PV, and product-specific training with certification before touching a call.",
      },
      {
        title: "System & Payer Integration",
        body: "Integration with your safety database, CRM, specialty pharmacies, and payer eligibility systems.",
      },
      {
        title: "Pilot & Launch",
        body: "Controlled pilot with calibration on AE intake, MI responses, and PAP enrollment before full launch.",
      },
      {
        title: "Monitor, Audit & Report",
        body: "Real-time AE dashboards, monthly compliance audits, and transparent reporting to your PV committee.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Programs",
    heading: "Pharma Programs We Support",
    intro:
      "Our pharma BPO services are structured around the discrete programs manufacturers actually run — each with its own compliance regime and SLA.",
    items: [
      {
        icon: "heart-pulse",
        stat: "PAP",
        title: "Patient Assistance & Co-Pay",
        body: "Eligibility screening, enrollment, benefit verification, and refill coordination for PAP and co-pay programs.",
      },
      {
        icon: "shield",
        stat: "FDA",
        title: "Pharmacovigilance & AE Intake",
        body: "MedWatch-compliant AE intake, 15-day reporting, and safety database integration under your PV SOPs.",
      },
      {
        icon: "stethoscope",
        stat: "HCP",
        title: "HCP & MI Support Lines",
        body: "Medical information response under pharmacist oversight with MSL and speaker program coordination.",
      },
      {
        icon: "building",
        stat: "Hub",
        title: "Specialty Pharmacy Hub",
        body: "Benefits investigation, prior auth, SP coordination, and time-to-therapy acceleration for specialty products.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Pharmaceutical Customer Service Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most pharmaceutical customer service outsourcing vendors are generalist BPOs that added a pharma vertical without investing in pharmacovigilance training, pharmacist oversight, or SOC 2 infrastructure. When an FDA audit hits, the gaps show — and the regulatory risk lands on your PV committee.",
      "Contact Center USA is different: a 100% US-based pharma BPO services partner built around FDA, HIPAA, and SOC 2 discipline. Our PV-trained agents, pharmacist-supervised MI team, and audited SOPs have carried billions of dollars of branded pharma revenue through product launch, safety events, and FDA inspections without a single material finding.",
    ],
    bullets: [
      "100% US-based pharmacovigilance-trained agents — no offshore handoffs for AE",
      "SOC 2 Type II, HIPAA, and FDA 21 CFR Part 11-aligned infrastructure",
      "Pharmacist-supervised MI team for clinical drug inquiry responses",
      "Pre-built integrations with Argus, ArisGlobal, and major specialty pharmacies",
      "Launch-ready in 4–6 weeks with audited SOPs and trained reserve pool",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better pharmaceutical call center partner?",
    accent: "better pharmaceutical call center",
    body: "If your hub is understaffed, your AE reports are running late, or your next launch is months away and your vendor isn't ready, request a free pharma BPO services assessment. We'll review SOPs, PV readiness, and launch plan before you commit.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling for patient and provider inquiries with compliance-first protocols.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Back Office Support",
    desc: "Document processing, enrollment verification, and administrative support for pharma programs.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Multilingual Services",
    desc: "Serve diverse patient populations with support in English, Spanish, and 200+ languages.",
    href: "/solutions/multilingual-call-center-services",
  },
];

export default function PharmaceuticalsPage() {
  return (
    <ServicePageTemplate
      badge="Pharmaceutical Call Center Services"
      title="Compliant Call Center Solutions for Pharmaceutical Companies"
      titleHighlight="Pharmaceutical Companies"
      subtitle="FDA-compliant patient support, adverse event reporting, and HCP services that help pharmaceutical companies deliver better patient outcomes while meeting every regulatory requirement."
      description="Our pharmaceutical call center services are built on a foundation of regulatory compliance and clinical accuracy. From patient assistance program management and adverse event reporting to medical information services and clinical trial support, we partner with pharmaceutical manufacturers to deliver programs that improve patient access, ensure safety reporting compliance, and support commercial success."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-pro.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
