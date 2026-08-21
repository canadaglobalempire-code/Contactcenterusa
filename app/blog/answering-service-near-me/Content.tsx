import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle, MapPin } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnsweringServiceCalculator } from "@/components/shared/AnsweringServiceCalculator";

type Faq = { q: string; a: string };

const localityBuys = [
  {
    t: "Geographic familiarity",
    real: "An agent who knows two addresses are forty minutes apart at rush hour will not book them back to back.",
    national: "Supplied by giving the provider your service-area map and drive-time rules. Configuration, not proximity.",
  },
  {
    t: "A local phone number",
    real: "Caller ID that looks right, and a number customers recognise as belonging to your area.",
    national: "Any competent provider can answer a local number you own or one they provision for you.",
  },
  {
    t: "Correct time-zone handling",
    real: "Your hours, your holidays, and quirks like Arizona not observing daylight saving.",
    national: "Standard for providers running national accounts — but ask, because defaults are where this breaks.",
  },
  {
    t: "State recording-consent rules",
    real: "All-party states such as California, Illinois and Florida need a disclosure at the top of every call.",
    national: "A provider running national accounts should already hold state-specific scripts. One national script is the red flag.",
  },
];

const cities = [
  { city: "Chicago", slug: "chicago", note: "Illinois all-party consent" },
  { city: "Los Angeles", slug: "los-angeles", note: "CCPA and travel time" },
  { city: "Dallas", slug: "dallas", note: "Hail-season surge capacity" },
  { city: "Atlanta", slug: "atlanta", note: "Sprawl and drive times" },
  { city: "Houston", slug: "houston", note: "Industrial shifts, storm continuity" },
  { city: "Phoenix", slug: "phoenix", note: "HVAC peaks, no daylight saving" },
  { city: "Miami", slug: "miami", note: "Bilingual dialect, hurricane cover" },
  { city: "Tampa", slug: "tampa", note: "Longer handle times" },
  { city: "Denver", slug: "denver", note: "Mountain access checks" },
  { city: "San Antonio", slug: "san-antonio", note: "Spanish-first night rota" },
  { city: "Las Vegas", slug: "las-vegas", note: "24-hour metro, all-party consent" },
  { city: "San Diego", slug: "san-diego", note: "Bilingual demand, drive times" },
  { city: "Portland", slug: "portland", note: "Older housing stock, Oregon rules" },
];

const askAnyone = [
  "Are agents US-based on the overnight shift specifically, or only during business hours?",
  "What is your average speed of answer for nights and weekends, reported separately from the daily blend?",
  "Do you use a state-specific recording disclosure, or one national script?",
  "Can you book into my calendar or field-service software in real time, or only take messages?",
  "Do you build travel time into bookings, or only appointment duration?",
  "How many accounts does one agent cover overnight?",
  "Do you bill per second, or round to 30 seconds?",
  "Do you operate from more than one site?",
];

