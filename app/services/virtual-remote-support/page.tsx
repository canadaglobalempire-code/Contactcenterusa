import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Virtual Remote Support | Contact Center USA",
  description:
    "US-based virtual remote support with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "virtual remote support",
    "remote customer support outsourcing",
    "virtual support bpo usa",
    "work from home call center services",
    "virtual assistant outsourcing",
    "remote agent bpo",
    "distributed contact center",
    "virtual customer service usa",
  ],
  alternates: { canonical: "/services/virtual-remote-support" },
};

const features = [
  {
    title: "Work-From-Home Agent Programs",
    desc: "Fully managed remote agent teams with enterprise-grade security, quality monitoring, and performance management — giving you access to top talent nationwide without geographic limitations or facility overhead.",
  },
  {
    title: "Virtual Assistant Services",
    desc: "Dedicated virtual assistants who handle administrative tasks, calendar management, email triage, data entry, and customer follow-ups — freeing your team to focus on high-value strategic work.",
  },
  {
    title: "Remote Technical Support",
    desc: "Skilled remote technicians who troubleshoot software issues, guide users through configurations, and resolve technical problems via phone, chat, and screen-sharing tools from secure home offices.",
  },
  {
    title: "Distributed Workforce Management",
    desc: "Comprehensive workforce management for remote teams including scheduling optimization, real-time adherence monitoring, performance dashboards, and collaboration tools that keep distributed agents connected and productive.",
  },
  {
    title: "Secure Remote Infrastructure",
    desc: "Enterprise-grade security for remote operations including encrypted VPN connections, endpoint protection, multi-factor authentication, secure desktop environments, and continuous compliance monitoring across every home office.",
  },
  {
    title: "Hybrid Onsite/Remote Models",
    desc: "Flexible staffing models that blend onsite and remote agents based on your needs, enabling geographic redundancy, disaster recovery, extended coverage hours, and access to specialized talent pools.",
  },
];

const benefits = [
  "Access to nationwide talent pool",
  "Enterprise-grade remote security",
  "Lower overhead than facility-based teams",
  "Geographic redundancy & disaster recovery",
  "Flexible scaling up or down",
  "Extended coverage across time zones",
];

const stats = [
  { value: 30, suffix: "%", label: "Lower Operating Costs" },
  { value: 99.7, suffix: "%", label: "Remote Uptime SLA", decimals: 1 },
  { value: 50, suffix: "+", label: "States With Active Agents" },
  { value: 96, suffix: "%", label: "Agent Retention Rate" },
];

const testimonial = {
  quote:
    "Moving to Contact Center USA's virtual agent model cut our operating costs by 30% while actually improving quality scores. Their remote infrastructure is rock-solid and their agents are more engaged and productive than our previous in-office team.",
  name: "L.H.",
  title: "SVP of Customer Operations",
  company: "A Leading Financial Services Firm",
  initials: "LH",
};

