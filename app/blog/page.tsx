import BlogPage from "./BlogPage";
import { BlogLeadSection } from "./BlogLeadSection";

export const metadata = {
  title: "Call Center Outsourcing Guides & Provider Rankings",
  description:
    "Read call center outsourcing guides, provider rankings, comparison articles, and buyer checklists for choosing the right support partner.",
  alternates: { canonical: "/blog" },
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
