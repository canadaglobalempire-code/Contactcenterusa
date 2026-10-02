import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "First-Party Collections | Branded US Collection Agents",
  description:
    "Outsourced first-party collections under your brand. US-based agents recover early-stage past-due balances while keeping the customer relationship. Get a quote.",
  keywords: [
    "first party collections",
    "first-party collections outsourcing",
    "first party collection agency",
    "early stage collections",
    "pre charge-off collections",
    "branded collections",
    "accounts receivable outsourcing",
  ],
  alternates: { canonical: "/services/first-party-collections" },
};

const features = [
  {
    title: "Collections Under Your Brand",
    desc: "Agents answer and call in your company's name, use your greetings and scripts, and work in your systems or ours — customers experience it as your own billing team.",
  },
  {
    title: "Early-Stage Past-Due Outreach",
    desc: "Friendly, timely reminders in the first days and weeks after a missed payment, when a balance is easiest to resolve and the customer is most likely to stay.",
  },
  {
    title: "Payment Plans & Promise-to-Pay",
    desc: "Agents set up payment arrangements that fit the customer's situation, record promises to pay, and follow up before a promise is missed.",
  },
  {
    title: "Inbound Billing & Payment Lines",
    desc: "Customers who call back reach a trained US-based agent who can explain the balance, take a secure payment, and update the account on the spot.",
  },
  {
    title: "Retention-Minded Conversations",
    desc: "Collectors are trained to find out why a payment was missed and solve the underlying problem — a billing error, a card that expired, or a service issue — rather than just demand money.",
  },
  {
    title: "Clean Handoff to Third-Party",
    desc: "Accounts that stay unresolved move into a documented handoff, so the history is complete if you later place them with a contingency collection agency.",
  },
];

const benefits = [
  "Agents work under your company name",
  "100% US-based collections team",
  "TCPA and state-rule aware outreach",
  "Every call recorded and logged",
  "Secure PCI-compliant payment processing",
  "Month-to-month terms, no long contracts",
];

