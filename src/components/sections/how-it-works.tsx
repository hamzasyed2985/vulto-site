"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { WORKFLOW_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AUTO_MS = 4200;

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const activeRef = useRef(0);
  const directionRef = useRef(1);
  const hasMounted = useRef(false);

  activeRef.current = active;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0, 0.35, 0.6] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((next: number) => {
    if (isAnimating.current) return;
    if (next === activeRef.current) return;

    const from = activeRef.current;
    if (from === WORKFLOW_STEPS.length - 1 && next === 0) {
      directionRef.current = 1;
    } else if (from === 0 && next === WORKFLOW_STEPS.length - 1) {
      directionRef.current = -1;
    } else {
      directionRef.current = next > from ? 1 : -1;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !contentRef.current) {
      setActive(next);
      return;
    }

    isAnimating.current = true;
    const content = contentRef.current;
    const visual = visualRef.current;
    const xOut = directionRef.current * -40;

    const tl = gsap.timeline({
      defaults: { ease: "power3.in" },
      onComplete: () => {
        setActive(next);
      },
    });

    tl.to(content, { opacity: 0, x: xOut, duration: 0.18 }, 0);

    if (visual) {
      tl.to(visual, { opacity: 0, y: 10, duration: 0.16 }, 0);
    }
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    const visual = visualRef.current;
    if (!content) return;

    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set([content, visual].filter(Boolean), {
        clearProps: "all",
        opacity: 1,
        x: 0,
        y: 0,
      });
      isAnimating.current = false;
      return;
    }

    const xIn = directionRef.current * 28;

    gsap.set(content, { x: xIn, opacity: 0 });
    if (visual) {
      gsap.set(visual, { y: 12, opacity: 0 });
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(content, {
      opacity: 1,
      x: 0,
      duration: 0.28,
    });

    if (visual) {
      tl.to(
        visual,
        {
          opacity: 1,
          y: 0,
          duration: 0.24,
        },
        "-=0.18"
      );

      const items = visual.querySelectorAll("[data-step-item]");
      if (items.length) {
        tl.fromTo(
          items,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.22,
            stagger: 0.04,
            ease: "power2.out",
          },
          "-=0.12"
        );
      }
    }
  }, [active]);

  useEffect(() => {
    if (!inView || paused) return;

    const id = window.setInterval(() => {
      const next = (activeRef.current + 1) % WORKFLOW_STEPS.length;
      goTo(next);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, goTo, active, inView]);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    gsap.killTweensOf(bar);

    if (!inView || paused) {
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      return;
    }

    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: AUTO_MS / 1000,
        ease: "none",
        transformOrigin: "left center",
      }
    );
  }, [active, paused, inView]);

  const step = WORKFLOW_STEPS[active];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="scroll-mt-24 border-y border-border bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps. One intentional day.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A simple daily loop that replaces chaotic multitasking with a clear
            plan you can trust.
          </p>
        </Reveal>

        <Reveal
          className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            role="tablist"
            aria-label="Workflow steps"
            className="flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
          >
            {WORKFLOW_STEPS.map((item, index) => {
              const isActive = active === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`workflow-panel-${item.id}`}
                  id={`workflow-tab-${item.id}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "relative min-w-[140px] overflow-hidden rounded-2xl border px-4 py-4 text-left transition-[color,border-color,background-color,box-shadow] duration-500 lg:min-w-0",
                    isActive
                      ? "border-foreground bg-foreground text-white shadow-lift"
                      : "border-border bg-background/50 text-foreground hover:bg-background"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="workflow-active-glow"
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 32,
                      }}
                    />
                  )}
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-500",
                      isActive ? "text-white/55" : "text-muted"
                    )}
                  >
                    Step {item.step}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold">
                    {item.title}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 hidden text-xs transition-colors duration-500 lg:block",
                      isActive ? "text-white/60" : "text-muted"
                    )}
                  >
                    {item.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`workflow-panel-${step.id}`}
            aria-labelledby={`workflow-tab-${step.id}`}
            className="relative overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-soft sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-surface-muted">
              <div
                ref={progressRef}
                className="h-full origin-left bg-brand"
                style={{ transform: "scaleX(0)" }}
              />
            </div>

            <div ref={contentRef} className="will-change-transform">
              <p className="text-sm font-semibold text-brand">{step.subtitle}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xl text-muted leading-relaxed">
                {step.description}
              </p>
              <ul className="mt-6 space-y-3">
                {step.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-soft"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              ref={visualRef}
              className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface p-5 will-change-transform"
            >
              <WorkflowVisual stepId={step.id} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WorkflowVisual({ stepId }: { stepId: string }) {
  if (stepId === "gather") {
    return (
      <div className="space-y-2">
        {[
          "Notion · Ship landing copy",
          "Todoist · Prep board deck",
          "Linear · Fix onboarding bug",
        ].map((t) => (
          <div
            key={t}
            data-step-item=""
            className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5 text-sm"
          >
            <span>{t}</span>
            <span className="text-[11px] font-medium text-muted">Added</span>
          </div>
        ))}
      </div>
    );
  }

  if (stepId === "schedule") {
    return (
      <div className="grid grid-cols-1 gap-2 text-center text-xs sm:grid-cols-3">
        {["9–11 Deep work", "11–12 Sync", "2–4 Build"].map((slot) => (
          <div
            key={slot}
            data-step-item=""
            className="rounded-xl bg-brand-soft px-2 py-4 font-semibold text-brand sm:py-6"
          >
            {slot}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      data-step-item=""
      className="rounded-xl bg-surface-muted/70 px-4 py-5 text-sm text-ink-soft"
    >
      <p className="font-semibold text-foreground">Shutdown checklist</p>
      <ul className="mt-3 space-y-2 text-muted">
        <li>✓ Reviewed completed work</li>
        <li>✓ Rolled 2 tasks to tomorrow</li>
        <li>✓ Calendar cleared for evening</li>
      </ul>
    </div>
  );
}
