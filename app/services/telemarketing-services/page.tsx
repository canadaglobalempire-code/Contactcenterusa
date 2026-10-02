import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "Telemarketing Services | US-Based Telemarketing Company";
const description =
  "What a telemarketing company does, inbound vs outbound calling, how programs are priced and the TSR and TCPA rules. US-based telemarketing services.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "telemarketing services",
    "telemarketing company",
    "inbound telemarketing",
    "telemarketing bpo usa",
    "outbound telemarketing outsourcing",
    "telemarketing companies usa",
    "b2b telemarketing services",
    "cold calling services",
    "tcpa compliant telemarketing",
    "telemarketing call center",
  ],
  alternates: { canonical: "/services/telemarketing-services" },
  ...pageMeta(title, description, "/services/telemarketing-services"),
};

const features = [
  {
    title: "Cold Calling & Prospecting",
    desc: "Trained telemarketing agents who deliver compelling pitches, handle objections naturally, and generate interest with prospects who have never heard of your brand — turning cold lists into warm conversations.",
  },
  {
    title: "Campaign Strategy & Script Development",
    desc: "End-to-end campaign planning including audience segmentation, script writing, A/B testing, and ongoing optimization to ensure every calling campaign performs at its peak from day one through completion.",
  },
  {
    title: "Lead Qualification & Handoff",
    desc: "Systematic lead qualification that screens prospects against your criteria, gathers key intelligence, and delivers sales-ready leads to your team with detailed notes — no more wasted follow-up calls.",
  },
  {
    title: "Market Research & Surveys",
    desc: "Phone-based market research and customer surveys that gather quantitative and qualitative insights to inform your product development, marketing strategy, and competitive positioning decisions.",
  },
  {
    title: "Event & Webinar Promotion",
    desc: "Targeted outreach campaigns to drive registrations and attendance for trade shows, webinars, product launches, and corporate events — with confirmation calls and reminder sequences that maximize show rates.",
  },
  {
    title: "Do-Not-Call Compliance Management",
    desc: "Rigorous TCPA compliance with automated DNC list scrubbing, consent management, call time restrictions, and detailed audit trails that protect your business from regulatory penalties and reputational damage.",
  },
];

const benefits = [
  "TCPA & TSR-compliant calling",
  "Professional, US-based callers",
  "Custom script development & A/B testing",
  "Real-time campaign dashboards",
  "Predictive dialer technology",
  "Flexible campaign scaling",
];

const stats = [
  { value: 320, suffix: "K+", label: "Calls Made Monthly" },
  { value: 12, suffix: "%", label: "Average Contact-to-Lead Rate" },
  { value: 100, suffix: "%", label: "DNC Compliance Rate" },
  { value: 4.5, suffix: "x", label: "ROI on Campaign Spend", decimals: 1 },
];

const testimonial = {
  quote:
    "Contact Center USA ran our product launch telemarketing campaign and delivered 4.5x ROI. Their agents were professional, persistent, and fully compliant. We've since made them our ongoing telemarketing partner for all outbound campaigns.",
  name: "M.J.",
  title: "Marketing Director",
  company: "A National Business Services Company",
  initials: "MJ",
};

