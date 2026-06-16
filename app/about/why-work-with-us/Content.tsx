import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Shield,
  Lock,
  Headphones,
  Zap,
  RefreshCw,
  Award,
  DollarSign,
  Settings,
  Target,
  Users,
  Globe,
  Clock,
} from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Moral principles and ethics guide every personal and business interaction we have. We hold ourselves to the highest standards of honesty and transparency.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "We believe in truthfulness and always exceeding the results we promise to our clients. Our word is our bond, and we stand behind every commitment.",
  },
  {
    icon: Lock,
    title: "Security",
    description:
      "Client confidentiality and safe data protection are at the core of everything we do. SOC 2, HIPAA, and PCI DSS compliance come standard.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description:
      "A daily commitment to providing improved service to every customer, every time. We measure success by the satisfaction of your customers.",
  },
];

const advantages = [
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously evolve our technology stack with AI, predictive analytics, and automation to keep you ahead of the curve.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description:
      "Flexible solutions that scale with seasonal demand, business fluctuations, and changing market conditions seamlessly.",
  },
  {
    icon: Award,
    title: "Experience",
    description:
      "25+ years of combined leadership experience serving some of the largest and most complex organizations worldwide.",
  },
  {
    icon: DollarSign,
    title: "Cost Effectiveness",
    description:
      "Reduce operational costs by up to 50% compared to in-house operations while maintaining — and often improving — service quality.",
  },
  {
    icon: Settings,
    title: "Customization",
    description:
      "Every program is tailored to your specific needs, brand voice, and business objectives. No cookie-cutter solutions here.",
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description:
      "We do not just answer calls — we align our operations with your business goals to drive measurable outcomes and ROI.",
  },
  {
    icon: Lock,
    title: "Security",
    description:
      "Enterprise-grade security infrastructure with SOC 2, HIPAA, and PCI DSS compliance, encrypted networks, and dual data centers.",
  },
  {
    icon: Users,
    title: "Caring Culture",
    description:
      "We invest in our people because employee satisfaction directly drives customer satisfaction and client results.",
  },
];

const infraItems = [
  "Complete N+1 redundancy across all critical systems",
  "Multiple IPLC and MPL connections for guaranteed uptime",
  "Private virtual networks with end-to-end encryption",
  "Redundant 100 Mbps fiber optic backup lines",
  "Dual redundant data centers with failover capabilities",
  "SOC 2, HIPAA, and PCI DSS certified operations",
];

export default function Content() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-40 pb-20 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <div
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              Why Work With Us
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              What Makes Contact Center USA{" "}
              <span className="text-red">Different</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Built on integrity, trust, security, and an unwavering commitment
              to customer service — here is why leading brands choose us.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative overflow-hidden bg-navy py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 lg:px-8">
          <div
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              Our Foundation
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Core <span className="text-red">Values</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              These principles define who we are and how we serve every client,
              every day.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red/20 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Competitive Advantages
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Why Businesses <span className="text-red">Choose Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Eight key advantages that set Contact Center USA apart from every
              other provider.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Quality — Split */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left — Content */}
            <div
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Our Agents
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                The Highest Quality{" "}
                <span className="text-red">People</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                We are highly selective in our hiring process because we know
                that every agent represents your brand. Our rigorous screening
                ensures only the most capable, empathetic, and professional
                candidates join our team.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Every agent completes an extensive training program that covers
                your products, brand voice, and customer service best practices.
                We do not just train for competence — we train for excellence.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The result? Friendly, knowledgeable, US-based professionals who
                deliver the kind of service that turns first-time callers into
                lifelong customers.
              </p>
            </div>

            {/* Right — Image */}
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/images/cc-agent-blue.jpg"
                alt="Professional US-based contact center agent providing excellent customer service"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-gradient-to-b from-white via-red/[0.015] to-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left — Image */}
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/images/cc-office-wide.jpg"
                alt="Contact Center USA enterprise-grade office infrastructure with redundant systems"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right — Content */}
            <div
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Infrastructure
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Enterprise-Grade <span className="text-red">Technology</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Our technical infrastructure is built for maximum reliability,
                security, and scalability. We invest millions in our systems so
                you never have to worry about downtime or data breaches.
              </p>
              <ul className="mt-8 space-y-4">
                {infraItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multilingual + 24/7 Highlight Cards */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Multilingual */}
            <div
              className="rounded-2xl bg-navy p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/20 text-red">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">
                Multilingual Support
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Serve your diverse customer base with agents fluent in English,
                Spanish, and more. Our multilingual capabilities ensure every
                customer feels heard and understood, regardless of their
                preferred language.
              </p>
            </div>

            {/* 24/7 */}
            <div
              className="rounded-2xl bg-navy p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/20 text-red">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">
                24/7/365 Availability
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Your customers do not operate on a 9-to-5 schedule, and neither
                do we. Our contact centers are staffed around the clock, every
                day of the year — including holidays, weekends, and after-hours
                — so you never miss a call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/new-flag.jpg"
            alt="American flag background showcasing commitment to US-based call center outsourcing"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 py-20 text-center lg:px-8 lg:py-28">
          <div
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              See firsthand why businesses across every industry trust Contact
              Center USA to deliver exceptional customer experiences.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
