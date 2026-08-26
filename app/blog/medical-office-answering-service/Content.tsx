import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const twoJobs = [
  {
    name: "Daytime front-desk overflow",
    when: "8-10 AM and after 4 PM, when booking calls cluster and staff are with patients",
    does: "Answers the calls your team cannot reach, books and reschedules, verifies insurance, handles routine admin questions",
    buys: "Recovered bookings and a front desk that stops being interrupted mid-conversation",
  },
  {
    name: "After-hours on-call coverage",
    when: "Evenings, weekends, holidays",
    does: "Applies your triage script, pages the on-call clinician when criteria are met, captures everything else for morning",
    buys: "A documented response record and clinicians woken only when your own rules say so",
  },
];

const triage = [
  { tier: "Page immediately", ex: "Chest pain, difficulty breathing, severe bleeding, post-operative complications, anything your clinicians listed as urgent", note: "Agent reads the script and routes. No assessment, no advice." },
  { tier: "Same or next morning", ex: "Worsening symptoms that are not emergent, medication questions, post-visit concerns", note: "Structured message flagged for first review of the day." },
  { tier: "Routine administrative", ex: "Booking, rescheduling, directions, hours, forms, billing questions", note: "Handled fully by the agent — never reaches a clinician." },
  { tier: "Refills and results", ex: "Prescription refill requests, lab result enquiries", note: "Captured and routed per your policy. Agents never discuss results." },
];

const costRows = [
  ["Daytime overflow", "$0.95 - $1.80 / min", "$400 - $1,200 / mo"],
  ["After-hours on-call", "Per call or tier", "$250 - $900 / mo"],
  ["Verified intake", "Per booked appointment", "$45 - $120 each"],
  ["Full 24/7 practice cover", "Blended", "$900 - $2,500 / mo"],
];

const compliance = [
  "A signed BAA before any patient call is routed — and confirm it extends to subcontractors",
  "Named agents trained on HIPAA minimum-necessary, with training records you can see",
  "Call recordings encrypted at rest and retained to a retention period you set",
  "Access controls so agents see only the fields their task requires",
  "A written incident-notification path with a defined timeline",
  "Real-time two-way write access to your practice management system, not a timed sync",
];

const redFlags = [
  "Treats the BAA as paperwork to sort out after go-live",
  "Offers to 'advise' patients or describes non-clinical agents as performing triage",
  "Cannot name the practice management systems it writes into",
  "No written triage script — each agent decides who to page at 2 AM",
  "Purges call recordings well inside your retention obligations",
  "Uses overflow partners at peak without disclosing them or covering them in the BAA",
];

