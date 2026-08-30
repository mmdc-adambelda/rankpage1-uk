export const SITE = {
  name: "Rank Page 1",
  domain: "rankpage1.uk",
  url: "https://rankpage1.uk",
  tagline: "The practical UK guide to getting found on Google.",
  description:
    "Rank Page 1 is an independent UK SEO resource covering keyword research, on-page and technical SEO, local search, content strategy and link building — explained in plain English.",
  locale: "en_GB",
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  links: NavLink[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Learn SEO",
    href: "/how-to-rank-1-on-google-uk/",
    links: [
      { label: "How to Rank #1 on Google", href: "/how-to-rank-1-on-google-uk/", description: "The complete pillar guide" },
      { label: "UK SEO", href: "/uk-seo/", description: "Strategy for the UK market" },
      { label: "Local SEO", href: "/local-seo/", description: "Rank in local & map results" },
      { label: "Technical SEO", href: "/technical-seo/", description: "Crawling, speed & Core Web Vitals" },
      { label: "Content Strategy", href: "/content-strategy/", description: "Content that satisfies intent" },
      { label: "Link Building", href: "/link-building/", description: "Earning links ethically" },
    ],
  },
  {
    label: "Tools",
    href: "/seo-tools/",
    links: [
      { label: "SEO Tools", href: "/seo-tools/", description: "Free interactive SEO tools" },
      { label: "SEO Ranking Checklist", href: "/seo-tools/#checklist", description: "Track what you've covered" },
      { label: "Keyword Intent Tool", href: "/seo-tools/#intent", description: "Classify keyword intent" },
      { label: "SERP Snippet Preview", href: "/seo-tools/#serp-preview", description: "Preview title & description" },
    ],
  },
  {
    label: "Resources",
    href: "/seo-guides/",
    links: [
      { label: "SEO Guides", href: "/seo-guides/", description: "Every guide on Rank Page 1" },
      { label: "SEO Glossary", href: "/seo-glossary/", description: "Plain-English SEO definitions" },
    ],
  },
];

export const footerNav: NavGroup[] = [
  {
    label: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Use", href: "/terms/" },
    ],
  },
  {
    label: "Learn",
    links: [
      { label: "How to Rank #1 on Google UK", href: "/how-to-rank-1-on-google-uk/" },
      { label: "UK SEO", href: "/uk-seo/" },
      { label: "Local SEO", href: "/local-seo/" },
      { label: "Technical SEO", href: "/technical-seo/" },
    ],
  },
  {
    label: "Explore",
    links: [
      { label: "SEO Guides", href: "/seo-guides/" },
      { label: "SEO Tools", href: "/seo-tools/" },
      { label: "SEO Glossary", href: "/seo-glossary/" },
    ],
  },
];
