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
              TTEC Alternatives: 7 Better Options for Mid-Market (2026)
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> June 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 11 min read</span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/cc-team-huddle.jpg" alt="TTEC alternatives comparison" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
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
                  <strong>TTEC</strong> is one of the most respected names in CX — especially its Digital division, which bundles consulting, platform work (Genesys, Microsoft, AWS), and delivery. That&apos;s a powerful combination for a large CX transformation. But it&apos;s also premium-priced and enterprise-shaped, which is exactly why many mid-market brands look for an alternative that just delivers great US-based agents without the consulting overhead.
                </p>
                <p>
                  Here are the 7 best TTEC alternatives in 2026 — what each does well, and how to choose.
                </p>

                <InlineLeadCTA
                  ctaLocation="ttec_alternatives_top_inline_cta"
                  leadOffer="TTEC alternative quote"
                  heading="Need a US-based TTEC alternative quote?"
                  body="Tell us your program size, channels, and contract goals. We'll compare a flexible US-based model against premium enterprise terms."
                  primaryLabel="Get an Alternative Quote"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="See customer service"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Why Buyers Look Beyond TTEC</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>Premium pricing.</strong> TTEC&apos;s bundled digital + consulting model commands higher rates than delivery-only peers.</li>
                  <li><strong>Consulting-led sales cycles.</strong> Great for transformation, heavy if you just need agents on the phones next month.</li>
                  <li><strong>Enterprise minimums.</strong> Mid-market programs can be under-served versus TTEC&apos;s largest accounts.</li>
                  <li><strong>Delivery mix.</strong> US brands wanting onshore-only delivery have to specify it against a global/nearshore footprint.</li>
                  <li><strong>Onboarding speed.</strong> Enterprise process can mean longer ramp than a nimble US partner.</li>
                </ul>
                <p>
                  TTEC is excellent for high-trust, transformation-heavy CX. But if those points resonate, one of these alternatives is probably a better fit.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The 7 Best TTEC Alternatives in 2026</h2>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">1. Contact Center USA</h3>
                <p><strong>Best for:</strong> US brands wanting onshore delivery and flexible terms — without a consulting engagement.</p>
                <p>
                  Contact Center USA delivers 100% US-based agents, 24/7 coverage, and full <Link href="/services/omnichannel-contact-center-solutions" className="text-red hover:text-red-dark font-semibold">omnichannel service</Link> with no minimum-volume lock-ins and month-to-month options. Ideal for 5–150 FTE programs across <Link href="/industries/healthcare-call-center-services" className="text-red hover:text-red-dark font-semibold">healthcare</Link>, <Link href="/industries/financial-services-call-center" className="text-red hover:text-red-dark font-semibold">financial services</Link>, e-commerce, and SaaS.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">2. Concentrix</h3>
                <p><strong>Best for:</strong> Enterprise-scale CX with strong digital and platform delivery.</p>
                <p>
                  The largest pure-play CX provider, with deep platform and analytics capabilities. A like-for-like TTEC peer at the top of the market. See our <Link href="/blog/concentrix-alternatives" className="text-red hover:text-red-dark font-semibold">Concentrix alternatives guide</Link>.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">3. Alorica</h3>
                <p><strong>Best for:</strong> Mid-to-large US brands wanting a nearshore + onshore blend.</p>
                <p>
                  US-headquartered with strong nearshore delivery and 100,000+ agents. More flexible on mid-market programs than TTEC. See our <Link href="/blog/alorica-alternatives" className="text-red hover:text-red-dark font-semibold">Alorica alternatives guide</Link>.
                </p>

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
                  ctaLocation="ttec_alternatives_mid_article_cta"
                  leadOffer="TTEC alternative quote"
                  heading="Compare vendors with a migration quote in hand."
                  body="Get a line-item quote for onshore agents, flexible terms, and a 60-90 day transition path before you shortlist alternatives."
                  primaryLabel="Request Migration Pricing"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="Review CX outsourcing"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">How to Pick the Right TTEC Alternative</h2>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>Do you need consulting, or just delivery?</strong> Transformation → TTEC, Concentrix. Reliable agents on flexible terms → Contact Center USA, Helpware.</li>
                  <li><strong>Where do you need agents?</strong> Onshore US → Contact Center USA, Working Solutions. Nearshore → Alorica, Foundever.</li>
                  <li><strong>How big is your program?</strong> 5–150 FTEs → Contact Center USA, Helpware. 100–500 → Alorica. 500+ → Concentrix, Foundever.</li>
                </ol>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Why Contact Center USA vs TTEC</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>Delivery location:</strong> 100% US-based agents (TTEC: global mix).</li>
                  <li><strong>Engagement model:</strong> Delivery-first, no required consulting engagement.</li>
                  <li><strong>Minimum commit:</strong> No FTE floor (TTEC: enterprise minimums).</li>
                  <li><strong>Contract length:</strong> Month-to-month available.</li>
                  <li><strong>Pricing:</strong> Transparent US rates, typically below TTEC&apos;s premium positioning.</li>
                </ul>
                <p>
                  Comparing the enterprise giants directly? See our <Link href="/blog/teleperformance-vs-ttec" className="text-red hover:text-red-dark font-semibold">Teleperformance vs TTEC breakdown</Link> and the <Link href="/blog/top-10-bpo-companies-in-usa" className="text-red hover:text-red-dark font-semibold">top 10 BPO companies in the USA</Link>.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Who is TTEC&apos;s biggest competitor?</h3>
                <p>Concentrix and Teleperformance on delivery; consulting-led CX firms on strategy. For US-based flexible programs, Contact Center USA is a closer-fit alternative.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Is TTEC more expensive than other outsourcers?</h3>
                <p>Generally yes — its bundled digital and consulting model commands premium rates. For straightforward programs, most alternatives here are more cost-efficient.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">What is the best US-based alternative to TTEC?</h3>
                <p>Contact Center USA, for 100% onshore agents, no minimums, and a named senior account manager without a consulting engagement attached.</p>

                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Get a TTEC Alternative Quote in 24 Hours</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Tell us about your current program or upcoming RFP and we&apos;ll send a line-item proposal with US-based delivery, flexible contracts, and a named account lead.
                  </p>
                  <LeadCTALink ctaLocation="ttec_alternatives_bottom_cta" leadOffer="TTEC alternative quote" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors">
                    Compare Us to TTEC <ArrowRight className="h-4 w-4" />
                  </LeadCTALink>
                </div>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="rounded-2xl bg-navy p-6">
                  <HeroContactForm
                    ctaLocation="ttec_alternatives_sidebar_form"
                    leadOffer="TTEC alternative quote"
                    title="Get an Alternative Quote"
                    description="Tell us your current program, volume, and timeline."
                    submitLabel="Compare Options"
                  />
                </div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog/teleperformance-vs-ttec" className="text-sm text-gray-600 hover:text-red transition-colors">Teleperformance vs TTEC</Link></li>
                    <li><Link href="/blog/concentrix-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">Concentrix Alternatives</Link></li>
                    <li><Link href="/blog/teleperformance-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">Teleperformance Alternatives</Link></li>
                    <li><Link href="/blog/top-10-bpo-companies-in-usa" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 BPO Companies in USA</Link></li>
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
