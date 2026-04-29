import type { Metadata } from "next";
import Content from "./Content";

const FAQs = [
  {
    q: "How much does an after-hours answering service cost for an HVAC company?",
    a: "For most residential HVAC shops, expect $400–$2,000/month depending on call volume. Per-call pricing runs $1.50–$5.00 and per-minute pricing runs $1.00–$2.00. A typical 2-tech shop pays $500–$900/month; a 10-tech shop pays $1,200–$2,400/month.",
  },
  {
    q: "Can the same answering service handle plumbing and electrical too?",
    a: "Yes — most HVAC-specialized after-hours partners also cover plumbing and electrical, because those trades share the same emergency triage logic (gas leak, water leak, no power). If you run a combined HVAC/plumbing/electrical shop, ask for a unified script with trade-specific triage branches.",
  },
  {
    q: "Are weekend and holiday rates different?",
    a: "Usually no on the answering-service side — most reputable partners charge the same per-minute or per-call rate 24/7/365. What changes is your customer-facing trip charge. The agent should know your weekend rate, holiday rate, and which dates count as observed holidays.",
  },
  {
    q: "Will the answering service really book directly into ServiceTitan?",
    a: "If they're a real HVAC partner, yes. They'll have agent user seats in your ServiceTitan tenant, follow your dispatch board rules, and create the job with the right job type, location, tags, and price-book entries. Ask them to demo it on a screen share before you sign.",
  },
  {
    q: "How are agents trained on HVAC-specific calls?",
    a: "Good partners run a 2–4 week onboarding covering HVAC equipment basics (split systems, heat pumps, packaged units, boilers, mini-splits), refrigerant terminology, common failure modes, residential vs commercial dispatch differences, and trade-specific emergency triage. Ongoing QA includes weekly call reviews and monthly retraining.",
  },
  {
    q: "What exactly counts as 'after-hours'?",
    a: "You define it. Most HVAC contractors set after-hours as 5pm–8am weekdays plus all day Saturday and Sunday plus federal holidays. Some run 24/7 fully outsourced. Some use a hybrid where the partner handles overflow during business hours and full coverage after hours.",
  },
  {
    q: "What happens if my on-call tech doesn't answer the dispatch?",
    a: "The partner should have a documented escalation tree — call the on-call tech, wait 4–6 minutes, escalate to the secondary on-call, then to the owner. Some partners can also dispatch to a backup tech roster you maintain. This should be in the script before you go live.",
  },
  {
    q: "Can the answering service handle commercial HVAC calls too?",
    a: "Yes, but the script needs separate logic. Commercial calls usually involve property managers, building engineers, and service-agreement contracts with priority response SLAs. A partner that handles both residential and commercial HVAC will route commercial calls through a different triage path.",
  },
];

export const metadata: Metadata = {
  title: "After-Hours Answering Service for HVAC Companies: Stop Losing $400+ Jobs",
  description:
    "How HVAC contractors stop losing $400+ jobs to voicemail after 5pm. Real cost math, ServiceTitan/Housecall Pro/Jobber integrations, triage scripts, pricing.",
  keywords: [
    "after hours answering service for hvac companies",
    "24/7 answering service for hvac",
    "hvac call center",
    "after hours hvac dispatch",
    "hvac answering service",
    "emergency hvac dispatch",
    "plumbing answering service",
    "hvac overflow call center",
    "after hours hvac calls",
    "servicetitan answering service",
    "housecall pro after hours",
    "bilingual hvac dispatch",
  ],
  alternates: { canonical: "/blog/after-hours-answering-service-hvac-companies" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "After-Hours Answering Service for HVAC Companies: How to Stop Losing $400+ Jobs After 5pm",
            description:
              "How HVAC contractors stop losing $400+ jobs to voicemail after 5pm. Real cost math, ServiceTitan/Housecall Pro/Jobber integrations, triage scripts, pricing.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-29",
            image: "https://contactcenterusa.com/images/cc-agent-headset.jpg",
            url: "https://contactcenterusa.com/blog/after-hours-answering-service-hvac-companies",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Content />
    </>
  );
}
