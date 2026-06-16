import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  Lock,
  Headphones,
  Zap,
  Globe,
  Award,
  DollarSign,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    desc: "Moral principles and ethics guide every personal and business interaction we have.",
  },
  {
    icon: Shield,
    title: "Trust",
    desc: "We believe in truthfulness and always exceeding the results we promise to our clients.",
  },
  {
    icon: Lock,
    title: "Security",
    desc: "Client confidentiality and safe data protection are at the core of everything we do.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    desc: "A daily commitment to providing improved service to every customer, every time.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Continuously evolving our technology and processes to stay ahead of industry demands.",
  },
  {
    icon: Globe,
    title: "Adaptability",
    desc: "Flexible solutions that adjust to seasonal demand and business fluctuations seamlessly.",
  },
  {
    icon: Award,
    title: "Experience",
    desc: "25+ years serving some of the largest and most complex organizations worldwide.",
  },
  {
    icon: DollarSign,
    title: "Cost Effectiveness",
    desc: "Competitive pricing without compromising on quality, training, or US-based talent.",
  },
];

const advantages = [
  "100% US-based, native English-speaking agents",
  "Rigorous 4-week training programs",
  "Cultural alignment with your customers",
  "Dedicated account management teams",
  "Real-time quality monitoring & coaching",
  "Seamless brand representation",
];

const infraCapabilities = [
  "N+1 redundancy across all critical systems",
  "Fiber optic connectivity with multiple ISP failover",
  "Dual geographically separated data centers",
  "PCI-DSS and SOC 2 Type II certified environments",
  "Enterprise-grade VoIP with 99.999% uptime SLA",
  "Real-time call recording, analytics & reporting",
  "Omnichannel platform: voice, chat, email, SMS, social",
  "CRM integrations with Salesforce, HubSpot, Zendesk & more",
];

const stats = [
  { value: "1999", label: "Founded", suffix: "" },
  { value: "500", label: "Employees", suffix: "+" },
  { value: "30", label: "Years of Experience", suffix: "+" },
  { value: "24/7", label: "Availability", suffix: "/365" },
  { value: "98", label: "CSAT Score", suffix: "%" },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
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
              Why Contact Center USA
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              What Makes Us{" "}
              <span className="text-red">Different</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              We combine US-based talent, enterprise-grade infrastructure, and
              over three decades of experience to deliver customer service that
              truly makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Split Section: Video + Content */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-red/[0.02] to-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left - Video */}
            <div
              className="relative"
            >
              <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:min-h-[500px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                  poster="/images/hd-agents-working.jpg"
                >
                  <source src="/images/video-3.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl"
              >
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </div>

            {/* Right - Content */}
            <div
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Our Difference
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                It&apos;s All About the{" "}
                <span className="text-red">People</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Our agents are located right here in the United States. They are
                not only trained to become experts in your customers&apos; needs
                and your brand, but they already have an understanding of your
                customers&apos; cultures and communication styles.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Every agent undergoes a rigorous training program before taking
                a single call. We invest in our people because we know that
                agent quality directly drives customer satisfaction and your
                bottom line.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {advantages.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
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
              Our Values
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Built on a Foundation of{" "}
              <span className="text-red">Values</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              These principles define who we are and how we serve every client,
              every day.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red/20 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-sm font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Infrastructure
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Enterprise-Grade{" "}
                <span className="text-red">Technology</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Our technology infrastructure is built for reliability,
                security, and scale. We invest heavily in redundant systems
                to ensure your customers are always connected.
              </p>
              <div className="mt-8 space-y-3">
                {infraCapabilities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative"
            >
              <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:min-h-[500px]">
                <Image
                  src="/images/hd-office-team.jpg"
                  alt="Contact Center USA office with enterprise-grade technology and call center infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl font-bold text-navy sm:text-5xl">
                  {stat.value}
                  <span className="text-red">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-sm font-medium text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/new-flag.jpg"
            alt="American flag background representing 100% US-based contact center outsourcing services"
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
              Contact us today for a free consultation and discover why
              companies trust Contact Center USA with their most valuable
              asset — their customers.
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
