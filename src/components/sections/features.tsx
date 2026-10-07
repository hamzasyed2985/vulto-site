"use client";

import {
  CalendarClock,
  Gauge,
  Inbox,
  Sunset,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { FEATURES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  inbox: Inbox,
  calendar: CalendarClock,
  sunset: Sunset,
  gauge: Gauge,
};

const TONES = [
  { blob: "bg-brand/10", icon: "bg-brand-soft text-brand" },
  { blob: "bg-warm/10", icon: "bg-warm-soft text-warm" },
  { blob: "bg-brand/10", icon: "bg-brand-soft text-brand" },
  { blob: "bg-warm/10", icon: "bg-warm-soft text-warm" },
] as const;

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Product / Features
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need for a calmer workday
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Vulto brings gathering, scheduling, and shutdown into one focused
            daily loop—so your calendar reflects your capacity, not your
            ambition alone.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? Inbox;
            const tone = TONES[i % TONES.length];
            return (
              <Reveal
                key={feature.id}
                as="article"
                delay={i * 0.08}
                y={28}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <div
                  className={`absolute -right-8 -top-8 h-28 w-28 rounded-full transition-transform duration-500 group-hover:scale-125 ${tone.blob}`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tone.icon}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
