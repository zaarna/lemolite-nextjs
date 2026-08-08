// Portfolio project data for the Portfolio page.
// Each project renders as a rich card that opens a detail modal
// (Problem / Solution / Product Description / Results / Tech Stack).

export const portfolioData = [
  {
    id: "sarvadesk",
    title: "Sarvadesk",
    industry: "Manufacturing & Industrial",
    image: "/alderbasti-banner-hd.png",
    alt: "custom CRM · web app",
    thumbLabel: "custom CRM · web app",
    services: "CRM Development · UI/UX Design · Backend Engineering",
    stacks: ["React", "Node.js", "PostgreSQL"],
    tagline: "Every lead, quotation and deal, in one pipeline.",
    problem:
      "Peliswan Impex — a manufacturer, importer, supplier, trader and exporter of industrial fuels, custom fuels, biofuels, biodiesel, Mineral Oil, MHO, Mineral Turpentine Oil, Naphtha, C9 and LDO — managed its trade pipeline across scattered spreadsheets, emails and calls, with no single place to track leads, customers, quotations and follow-ups.",
    solution:
      "Lemolite built Sarvadesk, a custom CRM tailored to Peliswan Impex's trading workflow, in React, Node.js and PostgreSQL — centralizing leads, contacts, companies and deals with product-linked quotations, follow-up reminders and role-based access.",
    description:
      "A web-based CRM featuring lead and customer management, a visual deal pipeline, product-catalog-linked quotation and proposal generation, task and follow-up scheduling, activity logging, team roles and permissions, and reporting dashboards for real-time pipeline visibility.",
    results: [
      { value: "+150%", label: "Pipeline visibility" },
      { value: "+80%", label: "Faster follow-ups" },
      { value: "+45%", label: "Lead conversion" },
    ],
  },
  {
    id: "tamanna",
    title: "Tamanna",
    industry: "Fintech",
    image: "/tamanna-banner-hd.png",
    alt: "BNPL marketing site · web",
    url: "https://tamanna.app/",
    thumbLabel: "BNPL marketing site · web",
    services: "SaaS Web Development · UI/UX Design · Brand",
    stacks: ["Next.js", "React", "Node.js"],
    tagline:
      "A trust-first marketing website for Qatar's buy-now-pay-later app.",
    problem:
      "Tamanna's original website read like a static brochure, which is the wrong feel for a Buy Now, Pay Later mobile app. It wasn't converting visitors into app downloads, wasn't building trust with first-time users, and didn't clearly separate the marketing site from the app experience for shoppers and merchants.",
    solution: `Lemolite rebuilt Tamanna's site on Next.js, React and Node.js, with a clear, upfront explanation of installment pricing and a design built to build trust before a single download.`,
    description:
      "A Next.js marketing site engineered for speed and SEO: homepage, How It Works, merchant showcase with portal login, plus blog, FAQs and careers. Lemolite handled brand translation, full UI/UX design, front-end development, backend integration for merchant login and enquiry forms, and QA.",
    results: [
      { value: "+250%", label: "User engagement" },
      { value: "+120%", label: "Customer interaction" },
      { value: "+70%", label: "Retention improvement" },
    ],
  },
  {
    id: "botbutler",
    title: "Bot Butler",
    industry: "Restaurant Tech",
    image: "/botbutler-banner-hd.png",
    alt: "QR dining PWA · web app",
    url: "https://bot-butler.com/",
    thumbLabel: "QR dining PWA · web app",
    services: "PWA Development · UI/UX · Platform Engineering",
    stacks: ["PWA", "React", "Node.js", "MongoDB"],
    tagline:
      "Run dine-in, drive-thru and subscriptions from one installable app.",
    problem:
      "Restaurants needed a faster, more reliable way to manage dine-in and drive-thru orders, and the operator needed a single dashboard to onboard and oversee multiple restaurant locations.",
    solution:
      "Lemolite built Bot Butler as an offline-ready, installable PWA using React, Node.js and MongoDB, covering menus, live orders, subscriptions and real-time insights across 6 management modules and 2 order channels.",
    description:
      "Three connected experiences: a customer ordering PWA, a merchant dashboard (menu, tables/QR, order and staff management, reporting, subscriptions), and a Super Admin panel for merchant approvals, multi-branch management, discounting, geofencing and platform-wide reporting. Multiple payment methods, post-order Google-review prompts, and Arabic (RTL) with English support.",
    results: [
      { value: "+300%", label: "Order efficiency" },
      { value: "+85%", label: "Merchant adoption" },
      { value: "-55%", label: "Support overhead" },
    ],
  },
  {
    id: "depoter",
    title: "Depoter",
    industry: "Logistics & Transportation",
    image: "/depoter-banner-hd.png",
    alt: "logistics website · web",
    url: "https://depoter.com/",
    thumbLabel: "logistics website · web",
    services: "Web Development · UI/UX · SEO",
    stacks: ["React", "Next.js", "Node.js", "Express"],
    tagline:
      "A storytelling logistics website built to convert GCC B2B buyers.",
    problem:
      "Depoter needed to build credibility with global D2C, B2B and marketplace brands and capture qualified leads within 30 seconds of a visit, while ranking well across Gulf Cooperation Council markets. The old site read like a brochure and converted little.",
    solution:
      "Lemolite delivered a bilingual (English/Arabic), mobile-first website in React, Node.js and Express, with trust-building hero content, clear calls to action, fast lead-generation forms, SEO-friendly URLs, optimized metadata and a logistics-focused SEO blog.",
    description:
      "A fully functional, SEO-optimized MERN website: service pages, leadership and value-proposition sections, visual facility and delivery showcases, an interactive locations map, and integrated analytics and lead-generation tooling — tested for responsive, cross-browser performance across modern devices.",
    results: [
      { value: "+150%", label: "Operational efficiency" },
      { value: "+90%", label: "Workflow automation" },
      { value: "+60%", label: "Manual-task reduction" },
    ],
  },
  {
    id: "agb",
    title: "AGB Petrochemicals",
    industry: "Manufacturing & Industrial",
    image: "/agb-banner-hd.png",
    alt: "corporate site · web",
    url: "https://agbpetrochemicals.com/",
    thumbLabel: "corporate site · web",
    services: "Corporate Website Design · Branding",
    stacks: ["WordPress", "PHP", "SEO"],
    tagline:
      "Your source for petro excellence, rebuilt for credibility and leads.",
    problem:
      "AGB Petrochemicals needed to modernize a limited digital presence, convey credibility to B2B buyers, and present its product range in a structured way that captured qualified inquiries instead of scattered emails.",
    solution:
      'Lemolite delivered a conversion-focused corporate website under the slogan "Your Source for Petro Excellence," with a structured product catalog, company story, HSE policies, and inquiry forms routed by product to the sales team.',
    description:
      "A responsive WordPress corporate platform covering Home, About Us, Our Products and Contact, with a catalog spanning oils (Mineral Oil, MHO, Furnace Oil, Tyre Oil, Light Diesel Oil) and solvents (Mineral Turpentine Oil, Opal C9, Naphtha), plus FAQ, HSE content, and customer/business inquiry forms with product selection.",
    results: [
      { value: "+140%", label: "Inquiry growth" },
      { value: "+75%", label: "Session duration" },
      { value: "+50%", label: "Organic traffic" },
    ],
  },
  {
    id: "relyblue",
    title: "RelyBlue",
    industry: "Cybersecurity",
    image: "/relyblue-banner-hd.png",
    alt: "OT security site · web",
    url: "https://relyblue.com/",
    thumbLabel: "OT security site · web",
    services: "UI/UX · Web Development · Conversion Optimization",
    stacks: ["WordPress"],
    tagline: "Advice you can trust, every time — for industrial cybersecurity",
    problem:
      "RelyBlue offers complex operational-technology (OT) cybersecurity services to industrial clients but needed to communicate them clearly, build trust, and convert visitors into qualified, high-intent leads.",
    solution:
      "Lemolite built a premium, SaaS-inspired WordPress website that structures RelyBlue's OT cybersecurity offering into clear, standards-aligned service lines — referencing frameworks like IEC 62443, NIST, NCA OTCC and ISA — optimized end-to-end for conversion and lead quality.",
    description:
      "A conversion-optimized site presenting six service areas: OT Cybersecurity Gap Assessment, Risk Assessment, Penetration Testing, Program Implementation, Solutions Implementation, and a portable OT Cyber Testbed — each with outcome-focused content, scope detail, and lead capture.",
    results: [
      { value: "+170%", label: "Conversion growth" },
      { value: "+95%", label: "Qualified leads" },
      { value: "+60%", label: "User engagement" },
    ],
  },

  {
    id: "rishcloud",
    title: "Rish Cloud Tech",
    industry: "Cloud & IT Services",
    image: "/rishcloudtech-banner-hd.png",
    alt: "cloud services site · web",
    url: "https://rishcloudtech.com/",
    thumbLabel: "cloud services site · web",
    services: "Web Development · Cloud Solutions UX",
    stacks: ["React", "Node.js", "AWS"],
    tagline: "Turn technical cloud services into a steady enterprise pipeline.",
    problem:
      "Rish Cloud Tech needed to clearly communicate technical cloud and IT services to enterprise buyers and turn that clarity into a steady pipeline of qualified consultations.",
    solution:
      "Lemolite developed a modern technology website in React, Node.js and AWS with interactive service showcases that make complex cloud offerings easy to understand, paired with lead and consultation flows aimed at enterprise decision-makers.",
    description:
      "A responsive site with interactive service showcases, clear solution narratives, and consultation/enquiry capture — designed to communicate technical depth while driving qualified enterprise leads.",
    results: [
      { value: "+200%", label: "Qualified leads" },
      { value: "+85%", label: "Engagement increase" },
      { value: "+55%", label: "Consultation growth" },
    ],
  },
  // {
  //   id: "godindin",
  //   title: "GoDinDin",
  //   industry: "E Commerce Marketplace",
  //   image: "/GoDinDin-Banner.png",
  //   url: "https://godindin.com/",
  //   thumbLabel: "cloud services site · web",
  //   services: "Mobile App Development · Admin Panel · Product Design",
  //   stacks: ["Flutter"],
  //   tagline:
  //     "Buy and sell through 30-second product videos, not static listings.",
  //   problem:
  //     "Rish Cloud Tech needed to clearly communicate technical cloud and IT services to enterprise buyers and turn that clarity into a steady pipeline of qualified consultations.",
  //   solution:
  //     "Lemolite developed a modern technology website with interactive service showcases that make complex cloud offerings easy to understand, paired with lead and consultation flows aimed at enterprise decision-makers.",
  //   description:
  //     "A responsive site with interactive service showcases, clear solution narratives, and consultation/enquiry capture — designed to communicate technical depth while driving qualified enterprise leads.",
  //   results: [
  //     { value: "+200%", label: "Qualified leads" },
  //     { value: "+85%", label: "Engagement increase" },
  //     { value: "+55%", label: "Consultation growth" },
  //   ],
  // },
  {
    id: "nexstaff",
    title: "NexStaff",
    industry: "HR Tech & Recruitment",
    image: "/nexstaff-banner.png",
    alt: "HREMS platform · web",
    url: "https://nexstaff.in/",
    thumbLabel: "HREMS platform · web",
    services: "Web Development · Product Design · Bilingual UI (EN/AR RTL)",
    stacks: ["React", "MongoDB", " Node.js"],
    tagline: "One platform for your entire workforce, in English and Arabic.",
    problem:
      "The client ran HR on a dated, fragmented system with no centralized employee management, manual attendance tracking, inefficient leave workflows, poor visibility into performance, and an ineffective payroll process — all without Arabic-language support.",
    solution:
      "Lemolite built NexStaff in React, MongoDB and Node.js to replace scattered spreadsheets with a single bilingual source of truth for employee records, attendance, leave and payroll.",
    description:
      "A unified HR platform spanning employee records and registration, time & attendance with timesheets, leave management (requests, WFH, holidays, calendar), device and payroll management with an appraisal system, procurement (vendor and invoice tracking), expense management, performance tracking, feedback, meeting-room booking, and job postings — with distinct Admin/HR, Team Lead and Employee experiences, fully bilingual in English and Arabic.",
    results: [
      { value: "+200%", label: "Qualified leads" },
      { value: "+85%", label: "Engagement increase" },
      { value: "+55%", label: "Consultation growth" },
    ],
  },

  {
    id: "scan2hirepro",
    title: "Scan2Hire Pro",
    industry: "HR Tech & Recruitment",
    image: "/scan2hire-banner-hd.png",
    alt: "ATS & recruiting platform · web",
    url: "https://scan2hire.com/",
    thumbLabel: "ATS & recruiting platform · web",
    services: "Web Development · Product Design · Role-Based Workflows",
    stacks: [" Python"],
    tagline: "Turn your hiring pipeline into decisions, not spreadsheets.",
    problem:
      "Recruitment teams relied on manual resume screening — slow, error-prone, and unable to scale as resume and job-description volume grew, with unstructured data that made comparing candidates and roles difficult across Admin, Manager and Recruiter tiers.",
    solution:
      "Lemolite built Scan2Hire Pro in Python as a multi-role platform that tracks every candidate, screens with AI, and helps teams fill roles faster with accurate, structured data. It currently tracks 86 candidates across 37 managed jobs with a 27-day average time-to-fill.",
    description:
      "A role-based B2B platform: an Admin dashboard with Power BI-driven analytics (JD-vs-onboarded metrics, employee performance, credit usage), user and permission management, and subscription/credit tracking; a Manager flow for job postings and candidate oversight; and a Recruiter flow for managing assigned jobs, candidate pipelines and interview coordination.",
    results: [
      { value: "86", label: "Candidates tracked" },
      { value: "37", label: "Jobs managed" },
      { value: "27d", label: "Avg. time-to-fill" },
    ],
  },

  {
    id: "scan2hireseekers",
    title: "Scan2Hire Seekers",
    industry: "HR Tech & Recruitment",
    image: "/Scan2Hire-seeker-banner.png",
    alt: "AI resume platform · web",
    thumbLabel: "AI resume platform · web",
    services: "AI/ML Pipeline · Web Development · Payments Integration",
    stacks: [" Python"],
    tagline: "Turn any resume into an ATS-ready document, in minutes.",
    problem:
      "Job seekers needed a fast, reliable way to turn any resume into an ATS-optimized document — with resume parsing, intelligent rewriting, a live preview, and real payment processing (M-Pesa and PayPal) end-to-end, backed by an admin system for pricing, coupons and quality control.",
    solution:
      "Lemolite built Scan2Hire Seekers around an AI/ML pipeline that parses uploaded resumes, rewrites and optimizes them for ATS systems, and renders a live interactive preview in the browser, with tiered pricing (Basic, Pro, Ultimate) connected to M-Pesa and PayPal checkout.",
    description:
      "A Next.js and FastAPI web application supporting resume upload or paste-in-text, an AI-driven rewrite and ATS-scoring engine, DOCX/PDF export, and dual payment gateways. An authenticated admin dashboard manages payments, pricing tiers, promotional coupons and quality assurance.",
    results: [
      { value: "92/100", label: "Avg. ATS score" },
      { value: "98%", label: "Payment success rate" },
      { value: "2m 40s", label: "Avg. turnaround" },
    ],
  },

  {
    id: "dimeequipment",
    title: "Dime Equipment Co.",
    industry: "Manufacturing & Industrial",
    image: "/dime-banner-hd.png",
    alt: "corporate site · web",
    thumbLabel: "corporate site · web",
    services: "AI/ML Pipeline · Web Development · Payments Integration",
    stacks: [" Python"],
    tagline:
      "A rugged, confident brand website for Qatar's fabrication and fleet partner.",
    problem:
      "Dime Equipment Co. — Qatar's engineering partner for custom steel fabrication, industrial transport equipment, heavy-vehicle fleet maintenance and waste-management solutions — ran on referrals and word of mouth, with no site to showcase capabilities, project spotlights, or convert enquiries from contractors and industrial clients.",
    solution:
      "Lemolite designed a rugged, confident WordPress brand website around Dime's core services — custom fabrication, fleet maintenance and waste-management equipment — anchored by project spotlights that show real fabrication work in the field and workshop, with bold typography and a signature yellow-and-charcoal palette.",
    description:
      "A responsive corporate site featuring a project-spotlight system for completed fabrication and fleet work (steel structures, industrial trailers, hydraulic repairs), dedicated service pages, and clear enquiry paths that turn visits into qualified leads.",
    results: [
      { value: "160%", label: "Enquiry growth" },
      { value: "70%", label: "Brand credibility" },
      { value: "50%", label: "Organic traffic" },
    ],
  },

  {
    id: "laboucle",
    title: "La Boucle",
    industry: "Fashion & Retail",
    image: "/La-Boucle-Banner.png",
    alt: "e-commerce site · web",
    url: "https://laboucle.com/",
    thumbLabel: "e-commerce site · web",
    services: "E-commerce Development · Brand · UI/UX Design",
    stacks: ["Shopify"],
    tagline: "Handcrafted leather belts, sold through story and craftsmanship.",
    problem:
      "La Boucle makes handcrafted, vegetable-tanned leather belts with a distinctive one-size, no-holes design — but needed a storefront confident enough to justify its premium price point and explain a product category shoppers don't immediately understand.",
    solution: `Lemolite built a premium, editorial-feeling Shopify storefront that leads with brand story and craftsmanship before the sell, using bold typography, a rich navy palette, and clear product-education modules ("Why La Boucle") to build trust and convert first-time visitors into buyers.`,
    description:
      "A Shopify storefront with a curated colour and style catalogue, product-education content on stretch, fit and materials, a streamlined one-size sizing model, secure checkout, and SEO-optimized product and collection pages.",
    results: [
      { value: "+130%", label: "Conversion rate" },
      { value: "+90%", label: "Average order value" },
      { value: "+60%", label: "Repeat purchases" },
    ],
  },

  {
    id: "jcjewels",
    title: "JC Jewels",
    industry: "Luxury Retail",
    image: "/JC-Jewels-Banner-HD.png",
    alt: "e-commerce site · web",
    url: "https://jcjewels.co.uk/",
    thumbLabel: "e-commerce site · web",
    services: "E-commerce Development · UI/UX Design · Booking Integration",
    stacks: ["Shopify"],
    tagline: "A refined online experience for GIA-certified fine jewellery.",
    problem:
      "JC Jewels needed an online presence that matched the trust and craft of a Hatton Garden jeweller — GIA-certified diamonds and bespoke fine jewellery are high-consideration, high-trust purchases a generic storefront couldn't represent, and the brand had no way to convert browsers into in-store appointments.",
    solution:
      "Lemolite designed an elegant, editorial Shopify e-commerce experience with rich full-bleed imagery, certification and provenance front and centre, and a dual conversion path — shop the collection online or book a private appointment — so every visitor has a clear next step regardless of purchase readiness.",
    description:
      "A responsive luxury storefront featuring curated collections (engagement rings, wedding bands and more) with integrated appointment booking.",
    results: [
      { value: "+170%", label: "Appointment bookings" },
      { value: "+95%", label: "Online enquiries" },
      { value: "+55%", label: "Time on site" },
    ],
  },

  {
    id: "shifteco",
    title: "Shift Eco",
    industry: "Sustainability",
    image: "/shift-eco-banner-hd.png",
    alt: "B2B platform · web",
    url: "https://shifteco.ae/",
    thumbLabel: "B2B platform · web",
    services: "Web Development · UI/UX Design · Brand",
    stacks: ["Shopify"],
    tagline: "Helping UAE businesses build a culture of sustainability.",
    problem:
      "Shift Eco helps UAE businesses build sustainability culture through engagement programs, corporate gifting and green office supplies, but needed a site that could clearly present four very different service lines to B2B buyers and turn interest into qualified enquiries.",
    solution:
      "Lemolite built a clean, green-forward B2B platform that organizes Shift Eco's offerings — engagement programs, corporate gifting, office supplies and an eco shop — into a single clear navigation, with an outcomes-first homepage and a direct path to enquiry for corporate buyers.",
    description:
      "A responsive B2B website with dedicated sections for engagement programs, bespoke corporate gifting, green office supplies and a curated eco-shop, transparent impact metrics, and an enquiry flow that routes corporate leads straight to the sales team.",
    results: [
      { value: "+145%", label: "Corporate enquiries" },
      { value: "+80%", label: "Repeat business" },
      { value: "+50%", label: "Organic traffic" },
    ],
  },

  {
    id: "theteaheaven",
    title: "The Tea Heaven",
    industry: "Food & Beverage",
    image: "/Tea-Heaven-Banner.png",
    alt: "e-commerce site · web",
    url: "https://theteaheaven.com/",
    thumbLabel: "e-commerce site · web",
    services: "E-commerce Development · Brand · UI/UX Design",
    stacks: ["Shopify"],
    tagline: "A farm-to-cup story, told through a warm Shopify storefront.",
    problem:
      "The Tea Heaven — a Seattle-based, woman-owned business hand-processing small-batch chai and loose-leaf teas — needed an online store that could carry the same warmth and care as their product, while clearly conveying freshness, sustainable packaging and their farm-to-cup story to first-time online shoppers.",
    solution:
      "Lemolite built a rich, editorial Shopify storefront wrapped in warm, tea-toned visuals, leading with brand story and values — garden-fresh flavor, 100% compostable packaging, woman-owned — so shoppers connect with the brand before they buy.",
    description:
      "A Shopify store featuring a 50+ blend catalog organized by chai, herbal and black tea, with brand-story content woven throughout the shopping experience.",
    results: [
      { value: "+120%", label: "Online orders" },
      { value: "+85%", label: "Repeat customers" },
      { value: "+40%", label: "Average order value" },
    ],
  },

  {
    id: "styleheist",
    title: "Style Heist",
    industry: "Fashion & Retail",
    image: "/style-heist-banner.png",
    alt: "e-commerce site · web",
    url: "https://www.styleheist.co.uk/",
    thumbLabel: "e-commerce site · web",
    services: "E-commerce Development · Brand · UI/UX Design",
    stacks: ["Shopify"],
    tagline: "Bold, party-ready fashion, made to convert.",
    problem:
      "Style Heist needed a storefront as bold as its collections — dresses, lingerie and loungewear built for nights out — with a clear, confident brand voice, fast browsing across 500+ styles and colours, and enough trust-building (returns, delivery, support) to convert first-time UK shoppers.",
    solution:
      "Lemolite designed a high-energy Shopify experience with punchy typography and a soft pink-and-charcoal palette, surfacing offers (15% off first order, free UK delivery threshold, 21-day returns) right where shoppers need reassurance to complete checkout.",
    description:
      "A Shopify storefront with 500+ styles across dresses, lingerie and loungewear, an entry-offer and loyalty mechanic, clear delivery and returns messaging, and a fast, mobile-first browsing and checkout experience tuned for impulse and repeat purchase.",
    results: [
      { value: "+140%", label: "Conversion rate" },
      { value: "+95%", label: "First-order signups" },
      { value: "+55%", label: "Mobile purchases" },
    ],
  },

  {
    id: "assetitrental",
    title: "Asset IT Rental",
    industry: "Electronics & Rental",
    image: "/Asset-IT-Rental-Banner.png",
    alt: "rental platform · web",
    thumbLabel: "rental platform · web",
    services: "Shopify + Custom Development · Brand · Payments Engineering",
    stacks: ["Shopify", "Custom Dev"],
    tagline:
      "Rent electronics with a deposit up front and automated monthly billing.",
    problem:
      "Asset IT Rental needed a reliable way to run electronics rentals as a recurring payment cycle — a one-time deposit collected up front, followed by an automated monthly charge — with no existing platform built to keep that cycle running without failures.",
    solution:
      "Lemolite designed the brand from the logo up, then engineered a deposit-plus-subscription payment flow on Shopify extended with custom development, working directly with the client's payment gateway to stabilize the recurring-deduction cycle and add Buy Now, Pay Later at checkout.",
    description:
      "A full rental commerce build — brand identity, landing and info pages, product detail pages and checkout — running on a one-time deposit plus automated monthly subscription charge, with BNPL built in. Lemolite designed, developed and maintained the platform in-house for close to a year.",
    results: [
      { value: "1 + N", label: "Deposit + recurring charge" },
      { value: "BNPL", label: "Pay-later option" },
      { value: "~12mo", label: "In-house maintenance" },
    ],
  },

  {
    id: "thehijabworld",
    title: "The Hijab World",
    industry: "Fashion & Retail",
    image: "/Hijab_World_Banner.png",
    alt: "CRO & growth · web",
    url: "https://thehijabworld.com/",
    thumbLabel: "CRO & growth · web",
    services: "CRO · SEO · Shopify Development",
    stacks: ["Shopify"],
    tagline:
      "A two-year CRO and growth partnership for a modest fashion retailer.",
    problem:
      "The Hijab World, a Birmingham-based modest fashion store generating £80k–£90k per month, needed to keep converting that traffic into sales — the existing store lacked the browsing, promotional and payment mechanics to squeeze more conversion out of an already strong marketing engine.",
    solution:
      "Lemolite entered a long-term partnership — revamping the store, building filterable collection pages, and integrating Buy Now, Pay Later. On the commercial side, we layered in bundle strategies, BOGO offers and coupon codes, while working alongside the client's marketing team on SEO and competitor analysis.",
    description:
      "A sustained, two-year growth engagement combining a full store revamp, filterable collection pages, BNPL checkout, and a full suite of promotional mechanics (bundles, BOGO, coupons) — paired with ongoing SEO and CRO collaboration with the client's marketing team.",
    results: [
      { value: "£80–90k", label: "Revenue / month" },
      { value: "2 yrs", label: "Partnership length" },
      { value: "CRO", label: "& growth focus" },
    ],
  },

  {
    id: "sandows",
    title: "Sandows",
    industry: "Food & Beverage",
    image: "/Sandows_Banner.png",
    alt: "D2C storefront · web",
    thumbLabel: "D2C storefront · web",
    services: "Shopify Development · Brand · CRO",
    stacks: ["Shopify"],
    tagline:
      "A D2C storefront revamp that took a coffee brand from B2B to direct-to-consumer.",
    problem:
      "Sandows, a UK coffee brand operating in B2B, needed a direct-to-consumer storefront built around their brand identity — with no founder story, collection pages, or product pages designed to convert individual shoppers rather than wholesale buyers.",
    solution:
      "Lemolite rebuilt an existing Shopify theme around Sandows' brand, adding a custom founder's page and fully redesigned collection and product pages. It was Lemolite's debut project using in-house-produced animated GIF product imagery, structured around curated bundles pairing a hero product with complementary items to lift average order value.",
    description:
      "A complete D2C storefront revamp — founder's page, collection pages, and PDPs — launched in 3-4 weeks, featuring in-house animated product imagery and bundle-led merchandising that took conversion rate from a 0.2% baseline to 0.8%, a 4x lift.",
    results: [
      { value: "4x", label: "Conversion lift" },
      { value: "3–4", label: "Weeks to launch" },
      { value: "100%", label: "In-house GIF imagery" },
    ],
  },

  {
    id: "lemoluxe",
    title: "Lemoluxe",
    industry: "Fashion & Retail",
    image: "/Lemoluxe_Banner.png",
    alt: "dropshipping store · web",
    thumbLabel: "dropshipping store · web",
    services: "Shopify Development · Dropshipping Integration",
    stacks: ["Shopify"],
    tagline:
      "An inventory-free jewellery brand, launched without holding a single unit of stock.",
    problem:
      "Lemoluxe needed to launch an imitation jewellery brand for the US market without holding inventory, a warehouse, or upfront stock risk — while still giving customers a polished, branded storefront with no visibility into the underlying supplier.",
    solution:
      "Lemolite integrated AliExpress as the product and fulfilment source, importing and syncing the full catalogue into a theme-based Shopify store with US-market markup pricing. Orders ship direct from the manufacturer to the customer under the Lemoluxe brand, with the manufacturer's identity kept fully hidden.",
    description:
      "A lean, theme-based Shopify store with a synced AliExpress catalogue, US-market pricing markup, and a fully branded checkout that conceals the dropship supplier from the customer.",
    results: [
      { value: "$0", label: "Held inventory" },
      { value: "CN → US", label: "Fulfilment route" },
      { value: "Shopify", label: "Platform" },
    ],
  },

  {
    id: "customdesk",
    title: "Custom Desk",
    industry: "Furniture & Home",
    image: "/custom-desk-banner.png",
    alt: "furniture configurator · web",
    thumbLabel: "furniture configurator · web",
    services: "Shopify + Custom Development · Real-Time Pricing Engine",
    stacks: ["Shopify", "Custom Dev"],
    tagline:
      "Made-to-order furniture with pricing that updates live as customers customize.",
    problem:
      "Custom Desk's founder-CTO wanted an e-commerce store where customers could configure made-to-order furniture — size, corner style, height, leg style, cable-routing holes, lamp fittings and more — and see accurate pricing update live as they customized, with delivery in 7-10 days.",
    solution:
      "Lemolite worked directly alongside the founder-CTO — not just executing to spec but collaborating on system logic, coding and product ideas — to build a deeply technical configurator that recalculates pricing in real time across every physical specification of the piece.",
    description:
      "A configurator-driven commerce platform translating near-limitless furniture customization — dimensions, corner and leg styles, cable management, lamp fittings — into a live, price-responsive storefront backed by a 7-10 day delivery promise, built over 2.5-3 months of close technical collaboration.",
    results: [
      { value: "6+", label: "Customization axes" },
      { value: "2.5–3mo", label: "Build engagement" },
      { value: "7–10d", label: "Avg. time-to-ship" },
    ],
  },

  {
    id: "otaa",
    title: "Otaa",
    industry: "Fashion & Retail",
    image: "/otaa-banner.png",
    alt: "Shopify revamp · web",
    thumbLabel: "Shopify revamp · web",
    services: "Shopify Development · CRO",
    stacks: ["Shopify"],
    tagline:
      "Cleaner design and faster pages for a UK menswear accessories store.",
    problem:
      "Otaa, a UK-based store selling ties, belts and premium menswear accessories, needed better design and faster pages within a modest budget — with conversion rates well below a healthy e-commerce benchmark.",
    solution:
      "Lemolite worked within Otaa's existing Shopify theme rather than rebuilding from scratch, cleaning up design, speeding up load times, and collaborating closely with the client's marketer to align the on-site experience with their campaigns, targeting a 3–4% conversion rate.",
    description:
      "A Shopify store revamp focused on cleaner navigation, faster-loading pages, and a checkout experience built to convert menswear shoppers — delivered within the existing theme to keep the engagement budget-conscious.",
    results: [
      { value: "3.8%", label: "Conversion rate" },
      { value: "1.2s", label: "Avg. load time" },
      { value: "240", label: "Orders / month" },
    ],
  },

  {
    id: "labthreads",
    title: "Labthreads",
    industry: "Fashion & Retail",
    image: "/labthreads-banner.png",
    alt: "Shopify revamp · web",
    thumbLabel: "Shopify revamp · web",
    services: "Shopify Development · CRO",
    stacks: ["Shopify"],
    tagline:
      "Sharper merchandising and faster pages for a UK jackets and hoodies store.",
    problem:
      "Labthreads, a UK-based jackets and hoodies store, needed cleaner merchandising and faster pages to turn browsers into buyers, without the budget for a full platform rebuild.",
    solution:
      "Lemolite optimized within Labthreads' existing Shopify theme — sharper product merchandising, performance improvements, and a streamlined path to checkout — working closely with the client's marketing team toward a 3–4% conversion target.",
    description:
      "A Shopify store revamp with sharper merchandising, faster page loads, and a streamlined checkout flow, aligned with the client's marketing efforts to convert scrollers into shoppers.",
    results: [
      { value: "3.4%", label: "Conversion rate" },
      { value: "1.4s", label: "Avg. load time" },
      { value: "310", label: "Orders / month" },
    ],
  },

  {
    id: "wallpaperdecor",
    title: "Wallpaper Decor",
    industry: "Home & Decor",
    image: "/wallpaper-decor-banner.png",
    alt: "Shopify revamp · web",
    thumbLabel: "Shopify revamp · web",
    services: "Shopify Development · CRO",
    stacks: ["Shopify"],
    tagline:
      "Clearer sizing and a faster browsing flow for a UK wallpaper store.",
    problem:
      "Wallpaper Decor, a UK-based store offering wallpapers in multiple sizes, needed clearer sizing information and a faster, more decision-friendly browsing flow to lift conversion within a modest budget.",
    solution:
      "Lemolite revamped the store within its existing Shopify theme — clarifying product sizing, speeding up pages, and refining the browsing flow to support decision-making — working with the client's marketer toward a 3–4% conversion goal.",
    description:
      "A Shopify store revamp with clearer product sizing, faster-loading pages, and a browsing experience built to help shoppers confidently choose the right wallpaper for their space.",
    results: [
      { value: "4.1%", label: "Conversion rate" },
      { value: "1.1s", label: "Avg. load time" },
      { value: "180", label: "Orders / month" },
    ],
  },

  {
    id: "littleyaye",
    title: "Littleyaye",
    industry: "Kidswear & Retail",
    image: "/littleyaye-banner.png",
    alt: "Shopify revamp · web",
    thumbLabel: "Shopify revamp · web",
    services: "Shopify Development · CRO",
    stacks: ["Shopify"],
    tagline:
      "Friendlier navigation built to earn parents' trust and convert visits into orders.",
    problem:
      "Littleyaye, a US-based kids' clothing store, needed friendlier navigation and faster pages to build parent trust and convert more visits into orders, within a limited budget.",
    solution:
      "Lemolite optimized within Littleyaye's existing Shopify theme — friendlier navigation, performance improvements, and a checkout experience parents trust — working closely with the client's marketing team toward a 3–4% conversion target.",
    description:
      "A Shopify store revamp with friendlier navigation, faster page loads, and a checkout flow designed to earn parents' trust and convert visits into orders.",
    results: [
      { value: "3.6%", label: "Conversion rate" },
      { value: "1.3s", label: "Avg. load time" },
      { value: "265", label: "Orders / month" },
    ],
  },

  {
    id: "kostless",
    title: "Kostless",
    industry: "Electronics & Rental",
    image: "/kostless-banner.png",
    alt: "Shopify revamp · web",
    thumbLabel: "Shopify revamp · web",
    services: "Shopify Development · CRO",
    stacks: ["Shopify"],
    tagline:
      "Clearer specs and faster pages for high-consideration electronics purchases.",
    problem:
      "Kostless, a UAE-based electronics store, needed clearer product specs and faster pages to support high-consideration purchases and lift conversion, within a modest budget.",
    solution:
      "Lemolite revamped Kostless within its existing Shopify theme — clearer specs, faster pages, and a checkout built for high-consideration buys — working with the client's marketer toward a 3–4% conversion goal.",
    description:
      "A Shopify store revamp with clearer product specifications, faster-loading pages, and a checkout experience built to convert clicks into carts for higher-consideration electronics purchases.",
    results: [
      { value: "3.9%", label: "Conversion rate" },
      { value: "1.5s", label: "Avg. load time" },
      { value: "150", label: "Orders / month" },
    ],
  },
];
