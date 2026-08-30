import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import ArticleLayout from "@/components/article/ArticleLayout";
import KeyTakeaways from "@/components/article/KeyTakeaways";
import FaqBlock from "@/components/article/FaqBlock";
import CtaBlock from "@/components/article/CtaBlock";
import RelatedArticles from "@/components/article/RelatedArticles";
import { getArticle } from "@/lib/articles";
import { extractToc } from "@/lib/toc";
import { SITE } from "@/lib/site";

const SLUG = "how-to-rank-1-on-google-uk";

export function generateMetadata(): Metadata {
  const article = getArticle(SLUG);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    alternates: { canonical: `/${SLUG}/` },
    openGraph: {
      type: "article",
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      publishedTime: article.frontmatter.publishedAt,
      modifiedTime: article.frontmatter.updatedAt,
    },
  };
}

const mdxComponents = { KeyTakeaways, FaqBlock, CtaBlock };

export default function PillarPage() {
  const article = getArticle(SLUG);
  if (!article) return null;

  const toc = extractToc(article.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.frontmatter.title,
    description: article.frontmatter.description,
    datePublished: article.frontmatter.publishedAt,
    dateModified: article.frontmatter.updatedAt ?? article.frontmatter.publishedAt,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/${SLUG}/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How to Rank #1 on Google UK" }]}
        category={article.frontmatter.category}
        title={article.frontmatter.title}
        description={article.frontmatter.description}
        publishedAt={article.frontmatter.publishedAt}
        updatedAt={article.frontmatter.updatedAt}
        readingTimeMinutes={article.readingTimeMinutes}
        toc={toc}
        related={
          <RelatedArticles
            items={[
              { title: "UK SEO", href: "/uk-seo/", description: "Strategy, cost and timelines for UK businesses." },
              { title: "Local SEO", href: "/local-seo/", description: "Ranking in Google Maps and local results." },
              { title: "Technical SEO", href: "/technical-seo/", description: "Crawling, indexing and Core Web Vitals." },
              { title: "Keyword Research", href: "/keyword-research/", description: "Finding keywords you can realistically rank for." },
              { title: "Content Strategy", href: "/content-strategy/", description: "Writing content that satisfies search intent." },
              { title: "Link Building", href: "/link-building/", description: "Earning backlinks ethically." },
            ]}
          />
        }
      >
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{
            // Trusted, locally-authored content only — allow JS expression attributes
            // (e.g. `items={[...]}`) which next-mdx-remote strips by default for safety.
            blockJS: false,
            mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
          }}
        />
      </ArticleLayout>
    </>
  );
}
