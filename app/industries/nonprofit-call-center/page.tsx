import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Nonprofit Call Center | Donor Care & Fundraising Support",
  description:
    "US-based call center for nonprofits and foundations. Donor care, recurring gift recovery, campaign outbound, and helpline coverage. Get a quote.",
  keywords: [
    "nonprofit call center",
    "donor care outsourcing",
    "fundraising call center",
    "charity phone support",
    "recurring gift recovery",
    "donor stewardship calling",
    "nonprofit helpline support",
    "membership renewal calling nonprofit",
    "telefundraising services",
    "donation processing support",
  ],
  alternates: { canonical: "/industries/nonprofit-call-center" },
};

const features = [
  {
    title: "Donor Care & Gift Processing",
    desc: "Inbound donor calls handled with genuine warmth — processing gifts, updating recurring commitments, answering allocation and tax receipt questions, and correcting the record so a supporter never has to explain themselves twice.",
  },
  {
    title: "Recurring Gift Recovery",
    desc: "Failed and expired card payments on monthly giving are the largest silent source of revenue loss in fundraising. Agents recover lapsed recurring donors who never intended to stop giving at all.",
  },
  {
    title: "Stewardship & Thank-You Calling",
    desc: "Thank-you calls with no ask attached, made to first-time and upgraded donors. It is the single most reliable retention intervention in fundraising and the one most organizations never staff for.",
  },
  {
    title: "Campaign & Appeal Support",
    desc: "Inbound capacity for year-end, giving days, and emergency appeals, plus outbound renewal and upgrade calling against segments your team defines — scaled up for the campaign window and back down after.",
  },
  {
    title: "Helpline & Program Line Coverage",
    desc: "Coverage for program, information, and referral lines, staffed by agents trained on your service directory and escalation protocol, with clear boundaries on what is information and what requires a trained counselor.",
  },
  {
    title: "Bilingual Donor & Constituent Support",
    desc: "Native Spanish-speaking agents handle donor conversations and program enquiries end to end, which widens both the supporter base and the community your programs can actually reach.",
  },
];

const benefits = [
  "100% US-based agents",
  "Raiser's Edge, Salesforce NPSP & Bloomerang support",
  "Recurring gift and failed payment recovery",
  "Stewardship calling with no ask attached",
  "Campaign surge capacity for year-end and giving days",
  "Bilingual English/Spanish donor and program support",
];

const stats = [
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 24, suffix: "/7", label: "Campaign & Helpline Coverage Available" },
  { value: 5, suffix: "x", label: "Campaign Surge Staffing Flex" },
  { value: 3, suffix: "+ systems", label: "Donor CRM Integrations" },
];

