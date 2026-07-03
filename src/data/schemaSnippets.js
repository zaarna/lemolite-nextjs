/**
 * JSON-LD snippets from SEO audit spreadsheet — use these values as-is.
 * FAQPage bodies are built from live page FAQ data via faqPageSchema() in schema.js.
 */

const SITE = "https://lemolite.com";
const LOGO = "https://lemolite.com/logo.svg";

const CTX = "https://schema.org";

const PROVIDER = {
  "@type": "Organization",
  name: "Lemolite Technologies",
  logo: LOGO,
};

const PUBLISHER = {
  "@type": "Organization",
  name: "Lemolite Technologies",
  logo: LOGO,
};

const AREA_SERVED = ["IN", "GB", "AE", "US", "EU"];

/** @param {object} data */
function schema(data) {
  return { "@context": CTX, ...data };
}

/** @param {Array<{ name: string, item: string }>} crumbs */
function breadcrumb(crumbs) {
  return schema({
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  });
}

const CRUMB_HOME = { name: "Home", item: SITE };
const CRUMB_SERVICES = { name: "Services", item: `${SITE}/services` };
const CRUMB_BLOG = { name: "Blog", item: `${SITE}/blog` };

export const pageSchemas = {
  "/about-us": [
    schema({
      "@type": "Organization",
      name: "Lemolite Technologies LLP",
      url: `${SITE}/about-us`,
      logo: LOGO,
      foundingDate: "2016",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressCountry: "IN",
      },
      areaServed: AREA_SERVED,
    }),
    schema({
      "@type": "LocalBusiness",
      name: "Lemolite Technologies LLP",
      url: `${SITE}/about-us`,
      foundingDate: "2016",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressCountry: "IN",
      },
    }),
  ],

  "/services": [
    schema({
      "@type": "Service",
      name: "Software Development Services",
      serviceType: "Custom Software Development",
      url: `${SITE}/services`,
      provider: PROVIDER,
      areaServed: AREA_SERVED,
    }),
    breadcrumb([CRUMB_HOME, CRUMB_SERVICES]),
  ],

  "/services/custom-software-development": [
    schema({
      "@type": "Service",
      name: "Custom Software Development Services",
      serviceType: "Custom Software Development",
      url: `${SITE}/services/custom-software-development`,
      provider: PROVIDER,
      areaServed: AREA_SERVED,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Custom Software Development",
        item: `${SITE}/services/custom-software-development`,
      },
    ]),
  ],

  "/services/ai-ml-development": [
    schema({
      "@type": "Service",
      name: "AI & ML Development Services",
      serviceType: "Artificial Intelligence Development",
      url: `${SITE}/services/ai-ml-development`,
      provider: PROVIDER,
      areaServed: AREA_SERVED,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      { name: "AI & ML Development", item: `${SITE}/services/ai-ml-development` },
    ]),
  ],

  "/services/web-development": [
    schema({
      "@type": "Service",
      name: "Web Development Services",
      serviceType: "Web Application Development",
      url: `${SITE}/services/web-development`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      { name: "Web Development", item: `${SITE}/services/web-development` },
    ]),
  ],

  "/services/mobile-app-development": [
    schema({
      "@type": "Service",
      name: "Mobile App Development Services",
      serviceType: "Mobile Application Development",
      url: `${SITE}/services/mobile-app-development`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Mobile App Development",
        item: `${SITE}/services/mobile-app-development`,
      },
    ]),
  ],

  "/services/ui-ux-design": [
    schema({
      "@type": "Service",
      name: "UI/UX Design Services",
      serviceType: "User Experience Design",
      url: `${SITE}/services/ui-ux-design`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      { name: "UI/UX Design", item: `${SITE}/services/ui-ux-design` },
    ]),
  ],

  "/services/e-commerce": [
    schema({
      "@type": "Service",
      name: "eCommerce Development Services",
      serviceType: "eCommerce Development",
      url: `${SITE}/services/e-commerce`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      { name: "E-Commerce", item: `${SITE}/services/e-commerce` },
    ]),
  ],

  "/services/chatbot-development": [
    schema({
      "@type": "Service",
      name: "AI Chatbot Development Services",
      serviceType: "Chatbot Development",
      url: `${SITE}/services/chatbot-development`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Chatbot Development",
        item: `${SITE}/services/chatbot-development`,
      },
    ]),
  ],

  "/services/voicebot-development": [
    schema({
      "@type": "Service",
      name: "AI Voicebot Development",
      serviceType: "Voice Assistant Development",
      url: `${SITE}/services/voicebot-development`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Voicebot Development",
        item: `${SITE}/services/voicebot-development`,
      },
    ]),
  ],

  "/services/hire-nodejs-developer": [
    schema({
      "@type": "Service",
      name: "Hire Node.js Developers",
      serviceType: "Backend Development",
      url: `${SITE}/services/hire-nodejs-developer`,
      provider: PROVIDER,
      areaServed: ["IN", "GB", "AU", "US"],
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Hire Node.js Developer",
        item: `${SITE}/services/hire-nodejs-developer`,
      },
    ]),
  ],

  "/services/hire-mern-developer": [
    schema({
      "@type": "Service",
      name: "Hire MERN Stack Developers",
      serviceType: "Full-Stack Development",
      url: `${SITE}/services/hire-mern-developer`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Hire MERN Developers",
        item: `${SITE}/services/hire-mern-developer`,
      },
    ]),
  ],

  "/services/hire-python-developer": [
    schema({
      "@type": "Service",
      name: "Hire Python Developers",
      serviceType: "Python Development",
      url: `${SITE}/services/hire-python-developer`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Hire Python Developers",
        item: `${SITE}/services/hire-python-developer`,
      },
    ]),
  ],

  "/services/hire-reactjs-developer": [
    schema({
      "@type": "Service",
      name: "Hire React JS Developers",
      serviceType: "Frontend Development",
      url: `${SITE}/services/hire-reactjs-developer`,
      provider: PROVIDER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_SERVICES,
      {
        name: "Hire React JS Developers",
        item: `${SITE}/services/hire-reactjs-developer`,
      },
    ]),
  ],

  "/startups": [
    schema({
      "@type": "Service",
      name: "MVP Development for Startups",
      serviceType: "Startup Technology Partner",
      url: `${SITE}/startups`,
      provider: PROVIDER,
    }),
  ],

  "/portfolio": [
    schema({
      "@type": "ItemList",
      name: "Lemolite Software Development Portfolio",
      url: `${SITE}/portfolio`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tamanna — BNPL Fintech Website",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bot Butler — QR Dining PWA",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Depoter — Logistics Website",
        },
      ],
    }),
    breadcrumb([
      CRUMB_HOME,
      { name: "Portfolio", item: `${SITE}/portfolio` },
    ]),
  ],

  "/blog": [
    schema({
      "@type": "Blog",
      name: "Lemolite Software Development Blog",
      url: `${SITE}/blog`,
      publisher: PUBLISHER,
    }),
    breadcrumb([CRUMB_HOME, CRUMB_BLOG]),
  ],

  "/blog/how-to-choose-an-ai-ml-development-company": [
    schema({
      "@type": "Article",
      headline:
        "How to Choose an AI/ML Development Company (2024 Checklist)",
      url: `${SITE}/blog/how-to-choose-an-ai-ml-development-company`,
      author: { "@type": "Person", name: "Lemolite Team" },
      datePublished: "2024-01-01",
      publisher: PUBLISHER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_BLOG,
      {
        name: "How to Choose an AI/ML Development Company",
        item: `${SITE}/blog/how-to-choose-an-ai-ml-development-company`,
      },
    ]),
  ],

  "/blog/choosing-the-right-tech-stack-2026": [
    schema({
      "@type": "Article",
      headline: "How to Choose the Right Tech Stack in 2024",
      url: `${SITE}/blog/choosing-the-right-tech-stack-2026`,
      datePublished: "2024-01-01",
      dateModified: "2024-05-01",
      publisher: PUBLISHER,
    }),
    breadcrumb([
      CRUMB_HOME,
      CRUMB_BLOG,
      {
        name: "How to Choose the Right Tech Stack in 2024",
        item: `${SITE}/blog/choosing-the-right-tech-stack-2026`,
      },
    ]),
  ],
};

/** @param {string} pathname */
export function getAuditSchemas(pathname) {
  return pageSchemas[pathname] ? [...pageSchemas[pathname]] : [];
}
