export type Likelihood =
  | "Low"
  | "Low-Medium"
  | "Medium"
  | "Medium-High";

export interface InfluencerPlatform {
  name: string;
  audienceMetric: string;
}

export interface OutreachStrategy {
  hook: string;
  channel: string;
  mutualBenefit: string;
}

export interface ProfiledInfluencer {
  id: string;
  name: string;
  role: string;
  affiliations: string;
  imageUrl?: string;
  geographicBase: string;
  primaryAudience: string;
  platforms: InfluencerPlatform[];
  recentActivity: { description: string; date: string };
  outreachStrategy: OutreachStrategy;
  likelihood: Likelihood;
  likelihoodRationale: string;
  segment: string;
}

export interface RankedInfluencer {
  rank: number;
  name: string;
  segment: string;
  primaryPlatforms: string;
  audienceSize: string;
  recentActivity: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export type LiteracyTalksLikelihood =
  | "Very high"
  | "High"
  | "Medium-high"
  | "Medium"
  | "Medium-low";

export type SocialMediaLikelihood =
  | LiteracyTalksLikelihood
  | "Low";

export interface LiteracyTalksInfluencer {
  rank: number;
  name: string;
  likelihood: LiteracyTalksLikelihood;
  rationale: string;
  tier: 1 | 2 | 3;
  tierLabel: string;
}

export interface SocialMediaInfluencer {
  rank: number;
  name: string;
  benefitScore: string;
  likelihood: SocialMediaLikelihood;
  rationale: string;
}

export const profiledInfluencers: ProfiledInfluencer[] = [
  {
    id: "emily-hanford",
    name: "Emily Hanford",
    role: "Senior correspondent and producer at APM Reports; creator/host of Sold a Story",
    affiliations: "Unspecified vendor ties; media org APM Reports; Planet Word Journalist-in-Residence",
    imageUrl: "https://pbs.twimg.com/profile_images/1945284797858762752/dKRtIYq3.jpg",
    geographicBase: "United States (personal base unspecified)",
    primaryAudience:
      "Policymakers, education journalists, district/state leaders, and the general public (via investigative media reach)",
    platforms: [
      {
        name: "Podcast/audio journalism",
        audienceMetric:
          ">15M downloads (reported lifetime; >3.5M through Jan 2023)",
      },
    ],
    recentActivity: {
      description: "Published a special Sold a Story live episode from Planet Word",
      date: "Dec 9, 2025",
    },
    outreachStrategy: {
      hook:
        "What it looks like when districts actually operationalize foundational skills + knowledge-building—what worked, what didn't, and what surprised teachers.",
      channel:
        "Sold a Story professional contact route plus APM editorial contacts",
      mutualBenefit:
        "Credible case study material on what effective implementation looks like after policy shifts (and what barriers remain), ideally including adult literacy angles that get less coverage.",
    },
    likelihood: "Low",
    likelihoodRationale:
      "Her work is positioned as investigative journalism; collaborators should expect scrutiny and a focus on systemic evidence rather than endorsing a named program.",
    segment: "K–12",
  },
  {
    id: "lucy-calkins",
    name: "Lucy Calkins",
    role:
      "Founder and President of The Reading & Writing Project at Mossflower; founding director of Teachers College Reading and Writing Project",
    affiliations:
      "Units of Study curriculum ecosystem (Mossflower / Heinemann distribution)",
    imageUrl: "https://static01.nyt.com/images/2023/09/11/multimedia/00NAT-Calkins-ltqh/00NAT-Calkins-ltqh-mediumSquareAt3X.jpg",
    geographicBase: "United States (New York, NY area)",
    primaryAudience:
      "Teachers, literacy coaches, school/district leaders implementing workshop-based reading/writing models",
    platforms: [
      {
        name: "Curriculum + professional development (Mossflower/Units of Study)",
        audienceMetric: "YouTube proxy: Mossflower channel ~2.49K subscribers",
      },
    ],
    recentActivity: {
      description: "Mossflower lists an India institute following a keynote to school leaders in India",
      date: "May 23, 2026",
    },
    outreachStrategy: {
      hook:
        "Co-present a 'rebalancing literacy' implementation session for leaders focused on practical scheduling, MTSS, and measurable decoding gains without losing writing workshop minutes.",
      channel: "Mossflower contact routes and event/program channels",
      mutualBenefit:
        "Show how districts can reconcile skill growth needs with writing-rich, volume-rich literacy blocks by tightening foundational skill instruction and freeing time for writing/knowledge.",
    },
    likelihood: "Low",
    likelihoodRationale:
      "Her brand is strongly associated with Units of Study; collaboration is possible in a neutral 'systems design' format but unlikely as a positive product spotlight.",
    segment: "K–12",
  },
  {
    id: "susan-lambert",
    name: "Susan Lambert",
    role:
      "Host of Science of Reading: The Podcast; Amplify chief academic officer of literacy",
    affiliations: "Amplify (K–12 curriculum/vendor)",
    imageUrl: "https://amplify.com/wp-content/uploads/2025/08/A_BMY_IntEp_SusanLambert.png",
    geographicBase: "United States (state unspecified)",
    primaryAudience:
      "Teachers, literacy leaders, and curriculum decision-makers consuming 'science of reading' practice guidance",
    platforms: [
      {
        name: "Podcast (Science of Reading: The Podcast)",
        audienceMetric: ">7M downloads; 626 Apple Podcasts ratings",
      },
    ],
    recentActivity: {
      description: "Podcast episode released (Season 10)",
      date: "Mar 11, 2026",
    },
    outreachStrategy: {
      hook:
        "What districts wish they'd known before rolling out structured literacy—MTSS design, practice routines, and teacher workload.",
      channel: "Podcast's official submission/community routes (Amplify podcast page)",
      mutualBenefit:
        "Compelling 'implementation story' content; optional sponsorship or conference programming support.",
    },
    likelihood: "Medium",
    likelihoodRationale:
      "She frequently engages practitioners/researchers publicly via the podcast, but the Amplify affiliation may create perceived competitive boundaries for explicit product promotion.",
    segment: "K–12",
  },
  {
    id: "louisa-moats",
    name: "Louisa Moats",
    role:
      "Consultant (Moats Associates); Lexia Educational Leadership Council (alumni member)",
    affiliations:
      "LETRS (lead author); Sopris West; Voyager Sopris/LANGUAGE! Live",
    imageUrl: "https://www.lexialearning.com/user_area/content_media/raw/Louisa-Moats-sq(1).jpg",
    geographicBase: "United States (state unspecified)",
    primaryAudience:
      "Teachers, literacy coaches, reading specialists, and district PD leaders",
    platforms: [
      {
        name: "Keynotes/training + program authorship",
        audienceMetric: "Unspecified (not reliably public)",
      },
    ],
    recentActivity: {
      description: "Listed as keynote for a literacy conference",
      date: "Feb 21, 2026",
    },
    outreachStrategy: {
      hook:
        "Bridging PD to classroom execution—how to prevent 'training without transfer.'",
      channel:
        "Professional speaking/consulting inquiry routes plus Lexia/leadership council pathways if appropriate",
      mutualBenefit:
        "Co-develop a public 'implementation playbook' webinar grounded in what teachers actually do daily (no 'product ad,' but concrete routines).",
    },
    likelihood: "Medium",
    likelihoodRationale:
      "Strong openness to PD environments, but existing close association with LETRS/LANGUAGE! Live ecosystems may limit willingness to spotlight another branded program.",
    segment: "K–12",
  },
  {
    id: "timothy-shanahan",
    name: "Timothy Shanahan",
    role:
      "University of Illinois Chicago faculty; prominent literacy researcher and advisor; author of Shanahan on Literacy",
    affiliations: "Unspecified vendor ties; federal panels (NRP/NELP)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Timothy_Shanahan.jpg",
    geographicBase: "United States (UIC affiliation suggests Illinois)",
    primaryAudience:
      "Teachers, literacy coaches, administrators; also policymakers via federal panel history",
    platforms: [
      {
        name: "Blog + podcast (Shanahan on Literacy)",
        audienceMetric: "X follower estimate ~25K (third-party audit)",
      },
    ],
    recentActivity: {
      description:
        "Shanahan on Literacy episode: 'How Should We Plan Reading Comprehension Lessons?'",
      date: "Feb 27, 2026",
    },
    outreachStrategy: {
      hook:
        "What changes when structured literacy is implemented with fidelity—what data should leaders actually look at?",
      channel:
        "Official website contact routes and professional email pathways via UIC or listed professional pages",
      mutualBenefit:
        "High-quality case material for his Q&A content pipeline (teacher questions + 'what the evidence says').",
    },
    likelihood: "Medium-High",
    likelihoodRationale:
      "He publicly analyzes instructional claims; he may engage if presented with transparent evidence and positioned as methodological discussion rather than marketing.",
    segment: "K–12",
  },
  {
    id: "maria-murray",
    name: "Maria Murray",
    role: "President and CEO of The Reading League",
    affiliations: "The Reading League (nonprofit); vendor ties unspecified",
    imageUrl: "https://www.thereadingleague.org/wp-content/uploads/2022/03/Murray_Maria-012-400x400.jpg",
    geographicBase: "United States (The Reading League's address is Syracuse, NY)",
    primaryAudience:
      "Educators, school leaders, higher-ed faculty, and families engaging with science-of-reading resources and chapters",
    platforms: [
      {
        name: "Nonprofit platform + chapters",
        audienceMetric: "YouTube proxy ~16.8K subscribers",
      },
    ],
    recentActivity: {
      description: "TRL press release notes award recognition",
      date: "Mar 12, 2025",
    },
    outreachStrategy: {
      hook:
        "District implementation clinic: reducing the 'last mile' gap from legislation to classroom routine.",
      channel:
        "TRL organizational contact (info@thereadingleague.org) and partnership/speaking engagement pathways",
      mutualBenefit:
        "Expand evidence-aligned professional learning access; provide implementation support materials usable by chapters.",
    },
    likelihood: "Medium",
    likelihoodRationale:
      "The Reading League is partnership-oriented, but would expect strong public evidence alignment and careful avoidance of appearing to endorse a single vendor unless structured as a neutral case study.",
    segment: "K–12",
  },
  {
    id: "natalie-wexler",
    name: "Natalie Wexler",
    role:
      "Education writer; author of Beyond the Science of Reading (ASCD, 2025) and The Knowledge Gap; Substack publisher (Minding the Gap)",
    affiliations:
      "Publisher ASCD; Knowledge Matters Campaign (podcast); no curriculum vendor affiliation identified",
    imageUrl: "https://pbs.twimg.com/profile_images/1046788634656018432/ryVzZYli.jpg",
    geographicBase: "United States (state unspecified)",
    primaryAudience:
      "Policymakers, curriculum leaders, and teachers interested in knowledge-building + comprehension instruction",
    platforms: [
      {
        name: "Substack newsletter",
        audienceMetric: "23K+ subscribers",
      },
    ],
    recentActivity: {
      description: "ASCD blog post 'Redefining the Science of Reading' listed on book page",
      date: "Feb 5, 2025",
    },
    outreachStrategy: {
      hook:
        "How districts prevent comprehension 'fade-out' by pairing strong decoding intervention with coherent knowledge-building.",
      channel: "Her site contact routes and Substack messaging (where available)",
      mutualBenefit:
        "Concrete examples of curriculum coherence, implementation constraints, and how schools avoid 'phonics-only' misunderstandings.",
    },
    likelihood: "Medium",
    likelihoodRationale:
      "She often engages in public discussion and podcasts; she is more likely to discuss evidence-informed implementation than to perform a branded 'review.'",
    segment: "K–12",
  },
  {
    id: "sally-shaywitz",
    name: "Sally Shaywitz",
    role:
      "Audrey G. Ratner Professor in Learning Development (Yale); Co-Founder/Co-Director Yale Center for Dyslexia & Creativity",
    affiliations: "Pearson's Shaywitz DyslexiaScreen",
    imageUrl: "https://assets-us-01.kc-usercontent.com/9bc15d1f-8a5c-007d-b507-e3496e85af86/f10ad4d7-16b4-452d-9e6d-d1fd6da7beb7/Sally_Shaywitz.webp",
    geographicBase: "United States (Yale, New Haven, CT)",
    primaryAudience:
      "Educators, clinicians, parents, and policymakers focused on dyslexia identification and intervention",
    platforms: [
      {
        name: "Academic + public scholarship; book reach",
        audienceMetric:
          "Overcoming Dyslexia first edition sold >400,000 copies (social follower metric unspecified)",
      },
    ],
    recentActivity: {
      description: "Appeared in 'Voices of Dyslexia' episode",
      date: "Mar 18, 2025",
    },
    outreachStrategy: {
      hook:
        "From screening to effective instruction: what implementation looks like at scale.",
      channel:
        "Academic/professional booking channels or direct Yale Center contact pathways; speaker-bureau routes exist but are secondary",
      mutualBenefit:
        "Disseminate best practices for translating dyslexia science into school routines.",
    },
    likelihood: "Medium",
    likelihoodRationale:
      "High relevance to dyslexia and evidence-aligned instruction, but likely to avoid explicit endorsements; more feasible as a research/practice keynote or webinar.",
    segment: "K–12 + adult",
  },
  {
    id: "kareem-weaver",
    name: "Kareem Weaver",
    role: "Co-Founder & Executive Director of FULCRUM",
    affiliations:
      "Advocacy featured in The Right to Read documentary; no curriculum vendor affiliation identified",
    imageUrl: "https://home.edweb.net/wp-content/uploads/Weaver-Kareem_headshot_200x200_20230328.png",
    geographicBase: "United States (Oakland, CA)",
    primaryAudience:
      "Policymakers, district leaders, community advocates, and educators motivated by literacy-as-civil-right framing",
    platforms: [
      {
        name: "Speaking + advocacy + film",
        audienceMetric: "X follower estimate ~3.1K (third-party audit)",
      },
    ],
    recentActivity: {
      description: "Project Peace lists him as featured speaker for Fall 2025 series",
      date: "Sep 21, 2025",
    },
    outreachStrategy: {
      hook:
        "Literacy as justice—what scalable classroom change actually looks like.",
      channel:
        "FULCRUM organizational contact routes and speaking/event organizers",
      mutualBenefit:
        "Amplify evidence of what improves reading outcomes in real systems; potential co-hosted community literacy events.",
    },
    likelihood: "Medium",
    likelihoodRationale:
      "He participates in public-facing speaking and advocacy; collaboration is plausible if framed around equity outcomes and community impact rather than brand-first promotion.",
    segment: "K–12",
  },
  {
    id: "mark-seidenberg",
    name: "Mark Seidenberg",
    role: "Professor Emeritus, University of Wisconsin–Madison (Psychology)",
    affiliations:
      "Unspecified vendor ties; public commentator via blog/newsletter",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/68c43a403abd2e7a81a32013/fdae9070-d6b9-4a30-9841-80597d1c27a9/Mark+Seidenberg+Office.jpg",
    geographicBase: "United States (Wisconsin)",
    primaryAudience:
      "Researchers, teacher educators, literacy leaders; also broadly engaged educators via blog commentary",
    platforms: [
      {
        name: "Blog/newsletter",
        audienceMetric: "Subscriber count unspecified",
      },
    ],
    recentActivity: {
      description: "Blog category listing shows a phonemic awareness post",
      date: "Nov 19, 2025",
    },
    outreachStrategy: {
      hook:
        "Design review: what classroom constraints mean for 'science-aligned' program design.",
      channel: "Official site contact methods and university pathways",
      mutualBenefit:
        "Strengthen the public conversation on what reading science implies for classroom practice, including areas of disagreement.",
    },
    likelihood: "Low-Medium",
    likelihoodRationale:
      "Likely to engage critically; more suitable for panel discussion or design critique than promotional coverage.",
    segment: "K–12",
  },
];

export const rankedInfluencers: RankedInfluencer[] = [
  {
    rank: 1,
    name: "Emily Hanford",
    segment: "K–12",
    primaryPlatforms:
      "Podcast/audio journalism (Sold a Story), APM Reports",
    audienceSize: ">15M podcast downloads (Sold a Story)",
    recentActivity: "Sold a Story live episode page dated Dec 9, 2025",
  },
  {
    rank: 2,
    name: "Lucy Calkins",
    segment: "K–12",
    primaryPlatforms: "Mossflower/Units of Study ecosystem; PD; YouTube",
    audienceSize: "~2.49K YouTube subs (Mossflower)",
    recentActivity: "Mossflower 'India Institute' dated May 23, 2026",
  },
  {
    rank: 3,
    name: "Susan Lambert",
    segment: "K–12",
    primaryPlatforms: "Podcast (Science of Reading: The Podcast)",
    audienceSize: ">7M downloads; 626 Apple Podcasts ratings",
    recentActivity: "Episode listing dated Mar 11, 2026",
  },
  {
    rank: 4,
    name: "Louisa Moats",
    segment: "K–12",
    primaryPlatforms: "PD/keynotes; LETRS ecosystem",
    audienceSize: "Unspecified",
    recentActivity: "Keynote listing dated Feb 21, 2026",
  },
  {
    rank: 5,
    name: "Timothy Shanahan",
    segment: "K–12",
    primaryPlatforms: "Blog + podcast (Shanahan on Literacy)",
    audienceSize: "~25K X followers (third-party audit)",
    recentActivity: "Episode dated Feb 27, 2026",
  },
  {
    rank: 6,
    name: "Maria Murray",
    segment: "K–12",
    primaryPlatforms: "Nonprofit movement leadership (The Reading League); YouTube",
    audienceSize: "~16.8K YouTube subs (Social Blade)",
    recentActivity: "Award announcement dated Mar 12, 2025",
  },
  {
    rank: 7,
    name: "Natalie Wexler",
    segment: "K–12",
    primaryPlatforms: "Substack newsletter; books; podcast hosting",
    audienceSize: "23K+ newsletter subscribers",
    recentActivity: "ASCD blog entry date listed Feb 5, 2025",
  },
  {
    rank: 8,
    name: "Sally Shaywitz",
    segment: "K–12 + adult",
    primaryPlatforms: "Academic + public scholarship; podcasts",
    audienceSize: "Book sales proxy >400K (Overcoming Dyslexia, 1st ed.)",
    recentActivity: "Podcast episode dated Mar 18, 2025",
  },
  {
    rank: 9,
    name: "Kareem Weaver",
    segment: "K–12",
    primaryPlatforms: "Advocacy/speaking; documentary",
    audienceSize: "~3.1K X followers (third-party audit)",
    recentActivity: "Speaker event page dated Sep 21, 2025",
  },
  {
    rank: 10,
    name: "Mark Seidenberg",
    segment: "K–12",
    primaryPlatforms: "Blog/newsletter; research translation",
    audienceSize: "Unspecified",
    recentActivity: "Blog post dated Nov 19, 2025",
  },
  {
    rank: 11,
    name: "Maryanne Wolf",
    segment: "K–12",
    primaryPlatforms: "Author/speaker; academic center leadership",
    audienceSize: "Unspecified",
    recentActivity: "Carroll School posting dated Apr 2, 2025 referencing her work",
  },
  {
    rank: 12,
    name: "Irene Fountas",
    segment: "K–12",
    primaryPlatforms: "F&P systems; publisher ecosystem",
    audienceSize: "Unspecified",
    recentActivity:
      "Lawsuit dismissal coverage dated May 27, 2025 (includes Fountas in named defendants)",
  },
  {
    rank: 13,
    name: "Melissa & Lori Love Literacy",
    segment: "K–12",
    primaryPlatforms: "Podcast; teacher community",
    audienceSize: "329 episodes; 4.7-star Apple rating (~420 reviews)",
    recentActivity: "Episode list shows publication marker 'FEB 20'",
  },
  {
    rank: 14,
    name: "Jan Hasbrouck",
    segment: "K–12",
    primaryPlatforms: "Speaking/webinars; fluency-focused literacy consulting",
    audienceSize: "Unspecified",
    recentActivity: "NYS Reading Association event dated Mar 18, 2026",
  },
  {
    rank: 15,
    name: "Wiley Blevins",
    segment: "K–12",
    primaryPlatforms: "Webinars/PD; phonics program authorship",
    audienceSize: "Unspecified",
    recentActivity: "Sadlier webinar registration dated Jan 30, 2025",
  },
  {
    rank: 16,
    name: "David A. Kilpatrick",
    segment: "K–12",
    primaryPlatforms:
      "Books/training on phonemic proficiency & word recognition",
    audienceSize: "Unspecified",
    recentActivity: "ESC Region 13 virtual book study dated May 7, 2026",
  },
  {
    rank: 17,
    name: "Mark Vineis",
    segment: "Adult literacy",
    primaryPlatforms: "CEO voice + organizational channels (ProLiteracy)",
    audienceSize: "ProLiteracy YouTube proxy ~9.76K subs",
    recentActivity: "ProLiteracy Annual Report labeled 2025 (CEO message)",
  },
  {
    rank: 18,
    name: "Felicia Cumings Smith",
    segment: "Adult + family literacy",
    primaryPlatforms: "NCFL leadership; public speaking; organizational channels",
    audienceSize: "NCFL YouTube ~852 subs",
    recentActivity:
      "EdNC report dated Nov 11, 2025 quotes Smith as NCFL president",
  },
  {
    rank: 19,
    name: "Andrew Roberts",
    segment: "Adult + family literacy",
    primaryPlatforms: "Barbara Bush Foundation leadership; philanthropy/public advocacy",
    audienceSize: "Unspecified",
    recentActivity:
      "Barbara Bush Fund launch PR dated Nov 6, 2025 (includes Roberts on panel)",
  },
  {
    rank: 20,
    name: "Oliver James",
    segment: "Adult literacy",
    primaryPlatforms: "TikTok + memoir/public narrative",
    audienceSize:
      "TikTok: 'more than 130,000' (press) / ~348K followers (third-party)",
    recentActivity: "Interview dated Mar 6, 2026 notes memoir release",
  },
];

export const literacyTalksInfluencers: LiteracyTalksInfluencer[] = [
  {
    rank: 1,
    name: "Maria Murray",
    likelihood: "Very high",
    rationale:
      "Already on the current RH guest schedule; her role as President & CEO of The Reading League fits the show's changemaker/leader angle almost perfectly.",
    tier: 1,
    tierLabel: "Already/near-booked",
  },
  {
    rank: 2,
    name: "Kareem Weaver",
    likelihood: "Very high",
    rationale:
      "Also already on the current RH schedule. Fits the systemic change and literacy-equity conversation the show is clearly pursuing.",
    tier: 1,
    tierLabel: "Already/near-booked",
  },
  {
    rank: 3,
    name: "Emily Hanford",
    likelihood: "High",
    rationale:
      "RH has already referenced her on past Literacy Talks content and the current schedule notes 'Maybe Emily Hanford again.' Sold a Story platform gives enormous credibility; journalistic independence keeps her below currently booked guests.",
    tier: 2,
    tierLabel: "Should actively pursue now",
  },
  {
    rank: 4,
    name: "Melissa & Lori Love Literacy",
    likelihood: "High",
    rationale:
      "The current RH schedule explicitly lists them as a target. Very podcast-native, teacher-trusted, and practical—easier to book than some purely academic names.",
    tier: 2,
    tierLabel: "Should actively pursue now",
  },
  {
    rank: 5,
    name: "Timothy Shanahan",
    likelihood: "Medium-high",
    rationale:
      "One of the strongest credible-but-accessible literacy voices: prolific, public-facing, used to interviews, not tightly locked to a single competing vendor. Strong fit for leadership- or implementation-oriented episode.",
    tier: 2,
    tierLabel: "Should actively pursue now",
  },
  {
    rank: 6,
    name: "Natalie Wexler",
    likelihood: "Medium-high",
    rationale:
      "Strong fit for RH's thought-leadership lane; bridges literacy instruction, knowledge-building, and practical school implications. RH buyer-persona work already identifies her as a meaningful influence for intervention-oriented audiences.",
    tier: 2,
    tierLabel: "Should actively pursue now",
  },
  {
    rank: 7,
    name: "Jan Hasbrouck",
    likelihood: "Medium",
    rationale:
      "Highly respected on fluency, intervention, and coaching; public-facing and still consulting. Not as obviously in RH's current guest pipeline as the top six, but credible and bookable. RH persona work shows she is already familiar to the target audience.",
    tier: 3,
    tierLabel: "Prestige gets, more friction",
  },
  {
    rank: 8,
    name: "Sally Shaywitz",
    likelihood: "Medium",
    rationale:
      "Extremely strong authority for dyslexia-focused content; fits especially well for a Dyslexia Talks sub-lane. More academic/clinical and likely harder to secure for a broad literacy conversation.",
    tier: 3,
    tierLabel: "Prestige gets, more friction",
  },
  {
    rank: 9,
    name: "Louisa Moats",
    likelihood: "Medium",
    rationale:
      "Top-tier authority and always relevant to structured literacy. Existing program/vendor associations make the politics more delicate; more likely to say yes to a substantive instructional conversation than to anything that could feel like competitor-adjacent brand lift.",
    tier: 3,
    tierLabel: "Prestige gets, more friction",
  },
  {
    rank: 10,
    name: "Susan Lambert",
    likelihood: "Medium-low",
    rationale:
      "Editorially an excellent fit. Her role at Amplify makes this harder than her résumé suggests. If RH approached around a non-promotional, field-level topic it is possible; as a routine guest, still rank below the others.",
    tier: 3,
    tierLabel: "Prestige gets, more friction",
  },
];

export const socialMediaInfluencers: SocialMediaInfluencer[] = [
  {
    rank: 1,
    name: "Melissa & Lori Love Literacy",
    benefitScore: "9.5/10",
    likelihood: "Very high",
    rationale:
      "Strongest social-media fit: platform-native, continuous publishing, active website and Facebook community, podcast with 329 episodes and 4.7 Apple rating. Brand translates research into classroom-ready practice; fits RH's teacher-facing, value-first approach. Ask should be topic-first (e.g. Science of Reading Collective live, carousel clips)—not hard product pitch. Supported by Great Minds.",
  },
  {
    rank: 2,
    name: "Natalie Wexler",
    benefitScore: "9/10",
    likelihood: "High",
    rationale:
      "Best fit if RH wants to reinforce move beyond foundational skills into broader literacy and comprehension. Free Substack, podcast, books, sizable LinkedIn audience; has participated in educator-facing collaborative formats (e.g. Melissa & Lori summer book club around The Knowledge Gap). Better for thought-leadership collab than product-forward feature.",
  },
  {
    rank: 3,
    name: "Timothy Shanahan",
    benefitScore: "8.5/10",
    likelihood: "Very high",
    rationale:
      "Unusually accessible for his stature: active site, weekly podcast, current blog, strong reputation without being tightly bound to a single commercial brand. Strong candidate for webinar-to-clips, YouTube interview, or 'expert answers educator questions' series.",
  },
  {
    rank: 4,
    name: "Kareem Weaver",
    benefitScore: "8.5/10",
    likelihood: "High",
    rationale:
      "Brings advocacy energy, civil-right-to-read framing, and real event momentum; Co-Founder/Executive Director of FULCRUM, featured in The Right to Read. FULCRUM page notes limited availability for speaking. Best for issue-based campaigns, live conversations, short reaction clips, and event partnerships rather than ongoing content series.",
  },
  {
    rank: 5,
    name: "Jan Hasbrouck",
    benefitScore: "7.5/10",
    likelihood: "High",
    rationale:
      "Very practical social collaborator; expertise highly teachable in short formats (fluency, assessment). Clearly still active across webinars, consulting, and podcast appearances. Less of a mass-audience magnet but probably easier to activate into useful educator-facing content.",
  },
  {
    rank: 6,
    name: "Maria Murray",
    benefitScore: "8/10",
    likelihood: "Medium-high",
    rationale:
      "Highly credible; The Reading League has major reach including strong LinkedIn and active speaking infrastructure. Strongest lane is nonprofit/movement leadership—collaborations tend toward product-neutral field leadership. Excellent for a Collective event; less ideal for anything that feels like vendor promotion.",
  },
  {
    rank: 7,
    name: "Louisa Moats",
    benefitScore: "9/10",
    likelihood: "Medium",
    rationale:
      "Enormous authority. Her site explicitly foregrounds connections to LETRS and LANGUAGE! Live/Voyager Sopris. A neutral scholarly appearance is conceivable; meaningful RH-branded social collaboration is harder.",
  },
  {
    rank: 8,
    name: "Emily Hanford",
    benefitScore: "10/10",
    likelihood: "Medium-low",
    rationale:
      "Biggest upside in reach and credibility (Sold a Story 15+ million downloads, broad policy impact). She is a journalist, not an influencer in the sponsored-content sense. Branded social collaboration with a literacy company is inherently unlikely; any approach would need to be around a fully independent public-interest conversation.",
  },
  {
    rank: 9,
    name: "Sally Shaywitz",
    benefitScore: "8/10",
    likelihood: "Medium-low",
    rationale:
      "Major authority in dyslexia; Yale/YCDC publish videos, interviews, and public-facing resources—valuable for evergreen dyslexia-awareness campaign. Less social-native than higher-ranked options; brand is more academic/clinical than ongoing creator-collaborator.",
  },
  {
    rank: 10,
    name: "Susan Lambert",
    benefitScore: "8.5/10",
    likelihood: "Low",
    rationale:
      "Objectively strong as a literacy media figure (large active podcast, 182 episodes, 626 Apple ratings; senior literacy leader at Amplify). That same fact makes collaboration odds poor—competitive tension is too obvious.",
  },
];

export const sourceLinks: SourceLink[] = [
  {
    label: "Emily Hanford (APM profile)",
    url: "https://www.apmreports.org/profile/emily-hanford",
  },
  {
    label: "Sold a Story episode page (example)",
    url: "https://www.apmreports.org/episode/2025/12/09/sold-a-story-emily-hanford-live-reid-lyon-margaret-goldberg",
  },
  {
    label: "APM/MPR Impact Report PDF",
    url: "https://mprminute.mpr.org/wp-content/uploads/2023/03/23881_MPR_MPRMinute-Investigative-News_PDF_Final.pdf",
  },
  {
    label: "Mossflower (Lucy Calkins team page)",
    url: "https://mossflower.com/our-team/",
  },
  {
    label: "Mossflower events",
    url: "https://mossflower.com/events/",
  },
  {
    label: "Science of Reading: The Podcast (Amplify)",
    url: "https://amplify.com/science-of-reading-the-podcast/",
  },
  {
    label: "Louisa Moats (Lexia profile)",
    url: "https://www.lexialearning.com/company/educational-leadership-council/louisa-moats",
  },
  {
    label: "Timothy Shanahan (bio)",
    url: "https://www.shanahanonliteracy.com/biography",
  },
  {
    label: "Timothy Shanahan (UIC profile)",
    url: "https://education.uic.edu/profiles/shanahan-timothy/",
  },
  {
    label: "The Reading League",
    url: "https://www.thereadingleague.org/",
  },
  {
    label: "Natalie Wexler (book page w/ dated links)",
    url: "https://nataliewexler.com/beyond-the-science-of-reading/",
  },
  {
    label: "Sally Shaywitz (Yale profile)",
    url: "https://medicine.yale.edu/profile/sally-shaywitz/",
  },
  {
    label: "Kareem Weaver (FULCRUM bio)",
    url: "https://www.fulcrumliteracy.org/kareem-weaver",
  },
  {
    label: "Mark Seidenberg (UW profile)",
    url: "https://psych.wisc.edu/staff/seidenberg-mark-s/",
  },
  {
    label: "ProLiteracy (Mark Vineis bio)",
    url: "https://www.proliteracy.org/about/who-we-are/people/mark-vineis/",
  },
  {
    label: "NCFL (FamiliesLearning.org)",
    url: "https://familieslearning.org/",
  },
  {
    label: "Barbara Bush Foundation (news re: fund)",
    url: "https://bush41.org/news/george-barbara-bush-foundation-launches-barbara-bush-fund-for-family-literacy",
  },
  {
    label: "Oliver James interview",
    url: "https://www.wordsandmoney.com/in-conversation-literacy-advocate-and-influencer-oliver-james/",
  },
];

export const executiveSummary =
  "The most influential literacy voices shaping K–12 practice and adult/basic literacy policy in 2026 cluster into three groups: investigative/media leaders who moved the public narrative (notably Emily Hanford and Sold a Story), ecosystem builders who organized the 'science of reading' movement into durable institutions and professional learning channels (e.g., Susan Lambert, Maria Murray), and high-authority authors/researchers whose books, curricula, and professional development materials have directly steered classroom instruction at scale (e.g., Lucy Calkins, Louisa Moats, Timothy Shanahan). For Reading Horizons outreach, the strongest near-term pathways are podcast guesting and conference/keynote partnerships where structured literacy implementation evidence can be showcased without requiring influencer endorsement, especially for journalist-led or nonprofit-led channels.";
