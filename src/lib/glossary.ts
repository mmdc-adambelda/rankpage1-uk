export type GlossaryTerm = {
  term: string;
  definition: string;
  relatedHref?: string;
  relatedLabel?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Backlink", definition: "A link from another website to yours. Quality, relevant backlinks are a strong trust and authority signal for Google.", relatedHref: "/link-building/", relatedLabel: "Link Building" },
  { term: "Canonical URL", definition: "The version of a page Google should treat as authoritative when duplicate or near-duplicate URLs exist, set via a canonical tag.", relatedHref: "/technical-seo/", relatedLabel: "Technical SEO" },
  { term: "Core Web Vitals", definition: "Google's metrics for real-world page experience: Largest Contentful Paint (loading), Interaction to Next Paint (responsiveness) and Cumulative Layout Shift (visual stability).", relatedHref: "/technical-seo/", relatedLabel: "Technical SEO" },
  { term: "Crawl budget", definition: "The number of pages a search engine will crawl on your site within a given timeframe — mainly a concern for very large websites.", relatedHref: "/technical-seo/", relatedLabel: "Technical SEO" },
  { term: "Domain authority", definition: "A third-party metric (not a Google ranking factor itself) estimating how likely a domain is to rank, based largely on its backlink profile.", relatedHref: "/link-building/", relatedLabel: "Link Building" },
  { term: "E-E-A-T", definition: "Experience, Expertise, Authoritativeness and Trustworthiness — the qualities Google's quality raters and systems look for when assessing content credibility.", relatedHref: "/content-strategy/", relatedLabel: "Content Strategy" },
  { term: "Featured snippet", definition: "A highlighted answer box shown above standard results for certain queries, pulled directly from a ranking page's content.", relatedHref: "/content-strategy/", relatedLabel: "Content Strategy" },
  { term: "Google Business Profile", definition: "A free Google listing that controls how a business appears in Google Maps and local search results.", relatedHref: "/google-business-profile/", relatedLabel: "Google Business Profile" },
  { term: "Internal link", definition: "A link from one page on a site to another page on the same site, used to distribute authority and help users and search engines navigate.", relatedHref: "/link-building/", relatedLabel: "Link Building" },
  { term: "Keyword difficulty", definition: "An estimate of how hard it would be to rank in the top results for a given keyword, based on the strength of currently ranking competitors.", relatedHref: "/keyword-research/", relatedLabel: "Keyword Research" },
  { term: "Long-tail keyword", definition: "A longer, more specific search phrase, typically lower in search volume but higher in intent and easier to rank for than a broad head term.", relatedHref: "/keyword-research/", relatedLabel: "Keyword Research" },
  { term: "Search intent", definition: "What a searcher actually wants when they type a query — informational, navigational, commercial or transactional.", relatedHref: "/keyword-research/", relatedLabel: "Keyword Research" },
  { term: "SERP", definition: "Search Engine Results Page — the page of results Google shows for a given query.", relatedHref: "/uk-seo/", relatedLabel: "UK SEO" },
  { term: "Schema markup", definition: "Structured data (usually JSON-LD) added to a page's code to help search engines understand its content and potentially unlock rich results.", relatedHref: "/technical-seo/", relatedLabel: "Technical SEO" },
  { term: "Technical SEO", definition: "The foundational work that ensures a site can be crawled, rendered and indexed efficiently by search engines.", relatedHref: "/technical-seo/", relatedLabel: "Technical SEO" },
  { term: "Topical authority", definition: "The degree of trust and expertise Google associates with a site on a given subject, typically built through comprehensive, interlinked content over time.", relatedHref: "/content-strategy/", relatedLabel: "Content Strategy" },
];
