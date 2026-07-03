// Portfolio project data for the Portfolio page.
// Each project renders as a rich card that opens a detail modal
// (Problem / Solution / Product Description / Results / Tech Stack).

export const portfolioData = [
  {
    id: "peliswan",
    title: "Peliswan CRM",
    industry: "Real Estate",
    image: "/peliswan-crm-banner-hd.png",
    thumbLabel: "property platform · web",
    services: "UI/UX Design · Web Development · SEO",
    stacks: ["React", "Node.js", "SEO"],
    tagline: "A lead-driven property platform for a growing real-estate brand.",
    problem:
      "Alderbasti needed to increase property inquiries and modernize a dated browsing experience. Listings were hard to navigate and there was no structured way to capture and qualify leads from visitors.",
    solution:
      "Lemolite designed and built a responsive real-estate platform with rich, filterable property listings and conversion-focused lead-capture flows, paired with on-page SEO to grow organic visibility and inbound enquiries.",
    description:
      "A fast, responsive website featuring an advanced property-listing experience, detailed property pages, enquiry and lead-capture forms, and an SEO foundation tuned to drive qualified traffic and improve engagement.",
    results: [
      { value: "+180%", label: "Lead generation" },
      { value: "+65%", label: "User engagement" },
      { value: "+40%", label: "Conversion growth" },
    ],
  },
  {
    id: "tamanna",
    title: "Tamanna",
    industry: "Fintech",
    image: "/tamanna-banner-hd.png",
    url: "https://tamanna.app/",
    thumbLabel: "BNPL marketing site · web",
    services: "SaaS Web Development · UI/UX Design · Brand",
    stacks: ["Next.js", "React", "Node.js"],
    tagline: "A trust-building marketing website for a Qatar BNPL brand.",
    problem:
      "Tamanna's existing website behaved like a static online brochure — unappealing for a Buy Now, Pay Later mobile-app business. It failed to build trust, drive app downloads, or properly separate the marketing presence from app functionality while serving both shoppers and merchants.",
    solution:
      'Starting with a brand workshop, Lemolite translated Tamanna\'s rebrand into a modern UI/UX with smooth motion and light/dark modes. Two clear homepage paths — "Shop & Split" for customers and "Partner & Grow" for merchants — sit alongside an interactive payment calculator, a smart merchant carousel, a persistent app-download panel with QR, and a trust section highlighting Sharia compliance, security, and no hidden or late fees.',
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
    url: "https://bot-butler.com/",
    thumbLabel: "QR dining PWA · web app",
    services: "PWA Development · UI/UX · Platform Engineering",
    stacks: ["PWA", "React", "Node.js", "MongoDB"],
    tagline: "A QR-based dine-in & drive-thru ordering platform.",
    problem:
      "Restaurants faced friction in dine-in and drive-thru ordering, and needed a faster, more reliable way to take, prepare, fulfil and get paid for orders. The platform operator also needed to onboard and oversee multiple restaurants from one place.",
    solution:
      "Lemolite built a QR-code Progressive Web App where diners scan a branch-specific code, browse and customise the menu, and pay from their own device — for both dine-in and drive-thru. Live queue position, real-time status, and an in-app buzzer keep service smooth, while geofencing limits ordering to within range of each restaurant.",
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
    url: "https://depoter.com/",
    thumbLabel: "logistics website · web",
    services: "Web Development · UI/UX · SEO",
    stacks: ["React", "Node.js", "Express", "MongoDB"],
    tagline: "A conversion-focused, bilingual logistics website for the GCC.",
    problem:
      "Depoter wanted to build trust among global D2C, B2B and marketplace brands and capture leads within 30 seconds of a visit, while ranking highly across Gulf Cooperation Council markets. Its prior presence read like a brochure and did little to convert.",
    solution:
      'Lemolite delivered a storytelling, "wow-factor" website with trust-building hero content, clear CTAs and fast lead-generation forms. Built bilingual (English and Arabic) and mobile-first, with SEO-friendly URLs, optimized metadata, and an SEO blog targeting GCC logistics keywords.',
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
    url: "https://agbpetrochemicals.com/",
    thumbLabel: "corporate site · web",
    services: "Corporate Website Design · Branding",
    stacks: ["WordPress", "PHP", "SEO"],
    tagline: "An enterprise-grade corporate site for a petrochemical trader.",
    problem:
      "AGB Petrochemicals needed to modernize a limited digital presence, convey credibility to B2B buyers, and present its product range in a structured way that captured qualified inquiries instead of scattered emails.",
    solution:
      'Lemolite delivered a conversion-focused corporate website under the slogan "Your Source for Petro Excellence" — with a structured product catalog, company story (Director\'s Desk, mission and vision), HSE policies, and inquiry forms routed by product to the sales team.',
    description:
      "A responsive corporate platform: Home, About Us, Our Products and Contact, with a catalog spanning oils (Mineral Oil, MHO, Furnace Oil, Tyre Oil, Light Diesel Oil) and solvents (Mineral Turpentine Oil, Opal C9, Naphtha), an FAQ, HSE content, and customer/business inquiry forms with product selection.",
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
    url: "https://relyblue.com/",
    thumbLabel: "OT security site · web",
    services: "UI/UX · Web Development · Conversion Optimization",
    stacks: ["Javascript", "PHP", "MySQL", "Html", "CSS"],
    tagline: "A premium services website for an OT cybersecurity advisory.",
    problem:
      "RelyBlue offers complex operational-technology (OT) cybersecurity services to industrial clients, but needed to communicate them clearly, build trust, and convert visitors into qualified, high-intent leads.",
    solution:
      "Lemolite built a premium, SaaS-inspired website that structures RelyBlue's OT cybersecurity offering into clear, standards-aligned service lines — referencing frameworks like IEC 62443, NIST, NCA OTCC and ISA — and is optimized end-to-end for conversion and lead quality.",
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
    url: "https://rishcloudtech.com/",
    thumbLabel: "cloud services site · web",
    services: "Web Development · Cloud Solutions UX",
    stacks: ["React", "Node.js", "MongoDB"],
    tagline: "A modern technology website that generates enterprise leads.",
    problem:
      "Rish Cloud Tech needed to clearly communicate technical cloud and IT services to enterprise buyers and turn that clarity into a steady pipeline of qualified consultations.",
    solution:
      "Lemolite developed a modern technology website with interactive service showcases that make complex cloud offerings easy to understand, paired with lead and consultation flows aimed at enterprise decision-makers.",
    description:
      "A responsive site with interactive service showcases, clear solution narratives, and consultation/enquiry capture — designed to communicate technical depth while driving qualified enterprise leads.",
    results: [
      { value: "+200%", label: "Qualified leads" },
      { value: "+85%", label: "Engagement increase" },
      { value: "+55%", label: "Consultation growth" },
    ],
  },
];
