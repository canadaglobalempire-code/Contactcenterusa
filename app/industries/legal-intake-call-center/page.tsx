import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Legal Intake Call Center | 24/7 Law Firm Answering Service",
  description:
    "US-based legal intake call center for personal injury and mass tort firms. 24/7 answering, case screening, retainer follow-up, and CRM integration. Get a quote.",
  keywords: [
    "legal intake call center",
    "legal intake companies",
    "legal intake services",
    "law firm answering service",
    "personal injury intake",
    "attorney answering service",
    "24/7 legal intake",
    "mass tort intake",
    "legal client intake outsourcing",
    "spanish speaking legal intake",
  ],
  alternates: { canonical: "/industries/legal-intake-call-center" },
};

const features = [
  {
    title: "24/7 Live Legal Intake",
    desc: "Accident calls come in at 2am, on Saturdays, and over holiday weekends. Live US intake specialists answer every one, capture the facts while they are fresh, and get the signed case moving before the caller reaches the next firm's ad.",
  },
  {
    title: "Case Screening & Qualification",
    desc: "Agents run your exact qualification criteria — jurisdiction, statute of limitations, injury type, treatment status, liability, prior representation — so your attorneys only see cases that actually fit your practice.",
  },
  {
    title: "Retainer Delivery & E-Sign Follow-Up",
    desc: "Qualified callers receive the retainer immediately by text or email, and agents follow up on unsigned agreements until the document is executed, converting more of the leads your marketing already paid for.",
  },
  {
    title: "Legal CRM Integration",
    desc: "Intakes are written directly into Litify, Filevine, Clio, MyCase, Smart Advocate, or Salesforce as the call happens, so your case managers work from a complete record with no re-keying and no lost detail.",
  },
  {
    title: "Mass Tort & Class Action Campaigns",
    desc: "High-volume campaign intake with tort-specific screening questionnaires, product and exposure verification, and structured data capture built for the reporting your co-counsel and lead vendors require.",
  },
  {
    title: "Bilingual Spanish Intake",
    desc: "Native Spanish-speaking intake specialists handle the entire call — screening, retainer, and follow-up — instead of transferring to a translation line and losing the claimant mid-conversation.",
  },
];

const benefits = [
  "24/7/365 live coverage — nights, weekends, holidays",
  "100% US-based intake specialists",
  "Litify, Filevine, Clio & Smart Advocate integration",
  "Your qualification criteria, applied consistently",
  "Retainer delivery and e-sign follow-up",
  "Bilingual English/Spanish intake",
];

const stats = [
  { value: 24, suffix: "/7", label: "Live Intake Coverage" },
  { value: 100, suffix: "%", label: "US-Based Intake Specialists" },
  { value: 60, suffix: " sec", label: "Target Lead Response Time" },
  { value: 6, suffix: "+ systems", label: "Legal CRM Integrations Supported" },
];

