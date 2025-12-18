"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { GridPattern } from "./ui/GridPattern";
import { personalInfo, socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          numSquares={200}
          maxOpacity={0.5}
          duration={4}
          repeatDelay={1}
          interactive
          colors={[
            "text-gray-300 fill-gray-300",
            "text-gray-400 fill-gray-400",
            "text-gray-200 fill-gray-200",
          ]}
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 stroke-gray-200"
          )}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block rounded-full bg-blue-50 px-4 py-1.5 backdrop-blur-sm border border-blue-100"
          >
            <span className="text-sm font-medium text-blue-600">
              👋 Hi, my name is
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            <span className="bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {personalInfo.tagline}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 sm:text-xl leading-relaxed"
          >
            I&apos;m a <span className="font-bold text-gray-900">{personalInfo.title}</span> specializing
            in building <span className="text-green-600 font-medium">modern web experiences</span> with a focus on performance,
            accessibility, and user experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={scrollToProjects}
              variant="primary"
              size="lg"
              className="group w-full sm:w-auto min-w-[160px] bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 border-none"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto min-w-[160px] border-2 border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600"
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            {[
              { href: socialLinks.github, icon: Github, label: "GitHub", color: "hover:text-gray-900" },
              { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
              { href: socialLinks.email, icon: Mail, label: "Email", color: "hover:text-red-500" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className={cn("text-gray-400 transition-colors", social.color)}
                aria-label={social.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-7 w-7" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-widest group-hover:text-blue-500 transition-colors">Scroll</span>
          <ArrowDown className="h-4 w-4 text-blue-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
