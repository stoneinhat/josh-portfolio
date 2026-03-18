"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import {
  profiledInfluencers,
  type ProfiledInfluencer,
  type Likelihood,
} from "@/lib/report-data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ProfileAvatar({ influencer }: { influencer: ProfiledInfluencer }) {
  const [imgError, setImgError] = useState(false);

  if (!influencer.imageUrl || imgError) {
    return (
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
        <span className="text-white text-lg font-bold leading-none">
          {getInitials(influencer.name)}
        </span>
      </div>
    );
  }

  return (
    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md ring-2 ring-gray-100 dark:ring-gray-700">
      <Image
        src={influencer.imageUrl}
        alt={influencer.name}
        width={80}
        height={80}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
        unoptimized
      />
    </div>
  );
}

function LikelihoodBadge({
  likelihood,
  rationale,
}: {
  likelihood: Likelihood;
  rationale: string;
}) {
  const styles: Record<Likelihood, string> = {
    Low: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    "Low-Medium":
      "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    Medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    "Medium-High":
      "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  };
  return (
    <div className="flex flex-col gap-1">
      <span
        className={cn(
          "inline-flex w-fit px-2.5 py-1 rounded-full text-xs font-semibold",
          styles[likelihood]
        )}
      >
        Likelihood: {likelihood}
      </span>
      <p className="text-xs text-gray-500 dark:text-gray-400">{rationale}</p>
    </div>
  );
}

function ProfileContent({ influencer }: { influencer: ProfiledInfluencer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <ProfileAvatar influencer={influencer} />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {influencer.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {influencer.role}
            </p>
            {influencer.affiliations && (
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {influencer.affiliations}
              </p>
            )}
          </div>
        </div>
        <LikelihoodBadge
          likelihood={influencer.likelihood}
          rationale={influencer.likelihoodRationale}
        />
      </div>

      <div className="grid gap-3 text-sm">
        <p>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Geographic base:
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-400">
            {influencer.geographicBase}
          </span>
        </p>
        <p>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Primary audience:
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-400">
            {influencer.primaryAudience}
          </span>
        </p>
        <div>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Platforms & reach:
          </span>
          <ul className="mt-1 list-disc list-inside text-gray-600 dark:text-gray-400">
            {influencer.platforms.map((p, i) => (
              <li key={i}>
                {p.name} — {p.audienceMetric}
              </li>
            ))}
          </ul>
        </div>
        <p>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Recent activity:
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-400">
            {influencer.recentActivity.description} ({influencer.recentActivity.date})
          </span>
        </p>
      </div>

      <Card
        className={cn(
          "border-l-4 border-l-blue-500 dark:bg-gray-800/80 dark:border-gray-700 dark:border-l-blue-500"
        )}
      >
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Recommended outreach strategy
        </h4>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="font-medium text-gray-700 dark:text-gray-300">
              Hook
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 pl-0 mt-0.5">
              {influencer.outreachStrategy.hook}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-700 dark:text-gray-300">
              Channel
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 pl-0 mt-0.5">
              {influencer.outreachStrategy.channel}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-700 dark:text-gray-300">
              Mutual benefit
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 pl-0 mt-0.5">
              {influencer.outreachStrategy.mutualBenefit}
            </dd>
          </div>
        </dl>
      </Card>
    </motion.div>
  );
}

export function InfluencerTabs() {
  const [activeId, setActiveId] = useState(profiledInfluencers[0].id);
  const active = profiledInfluencers.find((i) => i.id === activeId)!;

  return (
    <section
      id="influencer-profiles"
      className="scroll-mt-28 py-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Influencer Profiles
      </h2>

      <div className="flex overflow-x-auto gap-1 pb-2 mb-6 -mx-1 scrollbar-thin">
        {profiledInfluencers.map((influencer) => {
          const isActive = activeId === influencer.id;
          return (
            <button
              key={influencer.id}
              type="button"
              onClick={() => setActiveId(influencer.id)}
              className={cn(
                "relative flex-shrink-0 px-4 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors",
                isActive
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="influencerTabActive"
                  className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {influencer.name}
            </button>
          );
        })}
      </div>

      <Card
        className={cn(
          "dark:bg-gray-800/80 dark:border-gray-700 dark:shadow-gray-900/20 min-h-[320px]"
        )}
      >
        <AnimatePresence mode="wait">
          <ProfileContent key={activeId} influencer={active} />
        </AnimatePresence>
      </Card>
    </section>
  );
}
