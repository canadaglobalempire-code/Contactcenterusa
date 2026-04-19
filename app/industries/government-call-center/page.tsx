import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Government Call Center & Contact Center BPO in USA | Contact Center USA",
  description:
    "US-based government call center and government contact center BPO services — public sector outsourcing for federal, state, and local agencies with FedRAMP-ready infrastructure, Section 508 accessibility, and 24/7 citizen support.",
  keywords: [
    "government call center",
    "government contact center bpo",
    "public sector outsourcing",
    "citizen services call center",
    "benefits enrollment call center",
    "311 outsourcing",
    "fedramp contact center",
    "section 508 citizen support",
  ],
  alternates: { canonical: "/industries/government-call-center" },
};

const features = [
  {
    title: "Citizen Services & Information",
    desc: "Professional citizen support lines that handle general inquiries, program information, office locations, service eligibility, and referrals — ensuring constituents receive accurate, timely assistance from knowledgeable agents.",
  },
  {
    title: "Benefits Enrollment & Processing",
    desc: "End-to-end support for government benefits programs including eligibility screening, application assistance, document verification, status updates, and enrollment confirmation across health, housing, and social service programs.",
  },
  {
    title: "Compliance & Ethics Hotlines",
    desc: "Confidential reporting hotlines for fraud, waste, abuse, and ethics concerns with secure call handling, detailed case documentation, anonymous reporting options, and compliant chain-of-custody protocols.",
  },
  {
    title: "Public Information & Outreach",
    desc: "Proactive public information campaigns for policy changes, program launches, census participation, public health initiatives, and community engagement — delivered through phone, email, text, and mail channels.",
  },
  {
    title: "Emergency Alert & Notification",
    desc: "Rapid-deployment notification systems for public safety emergencies, weather alerts, evacuation orders, and critical infrastructure events with multi-channel mass communication and real-time status tracking.",
  },
  {
    title: "311 & Non-Emergency Services",
    desc: "Full-service 311 call center operations including service request intake, issue routing, status tracking, and constituent follow-up — integrated with your municipal work order and CRM systems.",
  },
];

const benefits = [
  "FedRAMP & FISMA compliant infrastructure",
  "Section 508 accessibility support",
  "Bilingual English/Spanish agents",
  "Secure PII handling protocols",
  "COOP & disaster recovery planning",
  "Real-time reporting & SLA dashboards",
];

