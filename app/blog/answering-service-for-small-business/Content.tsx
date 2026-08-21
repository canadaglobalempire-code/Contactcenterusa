import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const costRows = [
  ["Evening + weekend only", "$150 - $400 / mo", "Offices whose missed calls land just after closing"],
  ["Business-hours overflow", "$250 - $600 / mo", "Firms losing calls while already on the phone"],
  ["Full 24/7 live cover", "$600 - $1,200 / mo", "Emergency trades, clinics, property management"],
  ["Per minute (any pattern)", "$0.85 - $1.65 / min", "Unpredictable or seasonal volume"],
];

const vsHire = [
  ["Annual cost", "$38,000-$52,000 salary + 20-30% on top", "$3,000-$8,400"],
  ["Hours covered", "40/week, one person", "Up to 168/week, shared pool"],
  ["Holidays and sick days", "You cover them or the phone rings out", "Unaffected"],
  ["Two calls at once", "One goes to voicemail", "Both answered"],
  ["Idle time", "Paid regardless", "Billed on live call time only"],
  ["Ramp", "4-8 weeks to hire and train", "1-2 weeks to script and launch"],
  ["Walk-ins and paperwork", "Handled", "Not covered"],
  ["Deep institutional knowledge", "Builds over time", "Limited to your script and FAQ"],
];

const scriptItems = [
  { t: "Your twenty real questions", d: "Pull the last month of calls and write down what people actually ask. Hours, service area, rough pricing, lead times, parking, whether you handle X. Most calls are one of these twenty." },
  { t: "Pricing bands, not quotes", d: "Give agents ranges they may state and a hard rule never to quote a firm number. A figure invented on the phone becomes an expectation you have to honour." },
  { t: "What counts as urgent", d: "Write the escalation threshold down explicitly. Everything you leave unstated becomes a judgment call that gets made differently every time." },
  { t: "Booking rules", d: "Appointment length by service type, buffer and travel time, who is qualified for what, and how far ahead callers may book." },
  { t: "What to do with a price shopper", d: "Decide in advance whether these get booked, qualified out, or passed to you. Otherwise your calendar fills with visits that never close." },
];

const mistakes = [
  "Buying message-taking and expecting booked work — the caller still has all evening to ring a competitor",
  "Never writing a script, then blaming the agents for sounding like they do not know your business",
  "Choosing on price per minute instead of cost per captured job",
  "Accepting 30-second billing increments, which inflates a 40-second call by 50%",
  "Signing 12 months before testing a single week of real calls",
  "Buying 24/7 when the call log shows nothing arrives after 9 PM",
];

export default function AnsweringServiceForSmallBusinessContent({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">BUYER&apos;S GUIDE</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Answering Service for Small Business: 2026 Costs
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-smile.jpg" alt="US-based answering service agent taking a call for a small business" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Small businesses do not lose calls because nobody cares. They lose them because the one person who answers the
                phone is also the person serving a customer, driving to a job, or eating lunch. An{" "}
                <strong>answering service for small business</strong> fills exactly that gap: a trained US-based team answering in
                your company name for the hours you genuinely cannot, at a fraction of what a receptionist costs.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers what it actually costs in 2026, the honest comparison against hiring someone, the scripting that
                decides whether callers notice, and the mistakes that make small firms conclude the whole category does not work.
                For round-the-clock cover specifically see our{" "}
                <Link href="/blog/24-hour-answering-service" className="text-red font-semibold hover:underline">24 hour answering service guide</Link>,
                or compare providers in the{" "}
                <Link href="/blog/top-10-small-business-call-center-companies-usa" className="text-red font-semibold hover:underline">top 10 small business call center companies</Link> ranking.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Most small businesses land at $250-$700/month for US-based coverage",
                    "A receptionist costs $38,000-$52,000 plus 20-30% and still only covers 40 hours",
                    "Judge on cost per captured job, not price per minute",
                    "Live calendar booking is the single feature that changes the economics",
                    "Check your own call log before buying 24/7 — most misses are 5-8 PM and Saturday",
                    "Scripting, not technology, decides whether callers can tell",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What It Costs in 2026</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Price follows the hours you buy and the volume you send. These are realistic US-based ranges — offshore providers
                quote below them, and are worth considering only if your calls are simple and scripted.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Coverage</th>
                      <th className="p-4 font-semibold">Typical cost</th>
                      <th className="p-4 font-semibold">Best fit</th>
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

              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">The only sum that matters</h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Take your average sale value. Divide the monthly fee by it. That is how many extra jobs the service must capture
                  to break even. At a $400 average sale and a $400 plan, the answer is one job a month. Most small businesses
                  receive far more than one missed call a month, which is why this decision is usually easier than it feels.
                </p>
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-woman-headset.jpg" alt="Answering service agent booking an appointment for a small business caller" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* Vs hiring */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Against Hiring a Receptionist</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This comparison is usually presented as one-sided. It is not — an in-house person genuinely wins on some rows, and
                those rows matter if your front desk does more than answer calls.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Factor</th>
                      <th className="p-4 font-semibold">In-house receptionist</th>
                      <th className="p-4 font-semibold">Answering service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vsHire.map((row, i) => (
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
                The last two rows are the honest caveat. If your front desk greets walk-ins, handles physical paperwork, or holds
                knowledge that changes weekly, hire. If the job is essentially answering the phone, the service wins on every
                remaining line.
              </p>

              {/* Scripting */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Scripting Is the Whole Job</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Almost every complaint about answering services traces back to a thin script rather than to bad agents. Spend two
                hours on these five items before launch and the service will sound like your own front desk.
              </p>
              <div className="mt-6 space-y-4">
                {scriptItems.map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>

              {/* Mistakes */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Six Mistakes That Waste the Money</h2>
              <ul className="mt-4 space-y-3">
                {mistakes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Conclusion */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For a small business the decision rarely turns on whether an answering service is worth having — it turns on
                whether you buy one that books work or one that takes names. Write the script, insist on live calendar booking,
                start month-to-month, and measure captured jobs rather than answered calls. If the numbers hold after a quarter,
                extend the hours. If they do not, you have lost one quarter rather than one salary.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> answers with US-based
                agents, books into your live calendar during the call, bills by the second rather than the half-minute, and lets you
                revise the script without a change fee.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Stop Losing the Calls You Cannot Answer</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Tell us your hours and roughly how many calls you miss, and we will price the smallest package that actually
                  covers the gap — not the biggest one we can sell you.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Small Business Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
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
                      { title: "Answering Service Pricing: What It Really Costs", href: "/blog/answering-service-pricing" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "After Hours Answering Service", href: "/blog/after-hours-answering-service" },
                      { title: "Bilingual Answering Service", href: "/blog/bilingual-answering-service" },
                      { title: "Answering Service Appointment Scheduling", href: "/blog/answering-service-appointment-scheduling" },
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
