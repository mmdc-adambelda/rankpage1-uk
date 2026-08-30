import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import RankingFramework from "@/components/home/RankingFramework";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import SeoChecklist from "@/components/home/SeoChecklist";
import DifficultyExplorer from "@/components/home/DifficultyExplorer";
import LeadFormSection from "@/components/home/LeadFormSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Rank #1 on Google UK | Practical SEO Guides & Strategies",
  description:
    "Learn how to improve your Google rankings in the UK with practical SEO guides covering keywords, content, technical SEO, local search, links and more.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <RankingFramework />
      <FeaturedGuides />
      <SeoChecklist />
      <DifficultyExplorer />
      <LeadFormSection />
      <FaqSection />
    </>
  );
}
