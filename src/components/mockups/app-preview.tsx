"use client";

import { CheckCircle2, Circle, GripVertical } from "lucide-react";

const tasks = [
  { title: "Write product brief", time: "45m", done: true },
  { title: "Design review sync", time: "30m", done: false, active: true },
  { title: "Ship pricing page", time: "1h 15m", done: false },
  { title: "Inbox zero ritual", time: "20m", done: false },
];

const blocks = [
  { label: "Deep work", time: "9:00 – 10:30", tone: "bg-foreground text-white" },
  {
    label: "Design review",
    time: "10:45 – 11:15",
    tone: "bg-brand text-white",
  },
  {
    label: "Focus block",
    time: "1:00 – 2:30",
    tone: "bg-warm-soft text-warm",
  },
  {
    label: "Shutdown",
    time: "5:00 – 5:20",
    tone: "bg-surface-muted text-muted",
  },
];

export function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-4xl" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/15 via-transparent to-warm/15 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-lift sm:rounded-3xl">
        <div className="flex items-center gap-2 border-b border-border bg-surface-muted/50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e07a6e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e0c46e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6ebe8a]" />
          <span className="ml-3 text-xs font-medium text-muted">
            Today · Tuesday
          </span>
        </div>

        <div className="grid gap-0 md:grid-cols-2">
          <div className="border-b border-border p-4 sm:p-5 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h3 className="font-display text-sm font-semibold">Daily backlog</h3>
              <span className="shrink-0 rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
                4 tasks · 2h 50m
              </span>
            </div>
            <ul className="space-y-2.5">
              {tasks.map((task) => (
                <li
                  key={task.title}
                  className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${
                    task.active
                      ? "border-brand/30 bg-brand-soft/70 shadow-soft"
                      : "border-border/80 bg-background/60"
                  }`}
                >
                  <GripVertical className="h-3.5 w-3.5 shrink-0 text-border" />
                  {task.done ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  ) : (
                    <Circle className="h-4 w-4 shrink-0 text-muted" />
                  )}
                  <span
                    className={`min-w-0 flex-1 truncate text-sm ${
                      task.done ? "text-muted line-through" : "text-foreground"
                    }`}
                  >
                    {task.title}
                  </span>
                  <span className="shrink-0 text-[11px] font-medium text-muted">
                    {task.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold">Calendar</h3>
              <span className="text-[11px] font-medium text-muted">
                Timeboxed
              </span>
            </div>
            <div className="space-y-2.5">
              {blocks.map((block) => (
                <div
                  key={block.label}
                  className={`rounded-xl px-3.5 py-3 ${block.tone}`}
                >
                  <p className="text-sm font-semibold">{block.label}</p>
                  <p className="mt-0.5 text-[11px] opacity-80">{block.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
