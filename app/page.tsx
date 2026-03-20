import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  Handshake,
  Layers3,
  MoveRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { InquiryFormsPreview } from "@/components/inquiry-forms-preview";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { homeStats, proofPlaceholders } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Implementation Partner Selection",
  description:
    "REUBAX helps companies identify and meet vetted consulting partners for AI implementation.",
};

const businessBenefits = [
  "Reduce selection risk through a structured partner search.",
  "Save internal time on sourcing, screening, and shortlisting.",
  "Meet firms aligned to your use case, budget, and operating context.",
];

const partnerBenefits = [
  "Receive introductions tied to active AI initiatives.",
  "Spend less time on broad outbound and more time with relevant prospects.",
  "Join a network built around fit, relevance, and commercial discipline.",
];

const useCases = [
  {
    title: "Operations automation",
    description:
      "Connect with firms equipped to redesign internal workflows and automate repetitive operational work.",
  },
  {
    title: "Customer support transformation",
    description:
      "Identify specialists for customer support systems, knowledge workflows, and service efficiency programs.",
  },
  {
    title: "Internal intelligence systems",
    description:
      "Meet implementation partners for internal search, copilots, retrieval systems, and decision support tools.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell overflow-hidden pt-10 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <MotionSection className="max-w-3xl">
            <span className="eyebrow">AI Partner Selection</span>
            <h1 className="mt-6 max-w-5xl font-[family:var(--font-display)] text-[3.15rem] leading-[0.92] text-slate-950 md:text-[5.2rem]">
              Find the right AI partner for your business.
            </h1>
            <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-slate-600 md:text-[1.2rem]">
              At REUBAX we connect you with vetted AI consulting firms that can design and implement your solution.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="xl" asChild>
                <Link href="/for-businesses">
                  Get matched <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="xl" variant="subtle" asChild>
                <Link href="/how-it-works">See how it works</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {homeStats.map((stat) => (
                <div key={stat.label} className="metric-chip">
                  <span className="text-[1.1rem] font-semibold text-slate-950">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </MotionSection>

          <MotionSection delay={0.1}>
            <Card className="hero-card relative overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              <div className="grid gap-5">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <p className="card-kicker">
                      Demand side
                    </p>
                    <Building2 className="h-5 w-5 text-cyan-700" />
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-slate-950">
                    Companies pursuing AI initiatives
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Clarify the brief, reduce selection risk, and meet firms
                    suited to the work.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <p className="card-kicker">
                      Supply side
                    </p>
                    <BriefcaseBusiness className="h-5 w-5 text-cyan-700" />
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-slate-950">
                    Consulting firms seeking relevant demand
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Join a selected network positioned for relevant project
                    introductions.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-900 bg-slate-950 p-6 text-white md:p-7">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-cyan-200">
                    <span className="signal-dot" />
                    Why REUBAX
                  </div>
                  <p className="mt-3 text-lg leading-7 text-slate-100">
                    REUBAX connects businesses with the right AI partners 
                    and makes partner selection faster and more reliable.
                  </p>
                  <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-cyan-300" />
                      Vetted partner network
                    </div>
                    <div className="flex items-center gap-2">
                      <Compass className="h-4 w-4 text-cyan-300" />
                      Neutral intermediary
                    </div>
                    <div className="flex items-center gap-2">
                      <Handshake className="h-4 w-4 text-cyan-300" />
                      Qualified intros
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-cyan-300" />
                      Commercial focus
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </MotionSection>
        </div>
      </section>

      <section className="section-shell pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Clear role",
              description:
                "REUBAX connects you with the right AI partner. We focus on matching so you get the best fit for your needs",
            },
            {
              title: "Selective matching",
              description:
                "We carefully match each project with firms based on your companies niche.",
            },
            {
              title: "Two-sided value",
              description:
                "Businesses find the right partner faster. AI firms get access to high-quality, relevant opportunities.",
            },
          ].map((item) => (
            <MotionSection key={item.title}>
              <div className="rounded-[20px] border border-slate-200 bg-white px-5 py-5">
                <p className="card-kicker">Core principle</p>
                <h2 className="mt-3 text-lg font-semibold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      <section id="model" className="section-shell section-band pt-8">
        <div className="soft-panel overflow-hidden px-6 py-6 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Positioning</span>
              <h2 className="mt-5 max-w-xl text-[2rem] font-semibold leading-[1.04] text-slate-950 md:text-[3rem]">
                REUBAX helps businesses identify and select the right AI partners.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: FileCheck2,
                  title: "Structured qualification",
                  description:
                    "We understand your business, your needs, and your goals.",
                },
                {
                  icon: Layers3,
                  title: "Specialized matching",
                  description:
                    "We match you with the right partner for your use case.",
                },
                {
                  icon: BadgeCheck,
                  title: "Commercial clarity",
                  description:
                    "You move forward with clear and confident decisions.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-200 bg-white px-5 py-5"
                >
                  <item.icon className="h-8 w-8 text-cyan-700" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <SectionHeading
          eyebrow="The REUBAX Model"
          title="Better AI partner selection."
          description="We help businesses find and choose the right AI partners."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Vetted partner network",
              description:
                "We work with high-quality AI partners.",
            },
            {
              icon: BadgeCheck,
              title: "Independent role",
              description:
                "We connect you with the right partner.",
            },
            {
              icon: Sparkles,
              title: "Clear process",
              description:
                "Simple steps from need to partner.",
            },
          ].map((item) => (
            <MotionSection key={item.title}>
              <Card className="grid-card h-full">
                <item.icon className="h-10 w-10 text-cyan-700" />
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7">{item.description}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="section-shell section-band">
        <SectionHeading
  eyebrow="How It Works"
  title="From need to partner in 3 steps."
  description="We understand, match, and connect."
/>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
  {[
    {
      step: "01",
    title: "Understand",
    description: "We learn your goals and requirements.",
  },
  {
    step: "02",
    title: "Match",
    description: "We find the right AI partner.",
  },
  {
    step: "03",
    title: "Connect",
    description: "We introduce you and get things moving.",
  },
          ].map((item, index) => (
            <MotionSection key={item.step} delay={index * 0.08}>
              <Card className="grid-card h-full">
                <p className="text-sm font-semibold tracking-[0.24em] text-cyan-700">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7">{item.description}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
        <div className="mt-10 flex items-center">
          <Button variant="subtle" asChild>
            <Link href="/how-it-works">
              Review the process <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <MotionSection>
            <Card className="grid-card h-full">
              <span className="eyebrow">For Businesses</span>
              <h2 className="section-title mt-6 text-3xl md:text-4xl">
                Find the right firm without the headache.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7">
                If your company is assessing an AI initiative, REUBAX helps
                narrow the field and connect you with firms that fit the work.
              </p>
              <div className="mt-8 space-y-4">
                {businessBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-8 w-full sm:w-auto" asChild>
                <Link href="/for-businesses">Book a conversation</Link>
              </Button>
            </Card>
          </MotionSection>

          <MotionSection delay={0.08}>
            <Card className="grid-card h-full">
              <span className="eyebrow">For AI Partners</span>
              <h2 className="section-title mt-6 text-3xl md:text-4xl">
                Join our network as an AI Partner.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7">
                REUBAX works with consulting firms that want access to
                well-scoped opportunities and a more focused route to new
                conversations.
              </p>
              <div className="mt-8 space-y-4">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-8 w-full sm:w-auto" variant="secondary" asChild>
                <Link href="/for-partners">Apply to join</Link>
              </Button>
            </Card>
          </MotionSection>
        </div>
      </section>

      <section className="section-shell section-band">
        <SectionHeading
          eyebrow="Use Cases"
          title="Choosing the right AI partner matters."
          description="We help you get it right."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <MotionSection key={useCase.title} delay={index * 0.08}>
              <Card className="grid-card h-full">
                <p className="card-kicker">Example</p>
                <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                <p className="mt-4 leading-7">{useCase.description}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Proof"
          title="Proven results are coming"
          description="We’re building a network of successful AI engagements."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {proofPlaceholders.map((item, index) => (
            <MotionSection key={item.title} delay={index * 0.06}>
              <Card className="grid-card h-full border-dashed">
                <p className="text-xl font-semibold text-slate-950">{item.title}</p>
                <p className="mt-3 leading-7">{item.description}</p>
              </Card>
            </MotionSection>
          ))}
        </div>
      </section>

      <InquiryFormsPreview />
      <CTASection />
    </>
  );
}
