"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "article";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  as = "div",
  onMouseEnter,
  onMouseLeave,
}: RevealProps) {
  const MotionTag = as === "article" ? motion.article : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </MotionTag>
  );
}
