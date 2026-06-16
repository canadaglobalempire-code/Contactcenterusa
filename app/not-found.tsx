import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-navy px-5 text-center">
      <div className="mx-auto max-w-xl">
        <p className="text-7xl font-black text-red">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-white/60">
          The page you are looking for does not exist or has been moved. Browse our
          services, solutions, or blog to find what you need.
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
        <div className="mt-12 grid grid-cols-1 gap-3 text-left text-sm text-white/50 sm:grid-cols-2">
          <Link href="/services" className="transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/solutions" className="transition-colors hover:text-white">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-white">
            Industries
          </Link>
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About Us
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
