"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectResults, projects } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type ProjectCard = {
  id: string;
  group: "ai" | "client";
  title: string;
  description: string;
  tags: string[];
  image?: string;
  darkImage?: string;
  link?: string;
  icon?: LucideIcon;
  iconGradient?: string;
  todo?: string;
};

function ProjectMedia({
  project,
  featured = false,
}: {
  project: ProjectCard;
  featured?: boolean;
}) {
  const spacing = featured ? "mb-0" : "mb-6";

  if (project.icon) {
    const Icon = project.icon;
    const iconCard = (
      <div
        className={`relative aspect-video overflow-hidden rounded-lg ${spacing} flex items-center justify-center bg-gradient-to-br ${project.iconGradient ?? "from-gray-700 to-gray-900"}`}
      >
        <Icon className="h-20 w-20 text-white/90" strokeWidth={1.25} />
      </div>
    );

    if (!project.link) {
      return iconCard;
    }

    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {iconCard}
      </a>
    );
  }

  const image = (
    <>
      {project.id === "celebree-school" ? (
        <>
          <div className="relative w-full max-w-[300px] h-auto aspect-[300/72] dark:hidden">
            <Image
              src={project.image!}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="300px"
              quality={100}
              unoptimized
            />
          </div>
          <div className="relative w-full max-w-[300px] h-auto aspect-[300/72] hidden dark:block">
            <Image
              src={project.darkImage ?? project.image!}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="300px"
              quality={100}
              unoptimized
            />
          </div>
        </>
      ) : (
        <>
          <Image
            src={project.image!}
            alt={project.title}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105 dark:hidden"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={project.darkImage ?? project.image!}
            alt={project.title}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105 hidden dark:block"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </>
      )}
    </>
  );

  const frameClass = `block relative aspect-video overflow-hidden rounded-lg ${spacing} flex items-center justify-center ${
    project.id === "modern-metals" || project.id === "celebree-school"
      ? "bg-gray-900 dark:bg-gray-800"
      : "bg-gray-100 dark:bg-gray-800"
  }`;

  if (!project.link) {
    return <div className={frameClass}>{image}</div>;
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={frameClass}
    >
      {image}
    </a>
  );
}

function ProjectBody({ project }: { project: ProjectCard }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span key={tag} className="text-sm text-gray-600 dark:text-gray-400">
            {tag}
            {tagIndex < project.tags.length - 1 && (
              <span className="text-gray-300 dark:text-gray-600 ml-2">•</span>
            )}
          </span>
        ))}
      </div>

      {project.todo && (
        <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
          {project.todo}
        </p>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
        >
          View Live Site
          <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const typedProjects = projects as ProjectCard[];
  const aiProjects = typedProjects.filter((project) => project.group === "ai");
  const clientProjects = typedProjects.filter((project) => project.group === "client");

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="mb-20">
          <h3 className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            AI Tooling
          </h3>
          <div className="grid gap-12 md:grid-cols-2">
            {aiProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 0 ? "group md:col-span-2" : "group"}
              >
                {index === 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <ProjectMedia project={project} featured />
                    <ProjectBody project={project} />
                  </div>
                ) : (
                  <>
                    <ProjectMedia project={project} />
                    <ProjectBody project={project} />
                  </>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 border-y border-gray-100 py-10 dark:border-gray-800"
        >
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Results
          </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {projectResults.map((result) => (
              <div key={result.label} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {result.value}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <h3 className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Client Work
          </h3>
          <div className="grid gap-12 md:grid-cols-2">
            {clientProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group"
              >
                <ProjectMedia project={project} />
                <ProjectBody project={project} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
