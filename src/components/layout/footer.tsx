import Image from "next/image";
import Link from "next/link";
import { APP_SIGN_IN_URL, NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/vulto-logo.svg"
              alt=""
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="font-display text-base font-semibold tracking-tight">
              {SITE_NAME}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Mindful daily planning and timeboxing—so you finish what matters
            and still have an evening left.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Product
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={APP_SIGN_IN_URL}
                className="text-sm text-ink-soft transition-colors hover:text-brand"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Legal
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-ink-soft transition-colors hover:text-brand"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-ink-soft transition-colors hover:text-brand"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <p className="text-xs">Built for intentional days.</p>
        </div>
      </div>
    </footer>
  );
}
