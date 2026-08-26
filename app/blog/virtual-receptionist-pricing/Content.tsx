import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnsweringServiceCalculator } from "@/components/shared/AnsweringServiceCalculator";

type Faq = { q: string; a: string };

const tiers = [
  ["Entry / low volume", "$100 - $200 / mo", "Call answering, message capture, basic routing"],
  ["Standard small business", "$250 - $500 / mo", "Adds live calendar booking and FAQ handling"],
  ["Mid-tier", "$400 - $800 / mo", "Adds CRM writes, chat or SMS, call screening"],
  ["Dedicated receptionist", "$1,500 - $3,000 / mo", "A named person working only your account"],
  ["Per minute (any tier)", "$1.00 - $1.95 / min", "Variable or seasonal volume"],
];

const vsAnswering = [
  ["What it optimises for", "Capturing the call", "Resolving the call"],
  ["Typical monthly cost", "$250 - $700", "$250 - $800, more for dedicated"],
  ["Per-minute rate", "$0.85 - $1.65", "$1.00 - $1.95"],
  ["Answers questions from your FAQ", "Basic", "Expected"],
  ["Calendar management", "Books appointments", "Manages the calendar, including changes"],
  ["Screening and routing", "Simple rules", "Judgment against your criteria"],
  ["Chat and email", "Sometimes", "Commonly included"],
  ["Best when your problem is", "Missed calls", "Your team being interrupted"],
];

const extras = [
  ["Set-up / onboarding", "$0 - $500 one-off", "Frequently waived if you ask"],
  ["Overage rate", "2-3x in-tier rate", "The main reason bills exceed the plan"],
  ["Per-integration fee", "$0 - $100 each", "Calendar, CRM, practice or field-service system"],
  ["Message delivery", "Per SMS or email", "Should be included; often is not"],
  ["Script revisions", "$0 - $150 each", "Insist the first quarter is free"],
  ["Holiday surcharge", "0 - 50%", "Get covered holidays named in the contract"],
  ["Wrong numbers & robocalls", "Billed as real calls", "Get the exclusion in writing"],
];

export default function VirtualReceptionistPricingContent({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">PRICING GUIDE</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Virtual Receptionist Pricing: 2026 Cost Breakdown
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 12 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-woman-typing.jpg" alt="Virtual receptionist managing calls and a live calendar for a small business" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Virtual receptionist pricing</strong> looks simple on a provider&apos;s pricing page and rarely matches the
                first invoice. The plan price is real; what moves the actual number is the overage rate, the billing increment, and
                a handful of charges that appear only when you ask about them. This guide covers the real 2026 ranges and the terms
                that decide what you pay.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                It also covers a question worth settling first: whether you need a virtual receptionist at all, or whether an{" "}
                <Link href="/blog/answering-service-pricing" className="text-red font-semibold hover:underline">answering service</Link>{" "}
                does the job for less. Plenty of businesses buy the more expensive product to solve a problem the cheaper one
                already solves.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Most small businesses land at $250-$800 per month",
                    "Overage runs 2-3x the in-tier rate and is the usual cause of a surprise bill",
                    "Per-call beats per-minute once average handle time passes roughly four minutes",
                    "A dedicated receptionist costs 3-5x a shared pool and is worth it only when continuity matters",
                    "If your problem is missed calls, an answering service is the cheaper correct answer",
                    "Rebuild every quote as one annual figure before comparing anything",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What It Costs in 2026</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Tier</th>
                      <th className="p-4 font-semibold">Typical US price</th>
                      <th className="p-4 font-semibold">What it usually includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tiers.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{row[0]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[1]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Do You Actually Need One?</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The honest framing is that these are two different products solving two different problems, and the cheaper one is
                often the right one. Answer this before comparing prices: is your problem that calls go unanswered, or that your
                team keeps getting pulled away by work someone else could handle?
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Factor</th>
                      <th className="p-4 font-semibold">Answering service</th>
                      <th className="p-4 font-semibold">Virtual receptionist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vsAnswering.map((row, i) => (
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
                If the honest answer is &ldquo;calls go unanswered,&rdquo; buy the answering service and spend the difference
                elsewhere. See{" "}
                <Link href="/blog/answering-service-vs-virtual-receptionist-vs-call-center" className="text-red font-semibold hover:underline">answering service vs virtual receptionist vs call center</Link>{" "}
                for the fuller comparison.
              </p>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-monitor.jpg" alt="Comparing virtual receptionist plans and overage terms" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The Overage Trap</h2>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">Where a $300 plan becomes a $520 invoice</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      A plan includes 250 minutes for $300 — an effective $1.20 a minute. The overage rate is $2.75. A busier month
                      pushes you to 330 minutes, and the extra 80 minutes cost $220 rather than the $96 the in-tier rate implies.
                      The plan did not change; the month did.
                    </p>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Before signing, ask what a month 30% above your estimate would invoice at. If the answer is materially higher
                      than the next tier up, buy the next tier up — the headroom is nearly always cheaper than the overage.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Seven Charges Outside the Plan Price</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Charge</th>
                      <th className="p-4 font-semibold">Typical impact</th>
                      <th className="p-4 font-semibold">What to ask for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extras.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{row[0]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[1]}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Together these commonly add 15-25% to a plan that looked competitive on the pricing page.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Shared Pool vs Dedicated</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Shared pool — $250-$800/mo</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Agents trained across several similar accounts. Right for routine enquiries, bookings and screening. Cheaper,
                    scales instantly, and covers more hours. The trade-off is that no one person accumulates deep knowledge of your
                    clients.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Dedicated — $1,500-$3,000/mo</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    A named person working only your account. Right for professional services, high-value clients and complicated
                    booking rules where continuity genuinely changes the outcome. Costs three to five times as much and covers
                    fewer hours unless you buy more than one.
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Settle the product question first — missed calls or interruptions — because it decides whether you are shopping in
                the $250 bracket or the $1,500 one. Then compare on total annual cost with a busy month modelled in, not on the
                monthly plan price. The providers worth working with will give you the overage rate and the billing increment
                without being pushed.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> quotes the effective
                monthly cost, the increment and the overage rate up front, bills per second, excludes wrong numbers and robocalls,
                and includes script revisions rather than charging per change.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Get a Quote With the Overage Rate Included</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Tell us your call volume and average handle time and we will price both models honestly — including telling you
                  when the cheaper answering service is the right fit.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Itemised Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Top 10 Virtual Receptionist Companies", href: "/blog/top-10-virtual-receptionist-companies-usa" },
                      { title: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
                      { title: "Answering Service vs Virtual Receptionist vs Call Center", href: "/blog/answering-service-vs-virtual-receptionist-vs-call-center" },
                      { title: "Answering Service for Small Business", href: "/blog/answering-service-for-small-business" },
                      { title: "Automated Answering Service", href: "/blog/automated-answering-service" },
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