const faqs = [
  {
    question: "What are first-party collections?",
    answer:
      "First-party collections means collecting past-due balances in the name of the company that is owed the money. When you outsource first-party collections, the provider's agents act as an extension of your billing or accounts receivable department: they use your brand, follow your policies, and focus on early-stage balances before an account is charged off or sent to an outside agency.",
  },
  {
    question: "What is the difference between first-party and third-party collections?",
    answer:
      "In first-party collections the customer hears from your company, usually early in delinquency, and the goal is to collect while keeping the customer. In third-party collections a separate collection agency contacts the debtor, usually on aged or charged-off debt, and the goal is recovery. Third-party collectors are fully covered by the Fair Debt Collection Practices Act; first-party collection under your own name is generally treated differently, but the TCPA and many state rules still apply.",
  },
  {
    question: "Does the FDCPA apply to first-party collections?",
    answer:
      "The FDCPA is mainly aimed at third-party debt collectors, so creditors collecting their own debts are generally outside its core definition. That is not a license to cut corners: calling and texting must follow the TCPA, many states regulate creditors' own collection practices, and other consumer protection laws still apply. We run first-party programs with the same recording, logging, and documented scripts we use everywhere else, and you should confirm your specific obligations with your own counsel.",
  },
  {
    question: "How is outsourced first-party collection billed?",
    answer:
      "First-party programs are usually billed by agent or by hour rather than on contingency, because the work looks like a billing team — reminders, inbound payment calls, and payment plans — rather than recovery of written-off debt. What drives the cost is the number of accounts, the hours of coverage you need, call volume, languages, and how complex the conversations are. We scope the program with you before quoting.",
  },
  {
    question: "When should we move an account from first-party to third-party?",
    answer:
      "Most creditors set a rule based on days past due, broken payment plans, or a customer who cannot be reached. Once an account crosses that line, it can be placed with a third-party contingency collection agency. Because our first-party program documents every attempt, the account arrives at the next stage with a complete history.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "First-Party Collections",
    heading: "First-party collections that recover the balance and keep the customer.",
    accent: "keep the customer",
    body: [
      "A missed payment is not always a bad customer. It is often an expired card, a billing question, or a tough month. First-party collections reach those customers early, in your company's name, and help them get current before the account turns into bad debt.",
      "Contact Center USA runs outsourced first-party collections with 100% US-based agents who sound like part of your team, follow your policies, and treat every customer with respect — because many of them will still be your customers next year.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "First-Party Collections vs. Third-Party Collections",
    intro:
      "Both have a place in a healthy receivables program. The difference is timing, who the customer hears from, and what you are trying to protect.",
    leftTitle: "Third-Party Collections",
    rightTitle: "First-Party Collections",
    rows: [
      {
        label: "Who the customer hears from",
        left: "A separate collection agency.",
        right: "Your company name, your greeting, your policies.",
        leftYes: false,
      },
      {
        label: "Stage of delinquency",
        left: "Aged or charged-off accounts.",
        right: "Early-stage past-due accounts, before charge-off.",
        leftYes: false,
      },
      {
        label: "Main goal",
        left: "Maximize recovery on debt that has gone bad.",
        right: "Collect the balance and keep the customer relationship.",
        leftYes: false,
      },
      {
        label: "Typical billing model",
        left: "Contingency — a share of recovered funds.",
        right: "Per agent or per hour, like an extension of your billing team.",
        leftYes: false,
      },
      {
        label: "Regulatory framing",
        left: "Fully covered by the FDCPA and Regulation F as a third-party collector.",
        right: "Generally outside the FDCPA's core definition, but TCPA and state rules still apply.",
        leftYes: false,
      },
      {
        label: "Customer experience",
        left: "Signals the account has escalated.",
        right: "Feels like a helpful reminder from a company the customer already knows.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "How Our First-Party Collections Program Works",
    intro:
      "Every program is built around your policies and your brand, then run day to day by a dedicated US-based team.",
    steps: [
      {
        title: "Policy & Brand Setup",
        body: "We document your greetings, payment options, hardship rules, and escalation points, and build scripts in your voice.",
      },
      {
        title: "Systems & Data",
        body: "Agents get access to your billing system or receive account files on a schedule, with numbers scrubbed against do-not-call lists.",
      },
      {
        title: "Reminder Outreach",
        body: "Calls, plus email and text where consent allows, reach customers early with a clear, friendly message.",
      },
      {
        title: "Resolve the Account",
        body: "Agents take secure payments, set up plans, fix billing problems, and record promises to pay.",
      },
      {
        title: "Report & Escalate",
        body: "You get daily activity and payment reporting, and unresolved accounts follow your rules for third-party placement.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Outsource",
    heading: "Why Outsource First-Party Collections?",
    image: "/images/cc-team-work.jpg",
    imagePosition: "left",
    body: [
      "Past-due follow-up tends to slip when it sits with a billing or customer service team that is busy with everything else. Every week an account goes untouched makes it harder to collect and more likely to end up with an outside agency.",
      "An outsourced first-party team gives those accounts consistent daily attention without hiring, training, and managing more staff — while customers still hear your name and your policies.",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to collect past-due balances without losing customers?",
    accent: "without losing customers",
    body: "Tell us about your past-due accounts, your billing system, and how you handle collections today. We will design a first-party collections program around your brand and policies and show you how it would run.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Contingency Collection Agency",
    desc: "Third-party recovery on aged and charged-off accounts, paid only from what is collected.",
    href: "/services/contingency-collection-agency",
  },
  {
    title: "Debt Collection Outsourcing",
    desc: "Outsourced debt collection with US-based agents, payment arrangements, and FDCPA and Regulation F aware handling.",
    href: "/services/debt-collection-outsourcing",
  },
  {
    title: "Customer Care Outsourcing",
    desc: "US-based customer care teams that handle billing questions and account support in your brand voice.",
    href: "/services/customer-care-outsourcing",
  },
  {
    title: "Inbound Call Center Services",
    desc: "US-based agents answering customer calls, including billing and payment lines.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Back Office Outsourcing",
    desc: "Administrative support for payment processing, documentation, and account reconciliation.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "What Is BPO Collections?",
    desc: "How outsourced collections works and the difference between first-party and third-party collections.",
    href: "/blog/what-is-bpo-collections",
  },
];

export default function FirstPartyCollectionsPage() {
  return (
    <ServicePageTemplate
      badge="First-Party Collections"
      title="First-Party Collections Services"
      titleHighlight="First-Party Collections"
      subtitle="Outsourced first-party collections with US-based agents who work under your brand, recover early-stage past-due balances, and keep your customers."
      description="Early-stage past-due accounts are where collections is easiest and where customer relationships are most at risk. Our first-party collections teams work in your company's name, follow your policies, and reach customers early with clear, respectful reminders, payment plans, and secure payment options. You get consistent daily coverage and full reporting without hiring more billing staff, and accounts that do not resolve arrive at the next stage with a complete, documented history."
      features={features}
      benefits={benefits}
      image="/images/cc-man-laptop.jpg"
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
