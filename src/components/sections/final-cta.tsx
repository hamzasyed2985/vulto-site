"use client";

import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { APP_SIGN_IN_URL, PRICING } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-soft/50 to-warm-soft/30" />
      <Reveal
        y={30}
        className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"
      >
        <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Tomorrow starts tonight—
          <span className="block text-ink-soft">with a clearer plan.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted leading-relaxed">
          Join people who close their laptop knowing what they finished, and
          what they&apos;ll protect tomorrow.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a href={APP_SIGN_IN_URL}>
              Start {PRICING.trialDays}-day free trial
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href={APP_SIGN_IN_URL}>Sign In</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
