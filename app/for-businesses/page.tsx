import type { Metadata } from "next";
import { Building2, CheckCircle2, Clock3, ShieldCheck, Target } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "For companies seeking a more structured way to identify the right AI implementation partner.",
};

export default function ForBusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Identify the right AI implementation partner."
        description="REUBAX helps companies pursuing AI initiatives meet consulting firms with the right capability, specialization, and delivery profile."
      />

      <section className="section-shell pt-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Reduce selection risk",
              description:
                "Avoid spending weeks reviewing firms that are not suited to the work.",
            },
            {
              icon: Clock3,
              title: "Save internal time",
              description:
                "Let your team focus on decisions rather than the early stages of vendor search.",
            },
            {
              icon: Target,
              title: "Improve partner fit",
              description:
                "Meet firms aligned to the use case, constraints, and level of execution required.",
            },
            {
              icon: Building2,
              title: "Keep the process grounded",
              description:
                "Approach partner selection with a process tied to business needs, not a broad market search.",
            },
          ].map((item) => (
            <MotionSection key={item.title}>
              <Card className="grid-card h-full">
                <item.icon className="h-9 w-9 text-cyan-700" />
                <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 leading-7">{item.description}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Ideal Situations"
          title="Where REUBAX is most useful."
          description="REUBAX is most relevant when partner quality matters and the market is too broad to search efficiently."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            "You are assessing an AI initiative and need help identifying the right consulting profile.",
            "There is internal interest in AI, but no clear shortlist of firms to evaluate.",
            "You want to compare credible partners without running an open-ended vendor search.",
          ].map((item) => (
            <MotionSection key={item}>
              <Card className="grid-card h-full">
                <p className="text-lg leading-8 text-slate-700">{item}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Book a Conversation</span>
            <h2 className="section-title">
              Tell us what you are evaluating.
            </h2>
            <p className="section-copy">
              Share a brief overview of the initiative and REUBAX can assess
              the requirement and identify suitable consulting partners.
            </p>
            <div className="trust-list mt-8">
              {[
                "The form is designed for companies seeking consulting support rather than software demos.",
                "A concise brief is enough. You do not need a fully defined scope.",
                "REUBAX uses the information to assess fit and identify likely partner profiles.",
              ].map((item) => (
                <div key={item} className="trust-item">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <MotionSection>
            <InquiryForm
              audience="business"
              title="Business inquiry"
              description="For companies seeking an AI consulting or implementation partner."
            />
          </MotionSection>
        </div>
      </section>
    </>
  );
}