const faqs = [
  {
    question: "Do you do telemarketing-style fundraising?",
    answer:
      "Not in the way that phrase usually implies, and it is worth being direct about it. We do not run aggressive cold solicitation. What we do is donor care, stewardship, renewal and upgrade calling to your existing supporters, and recurring gift recovery. Those programs are relationship work with your own constituents, and they perform better than cold calling while protecting the reputation you rely on.",
  },
  {
    question: "Can you recover lapsed recurring donors?",
    answer:
      "Yes, and it is usually the fastest measurable return in the whole engagement. Most monthly giving attrition is involuntary — an expired card, a reissued bank card, a temporary decline. Those donors did not decide to stop supporting you. A prompt, friendly call recovers a large share of them, and each recovery restores the full remaining lifetime value of that commitment.",
  },
  {
    question: "What are stewardship calls?",
    answer:
      "Thank-you calls with no ask attached, typically to first-time donors, upgraded donors, or major gift supporters. Repeated studies across the sector find this among the most effective retention interventions available, and almost no organization staffs for it, because it never competes successfully against campaign deadlines for internal time.",
  },
  {
    question: "Which donor CRMs do you work in?",
    answer:
      "We work inside your system rather than exporting lists — Raiser's Edge NXT, Salesforce Nonprofit Success Pack, Bloomerang, DonorPerfect, Neon, and Virtuous are all supported. Gift updates, call outcomes, and contact preferences are recorded live so your development team sees an accurate record.",
  },
  {
    question: "Can you handle year-end and giving day surges?",
    answer:
      "Yes. Nonprofit contact volume is extremely concentrated — a large share of annual giving arrives in December and on giving days, exactly when small development teams are least able to answer phones. We staff against your campaign calendar with capacity scaled up for those windows and back down afterwards.",
  },
  {
    question: "Do you cover program and helpline calls?",
    answer:
      "Information and referral lines, yes — agents trained on your service directory, eligibility criteria, and escalation protocol. For crisis lines or anything requiring clinical or counseling qualifications, we handle only the intake and routing layer you define in writing, and escalate immediately to your trained staff. We will not staff a role that requires credentials our agents do not hold.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Nonprofit & Fundraising Call Center",
    heading: "Most monthly donors who stop giving never decided to.",
    accent: "never decided to",
    body: [
      "Contact Center USA supports nonprofits, foundations, and membership organizations with US-based agents — donor care, recurring gift recovery, stewardship calling, campaign surge, and helpline coverage.",
      "Development teams are small and permanently oversubscribed. The work that gets cut first is the work that quietly compounds: thanking new donors, recovering a failed monthly gift, calling supporters whose renewal has lapsed.",
    ],
    stats: [
      { stat: "5x", label: "Campaign surge capacity for year-end and giving days" },
      { stat: "100%", label: "US-based agents working inside your donor CRM" },
      { stat: "3+", label: "Donor platforms supported including Raiser's Edge and NPSP" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "A Small Development Team vs. Added Calling Capacity",
    intro:
      "This is not about replacing development staff. It is about the programs that never happen because a three-person team cannot run a campaign and steward donors in the same week.",
    leftTitle: "Development Team Alone",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Recurring Gift Failures",
        left: "Automated emails only; lapsed monthly donors quietly disappear.",
        right: "Live recovery calls restoring commitments donors never meant to end.",
        leftYes: false,
      },
      {
        label: "Stewardship Calls",
        left: "Universally agreed to matter, almost never actually staffed.",
        right: "Systematic thank-you calling with no ask attached.",
        leftYes: false,
      },
      {
        label: "Year-End Volume",
        left: "A three-person team cannot answer December's inbound.",
        right: "Surge capacity staged against the campaign calendar.",
        leftYes: false,
      },
      {
        label: "Renewal Calling",
        left: "Lapsed supporters get a mail piece and nothing else.",
        right: "Renewal and upgrade conversations against segments you define.",
        leftYes: false,
      },
      {
        label: "Helpline Coverage",
        left: "Program lines go to voicemail outside business hours.",
        right: "Live coverage with escalation strictly by your protocol.",
        leftYes: false,
      },
      {
        label: "Bilingual Reach",
        left: "Limited to whoever on staff speaks the language.",
        right: "Native Spanish-speaking agents across donor and program lines.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Lapsed Gift to Restored Supporter",
    intro:
      "Every nonprofit engagement is built around your donor CRM, your voice, and the boundaries you set on what agents may say about your work.",
    steps: [
      {
        title: "Voice & Boundaries",
        body: "We document your organizational voice, approved language about programs, and what must escalate to staff.",
      },
      {
        title: "CRM Provisioning",
        body: "Agents provisioned in Raiser's Edge, NPSP, Bloomerang, or DonorPerfect with appropriate permissions.",
      },
      {
        title: "Segment Definition",
        body: "You define the segments — lapsed recurring, first-time donors, renewals, upgrades — and the goal for each.",
      },
      {
        title: "Launch Recovery & Stewardship",
        body: "Start with recurring gift recovery and thank-you calling, where returns appear fastest.",
      },
      {
        title: "Scale for Campaigns",
        body: "Add surge capacity for year-end, giving days, and emergency appeals as the calendar requires.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Organizations We Support",
    heading: "Across the Nonprofit Sector",
    intro:
      "A national health charity and a local arts organization have very different constituent relationships, so programs are built per organization rather than templated.",
    items: [
      {
        icon: "heart-pulse",
        stat: "Health",
        title: "Health & Human Services",
        body: "Donor care alongside program information and referral line coverage.",
      },
      {
        icon: "graduation-cap",
        stat: "Edu",
        title: "Education & Alumni",
        body: "Annual fund renewals, alumni engagement, and reunion or campaign calling.",
      },
      {
        icon: "landmark",
        stat: "Arts",
        title: "Arts & Cultural Institutions",
        body: "Membership renewals, subscription support, and patron and event servicing.",
      },
      {
        icon: "shield",
        stat: "Faith",
        title: "Faith-Based & Community",
        body: "Recurring giving support, stewardship calling, and appeal campaign coverage.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Retention Work Belongs With Dedicated Capacity",
    image: "/images/cc-diverse-team.jpg",
    imagePosition: "right",
    body: [
      "Every development director knows that thanking a first-time donor and recovering a failed monthly gift produce better returns than almost anything else available. Both lose, every single week, to whatever campaign deadline is closest.",
      "Contact Center USA supplies the capacity that makes those programs actually happen. US-based agents inside your donor CRM, working segments you define, in your voice, with clear escalation on anything sensitive. Your team keeps major gifts and strategy.",
    ],
    bullets: [
      "Recurring gift recovery targeting involuntary lapse",
      "Stewardship thank-you calling with no ask attached",
      "Campaign surge capacity for year-end and giving days",
      "Agents working live inside Raiser's Edge, NPSP, or Bloomerang",
      "Documented boundaries with escalation to your staff",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Recover the monthly donors who never meant to leave.",
    accent: "never meant to leave",
    body: "Send us your recurring donor count, lapse rate, and campaign calendar. We will scope a recovery and stewardship program with surge capacity for year-end.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Outbound Call Center Services",
    desc: "The outbound engine behind stewardship, renewal, and recovery campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Inbound Call Center Services",
    desc: "Campaign and helpline inbound coverage scaled to your giving calendar.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Government Call Center Services",
    desc: "Adjacent public-sector coverage for organizations delivering government-funded programs.",
    href: "/solutions/government-call-center-services",
  },
  {
    title: "Central Intake & Territory Routing for Franchise Networks",
    desc: "US-based call center for franchise networks.",
    href: "/industries/franchise-call-center",
  },
  {
    title: "Bilingual & Multilingual Support for the US Market",
    desc: "US-based bilingual Spanish call center services and multilingual BPO support.",
    href: "/industries/spanish-call-center-services",
  },
  {
    title: "Professional Call Monitoring & Quality Assurance Solutions",
    desc: "Call monitoring and QA services with calibrated scorecards, agent coaching and compliance review across your queues.",
    href: "/solutions/call-monitoring-services",
  },
];

export default function NonprofitCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Nonprofit Call Center"
      title="Donor Care & Fundraising Support for Nonprofits"
      titleHighlight="Nonprofits"
      subtitle="Nonprofits, foundations, and membership organizations use our US-based agents to recover lapsed recurring gifts, steward new donors, and cover the year-end surge."
      description="Most monthly donors who stop giving never made that decision — a card expired and nobody called. We recover those commitments, make the thank-you calls that development teams universally endorse and never have time for, run renewal and upgrade conversations against segments you define, and add surge capacity for year-end and giving days. All inside your donor CRM, in your voice."
      features={features}
      benefits={benefits}
      image="/images/cc-support-team.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
