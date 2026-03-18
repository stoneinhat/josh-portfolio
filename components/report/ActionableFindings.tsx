import {
  Megaphone,
  UserCheck,
  Handshake,
  MessageSquare,
  Ban,
  BookOpen,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const findings = [
  {
    id: "channel",
    icon: Megaphone,
    title: "Best near-term channel",
    summary:
      "Podcast guesting, social media collaboration, and conference/keynote partnerships where you showcase structured literacy implementation evidence—not product endorsements. For social collaboration, prioritize Melissa & Lori, Natalie Wexler, Timothy Shanahan, and Kareem Weaver (topic-first, value content). Journalist-led and nonprofit-led channels are especially suitable.",
  },
  {
    id: "highest-likelihood",
    icon: UserCheck,
    title: "Highest-likelihood contact",
    summary:
      "Maria Murray and Kareem Weaver are already in the active Literacy Talks guest pipeline (Tier 1). For general outreach, Timothy Shanahan (Medium–High) remains a strong option: evidence-focused, no vendor ties; position as methodological discussion with transparent evidence packets.",
  },
  {
    id: "partnership-orgs",
    icon: Handshake,
    title: "Partnership-ready organizations",
    summary:
      "The Reading League (Maria Murray) and FULCRUM (Kareem Weaver) are mission-aligned. Pursue co-hosted training, chapter sponsorships, or implementation clinics—not influencer marketing.",
  },
  {
    id: "content-hooks",
    icon: MessageSquare,
    title: "Content hook patterns",
    summary:
      "Lead with implementation case studies, equity outcomes, and “what districts actually did” narratives. Suggested angles: MTSS design, practice routines, teacher workload, decoding + knowledge-building integration.",
  },
  {
    id: "underserved",
    icon: BookOpen,
    title: "Underserved angle",
    summary:
      "Adult and workforce literacy gets less coverage. Offering credible case material that includes adult literacy can differentiate and attract interest from investigative and policy-focused channels.",
  },
  {
    id: "segments",
    icon: Users,
    title: "Influencer segments",
    summary:
      "Three clusters: investigative/media leaders (narrative shift), ecosystem builders (SoR institutions and PD), and high-authority authors/researchers (curriculum and classroom impact at scale). Tailor outreach to each.",
  },
  {
    id: "avoid",
    icon: Ban,
    title: "Avoid",
    summary:
      "Direct product pitch framing. Journalist channels (e.g., Emily Hanford) expect scrutiny and systemic evidence; they are unlikely to endorse a named program.",
  },
];

export function ActionableFindings() {
  return (
    <section
      id="key-findings"
      className="scroll-mt-28 py-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Actionable Findings
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {findings.map(({ id, icon: Icon, title, summary }) => (
          <Card
            key={id}
            className={cn(
              "dark:bg-gray-800/80 dark:border-gray-700 dark:shadow-gray-900/20",
              "dark:hover:shadow-gray-900/30"
            )}
          >
            <div className="flex gap-4">
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                  id === "avoid"
                    ? "bg-yellow-400 dark:bg-yellow-500 text-red-600 dark:text-red-500"
                    : "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300"
                )}
              >
                <Icon size={20} aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {summary}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
