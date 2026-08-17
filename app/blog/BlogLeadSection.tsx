import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";

/**
 * Conversion block appended to every /blog page by app/blog/layout.tsx.
 *
 * Why this exists: blog is ~79% of the site's organic clicks, but before this
 * none of the 88 blog pages carried a lead form — the only capture points on
 * the whole site were the homepage and /contact, and /contact gets no organic
 * traffic of its own. Readers had to notice a text CTA and make an extra hop
 * to convert. Putting the form on the page they already landed on removes that
 * hop for every post at once.
 */
export function BlogLeadSection() {
  return (
    <section className="border-t border-gray-100 bg-gray-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <span className="inline-block rounded-full bg-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red">
              Get a Quote
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy lg:text-4xl">
              Talk to a US-based call center team
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-gray-700">
              Tell us what you need covered and we&apos;ll put together a
              staffing and pricing plan for your volume — no obligation, and a
              real person replies within 1 working day.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "100% US-based agents — no offshore routing",
                "24/7, after-hours, overflow, and seasonal coverage",
                "Scale from 5 to 100+ agents without hiring",
                "Flexible per-hour, per-call, and per-booked-job pricing",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                  <span className="text-[15px] text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-gray-600">
              Prefer to browse first? See our{" "}
              <Link
                href="/services"
                className="font-semibold text-red hover:underline"
              >
                call center services
              </Link>
              ,{" "}
              <Link
                href="/industries"
                className="font-semibold text-red hover:underline"
              >
                industries we serve
              </Link>
              , or{" "}
              <Link
                href="/locations"
                className="font-semibold text-red hover:underline"
              >
                US locations
              </Link>
              .
            </p>
          </div>

          <div className="lg:col-span-2">
            <LeadForm
              title="Get a Free Quote"
              description="We'll respond within 1 working day."
              subject="Blog Inquiry — ContactCenterUSA.com"
              ctaLocation="blog_article_form"
              leadOffer="Call center quote from blog"
              formName="blog_article_form"
              submitLabel="Get My Free Quote"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
