"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type InquiryFormProps = {
  audience: "business" | "partner";
  title: string;
  description: string;
};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export function InquiryForm({
  audience,
  title,
  description,
}: InquiryFormProps) {
  const isBusiness = audience === "business";
  const submitLabel = isBusiness ? "Request a match" : "Submit application";
  const helperText = isBusiness
    ? "Share enough context for REUBAX to assess the requirement and determine which consulting profiles may fit."
    : "Share enough detail for REUBAX to understand your firm, its strengths, and the kinds of opportunities that fit.";

  useEffect(() => {
    const formId = isBusiness
      ? "ef4092b1-9b8e-4095-bd71-95062d000b31"
      : "bbb69182-04c5-4481-ab72-7455f559ec41";

    const target = document.getElementById("hubspot-form");
    if (target) {
      target.innerHTML = "";
    }

    const createForm = () => {
      if (!window.hbspt) return;

      const container = document.getElementById("hubspot-form");
      if (!container) return;

      container.innerHTML = "";

      window.hbspt.forms.create({
        region: "na3",
        portalId: "343080062",
        formId,
        target: "#hubspot-form",
      });
    };

    const existingScript = document.querySelector(
      'script[src="https://js-na3.hsforms.net/forms/embed/343080062.js"]'
    );

    if (existingScript) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js-na3.hsforms.net/forms/embed/343080062.js";
    script.async = true;
    script.onload = createForm;
    document.body.appendChild(script);
  }, [isBusiness]);

  return (
    <div className="mt-6">
  <a
    href={
      isBusiness
        ? "https://5o9e9q.share-na3.hsforms.com/270CSsZuOQJW9cZUGLQALMQ"
        : "https://5o9e9q.share-na3.hsforms.com/2u7aRggTFRIGrcnRV9VnsQQ" 
    }
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-white hover:bg-slate-800 transition"
  >
    {isBusiness
      ? "Get matched with an AI partner"
      : "Apply to join the REUBAX network"}
  </a>
  );
}