export default function MedicalOfficeAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
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
            Medical Office Answering Service (2026 Guide)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-woman-typing.jpg" alt="HIPAA-compliant agent scheduling a patient appointment for a medical practice" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Most practices buy a <strong>medical office answering service</strong> for after-hours cover and discover the
                bigger return was during business hours. Patients call to book between 8 and 10 in the morning and again after
                four, which is exactly when the front desk is with someone. Those callers hit a busy signal, hang up, and never
                appear in any report — which is why the problem stays invisible while the schedule stays soft.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers the two distinct jobs a practice is actually buying, the line between administrative and clinical
                triage, HIPAA obligations that are not negotiable, insurance verification at booking, and 2026 costs. See also{" "}
                <Link href="/blog/hipaa-compliant-answering-service-doctors" className="text-red font-semibold hover:underline">HIPAA-compliant answering services for doctors</Link>{" "}
                and the{" "}
                <Link href="/blog/top-10-medical-answering-service-companies-usa" className="text-red font-semibold hover:underline">top 10 medical answering service companies</Link> ranking.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Abandoned booking calls are invisible in front-desk reporting — pull your phone system's abandonment rate",
                    "Daytime overflow usually returns more than after-hours cover, despite being bought second",
                    "A signed BAA covering subcontractors is required before the first patient call",
                    "Non-clinical agents perform administrative triage against your script — never assessment or advice",
                    "Insurance verification at booking cuts denials and the no-shows caused by coverage surprises",
                    "Real-time two-way PM system access, or your front desk and the service will double-book",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Two Jobs, Often Confused</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These are priced differently, staffed differently and measured differently. Buying one and expecting the other is
                the most common disappointment in this category.
              </p>
              <div className="mt-6 space-y-4">
                {twoJobs.map((j, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{j.name}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">When:</span> {j.when}</p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Does:</span> {j.does}</p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">What you are buying:</span> {j.buys}</p>
                  </div>
                ))}
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-desk.jpg" alt="Medical answering service agent verifying insurance during a booking call" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Administrative Triage, Not Clinical Advice</h2>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">The line that must not move</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      A non-clinical agent may ask the screening questions your clinicians wrote and route by the answers. They may
                      not assess a symptom, offer reassurance, suggest what something might be, or advise a patient to wait. The
                      distinction sounds obvious and erodes easily, because reassuring a frightened caller is a natural human
                      instinct. Make the prohibition explicit in the script and check recordings for it in the first month.
                    </p>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      If your practice genuinely needs symptom assessment overnight, that is a nurse triage line staffed by licensed
                      clinicians — a different service at a different price. Do not let a vendor blur the two in a proposal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {triage.map((t, i) => (
                  <div key={i} className={`rounded-2xl border p-5 ${i === 0 ? "border-red/30 bg-red/[0.02]" : "border-gray-200"}`}>
                    <h3 className="font-bold text-navy">{t.tier}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Examples:</span> {t.ex}</p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Handling:</span> {t.note}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Insurance Verification at Booking</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This is the feature most practices underweight when comparing quotes. Confirming eligibility, plan status, copay
                and network participation while the patient is still on the phone moves a conversation that would otherwise happen
                at the front desk on the day of the visit, when it is expensive and awkward for everyone.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Fewer denials", d: "Coverage problems surface before the visit rather than after the claim." },
                  { t: "Fewer no-shows", d: "Patients who discover a coverage issue the night before simply do not come. Catching it at booking preserves the slot." },
                  { t: "Cleaner check-in", d: "The front desk is not renegotiating cost with a patient in the waiting room." },
                  { t: "Accurate expectations", d: "The patient knows the copay when they book, which is when they are most willing to hear it." },
                ].map((x, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{x.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Compliance Requirements</h2>
              <ul className="mt-4 space-y-3">
                {compliance.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">2026 Costs</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Coverage</th>
                      <th className="p-4 font-semibold">Model</th>
                      <th className="p-4 font-semibold">Typical cost</th>
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
              <p className="mt-4 text-sm text-gray-500">
                Verified intake costs more per booking because eligibility checks take real time. Judge it against denial rates and
                recovered slots rather than against the unverified booking rate.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Red Flags</h2>
              <ul className="mt-4 space-y-3">
                {redFlags.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Start by pulling your abandonment rate for the two daily peaks. That number usually justifies overflow cover on its
                own, before after-hours enters the calculation. Then get the BAA signed, have your clinicians write the triage
                script rather than accepting a vendor template, insist on real-time PM system access, and hold the line between
                administrative routing and clinical advice.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> operates under a signed
                BAA covering subcontractors, writes live into major practice management systems, verifies eligibility at booking,
                and routes strictly against the script your clinicians approve.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Stop Losing Bookings to a Busy Signal</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  HIPAA-compliant US-based overflow and after-hours cover, with live scheduling, insurance verification at booking
                  and documented on-call paging. Tell us your practice size and peak hours.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Practice Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Top 10 Medical Answering Service Companies", href: "/blog/top-10-medical-answering-service-companies-usa" },
                      { title: "HIPAA-Compliant Answering Service for Doctors", href: "/blog/hipaa-compliant-answering-service-doctors" },
                      { title: "Dental Answering Service", href: "/blog/dental-answering-service" },
                      { title: "Answering Service Appointment Scheduling", href: "/blog/answering-service-appointment-scheduling" },
                      { title: "24 Hour Answering Service", href: "/blog/24-hour-answering-service" },
                      { title: "Top 10 Mortgage Call Center Companies", href: "/blog/top-10-mortgage-call-center-companies-usa" },
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
