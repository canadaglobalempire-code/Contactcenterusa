import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Lawyer Answering Service: Intake, Conflicts, UPL",
  description:
    "How law firms run 24/7 intake without crossing into legal advice, where conflict checks belong, and what legal intake costs per signed case.",
  keywords: [
    "lawyer answering service",
    "attorney answering service",
    "law firm answering service",
    "legal answering service",
    "legal intake services",
    "24/7 legal intake",
    "personal injury intake service",
    "law firm virtual receptionist",
    "legal call answering",
    "after hours legal answering service",
    "conflict check intake",
    "law firm phone answering",
  ],
  alternates: { canonical: "/blog/lawyer-answering-service" },
};

const FAQS = [
  {
    q: "What is a lawyer answering service?",
    a: "It is a trained intake team that answers your firm's line — usually around the clock — captures the facts of a potential matter, runs an initial conflict screen against your database, routes urgent matters to the attorney on call, books consultations directly into your calendar, and writes the record into your practice management system. The critical constraint is that intake agents gather information; they never assess a claim or advise a caller.",
  },
  {
    q: "How much does a lawyer answering service cost?",
    a: "Expect $0.95-$1.90 per minute for US-based legal intake, $500-$1,500 per month for a bundled tier, or $35-$150 per qualified intake depending on practice area and depth. Personal injury and mass tort intake sits at the top of that range because calls are long and the qualification is detailed. Measured against a signed case, the arithmetic is rarely close — most firms recover a year of cost from one or two matters.",
  },
  {
    q: "Can an answering service give legal advice?",
    a: "No, and this is the single most important boundary in the arrangement. A non-lawyer telling a caller whether they have a case, how long they have to file, or what they should do next risks unauthorized practice of law and creates exposure for your firm, not the vendor. Intake scripts must capture facts and stop there. Any question inviting an opinion gets the same response: that is exactly what the attorney will assess at the consultation.",
  },
  {
    q: "Why does 24/7 matter so much for law firms?",
    a: "Because the events that create legal matters do not observe office hours, and the people they happen to are at their most motivated in the first few hours. Car accidents, arrests, injuries and terminations happen at night and at weekends. Someone injured on a Saturday evening is calling firms that night. A voicemail box at that moment is not a delayed lead — it is usually a lead that signs with whoever answered.",
  },
  {
    q: "Where does the conflict check belong?",
    a: "An initial screen belongs in the call, and the definitive check belongs with your firm. Intake agents can capture the names of all parties and run them against a database you maintain, flagging apparent hits before a consultation is booked. What they cannot do is make the judgment call on whether a hit is a genuine conflict — that is a legal determination. Getting the screen into the call prevents the wasted consultation; keeping the determination with the firm keeps the responsibility where it belongs.",
  },
  {
    q: "What should a legal intake script capture?",
    a: "At minimum: caller and all opposing parties for the conflict screen, date of the incident, jurisdiction, a factual narrative in the caller's own words, whether they have spoken to or retained another firm, whether an insurer has contacted them, any deadline they have been given, and preferred contact method. For injury matters, add treatment status. Capturing the incident date matters because limitation periods vary by state and claim type, and a stale matter should reach an attorney immediately rather than sitting in a queue.",
  },
  {
    q: "Which practice management systems can they write into?",
    a: "Common integrations are Clio, Litify, MyCase, Filevine, PracticePanther, Smokeball and Lawmatics. Ask for a named list and whether the service creates a full matter record with the narrative attached, or merely a contact with a phone number. The second is barely better than a voicemail, because your team still has to call back and re-take the whole story.",
  },
  {
    q: "Can they sign a retainer on the call?",
    a: "They can send an engagement agreement for electronic signature while the caller is still on the phone, where your firm authorizes it and the matter type is straightforward. They must not explain terms, negotiate fees or answer questions about what the agreement means — that is advice. Sending the document is administrative; interpreting it is not. Many firms find same-call e-signature materially improves conversion on high-intent matters simply by removing a day of drift.",
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
              url: "https://contactcenterusa.com/blog/lawyer-answering-service",
              headline: "Lawyer Answering Service: Intake, Conflict Checks and the UPL Line",
              description:
                "How law firms run 24/7 intake without crossing into legal advice, where conflict checks belong in the call, and what a lawyer answering service costs per signed case in 2026.",
              datePublished: "2026-08-21",
              dateModified: "2026-08-21",
              image: "https://contactcenterusa.com/images/cc-man-headset.jpg",
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
