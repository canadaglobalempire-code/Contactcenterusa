import { BlogLeadSection } from "./BlogLeadSection";

/**
 * Every /blog page renders its article, then a lead form. Applying this at the
 * layout level covers all 88 posts (and any future one) from a single file
 * instead of editing each hand-written article.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BlogLeadSection />
    </>
  );
}
