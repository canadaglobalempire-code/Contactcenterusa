import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Solar & Home Improvement Call Center | Appointment Setting",
  description:
    "US-based call center for solar, roofing, windows, and remodeling companies. Lead qualification, in-home appointment setting, and install coordination. Get a quote.",
  keywords: [
    "solar call center",
    "solar appointment setting",
    "home improvement call center",
    "roofing lead qualification",
    "window replacement appointment setting",
    "remodeling lead follow up",
    "solar lead qualification services",
    "in home appointment setting",
    "contractor lead call center",
    "home improvement bpo",
  ],
  alternates: { canonical: "/industries/solar-home-improvement-call-center" },
};

const features = [
  {
    title: "Speed-to-Lead Response",
    desc: "Home improvement leads are sold to several companies at once and decay within minutes. Agents call new enquiries the moment they land, qualify them, and book the in-home consultation before a competitor makes contact.",
  },
  {
    title: "Qualification Before the Truck Rolls",
    desc: "Homeownership, roof age and condition, shading, credit band expectations, utility bill range, decision-maker presence, and timeline — verified before a rep is dispatched, so your closers are not driving to unqualified appointments.",
  },
  {
    title: "In-Home Appointment Setting",
    desc: "Consultations booked directly onto rep calendars with territory and drive-time awareness, so a day's route makes geographic sense instead of sending one rep across a metro area three times.",
  },
  {
    title: "Confirmation & No-Show Reduction",
    desc: "Reminder and confirmation calls before each appointment, with both decision-makers confirmed present. No-shows and one-spouse appointments are the largest hidden cost in home improvement sales.",
  },
  {
    title: "Aged Lead Reactivation",
    desc: "Systematic outbound against unsold estimates, aged leads, and prior no-shows — inventory most companies write off, and which typically costs far less per booked appointment than buying fresh leads.",
  },
  {
    title: "Install Scheduling & Project Updates",
    desc: "Post-sale coordination covering site survey and install scheduling, permit and interconnection status updates, and the proactive communication that prevents cancellations during long solar timelines.",
  },
];

const benefits = [
  "Minutes-not-hours speed to lead response",
  "100% US-based agents",
  "Qualification before a rep is dispatched",
  "Territory and drive-time aware appointment setting",
  "Confirmation calls with both decision-makers",
  "Bilingual English/Spanish homeowner contact",
];

const stats = [
  { value: 60, suffix: " sec", label: "Target Lead Response Time" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 7, suffix: " days", label: "Coverage Including Evenings & Weekends" },
  { value: 2, suffix: " languages", label: "English and Spanish Homeowner Contact" },
];

