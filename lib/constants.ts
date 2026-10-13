import {
  ArrowLeftRight,
  Bot,
  Code2,
  Database,
  Eye,
  FileSearch,
  Gauge,
  ServerCog,
  Workflow,
  Wrench,
} from "lucide-react";

export const personalInfo = {
  name: "Joshua Tesch",
  title: "Full-Stack Web Developer",
  email: "joshuastesch@gmail.com",
  phone: "801-703-1750",
  website: "joshuatesch.dev",
  tagline:
    "Full-stack developer building WordPress sites, modern web apps, and AI tooling.",
  summary:
    "Currently owning the marketing website for Reading Horizons: performance, SEO, analytics, and the AI tooling that automates it.",
  bio: "I'm a full-stack web developer with 4+ years building production WordPress, headless CMS, and JavaScript applications. Today I'm the technical owner of a marketing website: architecture, Core Web Vitals, technical SEO, analytics, accessibility, and increasingly the content strategy behind them. I also build AI tooling that does real work: an MCP server that lets AI assistants manage WordPress, and an autonomous multi-LLM pipeline that audits SEO and AI visibility every week.",
  currentRole: "Web Developer at Reading Horizons",
};

export const skills = [
  {
    category: "AI & Automation",
    icon: Bot,
    items: [
      "Claude API",
      "OpenAI API (GPT-4o)",
      "Google Gemini API",
      "Model Context Protocol (MCP)",
      "Multi-LLM Orchestration",
      "Python 3",
      "Node.js",
      "Programmatic content automation",
    ],
  },
  {
    category: "Frontend Development",
    icon: Code2,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "Tailwind CSS",
      "SCSS",
      "Bootstrap",
    ],
  },
  {
    category: "CMS & E-Commerce",
    icon: Database,
    items: [
      "WordPress",
      "Headless WordPress",
      "Shopify (Liquid)",
      "Strapi",
      "WooCommerce",
      "Advanced Custom Fields",
      "Elementor",
      "Gutenberg",
    ],
  },
  {
    category: "Performance & Optimization",
    icon: Gauge,
    items: [
      "Page Speed Optimization",
      "Core Web Vitals",
      "Accessibility (WCAG)",
      "SEO Best Practices",
      "Technical SEO & structured data",
      "Google Tag Manager / GA4",
      "Responsive Design",
      "UX/UI Best Practices",
    ],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    items: [
      "Git Version Control",
      "Docker",
      "Node.js",
      "PHP",
      "Python",
      "AWS (EC2, S3)",
      "Vercel",
      "Figma",
      "Adobe XD",
    ],
  },
];

