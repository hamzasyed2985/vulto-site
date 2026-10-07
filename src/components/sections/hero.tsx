"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppPreview } from "@/components/mockups/app-preview";
import { APP_SIGN_IN_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden noise-bg pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 mesh-grid" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Vulto Planner
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-balance text-2xl font-medium leading-[1.25] tracking-tight text-ink-soft sm:text-3xl md:text-[2rem]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            Plan your day with intention.
            <span className="block">
              Protect your focus—and your evening.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          >
            Pull today&apos;s tasks into one calm backlog, timebox them on your
            calendar, and close with a mindful shutdown. A daily planning
            ritual designed for deep work without burnout.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
          >
            <Button size="lg" asChild>
              <a href={APP_SIGN_IN_URL}>Start Free Trial</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/#how-it-works">
                <Play className="h-4 w-4 fill-current" />
                Watch 2-Min Demo
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 sm:mt-16"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
        >
          <AppPreview />
        </motion.div>
      </div>
    </section>
  );
}
