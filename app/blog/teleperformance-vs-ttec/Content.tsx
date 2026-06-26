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
              HEAD-TO-HEAD COMPARISON
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Teleperformance vs TTEC: The 2026 Head-to-Head Comparison
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> June 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min read</span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/cc-team-huddle.jpg" alt="Teleperformance vs TTEC comparison" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
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
                  <strong>Teleperformance and TTEC</strong> are both top-tier CX outsourcers, but they win for very different buyers. Teleperformance is the world&apos;s largest BPO — built for massive, global, multilingual programs. TTEC is smaller and premium, built around digital CX transformation and consulting. Here&apos;s the honest, side-by-side breakdown for 2026.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Quick Verdict</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>Choose Teleperformance</strong> if you need 500+ FTEs, global multilingual coverage, and the lowest offshore unit cost at scale.</li>
                  <li><strong>Choose TTEC</strong> if you need digital-first CX, consulting + delivery bundled, and depth in healthcare, financial services, or government.</li>
                  <li><strong>Choose a US-based alternative</strong> (like <Link href="/blog/teleperformance-alternatives" className="text-red hover:text-red-dark font-semibold">Contact Center USA</Link>) if you want 100% onshore agents, no minimums, and flexible contracts for a 5–150 FTE program.</li>
                </ul>

                <InlineLeadCTA
                  ctaLocation="teleperformance_vs_ttec_top_inline_cta"
                  leadOffer="BPO comparison quote"
                  heading="Want a third quote to compare against Teleperformance and TTEC?"
                  body="Share your program size, channels, and contract goals. We'll send a US-based, flexible-terms quote you can put side-by-side with the enterprise bids."
                  primaryLabel="Get a Comparison Quote"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="See customer service"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Teleperformance vs TTEC at a Glance</h2>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="py-3 pr-4 font-bold text-navy">Dimension</th>
                        <th className="py-3 pr-4 font-bold text-navy">Teleperformance</th>
                        <th className="py-3 font-bold text-navy">TTEC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="py-3 pr-4 font-semibold">Scale</td><td className="py-3 pr-4">500,000+ employees, 90+ countries</td><td className="py-3">~60,000 employees</td></tr>
                      <tr><td className="py-3 pr-4 font-semibold">Best for</td><td className="py-3 pr-4">Global, multilingual, high-volume</td><td className="py-3">Digital CX transformation</td></tr>
                      <tr><td className="py-3 pr-4 font-semibold">Delivery</td><td className="py-3 pr-4">Global, offshore-heavy</td><td className="py-3">Global mix + US onshore</td></tr>
                      <tr><td className="py-3 pr-4 font-semibold">Pricing</td><td className="py-3 pr-4">Lowest at offshore scale</td><td className="py-3">Premium (bundled consulting)</td></tr>
                      <tr><td className="py-3 pr-4 font-semibold">Strength</td><td className="py-3 pr-4">Raw scale + languages</td><td className="py-3">Strategy + platform (Genesys, MS)</td></tr>
                      <tr><td className="py-3 pr-4 font-semibold">Verticals</td><td className="py-3 pr-4">Broad, all industries</td><td className="py-3">Healthcare, financial, government</td></tr>
                      <tr><td className="py-3 pr-4 font-semibold">Mid-market fit</td><td className="py-3 pr-4">Limited</td><td className="py-3">Limited</td></tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Scale and Delivery</h2>
                <p>
                  Teleperformance is roughly eight times TTEC&apos;s headcount. If your program needs thousands of agents across many languages and time zones, Teleperformance&apos;s footprint is unmatched. TTEC delivers globally too, but its center of gravity is digital CX and a stronger US onshore presence. For buyers who specifically want onshore-only US delivery, neither is purpose-built — that&apos;s where a US-based specialist comes in.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Pricing</h2>
                <p>
                  Teleperformance wins on unit cost for large offshore programs. TTEC&apos;s pricing is premium because you&apos;re paying for consulting, platform expertise, and transformation capability bundled with delivery. If you just need reliable agents on the phones, you&apos;re likely overpaying with TTEC and over-scaled with Teleperformance.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Technology and CX Strategy</h2>
                <p>
                  TTEC Digital is one of the strongest CX-tech consultancies in the market, with deep Genesys, Microsoft, and AWS partnerships — ideal if you&apos;re re-platforming your contact center. Teleperformance invests heavily in its own AI and automation stack (TP Interact / TAP) but sells it as part of large managed programs. For a mid-market buyer, both can be more platform than you need.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Best for Outsourced B2B Sales</h2>
                <p>
                  For outsourced B2B sales and pipeline, TTEC&apos;s consulting depth helps on complex, high-trust sales motions, while Teleperformance brings scale for high-volume outbound. But US-based brands selling to US buyers often convert better with onshore SDRs and tighter feedback loops — see our <Link href="/blog/top-10-outsourced-sdr-companies-usa" className="text-red hover:text-red-dark font-semibold">top outsourced SDR companies</Link> and <Link href="/services/b2b-sales-outsourcing" className="text-red hover:text-red-dark font-semibold">B2B sales outsourcing</Link> options.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/agents-working.jpg" alt="BPO outsourcing team" width={800} height={450} className="w-full object-cover" />
                </div>

                <InlineLeadCTA
                  eyebrow="Quote checkpoint"
                  ctaLocation="teleperformance_vs_ttec_mid_article_cta"
                  leadOffer="BPO comparison quote"
                  heading="Put a US-based bid next to your enterprise quotes."
                  body="Get a line-item quote for onshore agents and flexible terms so you can compare apples-to-apples with Teleperformance and TTEC."
                  primaryLabel="Request a Comparison Quote"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="Review CX outsourcing"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Where Contact Center USA Fits</h2>
                <p>
                  If your program is under ~150 FTEs and you want 100% US-based agents, a named senior account manager, and month-to-month flexibility, you don&apos;t need an enterprise BPO. Contact Center USA delivers onshore CX across <Link href="/industries/healthcare-call-center-services" className="text-red hover:text-red-dark font-semibold">healthcare</Link>, <Link href="/industries/financial-services-call-center" className="text-red hover:text-red-dark font-semibold">financial services</Link>, <Link href="/industries/ecommerce-customer-service-outsourcing" className="text-red hover:text-red-dark font-semibold">e-commerce</Link>, and <Link href="/industries/saas-technology-support" className="text-red hover:text-red-dark font-semibold">SaaS</Link> — often at 15–25% below US enterprise delivery pricing. Compare the full field in our <Link href="/blog/teleperformance-alternatives" className="text-red hover:text-red-dark font-semibold">Teleperformance alternatives</Link> and <Link href="/blog/ttec-alternatives" className="text-red hover:text-red-dark font-semibold">TTEC alternatives</Link> guides.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Teleperformance vs TTEC — which is better?</h3>
                <p>Teleperformance for global multilingual scale; TTEC for digital CX transformation in high-trust verticals. For US-based mid-market programs, a focused alternative like Contact Center USA often fits better than either.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Is Teleperformance bigger than TTEC?</h3>
                <p>Yes — Teleperformance has 500,000+ employees versus roughly 60,000 at TTEC.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Which is more expensive?</h3>
                <p>TTEC generally carries premium pricing from its bundled consulting model; Teleperformance is cheaper at offshore scale.</p>

                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Get a US-Based Quote to Compare</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Tell us about your program or RFP and we&apos;ll send a line-item proposal with US-based delivery, flexible contracts, and a named account lead — ready to put next to your Teleperformance and TTEC bids.
                  </p>
                  <LeadCTALink ctaLocation="teleperformance_vs_ttec_bottom_cta" leadOffer="BPO comparison quote" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors">
                    Get a Comparison Quote <ArrowRight className="h-4 w-4" />
                  </LeadCTALink>
                </div>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="rounded-2xl bg-navy p-6">
                  <HeroContactForm
                    ctaLocation="teleperformance_vs_ttec_sidebar_form"
                    leadOffer="BPO comparison quote"
                    title="Get a Comparison Quote"
                    description="Tell us your current program, volume, and timeline."
                    submitLabel="Compare Options"
                  />
                </div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog/teleperformance-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">Teleperformance Alternatives</Link></li>
                    <li><Link href="/blog/ttec-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">TTEC Alternatives</Link></li>
                    <li><Link href="/blog/concentrix-alternatives" className="text-sm text-gray-600 hover:text-red transition-colors">Concentrix Alternatives</Link></li>
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