const faqs = [
  {
    question: "Do you answer legal intake calls after hours and on weekends?",
    answer:
      "Yes — 24/7/365, including nights, weekends, and holidays. This is where most firms lose cases. Accident and injury calls do not follow business hours, and a claimant who reaches voicemail almost always calls the next firm advertising in that market. Live coverage at 2am on a Sunday is the single highest-value part of a legal intake program.",
  },
  {
    question: "How do you decide which cases qualify?",
    answer:
      "We apply your criteria, not ours. During onboarding we document exactly how you screen — practice areas you accept, jurisdictions, statute of limitations windows, injury and treatment thresholds, liability questions, and disqualifiers like prior representation. Agents follow that script on every call, so your attorneys review a consistent, pre-qualified queue instead of raw leads.",
  },
  {
    question: "Can you send and follow up on retainer agreements?",
    answer:
      "Yes. Qualified callers can receive your retainer by text or email before the call ends, while intent is highest. Agents then work an unsigned-retainer follow-up sequence until the agreement is executed or the lead is formally closed out. Firms typically see this recover a meaningful share of leads that would otherwise go quiet after the first call.",
  },
  {
    question: "Which legal CRMs do you work in?",
    answer:
      "We work inside your existing system rather than exporting spreadsheets. Supported platforms include Litify, Filevine, Clio, MyCase, Smart Advocate, CASEpeer, and Salesforce, along with custom builds. Intake data is entered during the call so your case managers see a complete record in real time.",
  },
  {
    question: "Do you handle mass tort and class action intake?",
    answer:
      "Yes. Mass tort campaigns need tort-specific questionnaires, product identification, exposure and usage timelines, and clean structured data for co-counsel and lead-source reporting. We staff dedicated campaign pods so screening stays consistent across high volume, and we can scale capacity up quickly when a campaign launches.",
  },
  {
    question: "Is client information kept confidential?",
    answer:
      "Yes. Intake specialists are trained on the confidentiality expectations of legal work, operate under signed confidentiality agreements, and work in access-controlled environments with call recording governed by your retention policy. We will also execute your firm's own confidentiality and data-handling agreements as part of onboarding.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Legal Intake Call Center for US Law Firms",
    heading: "The firm that answers first signs the case.",
    accent: "answers first signs the case",
    body: [
      "Contact Center USA runs a 100% US-based legal intake call center for personal injury, mass tort, workers' compensation, and consumer law firms — answering live 24/7, screening against your criteria, and getting the retainer signed.",
      "Legal marketing is among the most expensive customer acquisition in the country. Losing a qualified claimant because nobody answered at 11pm on a Saturday is the most expensive mistake a firm can make, and it is entirely preventable.",
    ],
    stats: [
      { stat: "24/7", label: "Live intake including nights, weekends, and holidays" },
      { stat: "100%", label: "US-based intake specialists under confidentiality agreement" },
      { stat: "6+", label: "Legal CRM platforms supported, including Litify and Filevine" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Intake vs. an Outsourced Legal Intake Company",
    intro:
      "Nearly every firm starts with in-house intake and hits the same three walls: after-hours coverage, campaign spikes, and inconsistent screening between staff members. Here is how the models compare.",
    leftTitle: "In-House Intake Staff",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "After-Hours Coverage",
        left: "Voicemail or an answering service that only takes a message — the claimant calls the next firm.",
        right: "Live screening and retainer delivery 24/7/365, including holidays.",
        leftYes: false,
      },
      {
        label: "Screening Consistency",
        left: "Criteria applied differently by each staff member; disqualified cases still reach attorneys.",
        right: "One documented script applied identically on every call, with QA review.",
        leftYes: false,
      },
      {
        label: "Campaign Spikes",
        left: "A new TV or mass tort campaign floods the line and intake staff cannot keep up.",
        right: "Dedicated campaign pods scaled up on launch and back down after.",
        leftYes: false,
      },
      {
        label: "Retainer Follow-Up",
        left: "Unsigned retainers sit while staff work active files — leads go cold.",
        right: "Structured follow-up sequence until the agreement is signed or formally closed.",
        leftYes: false,
      },
      {
        label: "Bilingual Intake",
        left: "Usually English-only or a transfer to a translation line mid-call.",
        right: "Native Spanish speakers handle screening and retainer end to end.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Salaried headcount that must be staffed for peak but is paid at trough.",
        right: "Cost scales with intake volume rather than with payroll.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From First Ring to Signed Retainer",
    intro:
      "Legal intake lives or dies on speed and consistency. Every engagement is configured around your screening criteria and your case management system before a single call is answered.",
    steps: [
      {
        title: "Criteria Documentation",
        body: "We document your practice areas, jurisdictions, qualification thresholds, and hard disqualifiers into an intake script.",
      },
      {
        title: "CRM Provisioning",
        body: "Agents provisioned in Litify, Filevine, Clio, Smart Advocate, or your platform, with confidentiality agreements executed.",
      },
      {
        title: "Specialist Training",
        body: "Intake specialists trained on your script, your tone, and the sensitivity these calls require, with certification before going live.",
      },
      {
        title: "Live Intake & Retainer",
        body: "Calls answered live 24/7, screened, and qualified claimants sent a retainer by text or email before hanging up.",
      },
      {
        title: "Follow-Up & Reporting",
        body: "Unsigned retainers worked to conclusion, with reporting by lead source so you can see which campaigns actually sign.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Practice Areas",
    heading: "Practice Areas We Screen For",
    intro:
      "Screening questions differ sharply by practice area. Our intake pods are trained per practice type rather than reading one generic script.",
    items: [
      {
        icon: "briefcase",
        stat: "PI",
        title: "Personal Injury & Auto",
        body: "Motor vehicle, premises liability, and catastrophic injury screening with treatment and liability capture.",
      },
      {
        icon: "shopping-bag",
        stat: "Tort",
        title: "Mass Tort & Class Action",
        body: "Campaign-specific questionnaires, product and exposure verification, and structured data for co-counsel reporting.",
      },
      {
        icon: "store",
        stat: "Comp",
        title: "Workers' Compensation",
        body: "Injury date, employer, reporting status, and treatment screening built around state-specific requirements.",
      },
      {
        icon: "dollar",
        stat: "Consumer",
        title: "Consumer & Employment Law",
        body: "Wage and hour, debt collection abuse, lemon law, and employment claim intake with document collection.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Firms Outsource Legal Intake to a US-Based Team",
    image: "/images/cc-agent-writing.jpg",
    imagePosition: "right",
    body: [
      "An injured caller is frightened, often in pain, and deciding in the first thirty seconds whether your firm sounds like it can help. Offshore intake teams reading a generic script lose those callers, and the cost per signed case climbs across every campaign you run.",
      "Contact Center USA staffs domestic intake specialists trained on your criteria and your practice areas, working inside your case management system, under confidentiality agreements. You get consistent screening, live 24/7 answering, and retainer follow-up that turns more of your existing marketing spend into signed cases.",
    ],
    bullets: [
      "100% US-based intake specialists — no offshore routing",
      "Your screening criteria applied identically on every call",
      "Live entry into Litify, Filevine, Clio, and Smart Advocate",
      "Retainer delivery by text or email before the call ends",
      "Bilingual English/Spanish screening included",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Stop losing signed cases to voicemail.",
    accent: "losing signed cases to voicemail",
    body: "Tell us your practice areas, monthly lead volume, and case management system. We will put together an intake coverage and pricing plan built around your screening criteria.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center Services",
    desc: "Round-the-clock inbound coverage for firms handling high campaign call volume.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound follow-up on unsigned retainers and consultation scheduling for your attorneys.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Multilingual Call Center Services",
    desc: "Native Spanish and additional language intake for firms serving diverse markets.",
    href: "/solutions/multilingual-call-center-services",
  },
];

export default function LegalIntakePage() {
  return (
    <ServicePageTemplate
      badge="Legal Intake Call Center"
      title="24/7 Client Intake for the Legal Industry"
      titleHighlight="Legal Industry"
      subtitle="Personal injury, mass tort, and consumer law firms rely on our US-based intake specialists to answer every call live, screen against your criteria, and get the retainer signed."
      description="Our legal intake call center is built for firms that spend real money on client acquisition and cannot afford to lose a qualified claimant to voicemail. We answer 24/7, apply your exact qualification criteria, deliver and follow up on retainers, and write every intake directly into Litify, Filevine, Clio, or your case management system."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-desk.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
