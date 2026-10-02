import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Contingency Collection Agency | US-Based Debt Recovery",
  description:
    "Contingency collection agency services from a 100% US-based team. You pay only on what we recover, with FDCPA and Regulation F aware outreach. Get a quote.",
  keywords: [
    "contingency collection agency",
    "contingency debt collection",
    "contingency fee collection agency",
    "no recovery no fee collections",
    "third party collection agency",
    "aged receivables recovery",
    "fdcpa compliant collection agency",
  ],
  alternates: { canonical: "/services/contingency-collection-agency" },
};

const features = [
  {
    title: "Pay-on-Recovery Engagement",
    desc: "Our contingency collection agency model ties our fee to the money we actually recover for you. If an account produces nothing, it costs you nothing — so our incentives stay aligned with your recovery goals.",
  },
  {
    title: "Third-Party Recovery on Aged Accounts",
    desc: "Placement of past-due and charged-off receivables with a separate collection agency, worked by US-based collectors who follow FDCPA, Regulation F, TCPA, and applicable state rules on every contact.",
  },
  {
    title: "Skip Tracing & Right-Party Contact",
    desc: "Accounts with stale phone numbers or addresses are run through skip tracing and contact enrichment so collectors reach the right person instead of burning attempts on dead numbers.",
  },
  {
    title: "Payment Plans & Settlements",
    desc: "Collectors negotiate realistic payment plans and, where you authorize it, settlements within the limits you set. Payments run through secure, PCI-compliant processing.",
  },
  {
    title: "Disputes & Validation Handling",
    desc: "Validation notices, consumer disputes, and cease-communication requests are logged and handled through a documented workflow, so every account has an audit-ready history.",
  },
  {
    title: "Recovery Reporting by Placement",
    desc: "Track each placement by age, balance, status, and collector, with call recordings on request. You always know what has been worked, what has been promised, and what has been paid.",
  },
];

const benefits = [
  "Fee earned only on recovered funds",
  "100% US-based collectors",
  "FDCPA, Regulation F & TCPA aware handling",
  "Every call recorded and logged",
  "Secure PCI-compliant payment processing",
  "Month-to-month terms, no long contracts",
];

