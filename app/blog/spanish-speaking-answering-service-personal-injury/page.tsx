import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Spanish Answering Service for PI Law Firms (2026)",
  description:
    "A bilingual Spanish answering service for personal injury law firms — capture more intakes 24/7 with native Spanish-speaking agents. Get a quote.",
  keywords: [
    "spanish speaking answering service for personal injury",
    "bilingual personal injury intake",
    "spanish legal intake",
    "hispanic personal injury leads",
    "bilingual law firm answering service",
    "spanish speaking legal intake",
    "abogado answering service",
    "lesion personal intake",
    "auto accident bilingual intake",
    "24/7 bilingual law firm intake",
    "spanish intake litify clio",
    "mass tort hispanic intake",
  ],
  alternates: {
    canonical: "/blog/spanish-speaking-answering-service-personal-injury",
  },
};

const faqs = [
  {
    q: "Do I really need a Spanish-speaking answering service if my firm has one bilingual paralegal?",
    a: "If your bilingual paralegal isn't on-call 24/7, yes. The majority of motor-vehicle accidents and 'I just got hurt at work' calls happen outside business hours. A Spanish-dominant caller who hits English voicemail at 11pm Saturday almost never calls back — they call the next firm advertising in Spanish. A 24/7 bilingual answering service is the only way to capture those cases.",
  },
  {
    q: "What's the difference between native Spanish agents and translated Spanish?",
    a: "Native US-based Spanish speakers handle dialect (Mexican-American vs Puerto Rican vs Cuban-American vs Central American), legal terminology, cultural trust cues, and proper-noun spelling with diacritics. Offshore agents reading from translated scripts often mispronounce names, miss urgency cues, and break the trust that signs a retainer. For PI work where one signed case is worth $50K-$300K, the quality gap directly drives revenue.",
  },
  {
    q: "Can a Spanish-speaking answering service handle conflict-of-interest checks and retainer signing?",
    a: "Yes — a properly trained legal intake service runs conflicts in real time against your case management system (Litify, Clio, MyCase, Filevine), captures party names with correct diacritics and spelling, and triggers a Spanish-language e-signature retainer through DocuSign or HelloSign while the caller is still warm. Many states require plain-language Spanish retainers for limited-English-proficient clients.",
  },
  {
    q: "How much does a Spanish PI answering service cost?",
    a: "Typical 2026 pricing is $1,000-$5,000/month retainer plus per-call or per-minute usage ($3-$8 per call, or roughly $0.95-$1.50 per billable minute). Per signed case, all-in cost lands around $50-$300. One $80,000 MVA settlement at a 33% contingency funds 2-5 years of bilingual intake — the ROI math is unambiguous.",
  },
  {
    q: "Will the answering service integrate with Litify, Clio, MyCase, or Filevine?",
    a: "A serious legal-intake vendor will. Look for native API integration, a documented language-preference field, automatic creation of the matter or lead record, attached call recording, and routing to a bilingual paralegal or attorney for follow-up within your SLA. Avoid vendors that only deliver intake via email — the data hygiene is poor.",
  },
  {
    q: "Is HIPAA an issue for personal injury intake?",
    a: "Once your firm requests medical records or discusses treatment, PHI is in play and your intake vendor needs a BAA-equivalent legal confidentiality agreement, encrypted transmission, and call recording with documented retention. Mass tort and product liability work amplifies this — claimant medical histories are the case. Treat your intake vendor like any other business associate.",
  },
  {
    q: "Does mass tort and class action work require Spanish intake?",
    a: "It is effectively non-negotiable. National PI and mass tort campaigns running TV, radio, and digital ads in Spanish-dominant markets (Los Angeles, Houston, Miami, Phoenix, the Bronx, Hialeah, the Rio Grande Valley) lose 30-40% of qualified claimants without bilingual intake. At per-claimant settlement values of $25K-$200K, the math is brutal — every leaked Spanish caller is a deleted case.",
  },
  {
    q: "How fast does an answering service need to pick up?",
    a: "PI is the most call-time-sensitive vertical in legal. Industry data consistently shows lead-to-contact within 60 seconds drives 5-10x conversion vs anything beyond 5 minutes. Require a sub-30-second answer SLA, sub-3% abandon rate, and live transfer to a bilingual attorney for high-value MVA, trucking, and wrongful-death calls.",
  },
];

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
              "Spanish-Speaking Answering Service for Personal Injury Firms: Capture Hispanic Clients 24/7",
            description:
              "Deep buyer guide for PI firms: bilingual intake economics, native Spanish vs translated, conflict checks, retainer signing in Spanish, Litify/Clio integration, and ROI per signed case.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-29",
            dateModified: "2026-04-29",
            url: "https://contactcenterusa.com/blog/spanish-speaking-answering-service-personal-injury",
            image: "https://contactcenterusa.com/images/cc-discussion.jpg",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://contactcenterusa.com/blog/spanish-speaking-answering-service-personal-injury",
            },
            about: {
              "@type": "LegalService",
              name: "Contact Center USA Bilingual Legal Intake",
              provider: {
                "@type": "Organization",
                name: "Contact Center USA",
                url: "https://contactcenterusa.com",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType:
                "Spanish-Speaking Personal Injury Answering & Intake Service",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Contact Center USA — Bilingual Personal Injury Intake",
            url: "https://contactcenterusa.com/solutions/multilingual-call-center-services",
            provider: {
              "@type": "Organization",
              name: "Contact Center USA",
              url: "https://contactcenterusa.com",
            },
            areaServed: { "@type": "Country", name: "United States" },
            availableLanguage: ["English", "Spanish"],
            serviceType:
              "24/7 Spanish-speaking answering and legal intake for personal injury firms",
          }),
        }}
      />
      <Content />
    </>
  );
}
