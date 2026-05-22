/**
 * Renders JSON-LD structured data in the initial HTML (server-friendly).
 * @param {{ schemas: object | object[] }} props
 */
export default function JsonLd({ schemas }) {
  const items = (Array.isArray(schemas) ? schemas : [schemas]).filter(
    Boolean,
  );

  return items.map((schema, index) => (
    <script
      key={`jsonld-${schema["@type"]}-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
