import Link from "next/link";

import { siteNavigation } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div className="max-w-lg">
          <div className="text-sm font-semibold tracking-[0.28em] text-slate-950">
            REUBAX
          </div>
          <p className="mt-5 leading-7 text-slate-600">
            REUBAX connects companies seeking AI implementation with
            consulting partners through a clear, intermediary-led process.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">
              For businesses
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">
              For consulting firms
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Navigation
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:translate-x-0.5 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Get Started
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            <Button size="xl" asChild>
  <a
    href="https://outlook.office.com/book/REUBAXIntroCall@reubax.ca/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book a conversation
  </a>
</Button>
            <Link href="/contact">Join as a partner</Link>
            <a
  href="mailto:maxlevy@reubax.ca?subject=REUBAX Inquiry&body=Hi Max, I’m interested in learning more about REUBAX."
  className="hover:text-slate-900"
>
  maxlevy@reubax.ca
</a> 
          </div>
        </div>
      </div>
    </footer>
  );
}
<div style={{ marginTop: "20px", fontSize: "14px" }}>
  <p>
    Email: <a href="mailto:maxlevy@reubax.ca">maxlevy@reubax.ca</a>
  </p>
  <p>Montreal, Canada</p>
</div>
