import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Shield, Users } from "lucide-react";
import { SITE_BASE_URL } from "@/lib/ai-context";
import { generateBreadcrumbSchema, generateCollectionPageSchema } from "@/lib/schema";

const title = "BPO Companies by State & City | Contact Center USA";
const description =
  "Find US-based BPO and call center outsourcing by state and city — Arizona, Georgia, Ohio, Tennessee, Texas, Florida, and every major US metro.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/locations" },
  openGraph: {
    title,
    description,
    url: "/locations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const cities = [
  { city: "New York", state: "New York", href: "/call-center-services-new-york", focus: "financial services, media, healthcare" },
  { city: "Los Angeles", state: "California", href: "/call-center-services-los-angeles", focus: "entertainment, ecommerce, technology" },
  { city: "Chicago", state: "Illinois", href: "/call-center-services-chicago", focus: "logistics, insurance, manufacturing" },
  { city: "Houston", state: "Texas", href: "/call-center-services-houston", focus: "energy, healthcare, B2B services" },
  { city: "Phoenix", state: "Arizona", href: "/call-center-services-phoenix", focus: "healthcare, SaaS, home services" },
  { city: "Philadelphia", state: "Pennsylvania", href: "/call-center-services-philadelphia", focus: "healthcare, education, financial services" },
  { city: "San Antonio", state: "Texas", href: "/call-center-services-san-antonio", focus: "bilingual support, healthcare, government" },
  { city: "San Diego", state: "California", href: "/call-center-services-san-diego", focus: "biotech, SaaS, healthcare" },
  { city: "Dallas", state: "Texas", href: "/call-center-services-dallas", focus: "insurance, finance, B2B growth" },
  { city: "Austin", state: "Texas", href: "/call-center-services-austin", focus: "SaaS, startups, technical support" },
  { city: "Jacksonville", state: "Florida", href: "/call-center-services-jacksonville", focus: "insurance, logistics, healthcare" },
  { city: "Columbus", state: "Ohio", href: "/call-center-services-columbus", focus: "insurance, retail, financial services" },
  { city: "Charlotte", state: "North Carolina", href: "/call-center-services-charlotte", focus: "banking, fintech, healthcare" },
  { city: "San Francisco", state: "California", href: "/call-center-services-san-francisco", focus: "SaaS, AI, technology support" },
  { city: "Seattle", state: "Washington", href: "/call-center-services-seattle", focus: "ecommerce, cloud, aerospace" },
];

const states = [
  { state: "Arizona", href: "/locations/arizona", focus: "Phoenix contact center corridor, healthcare, SaaS, bilingual support" },
  { state: "California", href: "/locations/california", focus: "Bay Area SaaS, LA media, San Diego biotech, ecommerce at scale" },
  { state: "Colorado", href: "/locations/colorado", focus: "Denver–Boulder tech, aerospace, outdoor and consumer brands" },
  { state: "Florida", href: "/locations/florida", focus: "Insurance catastrophe claims, Medicare support, hurricane-resilient continuity" },
  { state: "Georgia", href: "/locations/georgia", focus: "Atlanta payments and fintech, Savannah logistics, healthcare" },
  { state: "Illinois", href: "/locations/illinois", focus: "Chicago freight and logistics, insurance, financial services, manufacturing" },
  { state: "Nevada", href: "/locations/nevada", focus: "Las Vegas hospitality and gaming, 24/7 guest support, Reno logistics" },
  { state: "New York", href: "/locations/new-york", focus: "Wall Street financial services, media, healthcare, examinable programs" },
  { state: "North Carolina", href: "/locations/north-carolina", focus: "Charlotte banking, Research Triangle technical support" },
  { state: "Ohio", href: "/locations/ohio", focus: "Insurance claims and policyholder servicing, healthcare, back office" },
  { state: "Pennsylvania", href: "/locations/pennsylvania", focus: "Philadelphia healthcare and education, Pittsburgh tech, insurance" },
  { state: "Tennessee", href: "/locations/tennessee", focus: "Nashville healthcare BPO, Memphis logistics, revenue cycle support" },
  { state: "Texas", href: "/locations/texas", focus: "Dallas finance, Houston energy, Austin SaaS, bilingual multi-metro scale" },
  { state: "Utah", href: "/locations/utah", focus: "Wasatch Front outbound and inside sales, Silicon Slopes SaaS support" },
  { state: "Washington", href: "/locations/washington", focus: "Seattle cloud and ecommerce, developer support, aerospace" },
];

const proofPoints = [
  {
    icon: Users,
    title: "US-Based Agents",
    body: "Domestic teams trained on your brand voice, customer workflows, and escalation standards.",
  },
  {
    icon: Shield,
    title: "Compliance-Aware Programs",
    body: "Support models for regulated industries, including healthcare, insurance, financial services, and outbound campaigns.",
  },
  {
    icon: Building2,
    title: "Industry-Specific Coverage",
    body: "Service plans for ecommerce, SaaS, logistics, real estate, home services, government, education, and more.",
  },
];

const locationCollectionSchema = generateCollectionPageSchema({
  name: title,
  description,
  url: `${SITE_BASE_URL}/locations`,
  items: [
    ...states.map((item) => ({
      name: `BPO Companies in ${item.state}`,
      description: `US-based BPO and call center outsourcing for ${item.state} businesses, covering ${item.focus}.`,
      url: `${SITE_BASE_URL}${item.href}`,
    })),
    ...cities.map((item) => ({
      name: `${item.city} Call Center Services`,
      description: `US-based call center service-area guidance for ${item.city}, ${item.state} businesses focused on ${item.focus}.`,
      url: `${SITE_BASE_URL}${item.href}`,
    })),
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_BASE_URL },
  { name: "Locations", url: `${SITE_BASE_URL}/locations` },
]);

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationCollectionSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <section className="bg-navy pt-40 pb-20">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              <MapPin className="h-4 w-4" />
              Locations We Serve
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              BPO Companies by State &amp; City
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Contact Center USA serves businesses across major US markets with domestic inbound support,
              outbound calling, technical support, lead response, multilingual service, and omnichannel CX teams.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {proofPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red/10 text-red">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{item.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-red">
                State Coverage
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                BPO Companies by State
              </h2>
              <p className="mt-4 text-gray-700">
                State pages cover the industries that concentrate in each market, the metros we
                support, timezone and compliance considerations, and answers to the questions buyers
                ask when comparing BPO providers.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {states.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-gray-100 bg-gray-50 p-5 transition-all hover:border-red/30 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-navy group-hover:text-red">
                      {item.state}
                    </h3>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-red" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{item.focus}.</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-red">
                City Service Areas
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                Explore Call Center Services in Your Market
              </h2>
              <p className="mt-4 text-gray-700">
                Each city page includes local business context, service options, industry fit, FAQs,
                and links to the most relevant service and industry pages.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-gray-100 bg-gray-50 p-5 transition-all hover:border-red/30 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy group-hover:text-red">
                        {item.city}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">{item.state}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-red" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">
                    Focus areas: {item.focus}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