const faqs = [
  {
    question: "What is a contingency collection agency?",
    answer:
      "A contingency collection agency is a third-party debt collector that is paid only when it recovers money on the accounts you place with it. Instead of an hourly rate or a monthly retainer, the agency keeps an agreed share of each payment it collects and remits the rest to you. If an account is never paid, you owe the agency nothing for working it.",
  },
  {
    question: "How is a contingency fee set?",
    answer:
      "The fee is an agreed share of what is collected, and it usually reflects how hard the portfolio is to recover. The main drivers are the age of the debt, average balance, the quality of the contact data you provide, whether the accounts have been worked by another agency before, consumer versus commercial debt, and the volume you place. We review a sample of your portfolio before quoting so the fee reflects your accounts rather than a generic rate card.",
  },
  {
    question: "Is contingency collection better than an hourly or per-agent model?",
    answer:
      "It depends on the stage of the debt. Contingency works best on aged, past-due, or charged-off accounts where recovery is uncertain and you want to pay only on results. Early-stage, branded outreach on current customers is often better suited to a first-party program billed by agent or by hour, because the goal there is keeping the customer as well as collecting the balance.",
  },
  {
    question: "Which laws apply to a contingency collection agency?",
    answer:
      "Because a contingency agency collects debts owed to another company, it is a third-party debt collector under the Fair Debt Collection Practices Act and Regulation F. Calling and texting must also follow the TCPA, and many states add their own licensing, bonding, and disclosure rules. Our collectors are trained on these rules, every call is recorded, and contact attempts are logged for audit.",
  },
  {
    question: "Will a collection agency damage our customer relationships?",
    answer:
      "Professional collection does not have to. Our collectors are trained to be firm, respectful, and solution-focused, offering payment plans that a consumer can actually keep. For accounts where you want to protect the relationship, we can also run a first-party program under your own brand before accounts move to third-party placement.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Contingency Debt Collection",
    heading: "What is a contingency collection agency — and why do so many creditors choose one?",
    accent: "contingency collection agency",
    body: [
      "A contingency collection agency recovers past-due and charged-off debt on your behalf and is paid only from what it collects. There is no retainer to fund and no invoice for accounts that never pay. The agency earns its fee when you get paid, which is why the contingency model is the most common way businesses place aged receivables with a third party.",
      "Contact Center USA works contingency placements with 100% US-based collectors, the same compliance-first approach behind our debt collection outsourcing programs, and reporting that shows you exactly where every placed account stands.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare Models",
    heading: "Contingency Collection vs. Working Aged Accounts In-House",
    intro:
      "Most businesses reach for a contingency collection agency when aged accounts pile up faster than an internal team can work them. Here is how the two approaches differ on the points that matter.",
    leftTitle: "In-House Collections",
    rightTitle: "Contingency Collection Agency",
    rows: [
      {
        label: "How you pay",
        left: "Salaries, dialer, licensing, and compliance costs every month, whether or not anything is recovered.",
        right: "A share of recovered funds only. Accounts that never pay cost you nothing to have worked.",
        leftYes: false,
      },
      {
        label: "Who the debtor hears from",
        left: "Your company name — which can strain relationships on accounts you may want to keep.",
        right: "A separate collection agency, which signals that the account has moved to a more serious stage.",
        leftYes: false,
      },
      {
        label: "Compliance burden",
        left: "Your organization owns FDCPA-style practices, state rules, call recording, and dispute handling.",
        right: "The agency carries third-party collector obligations under the FDCPA and Regulation F.",
        leftYes: false,
      },
      {
        label: "Visibility",
        left: "Notes scattered across billing and CRM systems.",
        right: "Placement-level reporting with account status, promises to pay, payments, and call recordings.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "How Our Contingency Collection Process Works",
    intro:
      "Every contingency placement moves through the same documented workflow, so you can see what happened to each account and why.",
    steps: [
      {
        title: "Portfolio Review",
        body: "We review a sample of your accounts and agree on the contingency fee, settlement limits, and reporting before anything is placed.",
      },
      {
        title: "Placement & Scrub",
        body: "Files are validated and scrubbed against bankruptcy, deceased, and do-not-call lists before any outreach begins.",
      },
      {
        title: "Notice & Contact",
        body: "Validation notices go out, then compliant calls, letters, email, and text where consent allows, within Regulation F contact limits.",
      },
      {
        title: "Resolve & Remit",
        body: "Collectors set up payment plans or authorized settlements, process payments securely, and remit collected funds to you.",
      },
      {
        title: "Report & Close",
        body: "Disputes are documented, uncollectable accounts are closed back to you, and every placement is reported on.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Choosing an Agency",
    heading: "How to Choose a Contingency Collection Agency",
    image: "/images/cc-agent-call.jpg",
    imagePosition: "right",
    body: [
      "The cheapest contingency fee is rarely the best deal. An agency that recovers more of your portfolio at a higher fee can return more money than one that recovers little at a lower fee, and an agency that cuts corners on compliance can expose your brand to complaints and lawsuits.",
      "When you compare agencies, ask how they handle disputes, how they monitor collector calls, where their collectors are located, what reporting you will receive, and what happens to accounts they cannot collect.",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Looking for a contingency collection agency that only gets paid when you do?",
    accent: "only gets paid when you do",
    body: "Tell us about the aged receivables sitting on your books. We will review your portfolio, explain how we would work it, and give you a contingency proposal before you place a single account.",
    ctaLabel: "Request a Portfolio Review",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Debt Collection Outsourcing",
    desc: "Outsourced debt collection with US-based agents, payment arrangements, and FDCPA and Regulation F aware handling.",
    href: "/services/debt-collection-outsourcing",
  },
  {
    title: "First-Party Collections",
    desc: "Branded, early-stage collections that recover past-due balances while keeping the customer relationship.",
    href: "/services/first-party-collections",
  },
  {
    title: "Debt Collection Call Center",
    desc: "US-based call center support for collection agencies and creditors.",
    href: "/industries/debt-collection-call-center",
  },
  {
    title: "Outbound Call Center",
    desc: "High-volume outbound calling capabilities for collections, notifications, and payment reminders.",
    href: "/solutions/outbound-call-center-services",
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

export default function ContingencyCollectionAgencyPage() {
  return (
    <ServicePageTemplate
      badge="Contingency Collection Agency"
      title="Contingency Collection Agency Services"
      titleHighlight="Contingency Collection Agency"
      subtitle="A 100% US-based contingency collection agency that recovers past-due and charged-off accounts — and earns its fee only on what it collects for you."
      description="Aged receivables are expensive to chase and easy to write off. As a contingency collection agency, Contact Center USA works your past-due and charged-off accounts with US-based collectors, compliant multi-channel outreach, and skip tracing, and we are paid only from the money we recover. You keep control of settlement limits, see every placed account in your reports, and never fund a retainer for accounts that never pay."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-writing.jpg"
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
