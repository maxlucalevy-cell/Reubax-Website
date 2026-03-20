import type { Metadata } from "next";
import { Compass, Gem, Network, Shield } from "lucide-react";

import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how REUBAX operates as an intermediary between companies seeking AI implementation and consulting firms equipped to deliver it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An intermediary between companies seeking AI implementation and firms equipped to deliver it."
        description="REUBAX exists to make AI partner selection more structured, more credible, and easier to manage."
      />

      <section className="section-shell pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionSection>
            <Card className="grid-card h-full">
              <span className="eyebrow">What We Are</span>
              <h2 className="section-title mt-6 text-3xl md:text-4xl">
                REUBAX does not build AI solutions. It connects buyers with implementation partners.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8">
                We work between companies pursuing AI initiatives and
                consulting firms capable of delivering them. Our role is to
                reduce search friction, improve partner fit, and support better
                initial conversations.
              </p>
            </Card>
          </MotionSection>
          <MotionSection delay={0.08}>
            <Card className="dark-panel h-full p-8 md:p-10">
              <span className="text-sm uppercase tracking-[0.22em] text-cyan-900">
                Business Model
              </span>
              <p className="mt-6 text-2xl leading-9 text-slate-700">
                REUBAX earns referral fees when a consulting partner is selected
                for a client project.
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                The model is straightforward: assess the requirement, identify
                suitable firms, and support introductions that may lead to an
                engagement.
              </p>
            </Card>
          </MotionSection>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Principles"
          title="Built on trust, clarity, and sound judgement."
          description="REUBAX is designed to be clear about its role and disciplined about the quality of its introductions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Shield,
              title: "Credibility",
              description:
                "A process designed to support confidence early in partner selection.",
            },
            {
              icon: Compass,
              title: "Clear role",
              description:
                "REUBAX is not an implementation vendor. Its role is to connect the right parties.",
            },
            {
              icon: Network,
              title: "Network quality",
              description:
                "The value of the model depends on curation and partner relevance.",
            },
            {
              icon: Gem,
              title: "Professional standard",
              description:
                "Communication and introductions should be concise, clear, and commercially grounded.",
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
          eyebrow="Evidence"
          title="Prepared for future references and case material."
          description="As REUBAX grows, this section can hold client outcomes, partner references, and supporting proof without changing the structure of the site."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Case studies", "Client testimonials", "Partner spotlights"].map(
            (item) => (
              <MotionSection key={item}>
                <Card className="grid-card h-full border-dashed">
                  <p className="text-xl font-semibold text-slate-900">{item}</p>
                  <p className="mt-3 leading-7">
                    Reserved for future reference material.
                  </p>
                </Card>
              </MotionSection>
            ),
          )}
        </div>
      </section>
    </>
  );
}
