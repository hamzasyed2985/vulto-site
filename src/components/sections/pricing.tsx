"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { APP_SIGN_IN_URL, PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  const price = annual ? PRICING.annual.price : PRICING.monthly.price;
  const label = annual ? PRICING.annual.label : PRICING.monthly.label;

  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple pricing. Serious focus.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Start with a {PRICING.trialDays}-day free trial. No credit card
            required. Cancel anytime.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-medium",
              !annual ? "text-foreground" : "text-muted"
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className={cn(
              "relative h-8 w-14 rounded-full transition-colors duration-300",
              annual ? "bg-accent" : "bg-border"
            )}
          >
            <motion.span
              layout
              className="absolute top-1 h-6 w-6 rounded-full bg-white shadow-soft"
              animate={{ left: annual ? 28 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-foreground" : "text-muted"
            )}
          >
            Annual
            <span className="ml-2 inline-flex rounded-full bg-warm-soft px-2 py-0.5 text-[11px] font-semibold text-warm">
              {PRICING.annual.savings}
            </span>
          </span>
        </Reveal>

        <Reveal
          y={40}
          className="mx-auto mt-10 max-w-lg overflow-hidden rounded-3xl border border-border bg-surface shadow-lift"
        >
          <div className="border-b border-border bg-gradient-to-br from-brand-soft/90 via-warm-soft/40 to-transparent px-7 py-8 sm:px-9">
            <p className="text-sm font-semibold text-brand">Pro</p>
            <div className="mt-3 flex items-end gap-1.5">
              <span className="font-display text-5xl font-semibold tracking-tight">
                ${price}
              </span>
              <span className="mb-1.5 text-sm text-muted">{label}</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              Full access for individuals who want a calmer, more intentional
              workday.
            </p>
          </div>

          <ul className="space-y-3.5 px-7 py-7 sm:px-9">
            {PRICING.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-ink-soft"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="px-7 pb-8 sm:px-9">
            <Button size="lg" className="w-full" asChild>
              <a href={APP_SIGN_IN_URL}>
                Start {PRICING.trialDays}-day free trial
              </a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted">
              Cancel anytime. Annual billed as ${PRICING.annual.price * 12}
              /year.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
