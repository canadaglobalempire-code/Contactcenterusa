import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Dental Answering Service: New Patients & Emergencies",
  description:
    "Why dental practices lose new patients to a busy signal, how emergency triage and recall differ, and what a dental answering service costs.",
  keywords: [
    "dental answering service",
    "dental office answering service",
    "answering service for dentists",
    "dental call center",
    "emergency dental answering service",
    "dental appointment scheduling service",
    "dental practice phone service",
    "after hours dental answering",
    "dental recall service",
    "new patient scheduling dental",
    "dso answering service",
    "orthodontic answering service",
  ],
  alternates: { canonical: "/blog/dental-answering-service" },
};

const FAQS = [
  {
    q: "What is a dental answering service?",
    a: "It is a trained team answering your practice line when your front desk cannot — during the morning rush, at lunch, after hours and at weekends. Agents book and reschedule appointments in Dentrix, Eaglesoft, Open Dental or Curve, verify dental benefits at booking, triage genuine dental emergencies against a script your dentist wrote, run recall and reactivation calls, and page the on-call dentist when your criteria are met.",
  },
  {
    q: "How much does a dental answering service cost?",
    a: "Most practices pay $300-$900 per month, or $0.95-$1.75 per minute for US-based coverage. After-hours-only emergency cover starts nearer $200. The number worth comparing it against is not the monthly fee but the value of a new patient: with most practices placing lifetime value in the low thousands, a service that captures two or three additional new patients a month is not a cost centre.",
  },
  {
    q: "Why do dental practices lose so many new-patient calls?",
    a: "Because new patients call at the worst possible moment. The morning block and the hour after lunch are when the front desk is checking patients in, taking payment and answering the phone simultaneously. A prospective patient who gets a busy signal or a two-minute hold does not wait — they call the next practice on the map. The loss never shows up in your practice management software, because the call never became a record.",
  },
  {
    q: "What counts as a dental emergency after hours?",
    a: "The standard tier is uncontrolled bleeding, facial swelling — particularly anything affecting the eye or airway — dental trauma with an avulsed or displaced tooth, and severe uncontrolled pain. Avulsed permanent teeth are genuinely time-critical and should always page the on-call dentist immediately. A lost crown, a chipped tooth with no pain, or a food-impaction complaint is next-business-day. Your dentist should write the list; the agents apply it without interpretation.",
  },
  {
    q: "Can the service verify dental benefits at booking?",
    a: "The better ones can, and dental makes it more valuable than most specialties because plan structures are unusually varied — annual maximums, waiting periods, frequency limitations and missing-tooth clauses all change what a patient will actually owe. Confirming coverage while the patient is on the phone prevents the treatment-plan conversation collapsing at the chair, and reduces the no-shows caused by patients discovering costs the night before.",
  },
  {
    q: "Should an answering service run recall calls?",
    a: "It is often the highest-return use of the service, and the one most practices leave on the table. Recall and reactivation are outbound work that front desks rarely reach because inbound always wins. An outsourced team can work the overdue-hygiene list systematically and book directly into open hygiene slots. Since hygiene drives both production and diagnosis, filling those chairs compounds well beyond the appointment itself.",
  },
  {
    q: "Which practice systems can they write into?",
    a: "Common integrations include Dentrix, Dentrix Ascend, Eaglesoft, Open Dental, Curve Dental, Denticon and CareStack. Ask whether the connection is real-time two-way rather than a periodic sync — a scheduler working from a fifteen-minute-old view will eventually book over a slot your front desk just filled, and in a practice with a tight hygiene column that is an immediate problem.",
  },
  {
    q: "Do agents need HIPAA training for dental calls?",
    a: "Yes. Dental practices are covered entities and the appointment, treatment and benefit details discussed on these calls are protected health information. You need a signed Business Associate Agreement before routing any patient call, agents trained on minimum-necessary handling, and encrypted call recording with a retention period you set. This is the same standard as any medical practice; dental being routine care does not lower it.",
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
              url: "https://contactcenterusa.com/blog/dental-answering-service",
              headline: "Dental Answering Service: New Patients, Emergencies and Recall",
              description:
                "Why dental practices lose new patients to a busy signal, how emergency triage and recall differ, and what a dental answering service costs against patient lifetime value.",
              datePublished: "2026-08-21",
              dateModified: "2026-08-21",
              image: "https://contactcenterusa.com/images/cc-agent-smile.jpg",
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