const faqs = [
  {
    question: "What does a telemarketing company do?",
    answer:
      "A telemarketing company makes and answers sales and marketing calls for other businesses. It provides trained callers, dialing technology, list management and compliance controls, and runs campaigns such as prospecting, lead qualification, appointment setting, customer reactivation and phone surveys, with reporting on every call.",
  },
  {
    question: "What is the difference between inbound and outbound telemarketing?",
    answer:
      "Outbound telemarketing means agents call prospects or customers from a list. Inbound telemarketing means agents answer calls that customers make in response to advertising, then qualify the caller, take the order or book the appointment. Outbound reaches people who are not yet looking for you; inbound handles people who already are.",
  },
  {
    question: "How are telemarketing services priced?",
    answer:
      "Usually per agent hour, per completed contact, or per appointment or qualified lead. Per hour suits new and complex campaigns, per contact suits surveys and campaigns with a clear outcome, and per appointment suits proven offers with a tight definition of what qualifies. The cost depends on list quality, the audience, call length, the hours covered and how much product training is needed.",
  },
  {
    question: "Do business-to-business calls fall under the Telemarketing Sales Rule?",
    answer:
      "Calls to businesses are exempt from most of the Telemarketing Sales Rule, but its bans on misrepresentation still apply, and calls selling nondurable office or cleaning supplies are covered. TCPA rules on autodialed and prerecorded calls to mobile numbers, and state laws, can still apply to B2B campaigns.",
  },
  {
    question: "How do you ensure telemarketing compliance with TCPA and TSR regulations?",
    answer:
      "We maintain comprehensive compliance programs including automated DNC list scrubbing against federal and state registries, consent tracking for every contact, calling time window enforcement, and mandatory disclosures in every call. All agents complete TCPA and TSR training, and our compliance team audits campaigns weekly.",
  },
  {
    question: "Can you develop scripts that sound natural rather than robotic?",
    answer:
      "Absolutely. Our script development team creates conversational frameworks rather than rigid word-for-word scripts. Agents are trained to use the framework as a guide while adapting naturally to each conversation. We A/B test different approaches and continuously refine based on conversion data and call recordings.",
  },
  {
    question: "What industries do your telemarketing services support?",
    answer:
      "We support telemarketing campaigns across financial services, healthcare, technology, home services, education, nonprofit, insurance, and many other sectors. Each campaign is staffed with agents who have relevant industry experience and complete specialized training for your specific products, services, and regulatory requirements.",
  },
  {
    question: "How do you handle call lists and data management?",
    answer:
      "We accept call lists in any standard format, clean and de-duplicate the data, scrub against DNC registries, segment by your targeting criteria, and load into our dialing platform. Throughout the campaign, we track dispositions, update records, and provide refreshed data back to you. All data handling is SOC 2 compliant.",
  },
  {
    question: "What reporting do you provide during and after campaigns?",
    answer:
      "You receive real-time dashboards showing calls attempted, contacts reached, conversations completed, leads generated, and conversion rates. Weekly reports include agent performance breakdowns, script effectiveness analysis, and optimization recommendations. Post-campaign, we deliver comprehensive results analysis with ROI calculations and strategic insights for future campaigns.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Telemarketing BPO in USA",
    heading: "The telemarketing services partner that drives pipeline without putting your brand on a TCPA complaint list.",
    accent: "drives pipeline",
    body: [
      "Contact Center USA is one of the best telemarketing services providers in the USA — a 100% US-based telemarketing BPO USA operation that runs compliant, high-conversion outbound telemarketing outsourcing campaigns for B2B, B2C, healthcare, financial services, and nonprofit clients.",
      "If you are evaluating telemarketing companies in the USA for lead generation, appointment setting, market research, or product launch support, our combination of predictive dialer technology, US-based agent pods, and built-in TCPA / TSR compliance delivers campaigns that actually produce qualified conversations.",
    ],
    stats: [
      { stat: "4.5x", label: "Average ROI on outbound telemarketing campaign spend" },
      { stat: "12%", label: "Average contact-to-qualified-lead conversion rate" },
      { stat: "0", label: "Material TCPA / TSR compliance findings across 10+ years" },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Telemarketing Explained",
    heading: "What a telemarketing company does",
    image: "/images/cc-agent-call.jpg",
    imagePosition: "left",
    body: [
      "A telemarketing company makes and takes sales and marketing calls for other businesses. It supplies the trained callers, the dialing technology, the call lists and the compliance controls, and it reports on every call so you can see what each campaign produced. You supply the offer, the target audience and the rules for what counts as a qualified lead or a sale.",
      "The work covers more than cold calling. Telemarketing companies qualify leads before they reach your sales team, book appointments, follow up on web enquiries and trade show contacts, promote events and webinars, renew or reactivate lapsed customers, and run phone surveys. Each campaign starts with a script and a target list, and a well-run campaign keeps testing both against what the calls show.",
    ],
    bullets: [
      "Prospecting and cold calling to your ideal customer profile",
      "Lead qualification and appointment setting for your sales team",
      "Follow-up on web enquiries, form fills and event contacts",
      "Customer reactivation, renewal and cross-sell calls",
      "Market research and phone surveys",
      "List cleaning, Do Not Call scrubbing and call reporting",
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Inbound vs Outbound",
    heading: "Inbound vs outbound telemarketing",
    image: "/images/cc-headset-desk.jpg",
    imagePosition: "right",
    body: [
      "Outbound telemarketing is when the agent places the call: to prospects on a list, to past customers, or to people who asked to be contacted. It is how you reach buyers who are not yet looking for you, and it carries the heaviest rules, because the person being called did not start the conversation.",
      "Inbound telemarketing is when the customer calls you, usually in response to an advertisement, a mailer, a TV or radio spot, or your website. The agent's job is to answer quickly, qualify the caller, take the order or book the appointment, and offer anything related that genuinely fits. Inbound callers are already interested, which makes these calls valuable, but the volume is uneven: it jumps when an ad runs, so coverage has to be planned around the media schedule.",
      "Many programs blend the two, with an inbound line for responses and an outbound team that calls back missed calls, abandoned web forms and leads that did not buy the first time. The rules differ by direction. Under the Telemarketing Sales Rule, many calls that customers make in response to general advertising are exempt from parts of the rule, but an upsell made during such a call is still covered (16 CFR 310.6).",
    ],
    bullets: [
      "Outbound: prospecting, lead follow-up, appointment setting, reactivation",
      "Inbound: advertising response lines, order taking and sales enquiries",
      "Blended: an inbound line plus outbound call-backs on missed calls and web forms",
      "Staffing planned around list size for outbound, and the media schedule for inbound",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Telemarketing vs. Outsourced Telemarketing BPO USA",
    intro:
      "Every marketing and sales leader debates the same thing: build an SDR or tele-sales team internally, or run outbound telemarketing outsourcing through a specialist BPO. Here is how the two compare on speed, cost, compliance, and results.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Dials Per Day per Agent",
        left: "50-80 dials — manual dialing, no call list automation.",
        right: "200-300 dials — predictive and power dialer technology, auto-dispositioning.",
        leftYes: false,
      },
      {
        label: "TCPA & TSR Compliance",
        left: "Compliance burden on your legal team — DNC scrubbing often manual or missing.",
        right: "Automated federal, state, and internal DNC scrubbing plus call time enforcement.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "8-12 weeks to hire, train, and productively deploy a new outbound team.",
        right: "New telemarketing campaigns live in 15-20 business days with trained US agents.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fixed salary, benefits, dialer license, and tools — whether volume is flat or spiking.",
        right: "Variable per-hour or per-conversion pricing — scale up and down without fixed cost.",
        leftYes: false,
      },
      {
        label: "Script & A/B Testing",
        left: "Scripts rarely tested — once-a-year refresh at best.",
        right: "Weekly A/B testing of opener, value prop, and offer based on real conversion data.",
        leftYes: false,
      },
      {
        label: "Reporting & Attribution",
        left: "Dispositions manually logged into CRM with inconsistent discipline.",
        right: "Real-time dashboards with agent, list, script, and offer-level conversion attribution.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Outbound Telemarketing Outsourcing Process",
    intro:
      "Every telemarketing services campaign — B2B lead gen, B2C acquisition, or market research — flows through the same five-stage playbook engineered to produce qualified conversations fast.",
    steps: [
      {
        title: "Campaign Strategy & ICP",
        body: "Define ideal customer profile, target list criteria, offer, and success metrics with your team.",
      },
      {
        title: "List Sourcing & DNC Scrubbing",
        body: "Source or enrich call lists, scrub against federal, state, and client-specific DNC registries.",
      },
      {
        title: "Script & Talk Track Design",
        body: "Build conversational frameworks, objection handling, qualification criteria, and A/B variants.",
      },
      {
        title: "Agent Training & Pilot",
        body: "Train US-based telemarketing agents on product, script, and CRM. Run 2-week pilot.",
      },
      {
        title: "Full Launch & Optimization",
        body: "Scale to target volume with weekly A/B testing, QA review, and conversion reporting.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Pricing Models",
    heading: "How telemarketing programs are priced",
    image: "/images/cc-team-plan.jpg",
    imagePosition: "left",
    body: [
      "Telemarketing is priced in one of three main ways, and the right one depends on how predictable your results are. Per-hour pricing pays for agent time on the phones. It suits new campaigns, complex B2B sales and programs where you want full control of the script, because you are paying for effort rather than outcomes and the caller has no reason to rush a conversation.",
      "Per-contact pricing pays for each completed conversation with a decision maker, or each call handled on an inbound line. It suits surveys, reminders and campaigns with a clear call outcome. Per-appointment or per-lead pricing pays only when a meeting is booked or a lead meets agreed criteria. It moves risk to the provider, so it needs a tight definition of what qualifies, and it suits proven offers with steady lists.",
      "Whatever the model, the cost is driven by the same things: how hard your audience is to reach, the size and quality of your list, the length and complexity of the call, B2B or B2C, the hours and time zones covered, how much product training is needed, and the reporting and integrations you ask for. Ask for a quote on the model that fits your campaign, and a pilot before you commit to volume.",
    ],
    bullets: [
      "Per hour: agent time, best for new or complex campaigns",
      "Per contact: each completed conversation or handled call",
      "Per appointment or lead: paid only on agreed outcomes",
      "Pilot first, then scale on the model that fits your results",
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Compliance",
    heading: "Rules a telemarketing company must follow",
    image: "/images/cc-team-desk.jpg",
    imagePosition: "right",
    body: [
      "Telemarketing in the United States is governed by two main sets of federal rules. The FTC's Telemarketing Sales Rule (16 CFR 310) covers sellers and telemarketers: no outbound sales calls to a home before 8 a.m. or after 9 p.m. local time, prompt disclosure of who is calling and that the call is a sales call, caller ID on every call, limits on abandoned calls, and no calls to numbers on the National Do Not Call Registry unless an exception applies. Calls to businesses are exempt from most of the rule, but its bans on misrepresentation still apply.",
      "The Telephone Consumer Protection Act (TCPA, 47 U.S.C. 227) and the FCC's rules at 47 CFR 64.1200 add consent requirements. Telemarketing calls and texts to a mobile number made with an autodialer or a prerecorded or artificial voice need the consumer's prior express written consent, prerecorded telemarketing calls to a home line need it too, and anyone making telemarketing calls to consumers must keep an internal do-not-call list and honor requests to stop. Several states add their own registration, calling-hour and consent rules on top.",
      "A telemarketing company should be able to show you how it meets each rule: how lists are scrubbed against the national registry (the rules' safe harbor calls for a copy of the registry no more than 31 days old), where consent records are kept, how opt-outs reach the dialer, and how calling hours are enforced by the time zone of the person called.",
    ],
    bullets: [
      "National Do Not Call Registry scrubbing and an internal do-not-call list",
      "Calling hours enforced by the called person's time zone",
      "Consent records for autodialed, prerecorded and text campaigns",
      "Caller ID, required disclosures and recorded calls for QA",
      "State telemarketing rules checked for every state you call",
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Telemarketing Services",
    intro:
      "Every vertical comes with its own regulatory overlays and buyer behavior. Our telemarketing BPO USA team pre-builds campaign templates for the sectors we serve most.",
    items: [
      {
        icon: "landmark",
        stat: "TCPA",
        title: "Financial Services",
        body: "Outbound for banking, lending, insurance, and wealth management with compliant disclosures.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Insurance",
        body: "Medicare Advantage, dual-eligible, clinical trial recruitment, and member outreach campaigns.",
      },
      {
        icon: "briefcase",
        stat: "B2B",
        title: "B2B Technology & SaaS",
        body: "Outbound SDR-as-a-service, appointment setting for mid-market and enterprise account lists.",
      },
      {
        icon: "home",
        stat: "TSR",
        title: "Home Services & Consumer",
        body: "Home improvement, solar, HVAC, warranty, and subscription acquisition with TSR compliance.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA Among Telemarketing Companies",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore telemarketing providers trip on accent recognition, cultural distance from US buyers, and inconsistent TCPA discipline — and regulators have made TCPA litigation one of the fastest-growing legal risks in B2C marketing. Generic answering services rarely carry sales-trained agents.",
      "Contact Center USA is a US-based telemarketing BPO USA with dedicated telemarketing agent pods, weekly compliance QA, and predictive dialer infrastructure we control end-to-end — so every campaign hits its numbers without putting your brand on a regulatory watch list.",
    ],
    bullets: [
      "100% US-based telemarketing agents — no offshore, no nearshore",
      "Automated DNC scrubbing against federal, state, and client lists",
      "Predictive, power, and preview dialer modes with call recording",
      "Agent coaching and weekly compliance QA by certified reviewers",
      "15-20 business day campaign launch from signed SOW",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to run outbound telemarketing outsourcing that actually converts?",
    accent: "actually converts",
    body: "If your current outbound efforts are stalling, your SDR team cannot keep up with volume, or you need a TCPA-compliant partner for a regulated industry campaign, talk to our telemarketing services team. We will model expected contact rate, conversion, and ROI before you commit a dollar.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Outbound Call Center",
    desc: "Full-service outbound calling operations for sales, collections, surveys, and customer engagement.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "B2B Sales Outsourcing",
    desc: "Dedicated B2B sales teams for lead generation, appointment setting, and pipeline management.",
    href: "/services/b2b-sales-outsourcing",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Multi-channel lead generation programs that fill your pipeline with qualified prospects.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Inbound Call Center Services",
    desc: "Live answering for advertising response lines, order support and sales enquiries.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Top 10 Telemarketing Companies (2026)",
    desc: "Compare the top US telemarketing companies in our ranked buyer's guide.",
    href: "/blog/top-10-telemarketing-companies-usa",
  },
];

export default function TelemarketingServicesPage() {
  return (
    <ServicePageTemplate
      badge="Telemarketing Services"
      title="Telemarketing Services from a US-Based Telemarketing Company"
      titleHighlight="Telemarketing Company"
      subtitle="One of the leading telemarketing services providers in the USA — our telemarketing BPO USA runs compliant outbound telemarketing outsourcing campaigns that generate leads, drive sales, and gather insights."
      description="Effective telemarketing services require more than just dialing numbers — they take skilled communicators, smart targeting, compelling scripts, and strict compliance management. Our professional telemarketing BPO USA teams combine all four to execute outbound telemarketing outsourcing campaigns that consistently outperform expectations. Whether you need lead generation, appointment setting, event promotion, or market research, we deliver the conversations that move your business forward."
      features={features}
      benefits={benefits}
      image="/images/cc-man-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
