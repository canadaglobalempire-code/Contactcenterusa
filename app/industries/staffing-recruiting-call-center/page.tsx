import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Staffing & Recruiting Call Center | Candidate Screening BPO",
  description:
    "US-based call center for staffing agencies and recruiters. Candidate screening, shift filling, redeployment calls, and 24/7 branch after-hours coverage.",
  keywords: [
    "staffing agency call center",
    "recruiting bpo services",
    "candidate screening outsourcing",
    "shift filling call center",
    "staffing after hours answering",
    "recruitment process outsourcing calls",
    "temp staffing phone support",
    "candidate redeployment calling",
    "recruiter appointment setting",
    "staffing branch overflow support",
  ],
  alternates: { canonical: "/industries/staffing-recruiting-call-center" },
};

const features = [
  {
    title: "Candidate Screening & Pre-Qualification",
    desc: "High-volume applicant screening against your requirements — availability, certifications, licenses, transport, shift preference, right to work, and pay expectations — so recruiters interview only candidates who actually fit the order.",
  },
  {
    title: "Shift Filling & Urgent Coverage",
    desc: "When a client calls out at 5am, filling the shift is a race through a candidate list. Agents work your available pool systematically, confirm coverage, and update your ATS so the branch knows the order is covered.",
  },
  {
    title: "After-Hours Branch Coverage",
    desc: "Client call-offs, candidate no-shows, and emergency orders do not respect branch hours. Live overnight and weekend coverage catches them and escalates to your on-call staffing manager by your rules.",
  },
  {
    title: "Redeployment & Bench Calling",
    desc: "Systematic outbound to candidates coming off assignment and to your inactive bench — the fastest source of qualified placements a staffing firm has, and the calling that never gets done during a busy week.",
  },
  {
    title: "Interview & Onboarding Coordination",
    desc: "Interview scheduling between clients and candidates, reminder calls that cut no-shows, and onboarding follow-up chasing outstanding documents, background checks, and compliance paperwork.",
  },
  {
    title: "Bilingual Candidate Communication",
    desc: "Native Spanish-speaking agents handle screening and shift confirmation directly, which matters enormously in light industrial, hospitality, warehouse, and construction staffing.",
  },
];

const benefits = [
  "High-volume screening against your requirements",
  "100% US-based agents",
  "Bullhorn, JobDiva & Avionté integration",
  "24/7 after-hours branch and call-off coverage",
  "Redeployment and bench reactivation calling",
  "Bilingual English/Spanish candidate contact",
];

const stats = [
  { value: 24, suffix: "/7", label: "After-Hours Branch Coverage" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 60, suffix: " sec", label: "Target Applicant Response Time" },
  { value: 3, suffix: "+ systems", label: "ATS Integrations Supported" },
];

