import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo-config";

const title = "Privacy Policy | Contact Center USA";
const description =
  "How Contact Center USA collects, uses, and protects the information you share through contactcenterusa.com, including quote forms, cookies, and analytics.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  ...pageMeta(title, description, "/privacy-policy"),
};

// Read by the sitemap for <lastmod>; bump when the policy text changes.
const page = { dateModified: "2026-10-02", updatedLabel: "October 2, 2026" };

const sections: { heading: string; paragraphs: string[]; bullets?: string[] }[] = [
  {
    heading: "Information we collect",
    paragraphs: [
      "When you request a quote or send an inquiry through a form on this website, we collect the information you choose to submit. Depending on the form, that can include:",
    ],
    bullets: [
      "Your name, company name, company email, phone number, and company website",
      "Details about your needs, such as solution type, service type, agent requirements, expected call volume, and operating schedule",
      "Any additional comments you add to the form",
      "Basic context about the submission, such as the page you submitted it from, the link or button that brought you to the form, and the time of submission",
    ],
  },
  {
    heading: "Information collected automatically",
    paragraphs: [
      "Like most websites, contactcenterusa.com automatically receives technical information when you visit, such as your IP address, browser type, device information, pages visited, referring pages, and how you interact with the site. This information is collected through our hosting infrastructure and the analytics tools described below.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Respond to your inquiry and prepare a call center proposal that fits your requirements",
      "Follow up with you about the request you submitted",
      "Operate, secure, and improve the website and understand which content is useful",
      "Measure how visitors find us and which pages lead to inquiries",
      "Prevent spam, fraud, and automated abuse of our forms",
      "Comply with legal obligations",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This website uses cookies and similar technologies from two analytics providers: Google Analytics and Microsoft Clarity. These tools help us understand traffic sources, page engagement, the paths visitors take to our contact form, and technical issues on the site. Microsoft Clarity can record how visitors scroll and click on pages so we can find and fix usability problems.",
      "You can block or delete cookies through your browser settings, and both Google and Microsoft offer their own opt-out options. Blocking cookies will not stop you from reading the site or submitting a form.",
    ],
  },
  {
    heading: "How information is shared",
    paragraphs: [
      "We do not sell your personal information. We share information only in these limited cases:",
    ],
    bullets: [
      "Service providers: form submissions are processed by a third-party form service, and analytics data is processed by Google and Microsoft. These providers handle data on our behalf to operate the website.",
      "Legal requirements: we may disclose information if required by law, regulation, legal process, or a governmental request.",
      "Business transfers: if our business is reorganized or transferred, information may be transferred as part of that transaction.",
    ],
  },
  {
    heading: "Contact through our form",
    paragraphs: [
      "We intentionally do not publish phone numbers or email addresses on this website. Routing inquiries through our protected contact form keeps spam calls and spam email down and makes sure your request reaches the right team. Our forms use validation and anti-spam checks to filter out automated submissions.",
    ],
  },
  {
    heading: "Data security and retention",
    paragraphs: [
      "We use reasonable administrative, technical, and physical safeguards to protect the information you submit. No method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.",
      "We keep submitted information only as long as needed for business, legal, security, and operational purposes. How long that is depends on the nature of your inquiry and whether we go on to work together.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can ask us to review, update, or delete the information you submitted through this website, subject to legal and operational limits. You can also ask us to stop following up with you about an inquiry at any time.",
    ],
  },
  {
    heading: "Children's privacy",
    paragraphs: [
      "This website is intended for businesses and is not directed to children under 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "This website may link to websites or services that we do not operate. We are not responsible for the content or privacy practices of those sites, and we encourage you to review their privacy policies.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The updated policy will be posted on this page with a revised \"Last updated\" date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            How Contact Center USA collects, uses, and protects information shared through
            contactcenterusa.com. Last updated {page.updatedLabel}.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <article className="max-w-3xl text-lg leading-relaxed text-gray-700">
            <p>
              Contact Center USA (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              operates contactcenterusa.com. This Privacy Policy explains what information we
              collect when you visit the website or submit a form, how we use it, and the choices
              you have.
            </p>

            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Contact us</h2>
            <p className="mt-4">
              Questions about this policy or a privacy request? Reach us through the form on
              our{" "}
              <Link href="/contact" className="font-semibold text-red hover:underline">
                contact page
              </Link>{" "}
              and include &ldquo;Privacy request&rdquo; in the comments field. You can also read
              our{" "}
              <Link href="/terms" className="font-semibold text-red hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
