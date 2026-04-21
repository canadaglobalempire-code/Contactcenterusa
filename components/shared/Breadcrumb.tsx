"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `https://contactcenterusa.com${item.href}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(schemaItems)),
        }}
      />
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <ol className="flex items-center gap-1.5 text-sm">
            {items.map((item, i) => (
              <li key={`bc-${i}`} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" />}
                {i === items.length - 1 ? (
                  <span className="text-gray-700">{item.label}</span>
                ) : (
                  <Link href={item.href} className="text-gray-600 transition-colors hover:text-red">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
