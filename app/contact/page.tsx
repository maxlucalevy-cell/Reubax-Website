"use client";

import { Building2, BriefcaseBusiness } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { InquiryForm } from "@/components/inquiry-form";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense, useEffect, useState } from "react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [activeTab, setActiveTab] = useState<"business" | "partner">("business");

 useEffect(() => {
  if (type === "partner") {
    setActiveTab("partner");
  } else {
    setActiveTab("business");
  }

  if (type) {
  const el = document.getElementById("form-section");
  if (!el) return;

  const targetPosition = el.offsetTop - 100;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1400;

  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(
      0,
      startPosition + distance * progress
    );

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
}, [type]);

return (
  <>
    <PageHero
      eyebrow="Contact"
      title="Start the conversation."
      description="Whether you are seeking an AI implementation partner or applying to join the REUBAX network, choose the route that fits your role."
    />

    <section id="form-section" className="section-shell pt-8 scroll-mt-28">
      <MotionSection>
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "business" | "partner")}
          className="mx-auto max-w-5xl"
        >
<div className="grid gap-4 md:grid-cols-2">
  <Card className="grid-card">
    <div className="flex items-start gap-4">
      <Building2 className="mt-1 h-5 w-5 text-cyan-700" />
      <div>
        <p className="card-kicker">For businesses</p>
        <p className="mt-2 text-lg font-semibold text-slate-950">
          Seeking an implementation partner
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Use this route if your company wants help identifying the right consulting firm.
        </p>
      </div>
    </div>
  </Card>

  <Card className="grid-card">
    <div className="flex items-start gap-4">
      <BriefcaseBusiness className="mt-1 h-5 w-5 text-cyan-700" />
      <div>
        <p className="card-kicker">For partners</p>
        <p className="mt-2 text-lg font-semibold text-slate-950">
          Applying to the REUBAX network
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Use this route if your consulting firm wants to be considered for relevant introductions.
        </p>
      </div>
    </div>
  </Card>
</div>
            <TabsList className="mt-6 grid w-full grid-cols-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-panel">
              <TabsTrigger value="business">For businesses</TabsTrigger>
              <TabsTrigger value="partner">For partners</TabsTrigger>
            </TabsList>
            <TabsContent value="business" className="mt-8">
              <InquiryForm
                audience="business"
                title="Business inquiry"
                description="Use this route if your company is seeking an AI consulting or implementation partner."
              />
            </TabsContent>
            <TabsContent value="partner" className="mt-8">
              <InquiryForm
                audience="partner"
                title="Partner application"
                description="Use this route if your firm wants to be considered for relevant AI project introductions."
              />
            </TabsContent>
          </Tabs>
        </MotionSection>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="section-shell pt-8">Loading contact page...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
