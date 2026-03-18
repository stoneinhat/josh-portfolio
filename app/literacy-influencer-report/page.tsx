import type { Metadata } from "next";
import Link from "next/link";
import { ReportHero } from "@/components/report/ReportHero";
import { ReportNavigation } from "@/components/report/ReportNavigation";
import { ActionableFindings } from "@/components/report/ActionableFindings";
import { InfluencerTabs } from "@/components/report/InfluencerTabs";
import { InfluencerTable } from "@/components/report/InfluencerTable";
import { sourceLinks } from "@/lib/report-data";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Literacy Influencer Report | Joshua Tesch",
  description:
    "Prominent literacy influencers and outreach opportunities for Reading Horizons — key findings, profiles, and ranked comparison.",
};

export default function LiteracyInfluencerReportPage() {
  return (
    <div className="min-h-screen pb-20">
      <ReportHero />

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-8 max-w-6xl mx-auto">
        <aside className="flex-shrink-0 order-1">
          <ReportNavigation />
        </aside>
        <main className="flex-1 min-w-0 order-2">
          <ActionableFindings />
          <InfluencerTabs />
          <InfluencerTable />

          <section
            id="source-links"
            className="scroll-mt-28 px-0 py-12 max-w-4xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Source Links
            </h2>
            <ul className="space-y-2">
              {sourceLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {link.label}
                    <ExternalLink size={14} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
