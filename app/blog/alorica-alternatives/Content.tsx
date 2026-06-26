import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { InlineLeadCTA } from "@/components/shared/InlineLeadCTA";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

export default function Content() {
  return (
    <>
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div>
            <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-4">
              COMPETITOR COMPARISON
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Alorica Alternatives: 7 Better Options for US-Based CX (2026)
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> June 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 11 min read</span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/cc-team-huddle.jpg" alt="Alorica alternatives comparison" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl leading-relaxed">
                  <strong>Alorica</strong> is one of the larger US-headquartered outsourcers, with roughly 100,000 agents and a strong nearshore footprint across Mexico, Jamaica, and the Dominican Republic. It&apos;s a solid choice at scale — but as its delivery has shifted nearshore and offshore, buyers who specifically want 100% onshore US agents, lower minimums, and hands-on account management often start shopping for an alternative.
                </p>
                <p>
                  Here are the 7 best Alorica alternatives in 2026 — what each does well, and how to choose.
                </p>

                <InlineLeadCTA
                  ctaLocation="alorica_alternatives_top_inline_cta"
                  leadOffer="Alorica alternative quote"
                  heading="Need a 100% US-based Alorica alternative quote?"
                  body="Tell us your program size, channels, and contract goals. We'll compare an onshore US model against blended nearshore terms."
                  primaryLabel="Get an Alternative Quote"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="See customer service"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Why Buyers Look Beyond Alorica</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>Delivery has shifted nearshore/offshore.</strong> Buyers wanting onshore-only US delivery have to push for it.</li>
                  <li><strong>Enterprise scale.</strong> Smaller programs can be under-served relative to Alorica&apos;s largest accounts.</li>
                  <li><strong>Account-management depth varies.</strong> Mid-market buyers don&apos;t always get senior, named coverage.</li>
                  <li><strong>Contract rigidity.</strong> Larger providers tend toward longer commitments and volume minimums.</li>
                  <li><strong>Onboarding speed.</strong> Enterprise process can lengthen ramp time.</li>
                </ul>
                <p>
                  Alorica is a capable partner at scale. But if those points resonate, one of these alternatives is probably a better fit.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The 7 Best Alorica Alternatives in 2026</h2>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">1. Contact Center USA</h3>
                <p><strong>Best for:</strong> Brands that want 100% onshore US delivery and flexible terms.</p>
                <p>
                  Contact Center USA staffs, trains, and QAs every agent in America — no nearshore or offshore handoffs — with 24/7 coverage and full <Link href="/services/omnichannel-contact-center-solutions" className="text-red hover:text-red-dark font-semibold">omnichannel service</Link>. No minimum-volume lock-ins, month-to-month options, and a named senior account manager on every program.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">2. Concentrix</h3>
                <p><strong>Best for:</strong> Enterprise-scale CX with strong digital delivery.</p>
                <p>The largest pure-play CX provider — a like-for-like peer at the top of the market. See our <Link href="/blog/concentrix-alternatives" className="text-red hover:text-red-dark font-semibold">Concentrix alternatives guide</Link>.</p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">3. TTEC</h3>
                <p><strong>Best for:</strong> Digital-first CX in high-trust verticals.</p>
                <p>Strong CX consulting + delivery for healthcare, financial services, and government. See our <Link href="/blog/ttec-alternatives" className="text-red hover:text-red-dark font-semibold">TTEC alternatives guide</Link>.</p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">4. Foundever</h3>
                <p><strong>Best for:</strong> Global multilingual support with a strong nearshore footprint.</p>
                <p>Formerly Sitel Group — 170,000+ agents, 45 languages, strong EU and LATAM delivery.</p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">5. Helpware</h3>
                <p><strong>Best for:</strong> DTC, SaaS, and marketplace brands wanting flexible contracts.</p>
                <p>Nimble CX outsourcer with modern CCaaS integrations and nearshore + offshore delivery.</p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">6. Working Solutions</h3>
                <p><strong>Best for:</strong> 100% US work-from-home with elite agent talent.</p>
                <p>Curated, degree-holding US WFH agents at premium rates — strong for high-ticket sales and complex support.</p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">7. TaskUs</h3>
                <p><strong>Best for:</strong> High-growth digital brands, trust &amp; safety, and content moderation.</p>
                <p>Fast-scaling tech and marketplace specialist with strong digital CX and content moderation practices.</p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/agents-working.jpg" alt="BPO outsourcing team" width={800} height={450} className="w-full object-cover" />
                </div>

                <InlineLeadCTA
                  eyebrow="Quote checkpoint"
                  ctaLocation="alorica_alternatives_mid_article_cta"
                  leadOffer="Alorica alternative quote"
                  heading="Compare vendors with a migration quote in hand."
                  body="Get a line-item quote for onshore agents, flexible terms, and a 60-90 day transition path before you shortlist alternatives."
                  primaryLabel="Request Migration Pricing"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="Review CX outsourcing"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">How to Pick the Right Alorica Alternative</h2>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>Where do you need agents?</strong> Onshore US → Contact Center USA, Working Solutions. Nearshore → Foundever. Offshore → Helpware, TaskUs.</li>
                  <li><strong>How big is your program?</strong> 5–150 FTEs → Contact Center USA, Helpware. 100–500 → TTEC. 500+ → Concentrix, Foundever.</li>
                  <li><strong>What&apos;s your vertical?</strong> Healthcare/financial → TTEC. E-commerce/SaaS → Helpware, Contact Center USA. Multilingual → Foundever.</li>
                </ol>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Why Contact Center USA vs Alorica</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>Delivery location:</strong> 100% US-based, onshore-only agents (Alorica: blended nearshore/offshore).</li>
                  <li><strong>Minimum commit:</strong> No FTE floor (Alorica: enterprise minimums).</li>
                  <li><strong>Contract length:</strong> Month-to-month available.</li>
                  <li><strong>Account management:</strong> Named senior AM on every account.</li>
                  <li><strong>Industries:</strong> 25+ years across <Link href="/industries/healthcare-call-center-services" className="text-red hover:text-red-dark font-semibold">healthcare</Link>, <Link href="/industries/insurance-call-center-outsourcing" className="text-red hover:text-red-dark font-semibold">insurance</Link>, e-commerce, and SaaS.</li>
                </ul>
                <p>
                  Building a shortlist? Our <Link href="/blog/call-center-rfp-template" className="text-red hover:text-red-dark font-semibold">free RFP template</Link> and <Link href="/blog/american-call-centers" className="text-red hover:text-red-dark font-semibold">best US-based call centers</Link> list make the comparison apples-to-apples.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Who is Alorica&apos;s biggest competitor?</h3>
                <p>Concentrix, Teleperformance, TTEC, and Foundever. For onshore-only US programs, Contact Center USA is a closer-fit alternative.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">What is the best US-based alternative to Alorica?</h3>
                <p>Contact Center USA, for 100% onshore agents, no minimums, month-to-month options, and senior account management on every program.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How long does it take to switch from Alorica?</h3>
                <p>A clean switch takes 60–90 days: 30 for selection, 30 for onboarding, 30 of parallel running before cutover.</p>

                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Get an Alorica Alternative Quote in 24 Hours</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Tell us about your current program or upcoming RFP and we&apos;ll send a line-item proposal with 100% US-based delivery, flexible contracts, and a named account lead.
                  </p>
                  <LeadCTALink ctaLocation="alorica_alternatives_bottom_cta" leadOffer="Alorica alternative quote" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors">
                    Compare Us to Alorica <ArrowRight className="h-4 w-4" />
                  </LeadCTALink>
                </div>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="rounded-2xl bg-navy p-6">
                  <HeroContactForm
                    ctaLocation="alorica_alternatives_sidebar_form"
                    leadOffer="Alorica alternative quote"
                    title="Get an Alternative Quote"
                    description="Tell us your current program, volume, and timeline."
                    submitLabel="Compare Options"
                  />
                </div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog/concentrix-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">Concentrix Alternatives</Link></li>
                    <li><Link href="/blog/ttec-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">TTEC Alternatives</Link></li>
                    <li><Link href="/blog/teleperformance-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">Teleperformance Alternatives</Link></li>
                    <li><Link href="/blog/american-call-centers" className="text-sm text-gray-600 hover:text-red transition-colors">Best US-Based Call Centers</Link></li>
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
