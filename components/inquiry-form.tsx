import Script from "next/script";

import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type InquiryFormProps = {
  audience: "business" | "partner";
  title: string;
  description: string;
};

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

  return (
    <Card className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)] md:p-10">
      <div className="max-w-2xl">
        <p className="card-kicker">Inquiry form</p>
        <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 leading-7">{description}</p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">{helperText}</p>
      </div>
      <div className="mt-8">
        {isBusiness ? (
          <>
            <div id="hubspot-business-form"></div>

            <Script
              src="https://js-na3.hsforms.net/forms/embed/343080062.js"
              strategy="afterInteractive"
            />

            <Script id="hubspot-business-form-script" strategy="afterInteractive">
              {`
                window.addEventListener("load", function () {
                  if (window.hbspt) {
                    window.hbspt.forms.create({
                      region: "na3",
                      portalId: "343080062",
                      formId: "ef4092b1-9b8e-4095-bd71-95062d000b31",
                      target: "#hubspot-business-form"
                    });
                  }
                });
              `}
            </Script>
          </>
        ) : (
          <>
            <div id="hubspot-partner-form"></div>

            <Script
              src="https://js-na3.hsforms.net/forms/embed/343080062.js"
              strategy="afterInteractive"
            />

            <Script id="hubspot-partner-form-script" strategy="afterInteractive">
              {`
                window.addEventListener("load", function () {
                  if (window.hbspt) {
                    window.hbspt.forms.create({
                      region: "na3",
                      portalId: "343080062",
                      formId: "bbb69182-04c5-4481-ab72-7455f559ec41",
                      target: "#hubspot-partner-form"
                    });
                  }
                });
              `}
            </Script>
          </>
        )}
      </div>
    </Card>
  );
}
