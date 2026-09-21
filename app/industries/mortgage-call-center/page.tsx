import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Mortgage Call Center Services | Lending BPO & Loan Support",
  description:
    "US-based mortgage call center services for lenders, brokers, and servicers. Lead speed-to-contact, borrower support, document chase, and servicing calls.",
  keywords: [
    "mortgage call center",
    "mortgage call center services",
    "mortgage bpo",
    "lending call center services",
    "loan officer support outsourcing",
    "mortgage lead qualification",
    "mortgage servicing call center",
    "borrower support outsourcing",
    "loan processing support",
    "mortgage speed to lead",
  ],
  alternates: { canonical: "/industries/mortgage-call-center" },
};

const features = [
  {
    title: "Speed-to-Lead Response",
    desc: "Mortgage leads decay faster than almost any category. Agents work new enquiries within minutes of submission, qualify against your criteria, and hand your loan officers a live borrower instead of a name in a queue.",
  },
  {
    title: "Borrower Qualification & Pre-Screening",
    desc: "Structured pre-qualification covering loan purpose, property type, occupancy, timeline, credit band, and employment — so your licensed officers spend their time on borrowers who can actually close.",
  },
  {
    title: "Document Chase & Conditions Follow-Up",
    desc: "The most expensive delay in a loan file is waiting on a borrower document. Agents run persistent, polite follow-up on outstanding conditions until the file is complete, shortening cycle time without tying up processors.",
  },
  {
    title: "Application Status & Servicing Calls",
    desc: "Inbound coverage for status enquiries, payment questions, escrow and statement queries, and payoff requests — the high-volume, low-complexity calls that otherwise interrupt licensed staff all day.",
  },
  {
    title: "Loan Officer Appointment Setting",
    desc: "Outbound calling into your existing database and aged lead lists to book consultations directly on loan officer calendars, keeping originators in front of borrowers instead of on the dialer.",
  },
  {
    title: "Compliance-Aware Call Handling",
    desc: "Agents work from approved scripts with clear boundaries on what is informational versus what requires a licensed originator, with call recording and documentation aligned to your compliance program.",
  },
];

const benefits = [
  "Minutes-not-hours speed to lead response",
  "100% US-based agents",
  "Pre-qualification against your own criteria",
  "Document and conditions chase to shorten cycle time",
  "Approved scripts with clear licensing boundaries",
  "Bilingual English/Spanish borrower support",
];

const stats = [
  { value: 60, suffix: " sec", label: "Target Lead Response Time" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 24, suffix: "/7", label: "Coverage Available" },
  { value: 2, suffix: " languages", label: "English and Spanish Borrower Support" },
];

