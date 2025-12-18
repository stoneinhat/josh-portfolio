"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none"
      >
        <div className="flex items-center gap-2 pointer-events-auto">
            {/* Main Pill */}
            <div className="flex items-center p-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/[0.03] ring-1 ring-black/[0.05]">
                
                {/* Logo Pill */}
                <motion.button
                    onClick={() => scrollToSection("#home")}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-bold text-sm mr-2 hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    JT
                </motion.button>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.replace("#", "");
                        return (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                                    isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden pr-2">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block pl-2 border-l border-gray-200 ml-2">
                    <button
                        onClick={() => scrollToSection("#contact")}
                        className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Let's Talk
                    </button>
                </div>
            </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-24 inset-x-4 z-50 md:hidden"
            >
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl ring-1 ring-black/5 p-4 space-y-2">
                    {navItems.map((item) => {
                         const isActive = activeSection === item.href.replace("#", "");
                         return (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className={cn(
                                    "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                    isActive 
                                        ? "bg-gray-100 text-gray-900" 
                                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                )}
                            >
                                {item.label}
                            </button>
                         );
                    })}
                     <button
                        onClick={() => scrollToSection("#contact")}
                        className="w-full mt-2 px-4 py-3 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Let's Talk
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
