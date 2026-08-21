import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Medical Office Answering Service (2026 Guide)",
  description:
    "How practices cut phone abandonment, verify insurance at booking, and separate front-desk overflow from on-call paging. HIPAA rules and costs.",
  keywords: [
    "medical office answering service",
    "physician answering service",
    "doctors answering service",
    "medical answering service",
    "answering service for doctors office",
    "healthcare answering service",
    "hipaa compliant answering service",
    "medical practice phone service",
    "patient scheduling service",
    "after hours medical answering service",
    "clinic answering service",
    "medical front desk outsourcing",
  ],
  alternates: { canonical: "/blog/medical-office-answering-service" },
};

const FAQS = [
  {
    q: "What is a medical office answering service?",
    a: "It is a HIPAA-compliant team that answers your practice's phones — either during business hours as front-desk overflow, after hours for on-call coverage, or both. Agents schedule and reschedule appointments in your practice management system, verify insurance and eligibility at booking, answer routine administrative questions, apply your triage script to decide urgency, and page the on-call clinician when your criteria are met. It is administrative work, not clinical advice.",
  },
  {
    q: "How much does a medical office answering service cost?",
    a: "Front-desk overflow during business hours typically runs $0.95-$1.80 per minute or $400-$1,200 per month. After-hours on-call coverage runs $250-$900 per month depending on call volume and how often the physician must be paged. Verified intake with insurance and eligibility checks is priced higher, around $45-$120 per booked appointment, because it takes materially longer than simply placing a slot on a calendar.",
  },
  {
    q: "Is a signed BAA required?",
    a: "Yes, without exception. Any vendor handling protected health information on your behalf is a business associate under HIPAA, and you need an executed Business Associate Agreement before a single patient call is routed to them. Confirm it covers subcontractors as well — some providers use overflow partners at peak, and that partner also touches PHI. A vendor who treats the BAA as paperwork to sort out later is telling you something about the rest of their compliance posture.",
  },
  {
    q: "Should an answering service perform clinical triage?",
    a: "It should perform administrative triage against a script your clinicians wrote, and nothing beyond that. A non-clinical agent can ask the screening questions you specify and route by the answers — chest pain pages the on-call physician immediately, a prescription refill waits for morning. What they must never do is assess, advise or reassure. If you need genuine clinical triage, that is a nurse triage line staffed by licensed clinicians, which is a different and more expensive service.",
  },
  {
    q: "Can the service verify insurance at the time of booking?",
    a: "The better ones can, and it is where most of the financial return sits. Checking eligibility, plan status, copay and whether your practice is in network while the patient is still on the phone prevents the far more expensive conversation at check-in, cuts denials, and reduces the no-shows that happen when a patient discovers coverage problems the night before. Confirm which clearinghouse or payer portals the provider can actually reach.",
  },
  {
    q: "Which practice management systems can they write into?",
    a: "Common integrations include Epic, athenahealth, eClinicalWorks, NextGen, Kareo, DrChrono, AdvancedMD and Practice Fusion. Ask for a named list and whether the connection is real-time two-way rather than a periodic sync — a scheduler working from data that refreshes every fifteen minutes will eventually double-book a slot your front desk filled a moment earlier.",
  },
  {
    q: "How much of the problem is abandoned calls?",
    a: "More than most practices realise, because abandoned calls do not appear in any report the front desk sees. Patients calling to book get a busy signal or a long hold, hang up, and either call another practice or simply do not call back. Pull your phone system's abandonment rate for the 8-10 AM window and again after 4 PM; those two peaks are where overflow coverage pays for itself, usually before you consider after-hours at all.",
  },
  {
    q: "Do we still need our own front desk?",
    a: "Almost certainly yes. An answering service handles phones; it cannot greet arrivals, collect copays in person, manage the waiting room, handle physical records or read the room when a patient is distressed. The realistic model is that the service absorbs overflow and after-hours so your in-house staff stop being interrupted mid-conversation with the patient in front of them, not that it replaces them.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/medical-office-answering-service",
              headline: "Medical Office Answering Service: A 2026 Buyer's Guide for Practices",
              description:
                "How practices cut phone abandonment, verify insurance at booking, and separate front-desk overflow from on-call physician paging, with HIPAA requirements and 2026 costs.",
              datePublished: "2026-08-21",
              dateModified: "2026-08-21",
              image: "https://contactcenterusa.com/images/cc-woman-typing.jpg",
            })
          ).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Content faqs={FAQS} />
    </>
  );
}