const faqs = [
  {
    question: "How fast do you respond to new mortgage leads?",
    answer:
      "We target contact within a minute of the lead hitting the system, and we keep working a documented attempt cadence rather than trying once and marking it dead. Mortgage is one of the most speed-sensitive categories there is — a borrower filling in a rate form is usually filling in several, and the lender who reaches them first has a structural advantage that no amount of follow-up recovers later.",
  },
  {
    question: "Do your agents need to be licensed originators?",
    answer:
      "Not for the work we do. There is a clear line between gathering information and providing loan advice or quoting terms, and our agents stay firmly on the informational side: capturing borrower details, qualifying against your stated criteria, booking appointments, and chasing documents. Anything requiring a licensed originator is transferred or scheduled with your team. That boundary is written into the scripts and reinforced in QA.",
  },
  {
    question: "Can you chase borrower documents and conditions?",
    answer:
      "Yes, and it is often where the clearest return shows up. Conditions follow-up is repetitive, requires persistence rather than expertise, and is exactly the work that clogs a processor's day. Agents work your outstanding conditions list with a structured contact cadence across phone, text, and email until documents arrive, escalating stalled files to your team.",
  },
  {
    question: "Do you support mortgage servicing as well as origination?",
    answer:
      "Yes. Servicing generates steady, high-volume inbound — payment and escrow questions, statement queries, payoff requests, and general account servicing. These calls are well suited to outsourcing because they are frequent, scripted, and rarely require licensed staff, which frees your servicing team for exceptions and loss mitigation work.",
  },
  {
    question: "How do you handle compliance and call recording?",
    answer:
      "Agents work from scripts your compliance team approves, with documented escalation rules for anything outside them. Calls are recorded and retained according to your retention policy, and QA reviews check adherence to both script and boundary rules. We adapt to your compliance program rather than asking you to adopt ours.",
  },
  {
    question: "Can you work our aged lead database?",
    answer:
      "Yes. Most lenders sit on a large database of aged leads and past applicants that never gets worked because originators are focused on fresh volume. Outbound reactivation campaigns against that database — particularly around rate movement and refinance windows — typically cost far less per booked consultation than buying new leads.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Mortgage Call Center Services",
    heading: "The lender who calls back in five minutes wins the loan.",
    accent: "calls back in five minutes",
    body: [
      "Contact Center USA runs US-based mortgage call center support for lenders, brokers, and servicers — speed-to-lead response, borrower pre-qualification, document chase, and servicing coverage.",
      "Mortgage leads are among the most expensive in the country and among the fastest to go cold. A borrower who submits a rate enquiry has almost always submitted several, and response time decides the outcome long before pricing does.",
    ],
    stats: [
      { stat: "60 sec", label: "Target first-contact time on new lead submissions" },
      { stat: "100%", label: "US-based agents on approved, compliance-aware scripts" },
      { stat: "24/7", label: "Coverage available for lead response and servicing" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Loan Officers Working Leads vs. a Dedicated Mortgage Call Center",
    intro:
      "The common setup — originators working their own leads between appointments — quietly costs more than it looks, because the highest-paid people in the building spend their day on the lowest-value part of the process.",
    leftTitle: "Originators Working Their Own Leads",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Speed to First Contact",
        left: "Leads wait until an officer is between appointments — often hours.",
        right: "Contact attempted within a minute of submission, around the clock.",
        leftYes: false,
      },
      {
        label: "Attempt Persistence",
        left: "One or two attempts before the lead is effectively abandoned.",
        right: "Documented multi-touch cadence across phone, text, and email.",
        leftYes: false,
      },
      {
        label: "Cost of the Activity",
        left: "Commissioned originators spending their day dialing unqualified names.",
        right: "Qualification handled at agent cost; officers see live, screened borrowers.",
        leftYes: false,
      },
      {
        label: "Document Chase",
        left: "Processors interrupted constantly to chase the same conditions.",
        right: "Structured conditions follow-up until the file is complete.",
        leftYes: false,
      },
      {
        label: "Aged Database",
        left: "Past applicants never re-worked; value sits idle in the CRM.",
        right: "Reactivation campaigns run against aged leads and rate movement.",
        leftYes: false,
      },
      {
        label: "After-Hours Enquiries",
        left: "Evening and weekend submissions wait until Monday.",
        right: "Covered as they arrive, when borrower intent is highest.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Lead Submission to a Booked Consultation",
    intro:
      "Every mortgage engagement is configured around your qualification criteria, your LOS, and the line between informational and licensed activity.",
    steps: [
      {
        title: "Criteria & Boundary Setup",
        body: "We document your qualification criteria and the exact boundary between informational handling and licensed origination.",
      },
      {
        title: "LOS & CRM Integration",
        body: "Agents provisioned in your loan origination system and CRM so activity is logged where your team already works.",
      },
      {
        title: "Script Approval",
        body: "Scripts and objection handling drafted, then reviewed and approved by your compliance team before go-live.",
      },
      {
        title: "Speed-to-Lead Launch",
        body: "New submissions worked within a minute, qualified, and booked onto loan officer calendars.",
      },
      {
        title: "Expand to Chase & Servicing",
        body: "Once lead response is stable, extend to conditions follow-up, database reactivation, and servicing coverage.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Who We Support",
    heading: "Across the Lending Lifecycle",
    intro:
      "Origination, processing, and servicing generate very different call profiles. We staff and script for each rather than running one blended queue.",
    items: [
      {
        icon: "dollar",
        stat: "Retail",
        title: "Retail Lenders & Brokers",
        body: "Speed-to-lead response, pre-qualification, and consultation booking onto originator calendars.",
      },
      {
        icon: "briefcase",
        stat: "Process",
        title: "Processing & Underwriting Support",
        body: "Conditions chase, borrower document follow-up, and status communication during the file's life.",
      },
      {
        icon: "store",
        stat: "Servicing",
        title: "Mortgage Servicers",
        body: "Payment, escrow, statement, and payoff enquiries handled at volume with escalation for exceptions.",
      },
      {
        icon: "shopping-bag",
        stat: "Refi",
        title: "Refinance & Reactivation",
        body: "Outbound campaigns against aged databases timed to rate movement and refinance windows.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Lenders Outsource the Phone, Not the Loan",
    image: "/images/cc-agent-laptop.jpg",
    imagePosition: "right",
    body: [
      "Nothing about outsourcing means handing over loan decisions. The work that belongs outside is the volume work: reaching a borrower before a competitor does, screening out enquiries that were never going to qualify, and chasing the same three documents for the fourth time.",
      "Contact Center USA staffs domestic agents on scripts your compliance team approves, working inside your LOS, with an explicit boundary at anything requiring a licensed originator. Your officers get live, qualified borrowers and their day back.",
    ],
    bullets: [
      "Contact attempted within a minute of lead submission",
      "Clear, scripted boundary between informational and licensed activity",
      "Agents working inside your existing LOS and CRM",
      "Conditions and document chase that shortens cycle time",
      "Aged database reactivation timed to rate movement",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Find out what your lead response time is actually costing.",
    accent: "what your lead response time is actually costing",
    body: "Send us your monthly lead volume and current average response time. We will model the contact-rate difference and quote a speed-to-lead program around it.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound programs that book consultations directly onto loan officer calendars.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Financial Call Center Services",
    desc: "Broader financial services coverage for lenders with banking and account operations.",
    href: "/solutions/financial-call-center-services",
  },
  {
    title: "Debt Collection Outsourcing",
    desc: "Compliant recovery and payment arrangement calling for delinquent accounts.",
    href: "/services/debt-collection-outsourcing",
  },
  {
    title: "Insurance Claims Processing",
    desc: "How a regional insurance carrier cut claims processing time by 60% and improved customer satisfaction by 22 points with specialized call center…",
    href: "/case-studies/insurance-claims-processing",
  },
  {
    title: "CPA & Accounting Firm Answering Service",
    desc: "US-based answering service and call center for CPA firms and accounting practices.",
    href: "/industries/accounting-cpa-call-center",
  },
  {
    title: "Not Just a Call CenterYour Strategic Partner",
    desc: "Where our 25+ years of US-based contact center experience runs deepest — the sectors we staff, the compliance each demands, and the teams behind them.",
    href: "/about/industries",
  },
];

export default function MortgageCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Mortgage Call Center Services"
      title="Speed-to-Lead & Borrower Support for the Lending Industry"
      titleHighlight="Lending Industry"
      subtitle="Lenders, brokers, and servicers use our US-based agents to reach new borrowers within a minute, pre-qualify against their criteria, chase conditions, and cover high-volume servicing calls."
      description="Mortgage is a speed business. We work new enquiries within a minute of submission, pre-qualify borrowers against your own criteria, and hand your licensed originators a live, screened conversation. Beyond origination, we chase outstanding conditions to shorten cycle time and absorb the payment, escrow, and payoff calls that otherwise interrupt your servicing team all day."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-pro.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
