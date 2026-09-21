import { generateServiceSchema } from "@/lib/schema";

type ServiceSchemaProps = {
  name: string;
  description: string;
  path: string;
};

/** Server-rendered Service markup for custom commercial-page layouts. */
export function ServiceSchema({ name, description, path }: ServiceSchemaProps) {
  const schema = generateServiceSchema(
    name,
    description,
    `https://contactcenterusa.com${path}`
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
