import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const tiers = [
  {
    name: "English-only with a Spanish greeting",
    what: "A recorded Spanish message asking the caller to leave details or call back in business hours.",
    verdict: "Not bilingual coverage. The caller hangs up and dials a competitor.",
    good: false,
  },
  {
    name: "Interpreter on demand",
    what: "The English agent conferences in a third-party interpreter, typically after 30-90 seconds of set-up.",
    verdict: "Workable for rare languages. Roughly doubles handle time and kills rapport.",
    good: false,
  },
  {
    name: "Bilingual weekday only",
    what: "Fluent agents on the daytime rota; evenings and weekends fall back to English or voicemail.",
    verdict: "Misses the window when most personal calls are actually made.",
    good: false,
  },
  {
    name: "Fluent bilingual, every shift",
    what: "The agent who answers conducts the whole call in the caller's language, at 2 PM or 2 AM.",
    verdict: "The only version that captures the volume you are currently losing.",
    good: true,
  },
];

const markets = [
  { name: "Texas", detail: "Houston, Dallas, San Antonio and the Valley — Spanish-first inbound is routine across trades and clinics." },
  { name: "California", detail: "Los Angeles, the Inland Empire and the Central Valley, with heavy home-services and medical demand." },
  { name: "Florida", detail: "Miami-Dade and Orlando, with Caribbean and South American dialect variation worth flagging to your provider." },
  { name: "Arizona & Nevada", detail: "Phoenix, Tucson and Las Vegas, where emergency trades see a large share of Spanish-first calls." },
  { name: "Georgia & North Carolina", detail: "Fast-growing Hispanic populations that most local competitors still answer only in English." },
];

const costRows = [
  ["English-only US coverage", "$0.85 - $1.65 / min", "Baseline"],
  ["Fluent bilingual, all shifts", "$0.95 - $1.90 / min", "10-25% premium over baseline"],
  ["Monthly tier, small business", "$350 - $900 / mo", "Typical bilingual package"],
  ["Interpreter-assisted", "Baseline + per-minute interpreter fee", "Cheaper per hour, worse per outcome"],
];

const checks = [
  "Call the provider's own line in Spanish at 8 PM on a Saturday and see who answers",
  "Ask what share of the overnight and weekend rota is bilingual, and expect a number",
  "Confirm bilingual agents also cover chat, SMS and email if you run those channels",
  "Ask for a trade glossary in Spanish — parts, symptoms or document names in your field",
  "Check that bookings, confirmations and follow-up texts go out in the caller's language",
  "Verify the escalation path works in Spanish too, not just the first greeting",
];

export default function BilingualAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
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
            Bilingual Answering Service: Native vs Translated
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-diverse-team.jpg" alt="Bilingual US-based answering service agents handling Spanish and English calls" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                In large parts of the United States, an English-only phone line quietly discards a quarter or more of inbound
                demand. The loss is invisible because it never becomes a lead: the caller hears an English greeting, hangs up
                without leaving a message, and rings the next result. A <strong>bilingual answering service</strong> closes that
                gap — but only if it is genuinely bilingual, which a surprising number are not.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide separates the four things sold under the same label, covers what fluent coverage actually costs, and
                gives you a single test that settles whether a provider staffs bilingual agents when it matters. See also our{" "}
                <Link href="/solutions/multilingual-call-center-services" className="text-red font-semibold hover:underline">multilingual call center services</Link>{" "}
                and the{" "}
                <Link href="/blog/top-10-multilingual-call-center-companies-usa" className="text-red font-semibold hover:underline">top 10 multilingual call center companies</Link> ranking.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "A 'press 2 for Spanish' menu is not coverage unless a fluent agent sits behind it 24/7",
                    "Interpreter hand-offs add 30-90 seconds and roughly double handle time",
                    "Fluent bilingual coverage costs a 10-25% premium over English-only",
                    "Most providers staff bilingual agents weekdays and fall back at nights and weekends",
                    "One test settles it: call their line in Spanish at 8 PM on a Saturday",
                    "Written Spanish is a separate skill — confirm it if you run chat or SMS",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Four Things Sold as &ldquo;Bilingual&rdquo;</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                All four appear on pricing pages under the same word. Only the last one does what you are buying it for.
              </p>
              <div className="mt-6 space-y-4">
                {tiers.map((t, i) => (
                  <div key={i} className={`rounded-2xl border p-5 ${t.good ? "border-gray-200" : "border-red/30 bg-red/[0.02]"}`}>
                    <div className="flex items-start gap-3">
                      {t.good
                        ? <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                        : <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />}
                      <div>
                        <h3 className="font-bold text-navy">{t.name}</h3>
                        <p className="mt-2 text-sm text-gray-700 leading-relaxed">{t.what}</p>
                        <p className="mt-2 text-sm font-semibold text-navy">{t.verdict}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-woman-headset.jpg" alt="Bilingual agent taking a Spanish-language service call" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What It Costs</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Model</th>
                      <th className="p-4 font-semibold">Typical US range</th>
                      <th className="p-4 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{row[0]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[1]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The premium exists because fluent bilingual agents are a genuinely smaller labour pool, not because vendors are
                opportunistic. Judge it against the volume it unlocks rather than against the English-only rate.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Where It Matters Most</h2>
              <div className="mt-6 space-y-4">
                {markets.map((m, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{m.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{m.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                The competitive point is worth stating plainly: in most of these markets your local competitors also answer only in
                English. Being the one business a Spanish-speaking caller can actually talk to is a durable advantage, not a
                courtesy.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Six Checks Before You Sign</h2>
              <ul className="mt-4 space-y-3">
                {checks.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Bilingual coverage is one of the few line items where the return is easy to observe: leads appear from a segment
                that previously produced none. The only real risk is buying the label without the staffing behind it, and one
                Saturday-evening phone call in Spanish tells you which you are being sold.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> staffs fluent bilingual
                agents on every shift including weekends and holidays, handles Spanish across phone, chat and SMS, and sends
                bookings and confirmations in the caller&apos;s language.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Answer the Calls You Are Currently Losing</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Fluent English and Spanish coverage on every shift, with live booking and confirmations in the caller&apos;s
                  language. Ask us for the overnight number and test it yourself in Spanish.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Bilingual Quote <ArrowRight className="h-4 w-4" />
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
              <div className="space-y-6 lg:sticky lg:top-28">
                <HeroContactForm />
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "Top 10 Multilingual Call Center Companies", href: "/blog/top-10-multilingual-call-center-companies-usa" },
                      { title: "Spanish-Speaking Answering Service for PI Firms", href: "/blog/spanish-speaking-answering-service-personal-injury" },
                      { title: "Answering Service for Small Business", href: "/blog/answering-service-for-small-business" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
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
