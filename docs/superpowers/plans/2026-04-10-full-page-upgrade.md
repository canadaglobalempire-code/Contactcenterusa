# Full Page Upgrade — Rich Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade all 25 inner pages from basic templates to rich, SEO-optimized landing pages with multiple sections, real content, keywords, stats, testimonials, CTAs, images, and FAQ schemas.

**Architecture:** Replace the single-template approach (ServicePageTemplate / SolutionPageTemplate) with dedicated multi-section pages. Each page gets 6-8 sections: Hero, Intro (split image+text), Features, Stats bar, Industry-specific testimonial, FAQ with schema, Related services, and CTA. All content is SEO-optimized with target keywords woven into headings, meta descriptions, and body copy.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS v4 (custom colors: navy=#0F172A, red=#DC2626), Framer Motion, Lucide React, next/image

---

## Approach: Richer Shared Components

Instead of rewriting 25 pages from scratch, we upgrade the **shared templates** to render 8 sections instead of 4-5, and enrich the props/data passed from each page. This is DRY — one template upgrade = all pages upgraded.

### New Section Components to Build:

1. **`components/shared/StatsBar.tsx`** — Animated counter row (4 stats), reusable
2. **`components/shared/PageTestimonial.tsx`** — Single testimonial card with quote, name, company, rating
3. **`components/shared/PageFAQ.tsx`** — 4-5 Q&As with accordion + JSON-LD schema injection
4. **`components/shared/RelatedServices.tsx`** — 3-card grid linking to related pages
5. **`components/shared/PageCTA.tsx`** — Unified CTA section (flag bg + contact link)

### Upgraded Templates:

6. **`components/shared/ServicePageTemplate.tsx`** — Upgrade to 8 sections
7. **`components/shared/SolutionPageTemplate.tsx`** — Upgrade to 8 sections

### Index Page Upgrades:

8. **`app/services/page.tsx`** — Add intro section, stats, testimonial, CTA
9. **`app/solutions/page.tsx`** — Add intro section, stats, testimonial, CTA
10. **`app/industries/page.tsx`** — Add intro content, per-industry detail, testimonial
11. **`app/blog/page.tsx`** — Add featured post, categories, newsletter CTA
12. **`app/contact/page.tsx`** — Add trust signals, testimonial, map placeholder

### SEO Content Updates:

13-19. **All 7 service subpages** — Expanded SEO copy, keywords, FAQs, testimonials
20-29. **All 10 solution subpages** — Expanded SEO copy, keywords, FAQs, testimonials

---

## Task 1: Build Shared Section Components

**Files:**
- Create: `components/shared/StatsBar.tsx`
- Create: `components/shared/PageTestimonial.tsx`
- Create: `components/shared/PageFAQ.tsx`
- Create: `components/shared/RelatedServices.tsx`
- Create: `components/shared/PageCTA.tsx`

- [ ] **Step 1: Create StatsBar.tsx**

```tsx
// "use client" — AnimatedCounter component with 4 stats in a rounded gray bar
// Props: stats: { value: number; suffix: string; label: string }[]
// Design: rounded-2xl bg-gray-50 p-8, grid-cols-4, AnimatedCounter for each
```

- [ ] **Step 2: Create PageTestimonial.tsx**

```tsx
// "use client" — Single testimonial with quote, stars, avatar, name, title, company
// Props: quote, name, title, company, initials
// Design: bg-gradient with red/navy, white text, large quote marks, 5 stars
```

- [ ] **Step 3: Create PageFAQ.tsx**

```tsx
// "use client" — Accordion with 4-5 Q&As + JSON-LD schema injection
// Props: faqs: { question: string; answer: string }[]
// Design: matches landing page FAQ style, uses Shadcn Accordion
```

- [ ] **Step 4: Create RelatedServices.tsx**

```tsx
// "use client" — 3 cards linking to related pages
// Props: items: { title: string; desc: string; href: string; icon: LucideIcon }[]
// Design: 3-col grid, white cards, red icon, hover lift
```

- [ ] **Step 5: Create PageCTA.tsx**

```tsx
// "use client" — Flag background CTA with heading, subtitle, red button
// Props: heading?: string, subtitle?: string
// Design: flag.jpg bg, navy overlay, centered text, link to /contact
```

---

## Task 2: Upgrade ServicePageTemplate

**Files:**
- Modify: `components/shared/ServicePageTemplate.tsx`

- [ ] **Step 1: Add new props**

Add to interface: `stats`, `testimonial`, `faqs`, `relatedServices` — all optional so existing pages don't break.

- [ ] **Step 2: Add sections between existing ones**

New section order:
1. Hero (existing)
2. Intro split (existing)
3. **StatsBar** (NEW)
4. Features grid (existing)
5. **PageTestimonial** (NEW)
6. **PageFAQ** (NEW)
7. **RelatedServices** (NEW)
8. CTA (existing → use PageCTA)

---

## Task 3: Upgrade SolutionPageTemplate

**Files:**
- Modify: `components/shared/SolutionPageTemplate.tsx`

- [ ] **Step 1: Add same new props and sections as ServicePageTemplate**

Same pattern: stats, testimonial, faqs, relatedServices props. Render StatsBar, PageTestimonial, PageFAQ, RelatedServices between existing sections.

---

## Task 4: Enrich All 7 Service Subpages with SEO Content

**Files:**
- Modify: `app/services/ai-automation/page.tsx`
- Modify: `app/services/contact-center-software/page.tsx`
- Modify: `app/services/customer-acquisition/page.tsx`
- Modify: `app/services/cx-analytics/page.tsx`
- Modify: `app/services/digital-and-cx-services/page.tsx`
- Modify: `app/services/fraud-prevention/page.tsx`
- Modify: `app/services/omnichannel-solutions/page.tsx`

- [ ] **Step 1: Add stats, testimonial, faqs, relatedServices to each page**

For each service page, add:
- **4 stats** relevant to that service (e.g., "40% cost reduction", "99.9% uptime", "24/7 availability", "<48h setup")
- **1 testimonial** quote relevant to that service vertical
- **4-5 FAQs** with SEO-targeted questions (e.g., "How much does AI automation cost for call centers?")
- **3 related services** linking to other service/solution pages
- **Expanded meta description** with primary + secondary keywords

---

## Task 5: Enrich All 10 Solution Subpages with SEO Content

**Files:**
- Modify all 10 `app/solutions/*/page.tsx` files

- [ ] **Step 1: Add stats, testimonial, faqs, relatedServices to each page**

Same as Task 4 but for solutions. Each page gets:
- 4 stats, 1 testimonial, 4-5 FAQs, 3 related pages
- Expanded SEO meta descriptions with keywords

---

## Task 6: Upgrade Services Index Page

**Files:**
- Modify: `app/services/page.tsx`
- Modify: `app/services/ServicesHero.tsx`
- Create: `app/services/ServicesIntro.tsx`
- Modify: `app/services/ServicesCTA.tsx`

- [ ] **Step 1: Add intro split section**

After hero, add a split section: video left + content right explaining the services offering with checkmark benefits.

- [ ] **Step 2: Add stats bar and testimonial**

Below the services grid, add a StatsBar + PageTestimonial.

- [ ] **Step 3: Update page.tsx to compose all sections**

---

## Task 7: Upgrade Solutions Index Page

**Files:**
- Modify: `app/solutions/page.tsx`
- Create: `app/solutions/SolutionsIntro.tsx`

- [ ] **Step 1: Same pattern as Task 6**

Add intro section, stats bar, testimonial below the grid.

---

## Task 8: Upgrade Industries Page

**Files:**
- Modify: `app/industries/page.tsx` (via IndustriesPage.tsx)

- [ ] **Step 1: Add intro section with video + content**
- [ ] **Step 2: Add a PageTestimonial between grid and CTA**
- [ ] **Step 3: Add PageFAQ with industry-related questions**

---

## Task 9: Upgrade Blog Page

**Files:**
- Modify: `app/blog/page.tsx` (via BlogPage.tsx)

- [ ] **Step 1: Add a featured/hero blog post at top (large card)**
- [ ] **Step 2: Add category filter pills**
- [ ] **Step 3: Add newsletter signup CTA at bottom**

---

## Task 10: Upgrade Contact Page

**Files:**
- Modify: `app/contact/page.tsx`
- Create: `app/contact/ContactTrust.tsx`

- [ ] **Step 1: Add trust signals section between hero and form**

Awards carousel strip + testimonial quote + stats bar showing "2hr response time", "500+ clients", etc.

---

## Task 11: Build & Verify All Pages

- [ ] **Step 1: Run `npm run build`**
- [ ] **Step 2: Verify all 29 routes compile**
- [ ] **Step 3: Spot-check 5 pages for correct rendering**

---

## SEO Keyword Targets Per Page

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Services Index | call center services USA | outsourced call center, contact center services |
| AI Automation | AI call center automation | AI chatbot customer service, automated call center |
| Contact Center Software | contact center software solutions | cloud call center platform |
| Customer Acquisition | customer acquisition outsourcing | lead generation call center |
| CX Analytics | customer experience analytics | call center analytics, CX metrics |
| Digital & CX | digital customer experience services | omnichannel CX, digital transformation |
| Fraud Prevention | call center fraud prevention | cyber security contact center |
| Omnichannel | omnichannel call center | multichannel customer support |
| Solutions Index | call center solutions | outsourced business solutions |
| Back Office | back office outsourcing USA | data entry outsourcing |
| Customer Service | customer service outsourcing | outsource customer support USA |
| Financial | financial call center services | collections outsourcing |
| Government | government call center services | citizen support outsourcing |
| Inbound | inbound call center services | inbound customer support |
| Lead Generation | lead generation call center | B2B appointment setting |
| Multilingual | multilingual call center | bilingual customer support |
| Outbound | outbound call center services | telemarketing outsourcing |
| Social Media | social media customer support | social media management outsourcing |
| Technical Support | technical support outsourcing | IT help desk outsourcing |
| Industries | call center industries served | industry-specific call center |
| Blog | call center outsourcing blog | contact center industry insights |
| Contact | contact call center USA | get a quote call center |