const faqs = [
  {
    question: "How do you ensure quality and productivity with remote agents?",
    answer:
      "We use comprehensive remote workforce management tools including real-time screen monitoring, automated schedule adherence tracking, speech and text analytics, and gamified performance dashboards. Supervisors conduct regular virtual coaching sessions, and agents participate in daily team huddles. Our remote agents consistently match or exceed the quality metrics of in-office teams.",
  },
  {
    question: "What security measures protect data in a work-from-home environment?",
    answer:
      "Every remote agent operates on a locked-down virtual desktop environment accessed via encrypted VPN. We enforce multi-factor authentication, disable local storage and USB ports, monitor all network activity, and require dedicated workspaces with privacy standards. Our remote security program is SOC 2 Type II certified and passes regular third-party penetration testing.",
  },
  {
    question: "Can remote agents access our internal systems and tools?",
    answer:
      "Yes. Our secure remote infrastructure supports access to CRM systems, knowledge bases, ticketing platforms, and custom applications through encrypted connections. We work with your IT team during onboarding to configure secure access that meets your compliance requirements while providing agents the tools they need to perform effectively.",
  },
  {
    question: "What happens if a remote agent has technical issues or loses connectivity?",
    answer:
      "We maintain a dedicated technical support team for remote agents available 24/7. All agents have backup internet requirements in their contracts, and our workforce management system automatically detects connectivity drops and redistributes calls to available agents within seconds. We also maintain a standby pool for rapid backfill if needed.",
  },
  {
    question: "How does the hybrid onsite/remote model work?",
    answer:
      "Our hybrid model lets you combine facility-based agents for roles requiring onsite presence with remote agents for overflow, extended hours, or specialized skills. Calls route seamlessly between onsite and remote agents based on availability, skills, and your business rules. You get a single point of management regardless of where agents are located.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Virtual Support BPO in USA",
    heading: "The virtual remote support partner that actually delivers enterprise quality from a distributed US workforce.",
    accent: "enterprise quality",
    body: [
      "Contact Center USA is one of the best virtual remote support providers in the USA — a 100% US-based virtual support BPO USA operation running secure, distributed work-from-home agent programs, virtual assistant services, and remote technical support for brands that want national talent without national real estate.",
      "For companies evaluating remote customer support outsourcing, we combine nationwide agent recruiting, SOC 2 Type II locked-down infrastructure, and real-time workforce management — so you get the reach and resilience of a distributed workforce with the discipline of a traditional brick-and-mortar operation.",
    ],
    stats: [
      { stat: "30%", label: "Average reduction in operating cost vs. facility-based contact centers" },
      { stat: "50 States", label: "Active remote agents — geographic redundancy and coverage built in" },
      { stat: "96%", label: "Annual remote agent retention rate" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Remote vs. Outsourced Virtual Support BPO",
    intro:
      "Every ops leader considering remote customer support outsourcing weighs the same decision: build and manage work-from-home agents internally, or partner with a virtual support BPO that already has the infrastructure, compliance, and playbook. Here is the comparison that matters.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Remote Infrastructure",
        left: "DIY VPN, endpoint security, and VDI stack — months to build, ongoing to maintain.",
        right: "Turnkey SOC 2 Type II locked-down VDI, MFA, endpoint DLP, and network monitoring.",
        leftYes: false,
      },
      {
        label: "Agent Recruiting Reach",
        left: "Limited to local commuting radius or single-state remote policies.",
        right: "Nationwide recruiting across all 50 states — access deep specialty talent pools.",
        leftYes: false,
      },
      {
        label: "Workforce Management",
        left: "Manual adherence tracking, sporadic coaching, limited visibility.",
        right: "Real-time adherence, screen recording, coaching snippets, and gamified dashboards.",
        leftYes: false,
      },
      {
        label: "Business Continuity",
        left: "Regional weather, outage, or health events knock your center offline.",
        right: "Distributed agents across time zones — no single point of failure.",
        leftYes: false,
      },
      {
        label: "Scaling Up and Down",
        left: "Slow hiring cycles; no good mechanism to shed headcount in downturns.",
        right: "Flex workforce with predictable per-FTE or per-hour pricing — scale fluidly.",
        leftYes: false,
      },
      {
        label: "Compliance & Audit",
        left: "Your team owns HIPAA, PCI, SOC 2 attestation and audit readiness.",
        right: "Certified compliance on our side — audit evidence supplied to your auditors.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Virtual Remote Support Onboarding Process",
    intro:
      "Every remote customer support outsourcing engagement follows the same five-stage process — designed to launch production-grade virtual agent pods in weeks, not quarters.",
    steps: [
      {
        title: "Program Design & Staffing Plan",
        body: "Scope use cases, volumes, skills, coverage windows, and build the remote staffing and shift plan.",
      },
      {
        title: "Secure Infrastructure Provisioning",
        body: "Provision VDI, VPN, MFA, endpoint controls, and integrate with your CRM and help desk.",
      },
      {
        title: "Nationwide Agent Recruiting",
        body: "Recruit and vet US-based remote agents with background checks and home-office audits.",
      },
      {
        title: "Training & Certification",
        body: "Deliver product, brand-voice, and compliance training. Agents are certified before going live.",
      },
      {
        title: "Launch & Continuous Management",
        body: "Go-live with real-time WFM, QA, coaching, and monthly business reviews tied to SLA.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Virtual Remote Support",
    intro:
      "Each vertical carries its own compliance and data-handling requirements. Our virtual support BPO USA infrastructure is pre-certified for the industries we serve most.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Telehealth",
        body: "Remote patient support, scheduling, insurance verification, and telehealth concierge.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Financial Services",
        body: "Secure remote banking, lending, and cards support with pause-and-resume PCI payment capture.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Technology",
        body: "Remote technical support, tier 1-3 escalation, and virtual assistants for product teams.",
      },
      {
        icon: "shopping-bag",
        stat: "CCPA",
        title: "Ecommerce & Retail",
        body: "Distributed holiday and peak-season support pods with rapid ramp and de-ramp flexibility.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Remote Customer Support Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most remote customer support outsourcing providers either offshore the work entirely or run loose BYOD work-from-home models that fail enterprise security review. Neither is acceptable for regulated industries or for brands that care about the customer experience.",
      "Contact Center USA is a US-based virtual support BPO USA operation — SOC 2 Type II, HIPAA, and PCI DSS certified, with company-issued hardware, locked-down VDI, and the same real-time WFM we run in brick-and-mortar sites. You get distributed reach without distributed risk.",
    ],
    bullets: [
      "100% US-based remote agents, recruited across all 50 states",
      "Company-provisioned hardware and locked-down virtual desktop",
      "SOC 2 Type II, HIPAA, and PCI DSS Level 1 certified operations",
      "Real-time adherence, screen recording, and QA scoring",
      "Hybrid onsite and remote staffing models available",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to unlock nationwide talent with virtual remote support?",
    accent: "nationwide talent",
    body: "If facility constraints, hiring friction, or business continuity concerns are capping your contact center performance, let us scope a virtual remote support pilot. We will model cost, coverage, and SLA targets before you approve a program.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Technical Support Outsourcing",
    desc: "Multi-tier technical support with remote troubleshooting, help desk services, and escalation management.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Back Office Outsourcing",
    desc: "Virtual administrative support for data entry, document processing, and business operations.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Contact Center Software Solutions",
    desc: "Cloud-based platforms that power remote contact centers with enterprise security and full feature parity.",
    href: "/services/contact-center-software-solutions",
  },
];

export default function VirtualRemoteSupportPage() {
  return (
    <ServicePageTemplate
      badge="Virtual & Remote Support"
      title="Virtual Remote Support & Remote Customer Support Outsourcing"
      titleHighlight="Remote Customer Support Outsourcing"
      subtitle="One of the leading virtual support BPO USA operations — our nationwide virtual remote support and remote customer support outsourcing programs deliver enterprise security, SOC 2 infrastructure, and real-time workforce management."
      description="The future of customer support is distributed. Our virtual remote support and remote customer support outsourcing programs give you access to the best agents across the country without the overhead of physical facilities. Every remote agent operates within our virtual support BPO USA infrastructure with the same quality standards, real-time coaching, and performance accountability as an onsite team. Whether you need full work-from-home programs, virtual assistants, or hybrid flexibility, we deliver the talent and technology to make remote work flawlessly."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-laptop.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
