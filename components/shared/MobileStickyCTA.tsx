"use client";

import { MessageSquare } from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-3 lg:hidden safe-area-bottom">
      <LeadCTALink
        ctaLocation="mobile_sticky_cta"
        leadOffer="Mobile call center quote"
        className="flex w-full items-center justify-center gap-2 bg-red text-white py-3.5 rounded-lg font-semibold text-sm active:scale-[0.98] transition"
      >
        <MessageSquare className="w-4 h-4" />
        Enquire Now
      </LeadCTALink>
    </div>
  );
}
