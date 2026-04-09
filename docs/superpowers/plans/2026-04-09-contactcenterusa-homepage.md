# ContactCenterUSA.com Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready Next.js 15 homepage for ContactCenterUSA.com with all 12 sections, full SEO, and responsive design.

**Architecture:** Next.js 15 App Router with TypeScript. Component-based architecture with shared UI primitives. Each homepage section is an isolated component composed in `app/page.tsx`. Shadcn/ui for base components, Framer Motion for animations, Tailwind CSS for styling.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Shadcn/ui, Framer Motion, React Hook Form + Zod, Lucide React, next-sitemap

---

### Task 1: Project Scaffolding & Dependencies

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `app/layout.tsx`, `styles/globals.css`

- [ ] **Step 1: Initialize Next.js 15 project**
```bash
cd /Users/ramanmakkar/Desktop/contactcenterusa
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

- [ ] **Step 2: Install dependencies**
```bash
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react next-sitemap
npm install -D @types/node
```

- [ ] **Step 3: Initialize Shadcn/ui**
```bash
npx shadcn@latest init
npx shadcn@latest add button card accordion navigation-menu input textarea select checkbox label sheet separator badge
```

- [ ] **Step 4: Configure Tailwind with design system colors/fonts**
Update `tailwind.config.ts` with the brand colors (#1B2A4A navy, #2E75B6 blue, #D5E8F0 accent, etc.) and Inter font.

- [ ] **Step 5: Set up globals.css with base styles**
Configure CSS variables, font imports, base typography, smooth scrolling.

- [ ] **Step 6: Set up root layout with metadata**
Configure `app/layout.tsx` with Inter font, global metadata, viewport config.

- [ ] **Step 7: Move logo to public/images**
```bash
cp CCU-Logo.png public/images/logo.png
```

- [ ] **Step 8: Commit**
```bash
git add . && git commit -m "feat: scaffold Next.js 15 project with dependencies and design system"
```

---

### Task 2: Shared Components & Utilities

**Files:**
- Create: `components/shared/SectionHeader.tsx`
- Create: `components/shared/AnimatedCounter.tsx`
- Create: `components/shared/ServiceCard.tsx`
- Create: `components/shared/IndustryCard.tsx`
- Create: `components/shared/TestimonialCard.tsx`
- Create: `components/shared/TeamMemberCard.tsx`
- Create: `lib/seo-config.ts`
- Create: `lib/schema.ts`

- [ ] **Step 1: Create SectionHeader component**
Reusable section header with label, H2 heading, and optional subtext. Centered layout with consistent spacing.

- [ ] **Step 2: Create AnimatedCounter component**
Uses Framer Motion + IntersectionObserver to count up numbers when scrolled into view.

- [ ] **Step 3: Create ServiceCard component**
Card with icon, title, description, "Learn More" link. Hover lift animation.

- [ ] **Step 4: Create IndustryCard component**
Card with colored icon circle, title, bullet list, link. Hover blue left-border accent.

- [ ] **Step 5: Create TestimonialCard component**
Dark-themed card with quote, name, title, company, star rating, initials avatar.

- [ ] **Step 6: Create TeamMemberCard component**
Photo card with name, title, hover bio overlay.

- [ ] **Step 7: Create SEO config and JSON-LD schema generators**
Organization schema, LocalBusiness schema, FAQPage schema, BreadcrumbList schema functions.

- [ ] **Step 8: Commit**
```bash
git add . && git commit -m "feat: add shared components and SEO utilities"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/MobileMenu.tsx`

- [ ] **Step 1: Build desktop Navbar**
Sticky navbar, transparent→white on scroll. Logo left, nav links center (Services dropdown, Industries dropdown, About, Blog, Pricing), phone + CTA button right. Shadcn NavigationMenu for dropdowns.

- [ ] **Step 2: Build MobileMenu**
Sheet/drawer menu with hamburger trigger. Logo + phone icon + "Get a Free Quote" button visible. Full nav links inside drawer.

- [ ] **Step 3: Add scroll detection**
useEffect with scroll listener to toggle navbar background transparency and shadow.

- [ ] **Step 4: Commit**
```bash
git add . && git commit -m "feat: add responsive navbar with dropdowns and scroll behavior"
```

---

### Task 4: Footer Component

**Files:**
- Create: `components/layout/Footer.tsx`

- [ ] **Step 1: Build 4-column footer**
Dark navy background. Column 1: logo + description + social icons. Column 2: Services links. Column 3: Industries links. Column 4: Company links. Bottom bar with copyright.

- [ ] **Step 2: Wire up root layout**
Add Navbar and Footer to `app/layout.tsx` wrapping `{children}`.

- [ ] **Step 3: Commit**
```bash
git add . && git commit -m "feat: add footer and wire layout"
```

---

### Task 5: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Build Hero section**
Split layout (60/40). Badge pill, H1 with primary keyword, subheading, trust badges row (SOC 2, HIPAA, 99.9% Uptime, US-Based), two CTA buttons, hero image placeholder with floating stat cards.

- [ ] **Step 2: Add Framer Motion animations**
Staggered fade-up for text, fade-in + scale for image, delayed trust badges.

- [ ] **Step 3: Commit**

---

### Task 6: Social Proof Bar

**Files:**
- Create: `components/sections/SocialProofBar.tsx`

- [ ] **Step 1: Build social proof section**
Light gray bg. "Trusted by" text. Logo marquee strip (certification logos in grayscale). Stats counter row: 500+ Agents, 98.5% CSAT, 24/7/365, 48hrs setup. Use AnimatedCounter.

- [ ] **Step 2: Commit**

---

### Task 7: Services Grid Section

**Files:**
- Create: `components/sections/ServicesGrid.tsx`

- [ ] **Step 1: Build services grid**
SectionHeader + 6 ServiceCards in 3-col grid. All 6 services with icons, descriptions, links.

- [ ] **Step 2: Commit**

---

### Task 8: Why Choose Us Section

**Files:**
- Create: `components/sections/WhyChooseUs.tsx`

- [ ] **Step 1: Build split layout**
Image left (45%), content right (55%). Label, H2, paragraph, 6 features in 2-col grid with green checkmarks. Scroll animation.

- [ ] **Step 2: Commit**

---

### Task 9: Industries Grid Section

**Files:**
- Create: `components/sections/IndustriesGrid.tsx`

- [ ] **Step 1: Build industries grid**
Alternating bg. SectionHeader + 6 IndustryCards with colored icons, bullet lists, links.

- [ ] **Step 2: Commit**

---

### Task 10: How It Works Section

**Files:**
- Create: `components/sections/HowItWorks.tsx`

- [ ] **Step 1: Build 3-step process**
Numbered circles with connecting lines. 3 steps with titles, descriptions, icons. CTA button below. Staggered scroll animation.

- [ ] **Step 2: Commit**

---

### Task 11: Testimonials Section

**Files:**
- Create: `components/sections/Testimonials.tsx`

- [ ] **Step 1: Build testimonials**
Dark navy bg. 3 testimonial cards with quotes, names, titles, star ratings, initials avatars. Carousel or grid layout.

- [ ] **Step 2: Commit**

---

### Task 12: Team Preview Section

**Files:**
- Create: `components/sections/TeamPreview.tsx`

- [ ] **Step 1: Build team section**
4 placeholder team member cards. Company story paragraph. "Learn More About Us" button.

- [ ] **Step 2: Commit**

---

### Task 13: FAQ Section

**Files:**
- Create: `components/sections/FAQ.tsx`

- [ ] **Step 1: Build split FAQ layout**
FAQ accordion left (60%) using Shadcn Accordion with 7 Q&As. Contact CTA card right (40%) with sticky positioning.

- [ ] **Step 2: Add FAQ JSON-LD schema**
Inject FAQPage structured data.

- [ ] **Step 3: Commit**

---

### Task 14: Contact Form Section

**Files:**
- Create: `components/sections/ContactForm.tsx`

- [ ] **Step 1: Build lead capture form**
React Hook Form + Zod. Fields: name, company, email, phone, call volume dropdown, services checkboxes, message. Submit button.

- [ ] **Step 2: Build contact info sidebar**
Phone, email, hours, location info.

- [ ] **Step 3: Add form submission handler**
API route stub for form processing. Success message display.

- [ ] **Step 4: Commit**

---

### Task 15: Home Page Assembly & SEO

**Files:**
- Modify: `app/page.tsx`
- Create: `app/api/contact/route.ts`
- Create: `next-sitemap.config.js`
- Create: `public/robots.txt`

- [ ] **Step 1: Assemble home page**
Import and compose all 12 sections in order in `app/page.tsx`. Add page-level metadata and JSON-LD schemas.

- [ ] **Step 2: Create contact form API route**
POST handler that validates and processes form submissions.

- [ ] **Step 3: Set up sitemap and robots.txt**
Configure next-sitemap, create robots.txt.

- [ ] **Step 4: Add mobile sticky CTA bar**
Bottom-fixed bar on mobile with "Call Now" + "Get Quote" buttons.

- [ ] **Step 5: Final commit**
```bash
git add . && git commit -m "feat: complete homepage with all sections, SEO, and form handling"
```
