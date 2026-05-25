import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Dialer ACD Administration | Contact Center USA",
  description:
    "US-based dialer acd administration with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "dialer administration",
    "acd administration bpo",
    "predictive dialer management",
    "dialer management services",
    "ivr design services",
    "call routing optimization",
    "five9 administration",
    "genesys administration services",
  ],
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
  name: "J.R.",
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Dialer Administration in USA",
    heading: "The dialer administration partner that squeezes every minute of productive talk time out of your stack.",
    accent: "every minute",
    body: [
      "Contact Center USA is one of the best dialer administration providers in the USA — an ACD administration BPO with certified engineers across Five9, NICE CXone, Genesys, Avaya, Cisco, Amazon Connect, and Twilio Flex, managing predictive dialer management, ACD routing, and IVR tuning as a single service.",
      "For contact centers searching for predictive dialer management and ACD administration BPO services in the USA, we take configuration, pacing, routing, and compliance off your plate — so every agent hour is spent on productive customer conversations, not platform babysitting.",
    ],
    stats: [
      { stat: "+45%", label: "Average increase in productive agent talk time post-optimization" },
      { stat: "98%", label: "Inbound service-level achievement across managed ACD queues" },
      { stat: "24/7", label: "Dialer and ACD engineering coverage with on-call response SLAs" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Telephony Admin vs. Dialer Administration BPO",
    intro:
      "Most contact centers try to keep dialer and ACD administration in-house — then quietly watch talk-time, service levels, and TCPA risk drift in the wrong direction. Here's how outsourced predictive dialer management compares to the internal model.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Platform Expertise",
        left: "One or two generalists covering every system — shallow certification across vendors.",
        right: "Certified engineers across Five9, NICE, Genesys, Avaya, Cisco, Amazon Connect, Twilio.",
        leftYes: false,
      },
      {
        label: "Predictive Dialer Pacing",
        left: "Default pacing settings; abandoned-call rates dangerously close to TCPA thresholds.",
        right: "Model-driven pacing, list-scoring, and DNC scrubbing that maximize talk-time within TCPA.",
        leftYes: false,
      },
      {
        label: "ACD Routing Sophistication",
        left: "Simple skills routing; no real-time queue balancing or customer-context-aware routing.",
        right: "Skills + language + priority + history + queue-state routing with real-time reoptimization.",
        leftYes: false,
      },
      {
        label: "IVR Design",
        left: "Legacy menus nobody wants to touch; high zero-out and abandonment rates.",
        right: "Data-driven IVR redesign targeting containment, deflection, and caller-effort reduction.",
        leftYes: false,
      },
      {
        label: "After-Hours Support",
        left: "PagerDuty rotations among overstretched in-house admins — slow response, high burnout.",
        right: "24/7 NOC + on-call engineering with strict MTTR SLAs for dialer and ACD incidents.",
        leftYes: false,
      },
      {
        label: "Cost to Scale",
        left: "Senior telephony engineers command $140K+ fully loaded plus certifications and tools.",
        right: "Managed-service pricing; scale engineering hours up for projects, down for steady-state.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Dialer & ACD Administration Process",
    intro:
      "Every dialer administration engagement runs through the same disciplined five-stage process — from audit to optimization.",
    steps: [
      {
        title: "Platform Audit",
        body: "Complete review of dialer configuration, ACD routing logic, IVR flows, and telephony integrations across every vendor in scope.",
      },
      {
        title: "Roadmap Design",
        body: "Prioritized optimization roadmap tied to talk-time, service-level, abandonment, and TCPA-risk goals — with measurable KPIs.",
      },
      {
        title: "Implementation",
        body: "Staged configuration changes, IVR re-design, routing re-architecture, and WFM integration — zero-downtime rollout where possible.",
      },
      {
        title: "Run & Monitor",
        body: "24/7 NOC monitoring, proactive alerting, real-time pacing and routing adjustments, and TCPA compliance enforcement.",
      },
      {
        title: "Continuous Tuning",
        body: "Monthly performance reviews, quarterly configuration audits, and continuous optimization against evolving traffic patterns.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries That Rely on Our Dialer Administration BPO",
    intro:
      "Each industry carries its own dialer-compliance overlays, queue-design requirements, and IVR patterns. Our engineers tune configurations to the specific regulatory and operational profile of each sector.",
    items: [
      {
        icon: "dollar",
        stat: "TCPA",
        title: "Collections & Recovery",
        body: "Reg F 7-in-7 enforcement, DNC scrubbing, consent-aware dialing, and right-party-contact optimization.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Financial Services",
        body: "Secure IVR payments, PCI tokenization in dialer flows, and CFPB-aware outbound campaign pacing.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Pharma",
        body: "PHI-safe IVR menus, Medicare-compliant outbound programs, and appointment-reminder pacing.",
      },
      {
        icon: "shield",
        stat: "SOC 2",
        title: "Insurance & Lead Gen",
        body: "One-to-one consent architecture, time-zone-aware pacing, and lead-distribution-friendly ACD routing.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Predictive Dialer Management",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most dialer administration vendors are single-platform shops with limited experience outside one ecosystem — forcing you to compromise on vendor choice to get good support. Internal telephony admins, meanwhile, are usually stretched across too many tools, making reactive changes instead of strategic optimization.",
      "Contact Center USA is different: a US-based ACD administration BPO with certified engineers across every major cloud and on-prem platform, plus the operational muscle to run dialer and ACD administration as a 24/7 managed service.",
    ],
    bullets: [
      "Certified across Five9, NICE CXone, Genesys, Avaya, Cisco, Amazon Connect, Twilio",
      "TCPA / Reg F / DNC compliance enforced at the configuration layer",
      "Data-driven IVR redesign proven to lift containment by 15–30%",
      "24/7 NOC + on-call engineering with SLA-bound incident response",
      "WFM-integrated routing for real-time adherence and service-level protection",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to let the experts run your dialer and ACD?",
    accent: "run your dialer and ACD",
    body: "If your talk-time is flat, your service-levels are slipping, or your TCPA risk is trending the wrong way, request a free dialer and ACD audit. We'll show expected lift on talk-time, service-level, and compliance posture before you change a single configuration.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