const faqs = [
  {
    question: "How fast do you contact new leads?",
    answer:
      "We target contact within a minute of the lead landing, and we work a documented attempt cadence rather than trying once. In home improvement this is decisive: most leads are sold to several companies simultaneously, so the first company to reach the homeowner sets the agenda and frequently books the only appointment that happens.",
  },
  {
    question: "What do you qualify before booking an appointment?",
    answer:
      "Whatever you tell us disqualifies a lead. Typically that means verifying homeownership, roof age and condition, shading or structural concerns, utility bill range, rough credit expectations, timeline, and — critically — that all decision-makers will be present. Sending a closer to an unqualified appointment costs a half-day and a tank of fuel, so the screening pays for itself quickly.",
  },
  {
    question: "Can you book onto our reps' calendars?",
    answer:
      "Yes. Agents book directly into your CRM or scheduling system with territory and drive-time awareness, so a rep's day forms a sensible route rather than three crossings of the same metro. We support Salesforce, HubSpot, JobNimbus, Sunbase, Enerflo, and similar platforms.",
  },
  {
    question: "Do you make confirmation calls?",
    answer:
      "Yes, and they materially change sit rates. We confirm ahead of each appointment, re-verify that all decision-makers will be present, and reschedule proactively when they will not. A one-spouse appointment is usually a wasted trip in this category, and catching it beforehand is far cheaper than discovering it at the door.",
  },
  {
    question: "Can you work our aged lead list?",
    answer:
      "Yes, and it is usually the best value available. Most companies hold thousands of unsold estimates and aged leads that never get re-worked because reps chase fresh inventory. Reactivation campaigns against that list — particularly around incentive changes, rate movement, or seasonal promotions — typically produce booked appointments at a fraction of the cost of new leads.",
  },
  {
    question: "Do you handle post-sale communication?",
    answer:
      "Yes. Solar in particular has long timelines between signature and activation — site survey, permitting, interconnection, inspection — and cancellations cluster in that silence. Proactive status calls keep customers informed through the wait, which measurably reduces cancellation rates on projects that are already sold.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Solar & Home Improvement Call Center",
    heading: "That lead was sold to four companies. The first to call sets the appointment.",
    accent: "The first to call sets the appointment",
    body: [
      "Contact Center USA provides US-based lead response and appointment setting for solar, roofing, window, and remodeling companies — qualifying homeowners and booking sit-downs before competitors make contact.",
      "Home improvement leads are expensive, non-exclusive, and perishable. A lead worked within a minute and a lead worked the next morning are not the same lead, and no amount of closing skill recovers the difference.",
    ],
    stats: [
      { stat: "60 sec", label: "Target first-contact time on new lead submissions" },
      { stat: "7 days", label: "Coverage across evenings and weekends when homeowners answer" },
      { stat: "100%", label: "US-based agents booking onto your reps' calendars" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Reps Working Their Own Leads vs. a Dedicated Setting Team",
    intro:
      "The default setup has commissioned closers dialing their own leads between appointments. It quietly costs more than it appears to, because the most expensive people in the company spend their day on the least specialized task.",
    leftTitle: "Reps Setting Their Own Appointments",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Speed to Contact",
        left: "Leads wait until a rep is between appointments — usually hours.",
        right: "Contact attempted within a minute, including evenings and weekends.",
        leftYes: false,
      },
      {
        label: "Attempt Persistence",
        left: "One or two attempts, then the lead is effectively abandoned.",
        right: "Documented multi-touch cadence across phone, text, and email.",
        leftYes: false,
      },
      {
        label: "Qualification Rigor",
        left: "Reps book anything that sounds interested to fill the calendar.",
        right: "Screened against your disqualifiers before a truck rolls.",
        leftYes: false,
      },
      {
        label: "Route Efficiency",
        left: "Appointments booked without drive-time logic; days lost to travel.",
        right: "Territory and drive-time aware booking that builds sensible routes.",
        leftYes: false,
      },
      {
        label: "Confirmations",
        left: "Rarely done; no-shows and one-spouse sits discovered at the door.",
        right: "Confirmed ahead with all decision-makers verified present.",
        leftYes: false,
      },
      {
        label: "Aged Leads",
        left: "Never re-worked; thousands of unsold estimates sit idle.",
        right: "Systematic reactivation campaigns at a fraction of new-lead cost.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Lead Submission to a Confirmed Sit",
    intro:
      "Every engagement is configured around your disqualifiers, your territories, and your reps' calendars before a single lead is dialed.",
    steps: [
      {
        title: "Qualification Criteria",
        body: "We document exactly what disqualifies a lead and what must be verified before an appointment is set.",
      },
      {
        title: "CRM & Territory Setup",
        body: "Agents provisioned in your CRM with rep calendars, territory maps, and drive-time rules configured.",
      },
      {
        title: "Script Build",
        body: "Scripts and objection handling built around your offer, financing options, and current incentives.",
      },
      {
        title: "Speed-to-Lead Launch",
        body: "New leads worked within a minute, qualified, and booked onto the right rep's calendar.",
      },
      {
        title: "Add Reactivation",
        body: "Once fresh-lead handling is stable, layer in aged lead and unsold estimate campaigns.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Trades",
    heading: "Home Improvement Categories We Set For",
    intro:
      "Qualification differs sharply by trade — a solar screen and a bath remodel screen have almost nothing in common — so agents are trained per category.",
    items: [
      {
        icon: "zap",
        stat: "Solar",
        title: "Solar & Battery Storage",
        body: "Utility bill, roof suitability, shading, ownership, and credit expectation screening plus long-timeline updates.",
      },
      {
        icon: "home",
        stat: "Roofing",
        title: "Roofing & Storm Restoration",
        body: "Storm-surge lead response, insurance claim status questions, and inspection scheduling.",
      },
      {
        icon: "wrench",
        stat: "Windows",
        title: "Windows, Siding & Doors",
        body: "Opening counts, decision-maker verification, and financing pre-qualification before the sit.",
      },
      {
        icon: "building",
        stat: "Remodel",
        title: "Kitchen, Bath & Remodeling",
        body: "Project scope, budget range, and timeline qualification for higher-ticket remodel consultations.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Setting and Closing Are Different Jobs",
    image: "/images/cc-agent-call.jpg",
    imagePosition: "right",
    body: [
      "Closing an in-home sale and dialing a fresh lead list require different skills, different temperaments, and very different cost structures. Asking one person to do both means the expensive half of their day subsidizes the cheap half.",
      "Contact Center USA runs the setting function: immediate response, disciplined qualification against your disqualifiers, drive-time aware booking, and confirmation calls that protect sit rates. Your closers spend their day in front of qualified homeowners who are expecting them.",
    ],
    bullets: [
      "Contact attempted within a minute of lead submission",
      "Screened against your disqualifiers before a rep is dispatched",
      "Territory and drive-time aware calendar booking",
      "Confirmation calls verifying all decision-makers present",
      "Aged lead and unsold estimate reactivation campaigns",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Find out what your lead response time costs per sale.",
    accent: "what your lead response time costs",
    body: "Send us your monthly lead volume, current response time, and sit rate. We will model the difference and scope a setting program around your territories.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Our core appointment setting practice across B2B and consumer categories.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Home Services Call Center",
    desc: "The service side: 24/7 emergency dispatch and booking for the trades.",
    href: "/industries/home-services-call-center",
  },
  {
    title: "Outbound Call Center Services",
    desc: "The outbound engine behind reactivation and unsold estimate campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
];

export default function SolarHomeImprovementPage() {
  return (
    <ServicePageTemplate
      badge="Solar & Home Improvement"
      title="Lead Response & Appointment Setting for Home Improvement"
      titleHighlight="Home Improvement"
      subtitle="Solar, roofing, window, and remodeling companies use our US-based agents to call new leads within a minute, qualify against their disqualifiers, and book confirmed sits onto rep calendars."
      description="Home improvement leads are expensive, non-exclusive, and perishable — sold to several companies at once and effectively dead within the hour. We call within a minute of submission, verify ownership, condition, timeline, and decision-maker presence before dispatching anyone, book with territory and drive-time awareness, and confirm ahead of the appointment so your closers stop driving to empty houses."
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