const stats = [
  { value: 99.9, suffix: "%", label: "Data Security Compliance", decimals: 1 },
  { value: 50, suffix: "%", label: "Reduction in Wait Times" },
  { value: 5, suffix: "M+", label: "Citizen Interactions Handled" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
];

const testimonial = {
  quote:
    "Contact Center USA helped us launch our benefits enrollment hotline in three weeks. Their agents handled over 200,000 calls in the first quarter with a 97% satisfaction rate. Their compliance and security standards are exactly what we needed.",
  name: "P.H.",
  title: "Director of Constituent Services",
  company: "A State Government Agency",
  initials: "PH",
};

const faqs = [
  {
    question: "Do you meet federal security and compliance requirements?",
    answer:
      "Yes. Our infrastructure and processes are designed to meet FedRAMP, FISMA, and NIST 800-53 requirements. We maintain SOC 2 Type II certification, conduct regular penetration testing, and our facilities meet physical security standards required for government data handling.",
  },
  {
    question: "Can you handle sensitive personally identifiable information (PII)?",
    answer:
      "Absolutely. We implement strict PII handling protocols including encrypted data transmission, role-based access controls, clean desk policies, and comprehensive audit trails. All agents complete PII awareness training and undergo background checks appropriate for government work.",
  },
  {
    question: "How do you ensure accessibility for citizens with disabilities?",
    answer:
      "We maintain Section 508 compliance across all communication channels. This includes TTY/TDD support, real-time captioning, screen reader compatibility for digital channels, plain language scripting, and interpreter services for over 200 languages.",
  },
  {
    question: "Can you scale for seasonal enrollment periods or emergency events?",
    answer:
      "Yes. We maintain surge capacity specifically for government programs. For planned events like open enrollment, we ramp staffing weeks in advance. For emergencies, we can activate crisis response teams within hours and scale to handle 10x normal call volumes.",
  },
  {
    question: "What reporting do you provide to government agency stakeholders?",
    answer:
      "We provide real-time dashboards and detailed periodic reports covering call volumes, wait times, resolution rates, constituent satisfaction, and SLA compliance. Reports are customized to your agency's requirements and can be formatted for legislative or budget reporting needs.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Government Call Center in USA",
    heading: "The government contact center BPO built for constituent trust, accessibility, and the compliance posture agencies demand.",
    accent: "constituent trust",
    body: [
      "Contact Center USA is one of the best government call center providers in the USA — a 100% US-based, FedRAMP-ready government contact center BPO with Section 508 accessibility, secure PII handling, and citizen-services experience across federal, state, and local agencies.",
      "For agencies evaluating public sector outsourcing, we deliver faster wait times, higher constituent satisfaction, and audit-clean operations across benefits, 311, compliance hotlines, and emergency notification.",
    ],
    stats: [
      { stat: "99.9%", label: "Data security compliance across federal and state programs we operate" },
      { stat: "-50%", label: "Reduction in average wait times after cutover to our government contact center BPO" },
      { stat: "5M+", label: "Citizen interactions handled annually across agency accounts" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Government Center vs. Contact Center USA BPO",
    intro:
      "Agency call centers carry unique constraints: GS pay scales, hiring freezes, and procurement cycles that lag demand. Here's how an internal operation compares to a specialized public sector outsourcing partner.",
    leftTitle: "Internal Agency Operation",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to Stand Up a New Program",
        left: "New hotlines take 6–12 months through standard hiring and procurement cycles.",
        right: "Benefits hotlines and 311 programs live in 3–6 weeks through IDIQ/GSA vehicles.",
        leftYes: false,
      },
      {
        label: "Compliance Posture",
        left: "Compliance attention varies across divisions; FedRAMP and NIST 800-53 gaps common.",
        right: "FedRAMP-ready, FISMA-aligned, NIST 800-53 controls, SOC 2 Type II certified by default.",
        leftYes: false,
      },
      {
        label: "Section 508 Accessibility",
        left: "TTY/TDD, captioning, and plain-language content often inconsistent across channels.",
        right: "Full Section 508 stack with TTY/TDD, captioning, screen-reader parity, and plain language.",
        leftYes: false,
      },
      {
        label: "Open-Enrollment & Emergency Surge",
        left: "Fixed FTE model — enrollment windows and emergencies overwhelm queues for weeks.",
        right: "10x surge capacity with pre-approved staffing plans for enrollment and emergency activations.",
        leftYes: false,
      },
      {
        label: "Multilingual Citizen Support",
        left: "Language coverage limited to local agency staffing and ad-hoc interpreter contracts.",
        right: "English, Spanish, and on-demand support in 200+ languages integrated into every queue.",
        leftYes: false,
      },
      {
        label: "Reporting to Stakeholders",
        left: "Monthly PDF reports with limited dashboard visibility for leadership and legislators.",
        right: "Real-time dashboards plus legislative-grade reporting formatted for budget and oversight.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Public Sector Outsourcing Onboarding",
    intro:
      "Every agency partnership follows the same five-stage launch — engineered for FedRAMP/FISMA posture, Section 508 accessibility, and the compressed timelines that define public-facing program launches.",
    steps: [
      {
        title: "Agency Discovery",
        body: "Program scope, regulatory overlays, clearance requirements, and citizen audience mapped together.",
      },
      {
        title: "Security & ATO Alignment",
        body: "FedRAMP/FISMA posture, NIST 800-53 controls, and ATO documentation prepared with your CISO.",
      },
      {
        title: "Agent Clearance & Training",
        body: "Background checks, PII handling, Section 508, and program-specific content certification.",
      },
      {
        title: "Pilot & COOP Drill",
        body: "Live pilot on a controlled queue plus a COOP/disaster-recovery drill to validate resilience.",
      },
      {
        title: "Production & Reporting",
        body: "Full production with real-time dashboards and legislative/oversight-ready reporting cadence.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Government Sub-Segments Our BPO Supports",
    intro:
      "Federal agencies, state programs, and municipal governments all have different missions and procurement vehicles. Our government contact center BPO model is cleared to operate across the public-sector stack.",
    items: [
      {
        icon: "shield",
        stat: "Federal",
        title: "Federal Agencies",
        body: "Benefits hotlines, compliance reporting, public-information lines, and federal agency contact centers.",
      },
      {
        icon: "landmark",
        stat: "State",
        title: "State Governments",
        body: "Health, human services, motor vehicle, revenue, and workforce program contact centers.",
      },
      {
        icon: "building",
        stat: "Local",
        title: "Municipal & County",
        body: "311 non-emergency services, permits, utilities, and public works constituent support.",
      },
      {
        icon: "shield",
        stat: "Emergency",
        title: "Emergency & Public Safety",
        body: "Mass notification, evacuation coordination, disaster hotlines, and COOP activation support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Agencies Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore public sector outsourcing is a nonstarter for most agencies — data sovereignty, clearance, and citizen trust all demand domestic operations. Generalist BPOs lack the ATO documentation, Section 508 rigor, and procurement-vehicle fluency public programs require.",
      "Contact Center USA is different: a 100% US-based government call center with cleared agents, FedRAMP-ready infrastructure, Section 508 defaults, and program leaders who understand the cadence of federal, state, and municipal contracting.",
    ],
    bullets: [
      "100% US-based government contact center BPO workforce with appropriate clearances",
      "FedRAMP-ready, FISMA-aligned, NIST 800-53 controls, and SOC 2 Type II certification",
      "Section 508 accessibility defaults across voice, chat, email, and digital channels",
      "COOP and disaster-recovery planning with drilled failover across geographies",
      "GSA, IDIQ, and state cooperative contract vehicles for fast procurement",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to stand up a US-based government call center with compliance built in?",
    accent: "compliance built in",
    body: "If your agency is facing an enrollment surge, an accessibility gap, or an unscalable internal center, request a free consultation. We'll walk through security posture, Section 508 defaults, staffing plan, and procurement vehicle before you commit to a program launch.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Multilingual Services",
    desc: "Serve diverse citizen populations with support in English, Spanish, and 200+ languages.",
    href: "/solutions/multilingual-call-center-services",
  },
  {
    title: "Back Office Support",
    desc: "Document processing, data entry, and administrative support for government programs.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Omnichannel Solutions",
    desc: "Reach citizens through phone, email, chat, text, and self-service portals.",
    href: "/services/omnichannel-contact-center-solutions",
  },
];

export default function GovernmentPage() {
  return (
    <ServicePageTemplate
      badge="Government Call Center Services"
      title="Secure Call Center Solutions for Government Agencies"
      titleHighlight="Government Agencies"
      subtitle="FedRAMP-ready citizen support services that meet the highest security standards while delivering the responsive, accessible service your constituents deserve."
      description="Our government call center services are built on a foundation of security, compliance, and accessibility. We partner with federal, state, and local agencies to deliver citizen-facing programs that meet rigorous regulatory requirements while providing the responsive, empathetic service that builds public trust. From benefits enrollment to emergency notification, we handle the full spectrum of government communication needs."
      features={features}
      benefits={benefits}
      image="/images/cc-team-row-2.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
