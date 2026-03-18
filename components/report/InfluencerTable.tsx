import {
  rankedInfluencers,
  literacyTalksInfluencers,
  socialMediaInfluencers,
  type LiteracyTalksLikelihood,
  type SocialMediaLikelihood,
} from "@/lib/report-data";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const literacyTalksLikelihoodStyles: Record<LiteracyTalksLikelihood, string> = {
  "Very high":
    "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  High: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "Medium-high":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  Medium:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "Medium-low":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

const socialMediaLikelihoodStyles: Record<SocialMediaLikelihood, string> = {
  ...literacyTalksLikelihoodStyles,
  Low: "bg-gray-100 text-gray-700 dark:bg-gray-700/60 dark:text-gray-300",
};

export function InfluencerTable() {
  return (
    <section
      id="ranked-comparison"
      className="scroll-mt-28 px-4 md:px-8 py-12 max-w-5xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
        Ranked Comparison
      </h2>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
        by Influence
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Full list of 20 prominent influencers with platform, audience estimate,
        and recent activity. Audience sizes are the best publicly visible metric
        found; unavailable details are marked Unspecified.
      </p>

      {/* Desktop: table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-lg">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                Rank
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                Influencer
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                Segment
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                Primary platform(s)
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                Audience size
              </th>
              <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                Recent activity
              </th>
            </tr>
          </thead>
          <tbody>
            {rankedInfluencers.map((row) => (
              <tr
                key={row.rank}
                className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
              >
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-medium">
                  {row.rank}
                </td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium">
                  {row.name}
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {row.segment}
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 max-w-[200px]">
                  {row.primaryPlatforms}
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {row.audienceSize}
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 max-w-[220px]">
                  {row.recentActivity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-3">
        {rankedInfluencers.map((row) => (
          <Card
            key={row.rank}
            className={cn(
              "dark:bg-gray-800/80 dark:border-gray-700 dark:shadow-gray-900/20 p-4"
            )}
          >
            <div className="flex justify-between items-start gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                #{row.rank}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {row.segment}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {row.name}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Platform:
              </span>{" "}
              {row.primaryPlatforms}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Audience:
              </span>{" "}
              {row.audienceSize}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Recent:
              </span>{" "}
              {row.recentActivity}
            </p>
          </Card>
        ))}
      </div>

      {/* Ranked Comparison: by Likelihood of Literacy Talks Guest Appearance */}
      <section
        id="ranked-comparison-literacy-talks"
        className="scroll-mt-28 pt-16 mt-4 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          Ranked Comparison
        </h2>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
          by Likelihood of Literacy Talks Guest Appearance
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Top 10 influencers ranked by fit with Literacy Talks editorial lane,
          current RH guest pipeline, and likelihood of accepting a guest spot.
        </p>

        <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-lg">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Rank
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Influencer
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Likelihood
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Tier
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Rationale
                </th>
              </tr>
            </thead>
            <tbody>
              {literacyTalksInfluencers.map((row) => (
                <tr
                  key={row.rank}
                  className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-medium">
                    {row.rank}
                  </td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium">
                    {row.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold",
                        literacyTalksLikelihoodStyles[row.likelihood]
                      )}
                    >
                      {row.likelihood}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {row.tierLabel}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 max-w-[280px]">
                    {row.rationale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3">
          {literacyTalksInfluencers.map((row) => (
            <Card
              key={row.rank}
              className={cn(
                "dark:bg-gray-800/80 dark:border-gray-700 dark:shadow-gray-900/20 p-4"
              )}
            >
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  #{row.rank}
                </span>
                <span
                  className={cn(
                    "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold",
                    literacyTalksLikelihoodStyles[row.likelihood]
                  )}
                >
                  {row.likelihood}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {row.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {row.tierLabel}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {row.rationale}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Ranked Comparison: by Likelihood of Social Media Collaboration */}
      <section
        id="ranked-comparison-social-media"
        className="scroll-mt-28 pt-16 mt-4 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          Ranked Comparison
        </h2>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
          by Likelihood of Social Media Collaboration
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Top 10 ranked by benefit to Reading Horizons and likelihood of
          collaboration on YouTube, Instagram, X, LinkedIn, and similar
          channels—weighted for audience fit, content compatibility, and
          conflict risk.
        </p>

        <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-lg">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Rank
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Influencer
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Likelihood
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Benefit to RH
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                  Rationale
                </th>
              </tr>
            </thead>
            <tbody>
              {socialMediaInfluencers.map((row) => (
                <tr
                  key={row.rank}
                  className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-medium">
                    {row.rank}
                  </td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium">
                    {row.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold",
                        socialMediaLikelihoodStyles[row.likelihood]
                      )}
                    >
                      {row.likelihood}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {row.benefitScore}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 max-w-[280px]">
                    {row.rationale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3">
          {socialMediaInfluencers.map((row) => (
            <Card
              key={row.rank}
              className={cn(
                "dark:bg-gray-800/80 dark:border-gray-700 dark:shadow-gray-900/20 p-4"
              )}
            >
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  #{row.rank}
                </span>
                <span
                  className={cn(
                    "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold",
                    socialMediaLikelihoodStyles[row.likelihood]
                  )}
                >
                  {row.likelihood}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {row.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {row.benefitScore} benefit
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {row.rationale}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
