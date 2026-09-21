import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Sports & Venue Call Center | Season Ticket Support",
  description:
    "US-based call center for sports teams, stadiums, and arenas. Season ticket renewals, membership servicing, playoff on-sales, and game-day support. Get a quote.",
  keywords: [
    "sports call center services",
    "season ticket support outsourcing",
    "stadium call center",
    "venue customer service outsourcing",
    "sports team ticket support",
    "season ticket renewal calling",
    "arena box office outsourcing",
    "game day support call center",
    "sports membership servicing",
    "hospitality package support",
  ],
  alternates: { canonical: "/industries/sports-venue-call-center" },
};

const features = [
  {
    title: "Season Ticket Renewals",
    desc: "Structured outbound renewal campaigns worked well ahead of your deadline, with save conversations for at-risk accounts and payment plan options presented before a member decides not to come back.",
  },
  {
    title: "Playoff & Postseason On-Sales",
    desc: "Postseason inventory drops with almost no notice and generates immediate volume. We stage agents on short turnaround so priority windows, presale codes, and payment failures get handled while the run is still alive.",
  },
  {
    title: "Game-Day & Event-Night Support",
    desc: "Extended coverage on match days for mobile ticket transfer failures, tickets missing from wallets, will-call issues, parking, and gate entry disputes — resolved while the fan is still outside the turnstile.",
  },
  {
    title: "Membership & Hospitality Servicing",
    desc: "Suite holders, club seats, and hospitality package buyers expect a different standard of service. Dedicated agents handle their account questions, guest lists, and event logistics with the attention that tier deserves.",
  },
  {
    title: "Group Sales & Ticket Package Intake",
    desc: "Inbound and outbound coverage for group bookings, youth and school nights, corporate packages, and theme events — qualifying the enquiry and routing it to your sales team with the details already captured.",
  },
  {
    title: "Ticketing Platform Integration",
    desc: "Agents work inside your ticketing and CRM systems so account lookups, reissues, transfers, and approved refunds happen live on the call instead of becoming a support ticket somebody handles tomorrow.",
  },
];

const benefits = [
  "Staffing planned around your season and event calendar",
  "100% US-based agents for domestic franchises",
  "Season ticket renewal and save campaigns",
  "Extended game-day and event-night coverage",
  "Dedicated hospitality and suite-holder servicing",
  "Bilingual English/Spanish fan support",
];

const stats = [
  { value: 24, suffix: "/7", label: "Game-Day & On-Sale Coverage" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 5, suffix: "x", label: "Surge-to-Base Staffing Flex" },
  { value: 3, suffix: " channels", label: "Phone, Chat, and Email Fan Support" },
];

