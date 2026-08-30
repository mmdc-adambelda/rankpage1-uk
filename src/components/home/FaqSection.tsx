import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqBlock from "@/components/article/FaqBlock";

const faqs = [
  {
    question: "Can you really guarantee I'll rank #1 on Google?",
    answer:
      "No, and you should be wary of anyone who promises it. Google's ranking system is dynamic, personalised, and weighs hundreds of signals — no one outside Google can guarantee an exact position. What genuinely helps is consistently improving the factors within your control: search intent match, content quality, technical health, authority and user experience.",
  },
  {
    question: "How long does SEO take to work in the UK?",
    answer:
      "Most UK websites see meaningful movement within three to six months of sustained work, with more competitive terms often taking six to twelve months or longer. It depends heavily on your starting point, competition level and how consistently the work is done.",
  },
  {
    question: "Is this website affiliated with an SEO agency?",
    answer:
      "Rank Page 1 is an independent educational resource. It occasionally references professional SEO services, including Acendia, as an optional next step for readers who want hands-on help — but the guides themselves are written to stand on their own.",
  },
  {
    question: "Do I need to hire someone, or can I do SEO myself?",
    answer:
      "Plenty of UK business owners successfully improve their own rankings using the fundamentals covered in our guides — particularly for local and niche terms. More competitive, high-value keywords often justify bringing in specialist help once the basics are in place.",
  },
];

export default function FaqSection() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <FaqBlock items={faqs} />
      </Container>
    </section>
  );
}
