"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteNavigation } from "@/lib/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div
        className={cn(
          "nav-surface container px-4 py-3 transition-all duration-300 md:px-6",
          isScrolled && "border-slate-300 bg-white/98 shadow-[0_10px_28px_rgba(15,23,42,0.07)]",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div>
              <div className="text-sm font-semibold tracking-[0.28em] text-slate-950">
<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Reubax logo"
    width={160}
    height={100}
  />
</Link>
              </div>
              <div className="text-xs text-slate-500">AI Partner Intermediary</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link",
                  pathname === item.href
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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
</div>

<AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="container mt-4 rounded-[30px] border border-slate-200 bg-white/98 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[18px] px-4 py-3 text-sm font-medium transition",
                    pathname === item.href
                      ? "bg-slate-950 text-white"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="xl" asChild>
  <a
    href="https://outlook.office.com/book/REUBAXIntroCall@reubax.ca/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book a conversation
  </a>
</Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
