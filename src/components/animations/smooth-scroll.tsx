"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

type LenisInstance = InstanceType<typeof Lenis>;

let lenisRef: LenisInstance | null = null;

function getHashTarget(href: string): { path: string; hash: string } | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;

  const path = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex);
  if (!hash || hash === "#") return null;

  return { path, hash };
}

function scrollToHash(hash: string, immediate = false) {
  const el = document.querySelector(hash);
  if (!el) return false;

  if (lenisRef) {
    lenisRef.scrollTo(el as HTMLElement, {
      offset: -88,
      duration: immediate ? 0 : 1.1,
    });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
  }
  return true;
}

function scrollHashWhenReady(hash: string, attempts = 0) {
  if (!hash) return;
  if (scrollToHash(hash, attempts === 0)) return;
  if (attempts >= 20) return;
  window.setTimeout(() => scrollHashWhenReady(hash, attempts + 1), 50);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const parsed = getHashTarget(href);
      if (!parsed) return;

      const { path, hash } = parsed;
      const goingHome = path === "/" || path === "";
      const onHome = window.location.pathname === "/";

      if (goingHome && onHome) {
        event.preventDefault();
        scrollToHash(hash);
        window.history.pushState(null, "", `/${hash}`);
      }
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef = null;
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash;
    if (!hash) return;
    scrollHashWhenReady(hash);
  }, [pathname]);

  return <>{children}</>;
}
