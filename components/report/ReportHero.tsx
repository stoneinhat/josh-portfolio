import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { executiveSummary } from "@/lib/report-data";

// Handshake: https://www.vecteezy.com/vector-art/45722693-hand-shake-icon-agreement-and-cooperation-symbol

export function ReportHero() {
  return (
    <header
      id="report-hero"
      className="relative pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
      >
        <ArrowLeft size={18} aria-hidden />
        Back to Portfolio
      </Link>
      <div className="relative w-full aspect-[21/9] max-h-64 rounded-xl overflow-hidden mb-8 bg-white dark:bg-gray-800 flex items-center justify-center p-8">
        <Image
          src="/vecteezy_hand-shake-icon-agreement-and-cooperation-symbol_.jpg"
          alt="Handshake - agreement and cooperation"
          width={320}
          height={160}
          className="h-full w-auto max-h-44 object-contain object-center dark:invert"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Prominent Literacy Influencers and Outreach Opportunities
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {executiveSummary}
      </p>
    </header>
  );
}
