import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Debt Collection Call Center | ARM & Accounts Receivable BPO",
  description:
    "US-based debt collection call center and accounts receivable management BPO. FDCPA-aware first-party and early-stage recovery, payment arrangements, and skip.",
  keywords: [
    "debt collection call center",
    "accounts receivable management bpo",
    "arm outsourcing",
    "first party collections outsourcing",
    "early stage collections",
    "payment arrangement calling",
    "receivables recovery outsourcing",
    "fdcpa compliant collections",
    "collections bpo usa",
    "past due account calling",
  ],
  alternates: { canonical: "/industries/debt-collection-call-center" },
};

const features = [
  {
    title: "First-Party Early-Stage Recovery",
    desc: "Calling in your name, as an extension of your own billing team, on accounts in the early delinquency window — where the relationship is still intact and a reminder plus a payment link resolves most balances.",
  },
  {
    title: "Payment Arrangement Negotiation",
    desc: "Agents work within the arrangement parameters you authorize — term length, minimum payment, settlement floors — securing structured plans on accounts that cannot pay in full rather than pushing them to a hard default.",
  },
  {
    title: "FDCPA & Regulation F Aware Handling",
    desc: "Agents trained on contact frequency limits, permitted contact hours, required disclosures, and dispute handling, working from scripts your compliance counsel approves, with recorded calls and documented QA.",
  },
  {
    title: "Inbound Payment & Dispute Lines",
    desc: "Dedicated inbound coverage for consumers responding to notices — taking payments, explaining balances, logging disputes correctly, and routing validation requests through your documented process.",
  },
  {
    title: "Skip Tracing & Contact Refresh",
    desc: "Systematic right-party contact work to refresh phone numbers, addresses, and employment data across aged inventory, so recovery effort is spent on reachable accounts instead of dead numbers.",
  },
  {
    title: "Bilingual Collections Calling",
    desc: "Native Spanish-speaking agents handle sensitive payment conversations directly, which materially improves both contact rates and arrangement quality in Spanish-speaking households.",
  },
];

const benefits = [
  "100% US-based collections agents",
  "First-party calling in your brand's name",
  "FDCPA and Regulation F aware call handling",
  "Scripts approved by your compliance counsel",
  "Full call recording and documented QA review",
  "Bilingual English/Spanish collections calling",
];

const stats = [
  { value: 100, suffix: "%", label: "US-Based Collections Agents" },
  { value: 100, suffix: "%", label: "Calls Recorded and QA Reviewed" },
  { value: 2, suffix: " languages", label: "English and Spanish Collections" },
  { value: 3, suffix: " channels", label: "Voice, Text, and Email Contact" },
];