export default function AnsweringServiceNearMeContent({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">BUYER&apos;S GUIDE</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Answering Service Near Me: Does Location Matter?
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 12 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/america.jpg" alt="US-based answering service coverage across American metros" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                If you searched <strong>&ldquo;answering service near me&rdquo;</strong> you were probably looking for a local
                company, on the reasonable assumption that local means better. For most of what an answering service does, it does
                not — and it is worth being straightforward about that, including the parts where being local genuinely helps.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                An agent answering your phone is unaffected by how far away they are sitting. Most providers marketing themselves
                as local route calls to a shared floor in another state regardless. What actually changes outcomes is whether
                agents are US-based, whether your time zone and state rules are handled correctly, whether they know your service
                area well enough to sound credible, and whether they end the call with a booking rather than a message.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Distance does not affect a phone call — but four specific local factors do matter",
                    "The map pack shows who registered an address, not where the agents actually sit",
                    "A national provider supplies local knowledge by configuration; ask rather than assume",
                    "Single-site local providers face the same storm or outage that closes your office",
                    "Billing increment moves cost more than the vendor's postcode does",
                    "The 3 AM test works identically whether a provider is local or national",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What Being Local Genuinely Buys You</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These four are real advantages, and it would be dishonest to pretend otherwise. The point is that each is a
                capability rather than a location — which means a national provider can supply it, and a local one still has to be
                asked about it.
              </p>
              <div className="mt-6 space-y-4">
                {localityBuys.map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Why it matters:</span> {x.real}</p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Without a local office:</span> {x.national}</p>
                  </div>
                ))}
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-office-wide.jpg" alt="US-based contact center floor covering multiple metro markets" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What the Map Pack Is Actually Telling You</h2>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">An address is not a workforce</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      Google reads &ldquo;near me&rdquo; as local intent and returns businesses with a registered address in your
                      metro. That listing confirms someone filed an address. It says nothing about where the agents sit, how the
                      overnight shift is staffed, how many accounts one agent covers at 3 AM, or whether the service can write a
                      booking into your calendar.
                    </p>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Use the map pack as a starting list. Then apply the same questions you would ask any provider — the answers,
                      not the pin, are what separate them.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Where Local Can Actually Be a Disadvantage</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                One consideration cuts the other way, and it is easy to miss when you are shopping in fair weather. A provider
                operating from a single building in your metro is exposed to precisely the same hurricane, ice storm, wildfire or
                power cut that closes your own office — which is exactly when your inbound volume spikes and being reachable
                matters most.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Providers running multiple sites keep answering through a local disruption. In Florida, Texas and much of the Gulf
                and Southeast this is a practical question rather than a hypothetical one, and it is worth asking directly: do you
                operate from more than one location?
              </p>

              <AnsweringServiceCalculator />

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Eight Questions That Work on Any Provider</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Local or national, these are the answers that predict whether the service will work. A national provider answering
                all eight clearly is a better bet than a local one that cannot.
              </p>
              <ul className="mt-4 space-y-3">
                {askAnyone.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{q}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The 3 AM Test</h2>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Call the number a provider would give your customers — never their sales line — at 3 AM on a Sunday, and again on
                  a public holiday. Time the rings. Note whether a human or a menu answers. Ask something that needs real knowledge
                  of the account rather than a greeting. Repeat three or four times across different nights.
                </p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Fifteen minutes of this reveals more than any proposal, and it works identically whether the provider is down the
                  road or two thousand miles away. That is rather the point: the test measures staffing, and staffing is what you
                  are actually buying.
                </p>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Guides by Metro</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Local specifics do vary — recording-consent rules, drive times, seasonal call patterns and language mix are all
                genuinely different by market. These guides cover what actually changes city to city.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {cities.map((c, i) => (
                  <Link
                    key={i}
                    href={`/blog/answering-service-${c.slug}`}
                    className="group flex items-start gap-3 rounded-2xl border border-gray-200 p-4 transition-colors hover:border-red/40"
                  >
                    <MapPin className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span>
                      <span className="block font-bold text-navy group-hover:text-red">Answering Service in {c.city}</span>
                      <span className="block text-sm text-gray-600">{c.note}</span>
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                &ldquo;Near me&rdquo; is a reasonable search and a poor filter. The things it stands in for — local knowledge, the
                right time zone, the right consent script, a familiar phone number — are all worth having, and none of them
                requires the agent to be in your city. Judge on staffing, booking capability and billing terms, and let proximity
                be a tiebreaker rather than the criterion.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> staffs US-based agents
                on every shift, works from your service-area map and local script, holds state-specific recording disclosures, and
                operates from multiple sites so a storm in one metro does not silence your line.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Test Us Before You Decide</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Ask us for the overnight number and call it at 3 AM. We will also give you the effective monthly cost, the
                  billing increment and the overage rate up front — the three numbers you need to compare anyone.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.q}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-6">
                <HeroContactForm />
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "After Hours Answering Service", href: "/blog/after-hours-answering-service" },
                      { title: "Answering Service for Small Business", href: "/blog/answering-service-for-small-business" },
                      { title: "Top 10 Answering Service Companies in USA", href: "/blog/top-10-answering-service-companies-usa" },
                      { title: "Top 10 Appointment Setting Companies", href: "/blog/top-10-appointment-setting-companies-usa" },
                      { title: "Call Center Benchmarks 2026", href: "/blog/call-center-benchmarks-2026" },
                    ].map((a, i) => (
                      <li key={i}>
                        <Link href={a.href} className="text-sm text-gray-700 hover:text-red transition-colors">
                          {a.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
