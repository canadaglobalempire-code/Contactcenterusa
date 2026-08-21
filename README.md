This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form Deployment

The lead forms post directly to SplitForms by default:

```bash
NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://splitforms.com/api/submit
NEXT_PUBLIC_SPLITFORMS_ACCESS_KEY=0ffd7166ac97420ba6ffc7727d189d07
```

The fallback `/api/contact` route is still available if a deployment needs a
same-origin proxy. If another website or preview domain submits to that API,
add its exact origin to `CONTACT_FORM_ALLOWED_ORIGINS` as a comma-separated
list:

```bash
NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://contactcenterusa.com/api/contact
CONTACT_FORM_ALLOWED_ORIGINS=https://preview.example.com,https://www.example.com
```

## Deploying (Hostinger)

This repo has **no GitHub Actions**. Pushing to `main` does not deploy anything —
the build has to be shipped to Hostinger separately.

### The edge cache will lie to you

Hostinger's `hcdn` edge serves pages with `cache-control: s-maxage=31536000`
(one year). A freshly deployed page can keep returning the previous version for
a long time; an `age:` header in the millions is normal on this property.

After every deploy:

1. Purge the cache in hPanel, or verify with a cache-busting query string
   (`curl -s "https://contactcenterusa.com/some-page?cb=$(date +%s)"`).
2. Confirm the page actually changed before concluding the deploy failed —
   a stale 404 on a new route is the usual symptom.
3. Re-submit `sitemap.xml` in Search Console and ping IndexNow for new URLs.

### Post-deploy checks

```bash
curl -s https://contactcenterusa.com/sitemap.xml | grep -c '<loc>'   # URL count
curl -s -o /dev/null -w "%{http_code}\n" https://contactcenterusa.com/  # 200?
```

## Structured data — one rule

`AggregateRating` is emitted from the homepage **only**
(`generateOrganizationSchema({ withRating: true })` in `app/page.tsx`).
The site-wide layout deliberately emits the Organization node *without* it:
repeating one identical rating on every page — including pages that are not
about the rated entity — is what draws a structured-data manual action.

`BreadcrumbList` has exactly one source: `AutoBreadcrumbSchema`, mounted in the
root layout and derived from the pathname. Nothing else may emit it. Adding a
second emitter reintroduces duplicate-markup warnings in Search Console.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
