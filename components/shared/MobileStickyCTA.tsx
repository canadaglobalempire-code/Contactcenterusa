"use client";

import { Phone, FileText } from "lucide-react";
import { siteConfig } from "@/lib/seo-config";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-3 flex gap-3 lg:hidden">
      <a
        className="flex-1 flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-lg font-semibold text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-blue text-white py-3 rounded-lg font-semibold text-sm"
      >
        <FileText className="w-4 h-4" />
        Get a Quote
      </a>
    </div>
  );
}
