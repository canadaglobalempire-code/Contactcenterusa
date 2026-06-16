"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";

const team = [
  {
    name: "Michael Torres",
    title: "Founder & CEO",
    bio: "20+ years in contact center operations and business process outsourcing.",
    image: "/images/about-us.jpg",
  },
  {
    name: "Sarah Williams",
    title: "Director of Operations",
    bio: "Expert in workforce management and operational excellence.",
    image: "/images/agent-smiling.jpg",
  },
  {
    name: "James Park",
    title: "Head of Client Success",
    bio: "Dedicated to ensuring every client achieves their support goals.",
    image: "/images/agent-focused.jpg",
  },
  {
    name: "Lisa Chen",
    title: "Training & Quality Manager",
    bio: "Passionate about agent development and quality assurance.",
    image: "/images/agent-female-office.jpg",
  },
];

export function TeamPreview() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="bg-bg-alt py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
        <SectionHeader
          label="OUR LEADERSHIP"
          title="Real People. Real Expertise."
          subtitle="A senior team with decades of combined contact center experience."
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-sm text-white transition-transform duration-500 group-hover:translate-y-0">
                    {member.bio}
                  </div>
                </div>
              </div>

              <div className="p-5 text-center">
                <div className="text-navy font-bold">{member.name}</div>
                <div className="text-text-muted text-sm">{member.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center max-w-3xl mx-auto ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-text-muted text-lg leading-relaxed">
            Founded with a simple mission: deliver enterprise-quality call center
            services with the personal attention and flexibility that growing
            businesses deserve. Based in the United States, our team brings decades
            of combined experience in contact center operations, technology, and
            customer experience management.
          </p>

          <Link
            href="/about"
            className="mt-6 text-blue font-semibold hover:underline inline-flex items-center gap-2"
          >
            Learn More About Us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