const faqs = [
  {
    question: "Do you handle first-party or third-party collections?",
    answer:
      "Our core work is first-party and early-stage recovery — calling as an extension of your own billing or customer service team, in your name, on accounts that have recently gone past due. This is where recovery rates are highest and where preserving the customer relationship still matters. We work alongside your existing agency placements rather than replacing your late-stage third-party strategy.",
  },
  {
    question: "How do you stay compliant with FDCPA and Regulation F?",
    answer:
      "Compliance is built into the program rather than trained once. Agents work from scripts reviewed and approved by your compliance counsel, with call frequency limits, permitted contact windows, required disclosures, and dispute handling encoded in the workflow itself. Every call is recorded and retained under your policy, and QA reviews check adherence specifically. We adopt your compliance framework rather than asking you to adopt ours.",
  },
  {
    question: "Can agents negotiate payment plans?",
    answer:
      "Within the parameters you authorize. You define the acceptable range — minimum payment, maximum term, any settlement authority — and agents work inside it. Anything outside those bounds is escalated to your team for a decision rather than agreed on the call. Most recoverable balances resolve through a structured arrangement rather than a single payment, so this authority is usually where the returns are.",
  },
  {
    question: "What happens when a consumer disputes the debt?",
    answer:
      "Disputes are logged and routed through your documented process immediately, and collection activity on that account pauses according to your rules and applicable requirements. Agents are trained not to argue a disputed balance on the call. Handling disputes correctly protects you far more than the individual balance is worth.",
  },
  {
    question: "Do you work aged or previously placed accounts?",
    answer:
      "Yes. Aged inventory usually suffers from a contact problem rather than a willingness problem — the numbers on file have gone stale. Skip tracing and contact refresh work against that inventory often recovers meaningful balances that were written off as uncollectable simply because nobody could reach the account holder.",
  },
  {
    question: "Which industries do you handle receivables for?",
    answer:
      "Healthcare and medical billing, consumer lending and fintech, utilities and telecom, property management and rent arrears, subscription and membership businesses, and commercial B2B receivables. The regulatory expectations and tone differ substantially across these, so scripts and training are built per sector rather than shared.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Debt Collection & Accounts Receivable BPO",
    heading: "Most past-due balances are a contact problem, not a payment problem.",
    accent: "a contact problem, not a payment problem",
    body: [
      "Contact Center USA provides US-based first-party and early-stage collections support — calling in your name, negotiating arrangements within your authorized parameters, and handling every contact under FDCPA and Regulation F aware procedures.",
      "Recovery rates fall sharply the longer an account ages. Most consumers in early delinquency intend to pay and simply need a reminder, a clear balance explanation, and a workable arrangement — while the relationship is still intact.",
    ],
    stats: [
      { stat: "100%", label: "US-based agents on compliance-approved scripts" },
      { stat: "100%", label: "Calls recorded and reviewed under documented QA" },
      { stat: "3", label: "Contact channels: voice, text, and email" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Billing Staff vs. an Outsourced Receivables Team",
    intro:
      "Most billing departments handle collections as the task that gets done once everything else is finished — which means it usually is not done at all until the account is far past the window where it was easy to recover.",
    leftTitle: "In-House Billing Team",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Contact Timing",
        left: "Accounts contacted weeks late, once the balance is already aged.",
        right: "Systematic contact inside the early-delinquency window.",
        leftYes: false,
      },
      {
        label: "Attempt Consistency",
        left: "Effort varies with workload; some accounts never called at all.",
        right: "Documented contact cadence applied uniformly across inventory.",
        leftYes: false,
      },
      {
        label: "Compliance Exposure",
        left: "Staff untrained on contact limits and required disclosures.",
        right: "Scripted, recorded, QA-reviewed handling under your compliance framework.",
        leftYes: false,
      },
      {
        label: "Arrangement Discipline",
        left: "Ad hoc plans agreed without consistent parameters or documentation.",
        right: "Arrangements inside authorized parameters, documented on every account.",
        leftYes: false,
      },
      {
        label: "Aged Inventory",
        left: "Stale numbers written off as uncollectable without a contact refresh.",
        right: "Skip tracing and contact refresh before accounts are abandoned.",
        leftYes: false,
      },
      {
        label: "Bilingual Contact",
        left: "Typically English-only, reducing contact rates in Spanish-speaking households.",
        right: "Native Spanish-speaking agents handling the conversation directly.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Past-Due Account to Resolved Balance",
    intro:
      "Every receivables engagement starts with your compliance framework and your authorized arrangement parameters, not with a dialer.",
    steps: [
      {
        title: "Compliance Framework Review",
        body: "We adopt your compliance policies, contact rules, disclosure requirements, and dispute handling process.",
      },
      {
        title: "Script Approval",
        body: "Scripts and objection handling drafted and approved by your compliance counsel before any calling begins.",
      },
      {
        title: "Parameter Definition",
        body: "You set arrangement authority — minimum payment, maximum term, settlement floors, and escalation triggers.",
      },
      {
        title: "System Integration",
        body: "Agents provisioned in your billing or receivables platform so payments and notes post where your team works.",
      },
      {
        title: "Recover & Report",
        body: "Reporting on contact rate, right-party contact, arrangement rate, and recovery by inventory age.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sectors",
    heading: "Receivables Work We Support",
    intro:
      "Tone and regulatory expectations differ sharply by sector, so scripts and agent training are built per industry rather than shared across a single collections queue.",
    items: [
      {
        icon: "briefcase",
        stat: "Health",
        title: "Healthcare & Medical Billing",
        body: "Patient balance calls handled with the sensitivity a medical balance requires, plus insurance follow-up.",
      },
      {
        icon: "dollar",
        stat: "Lending",
        title: "Consumer Lending & Fintech",
        body: "Early-stage delinquency, hardship arrangements, and payment plan structuring on consumer loan portfolios.",
      },
      {
        icon: "store",
        stat: "Utility",
        title: "Utilities, Telecom & Subscription",
        body: "High-volume, low-balance recovery and involuntary churn reduction on recurring billing accounts.",
      },
      {
        icon: "shopping-bag",
        stat: "B2B",
        title: "Commercial & Rent Arrears",
        body: "B2B invoice follow-up and property arrears where the commercial relationship must survive the conversation.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Early-Stage Recovery Belongs With a Trained Team",
    image: "/images/cc-agent-blue.jpg",
    imagePosition: "right",
    body: [
      "The early-delinquency window is where nearly all the recoverable value sits, and it is also the window most billing departments miss — not through unwillingness but because collections calling is the task that never reaches the top of the list.",
      "Contact Center USA staffs domestic agents who work that window systematically, in your name, under your compliance framework, with the authority you grant and no more. The tone stays appropriate for a customer you intend to keep, and every call is recorded and reviewed.",
    ],
    bullets: [
      "First-party calling in your brand's name, not an agency's",
      "FDCPA and Regulation F aware handling with recorded calls",
      "Scripts approved by your compliance counsel before launch",
      "Arrangements negotiated only inside parameters you authorize",
      "Skip tracing to recover contact on aged inventory",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Work the window where accounts are still recoverable.",
    accent: "still recoverable",
    body: "Send us your receivables volume and current aging profile. We will scope an early-stage recovery program around your compliance framework and arrangement parameters.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Debt Collection Outsourcing",
    desc: "Our core recovery service offering, covering process design and campaign execution.",
    href: "/services/debt-collection-outsourcing",
  },
  {
    title: "Financial Call Center Services",
    desc: "Broader account servicing and support for lenders and financial institutions.",
    href: "/solutions/financial-call-center-services",
  },
  {
    title: "Back Office Outsourcing",
    desc: "Payment posting, reconciliation, and receivables administration behind the calls.",
    href: "/solutions/back-office-outsourcing",
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
    title: "Speed-to-Lead & Borrower Support for the Lending Industry",
    desc: "US-based mortgage call center services for lenders, brokers, and servicers.",
    href: "/industries/mortgage-call-center",
  },
];

export default function DebtCollectionCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Debt Collection Call Center"
      title="Accounts Receivable Recovery for the Collections Industry"
      titleHighlight="Collections Industry"
      subtitle="US-based first-party and early-stage recovery — calling in your name, negotiating arrangements inside the authority you grant, and handling every contact under your compliance framework."
      description="Recovery rates collapse as accounts age, and most billing teams never get to collections calling until the easy window has closed. We work that early window systematically: contacting past-due accounts as an extension of your own billing team, explaining balances clearly, securing structured payment arrangements within your authorized parameters, and documenting every contact on recorded, QA-reviewed calls."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-monitor.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
