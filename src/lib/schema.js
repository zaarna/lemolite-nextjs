import { getAuditSchemas } from "@/data/schemaSnippets";

const SITE_URL = "https://lemolite.com";

/** @param {Array<{ question: string, answer: string }>} faqs */
export function faqPageSchema(faqs) {
  if (!faqs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: answer.trim(),
      },
    })),
  };
}

/** @param {string} pathname - e.g. "/services/web-development" */
export function getPageSchemas(pathname) {
  return getAuditSchemas(pathname);
}

/** @param {string} pathname */
export function getPageSchemasWithFaqs(pathname, faqs) {
  const schemas = getAuditSchemas(pathname);
  const faq = faqPageSchema(faqs);
  return faq ? [...schemas, faq] : schemas;
}

/** @param {string} html */
function stripHtml(html) {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** @param {Array<{ type: string, items?: Array<{ question: string, answer: string }> }>} sections */
export function extractBlogFaqs(sections = []) {
  return sections
    .filter((section) => section.type === "qa" && section.items?.length)
    .flatMap((section) => section.items);
}

/** @param {Array<object>} sections */
function buildAiMlVendorChecklistFaq(sections) {
  const checklist = sections.find((section) =>
    section.heading?.includes("10-Question Checklist"),
  );
  const evaluation = sections.find((section) =>
    section.heading?.includes("5 Things to Look For"),
  );

  if (!checklist?.items?.length) return [];

  const evalAnswers = (evaluation?.items || []).map((item) =>
    stripHtml(item.content || item.title || ""),
  );

  return checklist.items.map((item, index) => ({
    question: stripHtml(String(item)).replace(/\*\*/g, "").trim(),
    answer:
      evalAnswers[Math.min(index, evalAnswers.length - 1)] ||
      "See this guide for how to evaluate AI/ML vendors on this criterion.",
  }));
}

/** @param {{ id: string, sections?: object[] }} blog */
export function getBlogFaqs(blog) {
  const fromQa = extractBlogFaqs(blog.sections);
  if (fromQa.length) return fromQa;

  if (blog.id === "how-to-choose-an-ai-ml-development-company") {
    return buildAiMlVendorChecklistFaq(blog.sections);
  }

  return [];
}

/** @param {{ id: string, sections?: object[] }} blog */
export function getBlogPostSchemas(blog) {
  const pathname = `/blog/${blog.id}`;
  return getPageSchemasWithFaqs(pathname, getBlogFaqs(blog));
}

export { SITE_URL };
