export type Category = {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string[];
  covers: string[];
};

export const categories: Category[] = [
  {
    slug: "uk-seo",
    label: "UK SEO",
    title: "UK SEO: Strategy, Costs & What Makes It Different",
    description:
      "How SEO works specifically for UK businesses — strategy, typical costs, timelines, and what separates UK search from global SEO.",
    intro: [
      "UK SEO follows the same fundamentals as SEO anywhere — Google's ranking systems don't run different rules for different countries. What changes is context: UK search behaviour, UK competitors, UK-specific directories and citations, and the mix of local versus national intent that shapes so many British search terms.",
      "A workable UK SEO strategy usually starts with understanding whether a business is competing nationally, regionally, or hyper-locally, because that changes almost everything downstream — which keywords are realistic, how much content is needed, and how much weight local SEO factors like Google Business Profile should carry.",
    ],
    covers: [
      "What SEO is and how it works in a UK context",
      "Typical UK SEO costs and pricing models",
      "Realistic timelines for UK search visibility",
      "UK SEO versus global SEO",
    ],
  },
  {
    slug: "local-seo",
    label: "Local SEO",
    title: "Local SEO for UK Businesses",
    description:
      "How to improve visibility in local Google results and Google Maps for UK service-area and location-based businesses.",
    intro: [
      "Local SEO governs how businesses appear for searches with local intent — a plumber in Leeds, a dentist in Bristol, a cafe in Glasgow. It runs on a slightly different set of signals to traditional organic SEO: proximity, Google Business Profile completeness, review volume and consistency of business information (name, address, phone number) across the web.",
      "For UK businesses this matters enormously, since a large share of commercial searches carry local intent even when the searcher doesn't type a place name — Google infers location from device and search history and adjusts results accordingly.",
    ],
    covers: [
      "Ranking in Google Maps and the local pack",
      "Google Business Profile optimisation",
      "Local citations and NAP consistency",
      "Service-area business SEO",
    ],
  },
  {
    slug: "technical-seo",
    label: "Technical SEO",
    title: "Technical SEO: Crawling, Indexing & Core Web Vitals",
    description:
      "The technical foundations that let Google crawl, render and index a website properly — and the errors that quietly suppress rankings.",
    intro: [
      "Technical SEO covers everything that determines whether Google can find, crawl, render and index a website efficiently — site architecture, page speed, mobile usability, structured data, canonicalisation and crawl budget. It's foundational: even outstanding content struggles to rank if technical issues get in the way.",
      "Core Web Vitals — loading performance, interactivity and visual stability — sit inside this category too, since they measure the real-world experience Google increasingly factors into how pages are evaluated.",
    ],
    covers: [
      "Technical SEO checklists for UK websites",
      "Core Web Vitals and their impact on rankings",
      "Website speed optimisation",
      "Common technical errors that suppress rankings",
    ],
  },
  {
    slug: "content-strategy",
    label: "Content Strategy",
    title: "Content Strategy: Writing Content That Actually Ranks",
    description:
      "How to plan, structure and write content that satisfies search intent and builds topical authority over time.",
    intro: [
      "Content strategy is where search intent meets substance — deciding what to write, in what format, at what depth, and how it connects to everything else on a site. Ranking content isn't necessarily the longest; it's the version that most completely and clearly answers what the searcher actually wants.",
      "A strong content strategy builds topic clusters rather than isolated pages, linking supporting articles back to pillar content so a site develops genuine depth on the subjects it wants to be known for.",
    ],
    covers: [
      "Writing SEO content that satisfies intent",
      "Topic clusters and internal linking",
      "Content brief templates",
      "Matching content format to search intent",
    ],
  },
  {
    slug: "link-building",
    label: "Link Building",
    title: "Ethical Link Building for UK Websites",
    description:
      "What makes a backlink valuable, and how to earn links ethically rather than buying or manipulating them.",
    intro: [
      "Backlinks remain one of the clearer signals Google uses to gauge authority and trust — but not all links carry equal weight, and manipulative link building carries real risk. A link from a relevant, established, genuinely read site tends to matter far more than dozens from low-quality directories.",
      "Ethical link building focuses on being genuinely link-worthy: original research, useful tools, expert commentary and digital PR that earns coverage because it deserves it, not because it was paid for.",
    ],
    covers: [
      "What makes a backlink valuable",
      "Ethical link building strategies",
      "Digital PR for SEO",
      "Internal linking strategy",
    ],
  },
  {
    slug: "keyword-research",
    label: "Keyword Research",
    title: "Keyword Research for UK Businesses",
    description:
      "How to find keywords that are realistic to rank for, understand search intent, and prioritise the right terms.",
    intro: [
      "Keyword research is the process of identifying what people actually search for, how often, and — critically — what they mean by it. Ranking for a high-volume term is worthless if it doesn't match what a business offers or convert once visitors arrive.",
      "For UK businesses, this often means balancing national head terms against long-tail, local, and service-specific phrases that carry lower volume but far higher intent and realistic ranking potential.",
    ],
    covers: [
      "Finding keywords that can realistically rank",
      "Long-tail keywords for UK businesses",
      "Search intent explained",
      "A practical keyword research process",
    ],
  },
  {
    slug: "on-page-seo",
    label: "On-Page SEO",
    title: "On-Page SEO: Titles, Headings & Content Optimisation",
    description:
      "How to optimise individual pages — titles, headings, content structure and internal links — for both users and search engines.",
    intro: [
      "On-page SEO covers everything within a single page that helps it rank and helps visitors understand it: title tags, meta descriptions, heading structure, keyword placement, internal links and content formatting. It's the layer between content strategy and technical SEO.",
      "Good on-page SEO is largely invisible to a human reader — it simply makes a well-structured page easier for both people and search engines to understand.",
    ],
    covers: [
      "Title tag and meta description best practice",
      "Heading structure and semantic HTML",
      "Internal linking on individual pages",
      "Avoiding keyword stuffing",
    ],
  },
  {
    slug: "google-business-profile",
    label: "Google Business Profile",
    title: "Google Business Profile Optimisation",
    description:
      "How to set up and optimise a Google Business Profile to improve visibility in local search and Google Maps.",
    intro: [
      "Google Business Profile (formerly Google My Business) is the free listing that powers a business's appearance in Google Maps and the local pack. For UK businesses with a physical location or defined service area, it's often one of the highest-leverage SEO assets available.",
      "A complete, accurate, actively maintained profile — correct categories, service areas, photos, and a steady flow of genuine reviews — consistently outperforms a neglected one, independent of the website behind it.",
    ],
    covers: [
      "Setting up and verifying a Google Business Profile",
      "Choosing the right categories and attributes",
      "Managing reviews",
      "Posts, photos and profile completeness",
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
