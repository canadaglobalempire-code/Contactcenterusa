import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const intakeFields = [
  { f: "Caller and all opposing parties", why: "The conflict screen is impossible without every name" },
  { f: "Date of incident", why: "Limitation periods vary by state and claim type; a stale matter must escalate now" },
  { f: "Jurisdiction", why: "Determines whether the matter is one your firm can take at all" },
  { f: "Narrative in the caller's words", why: "Verbatim facts, not the agent's summary or interpretation" },
  { f: "Other firms contacted or retained", why: "Changes whether you can ethically proceed and how urgently" },
  { f: "Insurer contact to date", why: "A recorded statement already given materially changes the matter" },
  { f: "Any deadline they have been given", why: "Court dates and demand deadlines outrank the ordinary queue" },
  { f: "Treatment status (injury matters)", why: "Drives both case value and urgency of the consultation" },
];

const uplDo = [
  "Capture what happened, in the caller's own words",
  "Ask the screening questions your attorneys wrote",
  "Explain what happens next in your firm's process",
  "Book the consultation and confirm it",
  "Send an engagement agreement for signature when authorized",
];

const uplNever = [
  "Say whether the caller has a case",
  "Estimate what a matter might be worth",
  "State how long the caller has to file",
  "Suggest what the caller should do next",
  "Explain or negotiate terms in the engagement agreement",
];

const costRows = [
  ["Per minute", "$0.95 - $1.90 / min", "General firm coverage, mixed call types"],
  ["Monthly tier", "$500 - $1,500 / mo", "Predictable intake volume"],
  ["Per qualified intake", "$35 - $150 each", "PI and mass tort, where intake is long and detailed"],
  ["After-hours only", "$300 - $800 / mo", "Firms with in-house daytime reception"],
];

export default function LawyerAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
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
            Lawyer Answering Service: Intake, Conflicts, UPL
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-man-headset.jpg" alt="Legal intake specialist taking a new matter call for a law firm" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Legal matters begin at inconvenient hours. Accidents, arrests, injuries and terminations happen at night and at
                weekends, and the person they happened to is at their most motivated in the hours immediately afterwards. A{" "}
                <strong>lawyer answering service</strong> exists to make sure a trained human takes that call — and, just as
                importantly, that they take it without ever crossing into legal advice.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers the unauthorized-practice line and how to script around it, where a conflict screen belongs,
                what a complete intake record contains, and 2026 costs measured against a signed case. See also our{" "}
                <Link href="/industries/legal-intake-call-center" className="text-red font-semibold hover:underline">legal intake call center services</Link>,
                the{" "}
                <Link href="/blog/top-10-legal-intake-call-center-companies-usa" className="text-red font-semibold hover:underline">top 10 legal intake companies</Link> ranking,
                and{" "}
                <Link href="/blog/spanish-speaking-answering-service-personal-injury" className="text-red font-semibold hover:underline">Spanish-speaking intake for PI firms</Link>.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Intake agents capture facts; they never assess a claim — UPL exposure lands on your firm",
                    "An initial conflict screen belongs in the call; the determination belongs with the firm",
                    "Capture the incident date every time — limitation periods vary and stale matters must escalate",
                    "A contact record with a phone number is barely better than voicemail; insist on a full matter record",
                    "Same-call e-signature removes a day of drift on high-intent matters",
                    "Cost per signed case, not cost per minute, is the number that decides this",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">The UPL Line</h2>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">The exposure is yours, not the vendor&apos;s</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      A non-lawyer answering under your firm&apos;s name who tells a caller they &ldquo;definitely have a case&rdquo;
                      or that they have &ldquo;two years to file&rdquo; has given legal advice. Callers ask for exactly this, in
                      good faith, on nearly every call — and an agent trying to be helpful is the most likely person to answer.
                      Script the deflection explicitly and audit recordings for it in the first month.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-bold text-navy">Agents may</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {uplDo.map((x, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-red/30 bg-red/[0.02] p-5">
                  <h3 className="font-bold text-navy">Agents must never</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {uplNever.map((x, i) => (
                      <li key={i} className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                The workable deflection is a single sentence the agent can repeat without sounding evasive: that is exactly what the
                attorney will go through with you, and the consultation is where it gets answered. It satisfies the caller, keeps
                the agent inside the line, and moves the call toward a booking.
              </p>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-writing.jpg" alt="Legal intake agent recording matter details during a call" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conflict Screening in the Call</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A consultation booked with a conflicted caller costs an attorney hour and an awkward conversation. An initial screen
                during intake prevents most of them, provided the responsibility is split correctly.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { t: "The agent captures", d: "Every party name — caller, opposing parties, insurers, employers, related businesses. Names are facts, and gathering them is administrative work." },
                  { t: "The system flags", d: "Names run against a conflicts database your firm maintains. Apparent hits stop the booking and route to your team instead." },
                  { t: "The firm decides", d: "Whether a hit is a genuine conflict is a legal determination. It never sits with the intake agent, regardless of how obvious a match appears." },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What a Complete Intake Record Contains</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Field</th>
                      <th className="p-4 font-semibold">Why it is captured</th>
                    </tr>
                  </thead>
                  <tbody>
                    {intakeFields.map((x, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-b border-gray-100 p-4 font-semibold text-navy">{x.f}</td>
                        <td className="border-b border-gray-100 p-4 text-gray-700">{x.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Note that the narrative must be recorded in the caller&apos;s own words rather than summarised. An agent&apos;s
                paraphrase quietly discards the detail an attorney would have found significant.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">2026 Costs</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Model</th>
                      <th className="p-4 font-semibold">Typical range</th>
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
                <h3 className="font-bold text-navy">Cost per signed case</h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Take annual intake spend and divide by matters signed from after-hours and overflow calls. For most firms the
                  answer lands well below the value of a single matter, which is why this decision usually turns on whether the
                  intake is good rather than whether it is affordable. A service that produces contact records rather than matter
                  records will fail this test no matter how low its rate.
                </p>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Legal intake is unusual in that the compliance constraint and the conversion driver point the same way. The firms
                that convert best are the ones with the tightest scripts, because a disciplined script keeps the agent inside the
                UPL line and moves every call toward the same destination — a booked consultation with a complete record attached.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> runs US-based legal
                intake around the clock, screens conflicts against your database before booking, records narratives verbatim, and
                writes full matter records into Clio, Litify, MyCase, Filevine and PracticePanther.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Answer the Call That Signs the Case</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  24/7 US-based legal intake with conflict screening, verbatim narratives, consultation booking and same-call
                  e-signature where your firm authorizes it.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Legal Intake Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Top 10 Legal Intake Call Center Companies", href: "/blog/top-10-legal-intake-call-center-companies-usa" },
                      { title: "Spanish-Speaking Answering Service for PI Firms", href: "/blog/spanish-speaking-answering-service-personal-injury" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
                      { title: "60-Second Lead Response Service", href: "/blog/60-second-lead-response-service" },
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
