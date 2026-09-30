import IndustriesPage from "./IndustriesPage";
import { pageMeta } from "@/lib/seo-config";

const title = "Industries Served | Contact Center USA";
const description =
  "Industries Served from Contact Center USA. Learn services, coverage, industries, and quote options for US-based outsourcing.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  ...pageMeta(title, description, "/industries"),
};

export default function Page() {
  return <IndustriesPage />;
}
