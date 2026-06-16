import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Contact Center USA",
  description: "Your call center outsourcing quote request has been received.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-navy py-32 text-center lg:py-40">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Thank You
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Your quote request has been received. A member of our team will
              reach out within one business day to discuss your call center
              needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-dark"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
