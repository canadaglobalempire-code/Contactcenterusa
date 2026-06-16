import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo-config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

const title =
  "Travel Crisis Management & Support | Case Study | Contact Center USA";
const description =
  "How a travel management company handled 50,000+ rebookings during a global disruption with 96% resolution rate and 4-minute average handle time.";
const slug = "travel-crisis-management";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/case-studies/${slug}` },
  ...pageMeta(title, description, `/case-studies/${slug}`),
};

const metrics = [
  { value: "50,000+", label: "Rebookings Processed" },
  { value: "96%", label: "First-Call Resolution Rate" },
  { value: "4 min", label: "Average Handle Time" },
  { value: "91%", label: "CSAT During Crisis" },
];

const takeaways = [
  "Crisis response capability is not something you can build on the fly — having a pre-established surge deployment protocol and a warm agent pool ready to activate within hours is what separates companies that survive disruptions from those that don't.",
  "Real-time integration with flight status APIs is essential during travel disruptions. Agents who can see gate changes, cancellations, and alternative routes in real time resolve calls 3x faster than those working from static information.",
  "Multi-channel triage — phone, SMS, and email working in concert — prevents any single channel from becoming a bottleneck during a crisis. SMS proved to be the highest-efficiency channel for status updates, freeing phone lines for complex rebooking requests.",
  "Zero data breaches during a period of extreme operational stress is a testament to the importance of building security into workflows by default, not as an afterthought — every agent handled PII and payment data without a single incident.",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `https://contactcenterusa.com/case-studies/${slug}`,
  author: {
    "@type": "Organization",
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://contactcenterusa.com/images/logo-v6.png",
    },
  },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://contactcenterusa.com/case-studies/${slug}`,
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://contactcenterusa.com" },
  { name: "Case Studies", url: "https://contactcenterusa.com/case-studies" },
  {
    name: "Travel Crisis Management & Support",
    url: `https://contactcenterusa.com/case-studies/${slug}`,
  },
]);

export default function TravelCrisisManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/case-studies" className="hover:text-white/80">
              Case Studies
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white/80">Travel Crisis Management & Support</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-rose-500/15 px-4 py-1.5 text-sm font-semibold text-rose-300">
            Travel &amp; Hospitality
          </span>
          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Processing 50,000+ Rebookings During a Global Travel Disruption
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/60">
            When a major global event grounded thousands of flights and left
            hundreds of thousands of travelers stranded, a travel management
            company faced a 20x spike in call volume with no crisis playbook and
            wait times exceeding 48 hours. Contact Center USA deployed 200
            emergency agents within 36 hours, integrated real-time flight data,
            and processed over 50,000 rebookings with a 96% first-call resolution
            rate and a 4-minute average handle time.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">The Challenge</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              The disruption was sudden and unprecedented. A major global event
              forced the cancellation or delay of over 8,000 flights across
              multiple carriers, affecting the travel management company&rsquo;s
              client base of 200,000+ corporate and leisure travelers. Within 12
              hours, call volume surged from roughly 500 daily calls to over
              10,000 — and it kept climbing. The company&rsquo;s existing support team
              of 30 agents was overwhelmed within the first two hours.
            </p>
            <p>
              The company had no crisis response playbook. There was no protocol
              for surge deployment, no pre-established relationships with
              overflow support providers, and no multi-channel triage strategy.
              Customer wait times quickly exceeded 48 hours. Email inboxes were
              overflowing with thousands of unread messages. Social media channels
              were flooded with frustrated travelers tagging the company in
              complaint posts. The situation was spiraling toward a reputational
              catastrophe.
            </p>
            <p>
              Beyond the sheer volume, the complexity of each interaction was
              unusually high. Travelers needed complete itinerary rebookings, not
              just simple changes. Many had connecting flights across multiple
              carriers, hotel reservations tied to flight schedules, visa
              complications from rerouting through different countries, and urgent
              business meetings that couldn&rsquo;t be missed. Each call required
              access to real-time flight availability, hotel inventory, ground
              transportation options, and the traveler&rsquo;s corporate travel
              policy — all simultaneously.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">Our Solution</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              Contact Center USA activated its emergency surge protocol within
              4 hours of the initial call. We began deploying agents from our
              pre-vetted US-based network, reaching 200 fully trained agents
              within 36 hours — all equipped with the travel management
              company&rsquo;s booking platform, CRM, and real-time communication
              tools. Each agent underwent a compressed but comprehensive training
              program covering the company&rsquo;s booking systems, rebooking
              policies, airline partner protocols, hotel change procedures, and
              customer de-escalation techniques specific to distressed
              travelers.
            </p>
            <p>
              We integrated real-time flight status data from multiple airline
              APIs directly into the agent dashboard. This gave every agent a
              live view of flight availability, gate assignments, delays, and
              cancellations across all partner carriers. When a traveler called
              needing a rebooking, the agent could immediately see alternative
              routing options without switching between multiple systems or
              placing the customer on hold to check availability. This real-time
              integration was the single most impactful technology decision in
              the entire engagement — it reduced average handle time by over 60%
              compared to the company&rsquo;s estimates for manual rebooking.
            </p>
            <p>
              We implemented a multi-channel triage strategy that distributed
              load across phone, SMS, and email. Phone agents handled complex
              rebookings and urgent travel disruptions. SMS was used for
              high-volume, lower-complexity interactions — flight status updates,
              confirmation of changes already made, and simple itinerary
              modifications. Email handled non-urgent requests and served as an
              asynchronous channel for travelers in different time zones. This
              three-channel approach prevented any single channel from becoming a
              bottleneck and ensured that urgent cases received immediate phone
              attention while routine updates were handled more efficiently
              through digital channels.
            </p>
            <p>
              A 24/7 dedicated crisis management team was established with a
              shift structure that guaranteed full coverage across all time zones
              where affected travelers were located. The team was supported by a
              real-time analytics dashboard that tracked call volume, resolution
              rates, average handle time, and queue depth — enabling the
              operations manager to rebalance staffing across channels every 30
              minutes as volume patterns shifted throughout the day.
            </p>
            <p className="text-base">
              This engagement showcased our{" "}
              <Link
                href="/industries/travel-hospitality-call-center"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                travel &amp; hospitality call center
              </Link>
              ,{" "}
              <Link
                href="/services/omnichannel-contact-center-solutions"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                omnichannel contact center solutions
              </Link>
              , and{" "}
              <Link
                href="/solutions/inbound-call-center-services"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                inbound call center services
              </Link>{" "}
              under the most demanding conditions imaginable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white">
            The Results
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <p className="text-4xl font-bold text-red lg:text-5xl">
                  {m.value}
                </p>
                <p className="mt-3 text-sm font-medium text-white/60">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">Key Takeaways</h2>
          <ul className="mt-8 max-w-3xl space-y-5">
            {takeaways.map((t) => (
              <li key={t} className="flex gap-4 text-lg leading-relaxed text-text-muted">
                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-red" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">
            Want Similar Results?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Whether it&rsquo;s a seasonal surge or an unexpected crisis, our US-based
            teams are ready to scale at a moment&rsquo;s notice.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-8 py-4 text-[15px] font-semibold text-navy transition-all hover:border-navy/40 hover:bg-navy/5"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
