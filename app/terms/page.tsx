import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo-config";

const title = "Terms of Service | Contact Center USA";
const description =
  "Terms for using the Contact Center USA website, including its content, guides, calculators, and quote request forms at contactcenterusa.com.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  ...pageMeta(title, description, "/terms"),
};

// Read by the sitemap for <lastmod>; bump when the terms text changes.
const page = { dateModified: "2026-10-02", updatedLabel: "October 2, 2026" };

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Use of this website",
    paragraphs: [
      "This website provides general information about call center outsourcing, contact center services, industries we support, and related topics. By using the website, you agree to these terms.",
      "You may use the website for lawful business research and inquiry purposes. You may not interfere with the website, attempt unauthorized access, submit malicious content, or use our forms for spam, scraping, or automated abuse.",
    ],
  },
  {
    heading: "Website content is informational",
    paragraphs: [
      "Articles, guides, calculators, benchmarks, comparisons, and case studies on this website are provided for informational purposes only. They do not create a service agreement, service-level commitment, or guarantee of any outcome.",
      "Any proposal, timeline, or recommendation depends on your specific requirements and is governed only by the terms of a separate written agreement between you and Contact Center USA.",
    ],
  },
  {
    heading: "Form submissions",
    paragraphs: [
      "By submitting a form, you confirm that the information you provide is accurate and that you are authorized to share it for business follow-up. Submitting a form allows us to contact you about your request.",
      "We intentionally do not publish phone numbers or email addresses on this website to reduce spam. The form on our contact page is the way to reach us. How we handle the information you submit is described in our Privacy Policy.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The website, brand name, logo, copy, page structure, calculators, graphics, and other materials are owned by or licensed to Contact Center USA unless otherwise stated.",
      "You may not copy, republish, resell, or create derivative commercial materials from the website without our written permission. Brief quotations with attribution and a link back to the original page are permitted.",
    ],
  },
  {
    heading: "Third-party services and links",
    paragraphs: [
      "The website uses third-party services for hosting, analytics, and form processing. Those services operate under their own terms and privacy practices.",
      "The website may link to third-party websites. We do not control and are not responsible for their content, policies, or practices.",
    ],
  },
  {
    heading: "Disclaimer of warranties",
    paragraphs: [
      "The website and its content are provided \"as is\" and \"as available\" without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components, or that its content is complete or current.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Contact Center USA is not liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the website or reliance on its content.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The updated terms will be posted on this page with a revised \"Last updated\" date. Continued use of the website after changes are posted means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-36 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
            Legal
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[44px]">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            These terms govern your use of the Contact Center USA website at
            contactcenterusa.com. Last updated {page.updatedLabel}.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <article className="max-w-3xl text-lg leading-relaxed text-gray-700">
            {sections.map((section, index) => (
              <section key={section.heading}>
                <h2
                  className={`${index === 0 ? "" : "mt-12 "}text-2xl font-bold text-navy sm:text-3xl`}
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Questions</h2>
            <p className="mt-4">
              Questions about these terms? Reach us through the form on our{" "}
              <Link href="/contact" className="font-semibold text-red hover:underline">
                contact page
              </Link>
              . For how we handle your information, see our{" "}
              <Link href="/privacy-policy" className="font-semibold text-red hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
