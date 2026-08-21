import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Answering Service for Small Business (2026 Costs)",
  description:
    "What US answering service coverage costs a small business in 2026, when it beats hiring a receptionist, and how to pick one that books work.",
  keywords: [
    "answering service for small business",
    "small business answering service",
    "answering business service small",
    "small business phone answering",
    "virtual receptionist small business",
    "affordable answering service",
    "answering service cost small business",
    "24/7 answering service small business",
    "small business call answering",
    "receptionist service for small business",
    "us based answering service small business",
    "best answering service for small business",
  ],
  alternates: { canonical: "/blog/answering-service-for-small-business" },
};

const FAQS = [
  {
    q: "What is an answering service for a small business?",
    a: "It is a US-based team that answers your business line under your company name when you cannot — while you are with a customer, on a job, driving, or closed for the day. Agents follow your script, answer routine questions, qualify callers, book appointments straight onto your calendar, escalate genuine emergencies, and deliver structured messages for everything else. For most small firms it functions as a shared front desk that costs a fraction of a full-time hire.",
  },
  {
    q: "How much does a small business answering service cost?",
    a: "The realistic range for US-based coverage is $250-$700 per month for most small businesses, priced either per minute at $0.85-$1.65 or as a bundled monthly tier. Very light users on evening-and-weekend-only cover can land near $150. The figure that matters is not the monthly rate but the cost per captured job: if your average sale is $300 and the service captures two calls a month you would otherwise have lost, a $400 plan is already profitable.",
  },
  {
    q: "Is an answering service cheaper than hiring a receptionist?",
    a: "Substantially, and the gap is wider than the salary alone suggests. A full-time receptionist costs roughly $38,000-$52,000 a year in wages plus 20-30% in payroll tax and benefits, and that buys you one person for 40 hours a week — with holidays, sick days and lunch breaks uncovered. An answering service costs $3,000-$8,400 a year, covers evenings and weekends too, never calls in sick, and only bills for live call time rather than for someone waiting for the phone to ring.",
  },
  {
    q: "When does hiring in-house make more sense?",
    a: "When the work stops being phone work. If the role also needs to greet walk-ins, handle physical paperwork, manage inventory, or hold deep institutional knowledge that changes weekly, a person in your office wins. The crossover point is usually sustained call volume above roughly 400-500 calls a month combined with in-person duties. Below that, an answering service almost always delivers more coverage per dollar.",
  },
  {
    q: "Will callers know it is not my own staff?",
    a: "Not if the service is set up properly. Agents answer in your company name with your greeting, work from your FAQ, and have your calendar and pricing bands in front of them. What gives a bad service away is not the fact of outsourcing but the symptoms of it — long hold times, agents who cannot answer basic questions about what you do, and 'someone will call you back' as the answer to everything. Script the twenty questions you actually get asked and most of that disappears.",
  },
  {
    q: "What should a small business look for first?",
    a: "Live calendar booking, ahead of anything else. A service that only takes messages moves work to tomorrow and leaves the caller free to ring a competitor tonight. After that: US-based agents if your customers are US-based, per-second rather than 30-second billing increments, a script you control without paying a change fee, and a month-to-month term for the first quarter so you can leave if it does not work.",
  },
  {
    q: "Do I need 24/7, or just after hours?",
    a: "Look at your own call log before deciding. Most small businesses find their missed calls cluster between 5 PM and 8 PM and on Saturday mornings, with almost nothing overnight. If that is your pattern, an evening-and-weekend package delivers nearly the same result as full 24/7 for meaningfully less. Genuine round-the-clock cover earns its premium mainly in emergency trades, medical practices and property management.",
  },
  {
    q: "How quickly can it be running?",
    a: "One to two weeks for a straightforward small business. The time goes into scripting rather than technology: writing the greeting, listing your services and rough pricing bands, defining what counts as urgent, and connecting your calendar. Providers that promise same-day activation are usually skipping the scripting step, which is exactly the step that determines whether callers feel like they reached your business or a call centre.",
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
              url: "https://contactcenterusa.com/blog/answering-service-for-small-business",
              headline: "Answering Service for Small Business: 2026 Costs and Buyer's Guide",
              description:
                "What a US-based answering service costs a small business in 2026, when it beats hiring a receptionist, and how to choose one that books work rather than taking messages.",
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
