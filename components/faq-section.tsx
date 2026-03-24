"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What does REUBAX do?",
    answer:
      "REUBAX helps businesses find and choose the right AI implementation partner.",
  },
  {
    question: "Does REUBAX build AI solutions itself?",
    answer:
      "No. REUBAX focuses on partner selection and introductions.",
  },
  {
    question: "How do you choose partners?",
    answer:
      "We match based on fit, experience, specialization, and the needs of the project.",
  },
  {
    question: "Is there any upfront cost to work with REUBAX?",
    answer:
      "No upfront cost. REUBAX is only compensated when the right partner is selected.",
  },
  {
    question: "Who is REUBAX for?",
    answer:
      "REUBAX is for businesses exploring AI and looking for the right external implementation partner.",
  },
  {
    question: "Can AI consulting firms join the network?",
    answer:
      "Yes. Firms can apply to join the REUBAX partner network for relevant opportunities.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const sectionId = useId();

  return (
    <section className="section-shell section-band">
      <div className="grid gap-8 xl:grid-cols-[1.18fr_0.82fr] xl:gap-10">
        <MotionSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Common Questions, Answered"
            description="Short, direct answers to common questions about working with REUBAX."
          />

          <Card className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
            <div className="divide-y divide-slate-200">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `${sectionId}-panel-${index}`;
                const buttonId = `${sectionId}-button-${index}`;

                return (
                  <div key={item.question} className="px-5 py-2 md:px-7">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((current) => (current === index ? -1 : index))
                      }
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[1.05rem] font-semibold leading-7 text-slate-950 md:text-[1.15rem]">
                        {item.question}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-slate-600 transition duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pr-12 text-[0.98rem] leading-7 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </MotionSection>

        <MotionSection delay={0.08}>
          <Card className="dark-panel h-full p-8 md:p-10">
            <span className="inline-flex items-center rounded-full border border-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
              Still have questions?
            </span>
            <h3 className="mt-6 max-w-sm text-[2rem] font-semibold leading-[1.05] text-cyan">
              Get a clear answer from the REUBAX team
            </h3>
            <p className="mt-4 max-w-md text-[1rem] leading-7 text-slate-700">
              If you&apos;re evaluating AI implementation and want help choosing the
              right partner, we can help.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row xl:flex-col xl:items-start">
              <Button size="xl" asChild>
  <a
    href="https://outlook.office.com/book/REUBAXIntroCall@reubax.ca/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book a conversation
  </a>
</Button>
              <Link
                href="mailto:maxlevy@reubax.ca"
                className="text-sm font-medium text-slate-800 underline underline-offset-4 transition hover:text-white"
              >
                Email maxlevy@reubax.ca
              </Link>
            </div>
          </Card>
        </MotionSection>
      </div>
    </section>
  );
}