const faqs = [
  {
    question: "Can you run our season ticket renewal campaign?",
    answer:
      "Yes. Renewals are outbound work with a hard deadline, and the outcome depends almost entirely on how early and how systematically accounts are worked. We call your full book ahead of the renewal date, handle payment plan questions, and run genuine save conversations with at-risk accounts rather than simply logging a decline. Escalations and anything requiring a relationship decision go to your own account executives.",
  },
  {
    question: "How do you handle a playoff run?",
    answer:
      "Postseason is the hardest staffing problem in sports ticketing because you cannot schedule it in advance. We hold reserve capacity through the back half of a season and can bring trained agents onto your account within days of a clinch, covering priority windows, presale codes, and the payment failures that spike when inventory drops suddenly.",
  },
  {
    question: "Do you cover game days?",
    answer:
      "Yes, and it needs its own coverage window separate from your weekday office hours. Game-day issues cluster in the two hours before kickoff and are overwhelmingly urgent: a transfer that did not land, a ticket missing from a wallet, a will-call problem, a gate dispute. Extended and late-night coverage is scheduled per fixture.",
  },
  {
    question: "Can you service suite holders and hospitality accounts?",
    answer:
      "Yes, and we keep them on a separate queue. Premium accounts represent a large share of revenue and expect to reach someone who knows their account rather than waiting behind general ticket enquiries. Dedicated agents handle their servicing, guest lists, and event logistics to the standard that tier expects.",
  },
  {
    question: "Do you work inside our ticketing system?",
    answer:
      "Yes. Agents are provisioned in your ticketing platform and CRM with role-appropriate permissions so they can look up accounts, reissue and transfer tickets, and process approved refunds during the call. We support major ticketing platforms as well as proprietary systems used by franchises and venues.",
  },
  {
    question: "What about venues that host non-sports events?",
    answer:
      "Most arenas and stadiums run concerts, family shows, and conventions alongside their sports calendar, and each has a different contact profile. We staff against your full building calendar rather than only the sports schedule, and coordinate with promoter-side support where an event brings its own ticketing arrangements.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Sports & Venue Call Center Services",
    heading: "Renewal season and a playoff run are the same problem: volume you cannot hire for.",
    accent: "volume you cannot hire for",
    body: [
      "Contact Center USA supports sports franchises, stadiums, and arenas with US-based agents staffed around the season calendar — renewals, playoff on-sales, game-day coverage, and premium account servicing.",
      "A ticketing office sized for a Tuesday in February is nowhere near the team needed for renewal deadline week or the forty-eight hours after a postseason berth is clinched. Hiring for those peaks means paying for idle capacity the rest of the year.",
    ],
    stats: [
      { stat: "5x", label: "Surge-to-base staffing flex for renewals and postseason" },
      { stat: "24/7", label: "Game-day, event-night, and on-sale coverage windows" },
      { stat: "100%", label: "US-based agents servicing domestic franchises and venues" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Ticket Office vs. an Outsourced Sports Support Team",
    intro:
      "Ticket offices are staffed for the average week, which means the weeks that actually decide revenue are the weeks least well covered.",
    leftTitle: "In-House Ticket Office Only",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Renewal Deadline Week",
        left: "Account executives calling their own books between meetings; parts never get worked.",
        right: "Full book worked systematically ahead of deadline with documented save attempts.",
        leftYes: false,
      },
      {
        label: "Postseason Surge",
        left: "Impossible to hire for — the clinch gives days of notice at most.",
        right: "Reserve capacity held through the season, live on your account within days.",
        leftYes: false,
      },
      {
        label: "Game-Day Hours",
        left: "Office closed by the time doors open; entry issues go unanswered.",
        right: "Extended match-day windows scheduled per fixture, including late nights.",
        leftYes: false,
      },
      {
        label: "Premium Accounts",
        left: "Suite holders wait in the same queue as single-game buyers.",
        right: "Dedicated hospitality queue with agents who know the account tier.",
        leftYes: false,
      },
      {
        label: "Off-Season Cost",
        left: "Peak-sized payroll carried through the quiet months.",
        right: "Staffing tracks the calendar; cost falls when the building is dark.",
        leftYes: false,
      },
      {
        label: "Bilingual Coverage",
        left: "Depends on who happens to be rostered that day.",
        right: "Native Spanish-speaking agents available across coverage windows.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Staffed Against the Season Calendar",
    intro:
      "Sports support is planned backwards from the schedule — fixtures, renewal deadlines, and the postseason scenarios you hope to need.",
    steps: [
      {
        title: "Season Calendar Mapping",
        body: "We map fixtures, renewal deadlines, on-sale dates, and non-sports events to build coverage windows per period.",
      },
      {
        title: "Platform Provisioning",
        body: "Agents provisioned in your ticketing platform and CRM with permissions scoped by account tier.",
      },
      {
        title: "Tier & Policy Training",
        body: "Training on renewal offers, payment plans, transfer mechanics, and premium account handling standards.",
      },
      {
        title: "Renewal & Game-Day Launch",
        body: "Renewal campaign runs ahead of deadline; extended coverage windows open on match days.",
      },
      {
        title: "Postseason Standby",
        body: "Reserve capacity held through the back half of the season, activated within days of a clinch.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Who We Support",
    heading: "Across Teams, Venues, and Governing Bodies",
    intro:
      "A college athletics department and a professional franchise sell to different audiences on different cycles. Coverage is built per organization type.",
    items: [
      {
        icon: "briefcase",
        stat: "Pro",
        title: "Professional Franchises",
        body: "Season ticket books, premium hospitality, playoff on-sales, and single-game inventory support.",
      },
      {
        icon: "store",
        stat: "Venue",
        title: "Stadiums & Arenas",
        body: "Building-wide coverage across sports, concerts, family shows, and conventions on one calendar.",
      },
      {
        icon: "shopping-bag",
        stat: "College",
        title: "College Athletics",
        body: "Donor and priority seating, student and alumni ticketing, and multi-sport season packages.",
      },
      {
        icon: "dollar",
        stat: "Minor",
        title: "Minor League & Motorsport",
        body: "Group sales, theme nights, and season packages where group revenue drives the gate.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Franchises Outsource the Peaks, Not the Relationships",
    image: "/images/cc-team-row-2.jpg",
    imagePosition: "right",
    body: [
      "Nothing about this replaces your account executives. The relationships they hold with season ticket members and premium buyers are the asset, and those stay exactly where they are.",
      "What moves outside is the volume: working the full renewal book before a deadline instead of the accounts anyone had time for, covering the two hours before kickoff, and staffing a playoff run that gave you four days of notice. Contact Center USA supplies domestic agents inside your ticketing system, scheduled against your calendar, escalating anything relationship-sensitive back to your team.",
    ],
    bullets: [
      "Renewal campaigns worked systematically before the deadline",
      "Reserve capacity held for postseason and unexpected surges",
      "Extended game-day coverage when your office is closed",
      "Separate premium and hospitality servicing queue",
      "Relationship-sensitive accounts escalated to your own AEs",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Cover renewal week and the playoff run you hope to have.",
    accent: "the playoff run you hope to have",
    body: "Send us your season calendar, renewal book size, and typical game-day volume. We will build a coverage plan for renewals, match days, and postseason standby.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Event Ticketing Call Center",
    desc: "On-sale surge, refunds, and chargeback coverage for ticketing platforms and promoters.",
    href: "/industries/event-ticketing-call-center",
  },
  {
    title: "Music & Entertainment",
    desc: "Fan support for the concerts and shows sharing your building's calendar.",
    href: "/industries/music-entertainment-call-center",
  },
  {
    title: "Outbound Call Center Services",
    desc: "The outbound engine behind renewal campaigns, win-back, and group sales outreach.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Professional Call Center Solutions for the Airlines Industry",
    desc: "US-based airlines call center support for customer care, inbound calls, outbound outreach, and back office workflows.",
    href: "/industries/airlines-call-center",
  },
  {
    title: "Travel Crisis Management & Support",
    desc: "How a travel management company handled 50,000+ rebookings during a global disruption with 96% resolution rate and 4-minute average handle time.",
    href: "/case-studies/travel-crisis-management",
  },
  {
    title: "What Makes Us Different",
    desc: "See why businesses choose Contact Center USA for US-based agents, flexible programs, clear reporting, and reliable outsourced customer support.",
    href: "/why-us",
  },
];

export default function SportsVenuePage() {
  return (
    <ServicePageTemplate
      badge="Sports & Venue Call Center"
      title="Season Ticket & Game-Day Support for Sports Organizations"
      titleHighlight="Sports Organizations"
      subtitle="Franchises, stadiums, and arenas use our US-based agents to work renewal books before the deadline, staff playoff on-sales on days of notice, and cover the two hours before kickoff."
      description="Sports ticketing revenue is decided in a handful of weeks each year — renewal deadline, a postseason berth, and every game day in between. We staff against your season calendar rather than a flat roster: working the full renewal book with real save conversations, holding reserve capacity for a playoff run, and covering match nights when your ticket office has closed."
      features={features}
      benefits={benefits}
      image="/images/cc-team-meeting.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
