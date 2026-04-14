"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  Lock,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { siteConfig } from "@/lib/seo-config";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone number required"),
  callVolume: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Inbound Support",
  "Outbound Sales",
  "24/7 Answering",
  "Technical Support",
  "Bilingual",
  "B2B Appointment Setting",
  "Back Office",
];

const callVolumeOptions = [
  "Under 1,000",
  "1,000 - 5,000",
  "5,000 - 20,000",
  "20,000 - 50,000",
  "50,000+",
];

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    getValue: () => siteConfig.phone,
    href: () => siteConfig.phoneHref,
    large: true,
  },
  {
    icon: Mail,
    label: "Email",
    getValue: () => siteConfig.email,
    href: () => `mailto:${siteConfig.email}`,
    large: false,
  },
  {
    icon: Clock,
    label: "Business Hours",
    getValue: () => siteConfig.hours,
    href: () => null,
    large: false,
  },
  {
    icon: MapPin,
    label: "Location",
    getValue: () => "United States",
    href: () => null,
    large: false,
  },
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
    },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    const current = selectedServices;
    const updated = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    setValue("services", updated);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Handle gracefully if endpoint doesn't exist yet
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-br from-[#0A1628] via-[#1B2A4A] to-[#0F2044] py-24">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center text-center py-16">
            <CheckCircle className="size-16 text-green-400 mb-4" />
            <h2 className="text-3xl font-bold text-white">
              Thank you! We&apos;ll contact you within 1 working day.
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-[#0A1628] via-[#1B2A4A] to-[#0F2044] py-24">
      {/* Wave SVG divider at top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 69.3C1200 69.3 1320 58.7 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#0A1628"
          />
        </svg>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side — Form in white card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            <h2 className="text-navy text-3xl font-bold">
              Get Your Free Quote
            </h2>
            <p className="text-text-muted mt-2 mb-8">
              Fill out the form below and we&apos;ll respond within 2 business
              hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-medium text-navy mb-1.5"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-blue focus:ring-blue/20"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="company"
                    className="text-sm font-medium text-navy mb-1.5"
                  >
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Acme Inc."
                    className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-blue focus:ring-blue/20"
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-navy mb-1.5"
                  >
                    Work Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@acme.com"
                    className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-blue focus:ring-blue/20"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-navy mb-1.5"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-blue focus:ring-blue/20"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Call Volume */}
              <div>
                <Label
                  htmlFor="callVolume"
                  className="text-sm font-medium text-navy mb-1.5"
                >
                  Estimated Monthly Call Volume
                </Label>
                <select
                  id="callVolume"
                  className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
                  {...register("callVolume")}
                >
                  <option value="">Select call volume</option>
                  {callVolumeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services Needed */}
              <div>
                <Label className="text-sm font-medium text-navy mb-1.5">
                  Services Needed
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedServices.includes(service)}
                        onCheckedChange={() => toggleService(service)}
                      />
                      <span className="text-sm text-navy">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-navy mb-1.5"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or requirements..."
                  className="mt-1.5 min-h-24 rounded-xl border-gray-200 focus:border-blue focus:ring-blue/20"
                  {...register("message")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2E75B6] to-[#3B8DD4] text-white w-full py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                {!isSubmitting && <ArrowRight className="size-5" />}
              </button>

              <p className="flex items-center justify-center gap-2 text-sm text-text-muted">
                <Lock className="size-4" />
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>

          {/* Right side — Contact info */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              Let&apos;s Talk
            </h3>
            <p className="text-white/60 mt-3">
              We&apos;re here to help you find the perfect outsourcing solution.
            </p>

            <div className="mt-10 space-y-6">
              {contactItems.map((item) => {
                const value = item.getValue();
                const href = item.href();
                const content = (
                  <div className="flex items-start gap-4" key={item.label}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="size-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">{item.label}</p>
                      {href ? (
                        <a
                          href={href}
                          className={`font-semibold text-white ${
                            item.large ? "text-xl" : ""
                          }`}
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          className={`font-semibold text-white ${
                            item.large ? "text-xl" : ""
                          }`}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                );
                return content;
              })}
            </div>

            {/* Team image */}
            <div className="mt-10 overflow-hidden rounded-2xl relative aspect-[16/10]">
              <Image
                src="/images/team-thumbsup.jpg"
                alt="Our team ready to help"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
