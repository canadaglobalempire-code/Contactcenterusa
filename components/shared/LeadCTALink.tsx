"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { buildContactHref, trackLeadEvent } from "@/lib/lead-tracking";

type LeadCTALinkProps = {
  children: ReactNode;
  className?: string;
  ctaLocation: string;
  href?: string;
  leadOffer: string;
};

export function LeadCTALink({
  children,
  className,
  ctaLocation,
  href,
  leadOffer,
}: LeadCTALinkProps) {
  const router = useRouter();
  const destination = href ?? buildContactHref(ctaLocation, leadOffer);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const sourcePage = `${window.location.pathname}${window.location.search}`;
    const trackedDestination =
      href ?? buildContactHref(ctaLocation, leadOffer, sourcePage);

    trackLeadEvent("cta_click", {
      cta_location: ctaLocation,
      destination: trackedDestination,
      lead_offer: leadOffer,
      source_page: sourcePage,
    });

    if (!href) {
      event.preventDefault();
      router.push(trackedDestination);
    }
  };

  return (
    <Link
      href={destination}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
