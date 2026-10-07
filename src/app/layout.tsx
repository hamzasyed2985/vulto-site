import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import {
  FaqPageJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/seo/json-ld";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Mindful Daily Planning & Timeboxing`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  keywords: [
    "daily planner",
    "timeboxing",
    "productivity",
    "focus",
    "work-life balance",
    "task management",
    "calendar planning",
    "mindful productivity",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Mindful Daily Planning & Timeboxing`,
    description: SITE_TAGLINE,
    images: [
      {
        url: "/vulto-logo.svg",
        width: 1024,
        height: 1024,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Mindful Daily Planning & Timeboxing`,
    description: SITE_TAGLINE,
    images: ["/vulto-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/vulto-logo.svg",
    apple: "/vulto-logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <SoftwareApplicationJsonLd />
        <FaqPageJsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
