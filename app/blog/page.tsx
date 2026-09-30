import BlogPage from "./BlogPage";
import { BlogLeadSection } from "./BlogLeadSection";
import { pageMeta } from "@/lib/seo-config";

const title = "Call Center Outsourcing Guides & Provider Rankings";
const description =
  "Read call center outsourcing guides, provider rankings, comparison articles, and buyer checklists for choosing the right support partner.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  ...pageMeta(title, description, "/blog"),
};

export default function Page() {
  return (
    <>
      <BlogPage />
      {/*
        The index is the one /blog route with no form of its own — every
        article carries a sticky sidebar HeroContactForm, so this section
        used to live in app/blog/layout.tsx and duplicated that form on all
        125 posts. It now renders here only.
      */}
      <BlogLeadSection />
    </>
  );
}