export const projects = [
  {
    id: "wp-expert-mcp",
    group: "ai" as const,
    title: "wp-expert MCP Server",
    description:
      "25-tool Node.js MCP server that lets AI assistants (Claude, Cursor, VS Code) manage WordPress. Dual-site routing, write confirmation gate, dynamic REST path resolution, ACF fallback, and a self-refreshing schema. Six modules: Read, Write, Advise, Yoast, Media, and ACF.",
    icon: ServerCog,
    iconGradient: "from-blue-500 to-indigo-600",
    tags: ["Node.js", "@modelcontextprotocol/sdk", "WordPress REST API"],
  },
  {
    id: "seo-audit-pipeline",
    group: "ai" as const,
    title: "Autonomous SEO Audit Pipeline",
    description:
      "Replaced a manual analyst workflow with one CLI command. Pulls Search Console, DataForSEO, and Firecrawl data, tracks 70+ week-over-week metrics, and publishes a tabbed HTML dashboard to WordPress via REST.",
    icon: Workflow,
    iconGradient: "from-emerald-500 to-cyan-600",
    tags: ["Python", "OpenAI", "Gemini", "Claude", "GSC", "DataForSEO", "Firecrawl"],
  },
  {
    id: "ai-visibility-tracker",
    group: "ai" as const,
    title: "AI Visibility Tracker",
    description:
      "30 queries per run across GPT-4o-mini, Gemini Flash, and Claude Haiku. Measures Share of Voice against 7 competitors with citation extraction.",
    icon: Eye,
    iconGradient: "from-violet-500 to-purple-600",
    tags: ["Python", "GPT-4o-mini", "Gemini Flash", "Claude Haiku"],
  },
  {
    id: "site-audit-analyzer",
    group: "ai" as const,
    title: "Site Audit Analyzer",
    description:
      "Ingests crawls of up to 700 pages, runs 15 SEO checks across 3 severity tiers, produces a weighted 0–100 health score, and audits AI-crawler access rules in robots.txt.",
    icon: FileSearch,
    iconGradient: "from-amber-500 to-orange-600",
    tags: ["Python", "Firecrawl"],
  },
  {
    id: "piped-peony",
    group: "client" as const,
    title: "The Piped Peony",
    description:
      "Full-stack e-commerce web application using Next.js and TypeScript, styled with Tailwind CSS and powered by a Strapi headless CMS. Implemented modular components and API-driven content with focus on UI patterns, accessibility, and performance improvements.",
    image: "/piped-peony.png",
    link: "https://thepipedpeony.com",
    tags: ["Next.js", "TypeScript", "Strapi", "Tailwind CSS", "Headless CMS"],
  },
  {
    id: "modern-metals",
    group: "client" as const,
    title: "Modern Metals",
    description:
      "Custom WordPress theme using Elementor and Advanced Custom Fields (ACF), creating flexible, reusable templates and a fully client-editable content system. Contributed UX and layout recommendations to improve content clarity, responsiveness, and overall site performance.",
    image: "/modern-metals.svg",
    link: "https://modernmetalsutah.com",
    tags: ["WordPress", "Elementor", "ACF", "PHP", "Custom Theme"],
  },
  {
    id: "swan-toilets",
    group: "client" as const,
    title: "SWAN Toilets",
    description:
      "Custom WordPress eCommerce site using Elementor and WooCommerce. Implemented reusable templates, optimized product layouts, and contributed UX recommendations to improve product discovery and conversion flow.",
    image: "/swan%20toilets.svg",
    darkImage: "/swan%20toilets-light.svg",
    link: "https://swantoilets.com",
    tags: ["WordPress", "WooCommerce", "Elementor", "E-Commerce"],
  },
  {
    id: "forevering-jewelry",
    group: "client" as const,
    title: "Forevering Jewelry",
    description:
      "Custom Shopify eCommerce site using Liquid, delivering a responsive, conversion-focused storefront. Implemented reusable theme components and contributed UX improvements to product presentation and checkout flow.",
    image: "/forevering.svg",
    darkImage: "/forevering-white.svg",
    link: "https://foreveringjewelry.com",
    tags: ["Shopify", "Liquid", "E-Commerce", "Responsive Design"],
  },
  {
    id: "celebree-school",
    group: "client" as const,
    title: "Celebree School",
    description:
      "Custom WordPress theme using Elementor and ACF for a national brand. Built reusable templates and a client-editable content system while contributing UX and performance improvements to support accessibility and consistent branding across locations.",
    image: "/celebree-logo-300x72.webp",
    link: "https://celebree.com",
    tags: ["WordPress", "Elementor", "ACF", "Enterprise", "Multi-location"],
  },
  {
    id: "rise-migration",
    group: "client" as const,
    title: "RISE Migration",
    description:
      "Squarespace to WordPress/WP Engine with 26 verified redirects, DNS cutover, SPF/email continuity, SEO and schema cleanup, and alt text on all 70 images. Consolidated hosting saves ~$331/yr.",
    icon: ArrowLeftRight,
    iconGradient: "from-gray-600 to-gray-800",
    link: "https://riseliteracy.org/",
    tags: ["WordPress", "WP Engine", "DNS", "SEO"],
  },
];

export const projectResults = [
  { value: "84%", label: "CSS reduction, 696 KB to 112 KB" },
  { value: "1,308", label: "alt texts fixed programmatically" },
  { value: "~2x", label: "GA4 data inflation found and removed" },
  { value: "26", label: "verified redirects on a platform migration" },
  { value: "253", label: "documented changes, Feb–Sep 2026" },
];

export const experience = [
  {
    company: "Reading Horizons",
    role: "Web Developer: Website Engineering, AI Tooling & Marketing Strategy",
    period: "Jan 2026 – Present",
    highlights: [
      "Technical owner of the marketing website; scope expanded from development into SEO, analytics, and content strategy",
      "Built the wp-expert MCP server and a suite of Python audit/automation pipelines (see Projects)",
      "Cut Tailwind CSS 84% (696 KB to 112 KB), lazy-loaded a 12 MB Lottie asset, improved LCP, and raised mobile Lighthouse Best Practices from 81 to 100",
      "Found and removed a duplicate GA4 destination that had inflated pageviews/events ~2x; added conversion and CTA event tracking in GTM",
      "Rebuilt blog taxonomy around 9 content pillars with redirects and editor governance; bulk-pushed 124 meta descriptions, 196 title overrides, and 1,308 alt texts",
      "Completed the RISE site migration to WordPress/WP Engine (26 verified redirects)",
      "Built 5 custom blocks/CPTs and reusable Gutenberg/ACF patterns for non-technical editors",
    ],
  },
  {
    company: "STRS Development",
    role: "Web Developer",
    period: "2025 – Present",
    highlights: [
      "Collaborated on scalable, production-ready web applications",
      "Participated in discussions around usability and performance",
      "Implemented features and UI updates",
    ],
  },
  {
    company: "Omni Creative",
    role: "Web Developer, Contractor",
    period: "2024 – 2026",
    highlights: [
      "Developed custom WordPress and Shopify sites",
      "Built modular templates and reusable components",
      "Contributed feedback on layout structure and performance",
    ],
  },
  {
    company: "9th South Digital",
    role: "Web Developer, Contractor",
    period: "2022 – 2026",
    highlights: [
      "Building modern web applications across WordPress, headless CMS, and eCommerce platforms",
      "Contributing UX and performance recommendations to client projects",
      "Developing custom themes and reusable components",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/stoneinhat",
  linkedin: "https://www.linkedin.com/in/joshua-tesch-b10848100/",
  email: "mailto:joshuastesch@gmail.com",
};
