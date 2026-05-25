import BlogPage from "./BlogPage";

export const metadata = {
  title: "Call Center Outsourcing Blog",
  description:
    "Read call center outsourcing guides, provider rankings, pricing advice, and buyer checklists for choosing the right support partner.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <BlogPage />;
}
