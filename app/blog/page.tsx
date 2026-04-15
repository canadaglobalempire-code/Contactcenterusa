import BlogPage from "./BlogPage";

export const metadata = {
  title: "Blog | Latest Insights & Industry News",
  description:
    "Stay up to date with the latest call center industry insights, outsourcing tips, and customer service best practices from Contact Center USA.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <BlogPage />;
}
