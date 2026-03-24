import type { Metadata } from "next";
import { ArrowRight, ClipboardList, SearchCheck, UsersRound } from "lucide-react";

import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how REUBAX assesses requirements, identifies likely-fit consulting firms, and supports introductions.",
};

const process = [
  {
    icon: ClipboardList,
    title: "Assess the requirement",
    description:
      "We begin with the business context, the initiative under consideration, and the type of consulting support required.",
  },
  {
    icon: SearchCheck,
    title: "Identify suitable firms",
    description:
      "We review our network and identify consulting firms whose capabilities and delivery approach align with the requirement.",
  },
  {
    icon: UsersRound,
    title: "Support the introduction",
    description:
      "We facilitate introductions with enough context for both sides to enter the discussion well prepared.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear process for AI partner selection."
        description="REUBAX provides a structured route from early requirement to the right consulting conversation."
      />

      <section className="section-shell pt-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((item, index) => (
            <MotionSection key={item.title} delay={index * 0.08}>
              <Card className="grid-card h-full">
                <item.icon className="h-10 w-10 text-cyan-700" />
                <h2 className="mt-6 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-4 leading-7">{item.description}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Why It Works"
          title="A more disciplined front end to the buying process."
          description="REUBAX helps companies enter partner discussions with more clarity and helps consulting firms meet buyers with defined requirements."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            "Reduces time spent on broad vendor search and early-stage filtering.",
            "Improves partner relevance by focusing on specialization and fit.",
            "Keeps REUBAX in an intermediary role rather than a delivery role.",
            "Creates a clearer process for both buyers and consulting partners.",
          ].map((point) => (
            <MotionSection key={point}>
              <Card className="grid-card">
                <p className="text-lg leading-7 text-slate-700">{point}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
        <div className="mt-10">
           <Button size="xl" asChild>
  <a
    href="https://outlook.office.com/book/REUBAXIntroCall@reubax.ca/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book a conversation
  </a>
</Button>
        </div>
      </section>
    </>
  );
}
