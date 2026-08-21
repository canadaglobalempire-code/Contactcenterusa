import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

type Faq = { q: string; a: string };

const callTypes = [
  { t: "New patient enquiry", d: "The highest-value call your practice receives and the one most likely to be lost. Needs immediate answer, benefit check and a booked appointment — not a callback promise." },
  { t: "Emergency", d: "Triaged against your dentist's written criteria. Genuine emergencies page the on-call dentist; everything else books into the next available slot." },
  { t: "Existing patient admin", d: "Rescheduling, directions, forms, balance questions. Handled end to end so the front desk never sees them." },
  { t: "Recall and reactivation", d: "Outbound work into the overdue-hygiene list. Rarely reached in-house because inbound always wins, and consistently the highest-return use of the service." },
];

const emergencyTiers = [
  { tier: "Page the dentist now", ex: "Uncontrolled bleeding, facial swelling affecting the eye or airway, avulsed or displaced permanent tooth, severe uncontrolled pain", note: "Avulsed teeth are time-critical — this tier never waits for morning" },
  { tier: "First slot tomorrow", ex: "Moderate pain responding to analgesia, lost crown or filling with sensitivity, broken denture for a patient who cannot eat", note: "Booked and confirmed by SMS on the call" },
  { tier: "Routine booking", ex: "Chipped tooth without pain, cosmetic concerns, food impaction, general questions", note: "Normal scheduling queue" },
];

const costRows = [
  ["After-hours emergency only", "$200 - $450 / mo", "Practices with a solid daytime front desk"],
  ["Daytime overflow", "$300 - $700 / mo", "Losing new-patient calls in the morning and lunch peaks"],
  ["Overflow + after-hours", "$500 - $900 / mo", "The most common package"],
  ["Adding recall campaigns", "Per-call or per-booking", "Usually the fastest-paying addition"],
];

export default function DentalAnsweringServiceContent({ faqs }: { faqs: Faq[] }) {
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
            Dental Answering Service: New Patients &amp; Emergencies
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> August 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-smile.jpg" alt="Dental answering service agent booking a new patient appointment" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-gray-700">
                Dental practices lose new patients at a very specific moment: the morning block, when one person at the front desk
                is checking in a patient, taking a payment and answering the phone at the same time. A prospective patient who
                reaches a busy signal calls the next practice on the map. A <strong>dental answering service</strong> covers
                exactly those windows — and the loss it prevents never appeared in your software, because the call never became a
                record.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                This guide covers the four call types a practice actually receives, emergency triage tiers your dentist should
                write, benefit verification at booking, recall campaigns, and what it costs against patient lifetime value. See
                also our{" "}
                <Link href="/industries/dental-call-center" className="text-red font-semibold hover:underline">dental call center services</Link>{" "}
                and{" "}
                <Link href="/blog/medical-office-answering-service" className="text-red font-semibold hover:underline">medical office answering service</Link> guide.
              </p>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "New-patient calls cluster in the morning block and just after lunch — your busiest front-desk moments",
                    "Lost calls never enter your practice software, so the problem stays invisible",
                    "Your dentist writes the emergency tiers; agents apply them without interpretation",
                    "Avulsed permanent teeth are time-critical and always page the on-call dentist",
                    "Benefit verification at booking prevents the treatment plan collapsing at the chair",
                    "Recall campaigns are usually the fastest-paying part of the service",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Four Call Types, Four Different Jobs</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {callTypes.map((c, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5">
                    <h3 className="font-bold text-navy">{c.t}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{c.d}</p>
                  </div>
                ))}
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-woman-typing.jpg" alt="Agent verifying dental benefits while booking a patient" width={800} height={450} className="w-full object-cover" />
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Emergency Triage Tiers</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These must be written by your dentist and applied by agents without interpretation. The point of a written list is
                that the same call gets the same answer at 10 PM regardless of who picks up.
              </p>
              <div className="mt-6 space-y-4">
                {emergencyTiers.map((t, i) => (
                  <div key={i} className={`rounded-2xl border p-5 ${i === 0 ? "border-red/30 bg-red/[0.02]" : "border-gray-200"}`}>
                    <h3 className="font-bold text-navy">{t.tier}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Examples:</span> {t.ex}</p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Note:</span> {t.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-red/30 bg-red/[0.02] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy">Agents route, they do not advise</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      A non-clinical agent may ask your screening questions and route by the answers. They must not tell a caller
                      what their symptom means, whether it can wait, or what to do in the meantime — including well-meant first-aid
                      suggestions for a knocked-out tooth. Put the prohibition in the script and check recordings in month one.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Why Recall Is the Fastest Payback</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most practices have a list of patients overdue for hygiene and no reliable time to work it. Inbound always wins the
                front desk&apos;s attention, so the outbound list ages quietly. Handing it to an outsourced team that books directly
                into open hygiene columns turns a dormant asset into production — and because hygiene visits are where treatment
                gets diagnosed, the return compounds past the appointment itself.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-bold text-navy">How to scope it</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Export the overdue-hygiene list and agree how far back to work</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Give agents live access to the hygiene column so they book, not request</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Set attempt limits and calling windows that respect the patient&apos;s time zone</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />Measure booked-and-kept, not calls made</li>
                </ul>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What It Costs</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-semibold">Package</th>
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
              <p className="mt-4 text-gray-700 leading-relaxed">
                Compare these against your own new-patient value rather than against each other. Most practices place lifetime value
                in the low thousands, which puts the break-even for a $600 package at well under one additional new patient a month.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Dental is one of the clearest cases in this category because the highest-value call arrives at the busiest moment
                and disappears without a trace when missed. Cover the morning and lunch peaks first, have your dentist write the
                emergency tiers, verify benefits at booking, and put the overdue-hygiene list to work. The after-hours cover most
                practices shop for first is genuinely useful — it is just rarely where the money is.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> answers with US-based
                HIPAA-trained agents under a signed BAA, books live into Dentrix, Eaglesoft, Open Dental and Curve, verifies
                benefits at booking, and runs recall campaigns into your open hygiene columns.
              </p>

              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Stop Losing New Patients at 9 AM</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  US-based dental coverage for the morning rush, lunch, evenings and weekends — with live booking, benefit
                  verification and dentist-written emergency triage.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Dental Quote <ArrowRight className="h-4 w-4" />
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
                      { title: "Medical Office Answering Service", href: "/blog/medical-office-answering-service" },
                      { title: "Top 10 Medical Answering Service Companies", href: "/blog/top-10-medical-answering-service-companies-usa" },
                      { title: "Answering Service Appointment Scheduling", href: "/blog/answering-service-appointment-scheduling" },
                      { title: "Answering Service for Small Business", href: "/blog/answering-service-for-small-business" },
                      { title: "Answering Service Pricing", href: "/blog/answering-service-pricing" },
                      { title: "Top 10 Appointment Setting Companies", href: "/blog/top-10-appointment-setting-companies-usa" },
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
