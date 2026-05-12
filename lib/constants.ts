import { Bot, Code2, Database, Gauge, ServerCog, Workflow, Wrench } from "lucide-react";

export const personalInfo = {
  name: "Joshua Tesch",
  title: "Web Developer",
  email: "joshuastesch@gmail.com",
  phone: "801-703-1750",
  website: "joshuatesch.dev",
  tagline: "Building Modern Web Experiences",
  bio: "Website Engineer developer with hands-on experience building and maintaining modern web applications across WordPress, headless CMS, and eCommerce platforms. Skilled in Next.js, React, Headless WordPress, PHP, and JavaScript, with a strong focus on UX/UI, performance optimization, and maintainable code. Regularly contributes recommendations around layout, content structure, and technical improvements to support usability, page speed, and conversion goals while collaborating with cross-functional teams.",
  currentRole: "Currently working with 9th South Digital",
};

export const skills = [
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
      "Responsive Design",
      "UX/UI Best Practices",
    ],
  },
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
    title: "wp-expert MCP Server",
    description:
      "A 25-tool Model Context Protocol server exposing full WordPress site management to AI assistants. Features dual-site routing, write confirmation gate, dynamic REST resolution, and a self-refreshing schema system.",
    icon: ServerCog,
    iconGradient: "from-blue-500 to-indigo-600",
    tags: ["Node.js", "MCP SDK", "WordPress REST API"],
  },
  {
    id: "seo-audit-pipeline",
    title: "Autonomous SEO Audit Pipeline",
    description:
      "End-to-end weekly SEO audit system that orchestrates rankings, keyword data, multi-LLM brand visibility tracking, and site health scoring — then publishes a rendered dashboard to WordPress automatically. One CLI command, zero manual steps.",
    icon: Workflow,
    iconGradient: "from-emerald-500 to-cyan-600",
    tags: ["Python", "OpenAI API", "Gemini API", "Claude API", "DataForSEO", "Firecrawl"],
  },
  {
    id: "piped-peony",
    title: "The Piped Peony",
    description:
      "Full-stack e-commerce web application using Next.js and TypeScript, styled with Tailwind CSS and powered by a Strapi headless CMS. Implemented modular components and API-driven content with focus on UI patterns, accessibility, and performance improvements.",
    image: "/piped-peony.png",
    link: "https://thepipedpeony.com",
    tags: ["Next.js", "TypeScript", "Strapi", "Tailwind CSS", "Headless CMS"],
  },
  {
    id: "modern-metals",
    title: "Modern Metals",
    description:
      "Custom WordPress theme using Elementor and Advanced Custom Fields (ACF), creating flexible, reusable templates and a fully client-editable content system. Contributed UX and layout recommendations to improve content clarity, responsiveness, and overall site performance.",
    image: "/modern-metals.svg",
    link: "https://modernmetalsutah.com",
    tags: ["WordPress", "Elementor", "ACF", "PHP", "Custom Theme"],
  },
  {
    id: "swan-toilets",
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
    title: "Celebree School",
    description:
      "Custom WordPress theme using Elementor and ACF for a national brand. Built reusable templates and a client-editable content system while contributing UX and performance improvements to support accessibility and consistent branding across locations.",
    image: "/celebree-logo-300x72.webp",
    link: "https://celebree.com",
    tags: ["WordPress", "Elementor", "ACF", "Enterprise", "Multi-location"],
  },
];

export const experience = [
  {
    company: "Reading Horizons",
    role: "Web Developer — AI Tooling & WordPress Engineering · Full-time, In-house",
    period: "Feb 2026 – May 2026",
    highlights: [
      "Built wp-expert, a 25-tool MCP server for AI-driven WordPress management",
      "Architected a fully autonomous Python SEO audit pipeline replacing manual analyst workflows",
      "Resolved 1,308 missing image alt texts, 124 meta descriptions, and 196 title overrides programmatically",
      "Reduced CSS bundle 84% (696 KB → 112 KB); eliminated primary TBT source; implemented LCP preload",
      "Built 5 custom Gutenberg blocks and CPTs from scratch",
      "Implemented security hardening: login gating, XML-RPC disable, AJAX nonce validation",
    ],
  },
  {
    company: "9th South Digital",
    role: "Contractor",
    period: "2022 – Present",
    highlights: [
      "Building modern web applications across WordPress, headless CMS, and eCommerce platforms",
      "Contributing UX and performance recommendations to client projects",
      "Developing custom themes and reusable components",
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
    role: "Web Developer / Contractor",
    period: "2024 – Present",
    highlights: [
      "Developed custom WordPress and Shopify sites",
      "Built modular templates and reusable components",
      "Contributed feedback on layout structure and performance",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/stoneinhat",
  linkedin: "https://www.linkedin.com/in/joshua-tesch-b10848100/",
  email: "mailto:joshuastesch@gmail.com",
};

