"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "key-findings", label: "Key Findings" },
  { id: "influencer-profiles", label: "Influencer Profiles" },
  { id: "ranked-comparison", label: "Ranked Comparison (by Influence)" },
  {
    id: "ranked-comparison-literacy-talks",
    label: "Ranked Comparison (Literacy Talks)",
  },
  {
    id: "ranked-comparison-social-media",
    label: "Ranked Comparison (Social Media)",
  },
  { id: "source-links", label: "Source Links" },
];

export function ReportNavigation() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportMid = scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= viewportMid) {
          setActiveSection(sections[i].id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Report sections"
      className="sticky top-24 z-40 w-full md:w-auto md:max-w-[200px]"
    >
      <div className="flex md:flex-col gap-1 p-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "relative w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                isActive
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="reportNavActive"
                  className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {section.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