const faqs = [
  {
    question: "Can you screen candidates at volume?",
    answer:
      "Yes, and volume screening is where most recruiter time disappears. We call applicants against your documented requirements — availability, certifications and licenses, transport, shift preference, right to work, pay expectations — and record structured results in your ATS. Recruiters then spend their time interviewing qualified people rather than working through an applicant list.",
  },
  {
    question: "How fast do you contact new applicants?",
    answer:
      "We target contact within a minute of application. In staffing this matters as much as it does in sales: candidates apply to many roles in a single session and commit to whoever calls first. A candidate contacted the next day has frequently already accepted an assignment elsewhere.",
  },
  {
    question: "Can you help fill shifts on short notice?",
    answer:
      "Yes. Urgent shift filling is a race through a list, and it is well suited to a team that can make many calls in parallel while your branch handles everything else. We work your available candidate pool in your priority order, confirm coverage, and update the ATS so the branch has a live view of whether the order is filled.",
  },
  {
    question: "Do you provide after-hours coverage for branches?",
    answer:
      "Yes. Client call-offs, candidate no-shows, and emergency orders arrive well outside branch hours, particularly in healthcare, light industrial, and hospitality staffing. We answer live overnight and at weekends, handle what your rules allow, and escalate genuine emergencies to your on-call staffing manager.",
  },
  {
    question: "Which ATS platforms do you work in?",
    answer:
      "We work in your existing system — Bullhorn, JobDiva, Avionté, Tempworks, and Salesforce-based platforms are all supported, alongside custom builds. Screening results, shift confirmations, and call notes are recorded in the ATS as the work happens, so your recruiters see a live picture rather than a next-day summary.",
  },
  {
    question: "Can you run redeployment campaigns?",
    answer:
      "Yes, and it is usually the highest-margin calling a staffing firm can do. Candidates finishing an assignment and inactive bench candidates are already vetted, already onboarded, and already known to you — but nobody calls them during a busy week. Systematic redeployment calling converts that pool at a fraction of the cost of sourcing new applicants.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Staffing & Recruiting Call Center",
    heading: "Your recruiters are dialing an applicant list instead of filling orders.",
    accent: "instead of filling orders",
    body: [
      "Contact Center USA supports staffing agencies and recruiters with US-based agents — applicant screening, urgent shift filling, after-hours branch coverage, and redeployment calling.",
      "Staffing is a speed business on both sides. The client whose order is filled first keeps using you, and the candidate who is called first takes the assignment. Both races are lost to the same thing: recruiters buried in volume calling that does not need a recruiter.",
    ],
    stats: [
      { stat: "60 sec", label: "Target contact time on new applicant submissions" },
      { stat: "24/7", label: "After-hours coverage for call-offs and emergency orders" },
      { stat: "100%", label: "US-based agents working inside your ATS" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Recruiters Doing Everything vs. Dedicated Calling Support",
    intro:
      "Recruiters are hired to build client relationships and place candidates. Most of their week goes to volume calling that a trained agent can do faster and more consistently.",
    leftTitle: "Recruiters Handling All Calling",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Applicant Response",
        left: "Applicants called hours or days later; the good ones are already placed.",
        right: "Contacted within a minute and screened against your requirements.",
        leftYes: false,
      },
      {
        label: "Screening Consistency",
        left: "Criteria applied differently by each recruiter under time pressure.",
        right: "One documented screen applied identically, recorded in the ATS.",
        leftYes: false,
      },
      {
        label: "Urgent Shift Filling",
        left: "One recruiter dialing sequentially while the client waits.",
        right: "Multiple agents working the pool in parallel until covered.",
        leftYes: false,
      },
      {
        label: "After-Hours Orders",
        left: "Voicemail overnight; the client calls another agency by 6am.",
        right: "Live coverage with escalation to your on-call manager.",
        leftYes: false,
      },
      {
        label: "Redeployment",
        left: "Bench and ending assignments rarely called during a busy week.",
        right: "Systematic campaigns against an already-vetted candidate pool.",
        leftYes: false,
      },
      {
        label: "Bilingual Candidates",
        left: "Depends entirely on which recruiter is available.",
        right: "Native Spanish-speaking agents on every coverage window.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Application to Filled Order",
    intro:
      "Every staffing engagement is configured around your screening requirements and your ATS, so results land where your recruiters already work.",
    steps: [
      {
        title: "Requirement Documentation",
        body: "We capture screening criteria by role type — certifications, availability, transport, pay bands, and hard disqualifiers.",
      },
      {
        title: "ATS Provisioning",
        body: "Agents provisioned in Bullhorn, JobDiva, Avionté, or Tempworks with permissions scoped to their function.",
      },
      {
        title: "Escalation Rules",
        body: "After-hours rules defined: what agents handle directly and what reaches your on-call staffing manager.",
      },
      {
        title: "Launch Screening",
        body: "Applicant screening goes live with contact inside a minute and structured results recorded in the ATS.",
      },
      {
        title: "Add Shift Fill & Redeployment",
        body: "Layer in urgent shift filling and bench reactivation once screening throughput is stable.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sectors",
    heading: "Staffing Verticals We Support",
    intro:
      "Screening requirements vary enormously by vertical — a travel nurse screen and a warehouse screen share almost nothing — so agents are trained per sector.",
    items: [
      {
        icon: "heart-pulse",
        stat: "Health",
        title: "Healthcare & Travel Nursing",
        body: "License and certification verification, credential expiry checks, and urgent shift coverage.",
      },
      {
        icon: "factory",
        stat: "Light Ind",
        title: "Light Industrial & Warehouse",
        body: "High-volume screening, early-morning shift filling, and bilingual candidate communication.",
      },
      {
        icon: "briefcase",
        stat: "Pro",
        title: "Professional & Clerical",
        body: "Skills screening, interview coordination, and client-candidate scheduling for placement roles.",
      },
      {
        icon: "wrench",
        stat: "Trades",
        title: "Skilled Trades & Construction",
        body: "Ticket and certification checks, site availability, and mobilization coordination.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why the Calling Is the Bottleneck, Not the Recruiting",
    image: "/images/cc-man-laptop.jpg",
    imagePosition: "right",
    body: [
      "Staffing firms rarely lose orders because they lack candidates. They lose them because nobody could work the list fast enough — the applicant went cold, the 5am call-off went unanswered, the bench never got called.",
      "Contact Center USA takes the volume calling. Applicants contacted within the minute and screened consistently, shifts worked in parallel until covered, after-hours orders answered live, and bench candidates called systematically. Your recruiters keep the client relationships and the placements.",
    ],
    bullets: [
      "Applicant contact within a minute, screened to your documented criteria",
      "Parallel calling on urgent shift fills instead of sequential dialing",
      "Live after-hours coverage with escalation to your on-call manager",
      "Redeployment campaigns against an already-vetted bench",
      "All results recorded live in Bullhorn, JobDiva, or Avionté",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Give your recruiters their week back.",
    accent: "their week back",
    body: "Send us your applicant volume, ATS, and typical order profile. We will scope a screening and shift-fill program with after-hours coverage around your branch hours.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Outbound Call Center Services",
    desc: "The outbound engine behind redeployment, bench reactivation, and shift-fill campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Back Office Outsourcing",
    desc: "Onboarding paperwork, compliance document chase, and data entry behind the calls.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Office Support Services",
    desc: "Administrative and coordination support for branch operations.",
    href: "/solutions/office-support-services",
  },
  {
    title: "Central Intake & Territory Routing for Franchise Networks",
    desc: "US-based call center for franchise networks.",
    href: "/industries/franchise-call-center",
  },
  {
    title: "Donor Care & Fundraising Support for Nonprofits",
    desc: "US-based call center for nonprofits and foundations.",
    href: "/industries/nonprofit-call-center",
  },
  {
    title: "Bilingual & Multilingual Support for the US Market",
    desc: "US-based bilingual Spanish call center services and multilingual BPO support.",
    href: "/industries/spanish-call-center-services",
  },
];

export default function StaffingRecruitingPage() {
  return (
    <ServicePageTemplate
      badge="Staffing & Recruiting Call Center"
      title="Candidate Screening & Shift Coverage for Staffing Agencies"
      titleHighlight="Staffing Agencies"
      subtitle="Staffing firms and recruiters use our US-based agents to screen applicants within a minute, fill urgent shifts in parallel, cover branches after hours, and work the redeployment bench."
      description="Staffing is a race on both sides — the agency that fills first keeps the client, and the recruiter who calls first gets the candidate. Both are usually lost to volume calling that does not require a recruiter. We contact applicants within a minute and screen them against your documented criteria, work urgent shift fills in parallel, answer call-offs and emergency orders overnight, and run the redeployment calling nobody has time for."
      features={features}
      benefits={benefits}
      image="/images/cc-team-work.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
