export const SITE_URL = "https://vulto.co";
export const APP_SIGN_IN_URL = "https://app.vulto.co/sign-in";
export const SITE_NAME = "Vulto Planner";
export const SITE_TAGLINE =
  "Mindful daily planning and timeboxing for focused, balanced days.";

export const NAV_LINKS = [
  { label: "Product", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const FEATURES = [
  {
    id: "unified",
    title: "Unified Daily View",
    description:
      "Pull tasks from your favorite tools into one calm daily backlog. No more tab-hopping between apps to figure out what matters today.",
    icon: "inbox",
  },
  {
    id: "timeboxing",
    title: "Timeboxing",
    description:
      "Drag tasks onto your calendar and give every commitment a real home. See your day before you live it.",
    icon: "calendar",
  },
  {
    id: "shutdown",
    title: "Mindful Planning & Shutdown",
    description:
      "Guided morning rituals and end-of-day shutdown routines help you start with intention and close with clarity—so work doesn't bleed into life.",
    icon: "sunset",
  },
  {
    id: "analytics",
    title: "Analytics & Focus",
    description:
      "Realistic workload estimates keep you from overcommitting. Know when your day is full before burnout sets in.",
    icon: "gauge",
  },
] as const;

export const WORKFLOW_STEPS = [
  {
    id: "gather",
    step: 1,
    title: "Gather",
    subtitle: "Pull everything into today",
    description:
      "Start your morning ritual by collecting tasks from your connected tools. Review what's waiting, triage what matters, and build a focused daily backlog—without the overwhelm.",
    highlights: [
      "Import from Notion, Todoist, Linear & more",
      "One unified backlog for the day",
      "Quick triage: do, defer, or drop",
    ],
  },
  {
    id: "schedule",
    step: 2,
    title: "Schedule",
    subtitle: "Timebox with intention",
    description:
      "Drag tasks onto your calendar and assign real blocks of time. Vulto estimates effort so you can plan a day that actually fits—and leave room to breathe.",
    highlights: [
      "Drag-and-drop onto your calendar",
      "Smart duration estimates",
      "Protect deep-work and break blocks",
    ],
  },
  {
    id: "shutdown",
    step: 3,
    title: "Shutdown",
    subtitle: "Close the day with clarity",
    description:
      "Walk through a guided shutdown: review what you finished, roll unfinished work forward, and mentally clock out. Tomorrow starts lighter when today ends well.",
    highlights: [
      "Celebrate wins, not just checkmarks",
      "Carry unfinished work intentionally",
      "A clear line between work and rest",
    ],
  },
] as const;

export const PRICING = {
  trialDays: 14,
  monthly: {
    price: 20,
    label: "per month",
  },
  annual: {
    price: 15,
    label: "per month, billed annually",
    savings: "Save 25%",
  },
  features: [
    "Unlimited daily planning sessions",
    "Calendar timeboxing",
    "Task integrations (Notion, Todoist, Linear)",
    "Morning & shutdown rituals",
    "Workload & focus analytics",
    "Desktop & web apps",
    "Priority support",
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "What tools does Vulto integrate with?",
    answer:
      "Vulto connects with popular task and project tools including Notion, Todoist, Linear, Google Calendar, and Outlook. More integrations are on the roadmap—tell us what you need.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "A polished web experience works great on mobile browsers today. Native iOS and Android apps are in active development and coming soon.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. You can export your tasks, plans, and history at any time in standard formats. Your data belongs to you—always.",
  },
  {
    question: "How does Vulto handle privacy?",
    answer:
      "We take privacy seriously. Your planning data is encrypted in transit and at rest. We never sell your data, and we only access what's needed to sync your workflows.",
  },
  {
    question: "How long is the free trial?",
    answer:
      "Every new account gets a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Cancel from your account settings whenever you like. You'll keep access through the end of your billing period.",
  },
] as const;
