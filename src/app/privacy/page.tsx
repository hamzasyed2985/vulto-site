import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your data.`,
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-28 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: October 7, 2026</p>

      <div className="prose-legal mt-10 space-y-8 text-[0.95rem] leading-relaxed text-ink-soft">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Overview
          </h2>
          <p>
            Your data belongs to you—not us. This Privacy Policy explains how
            Vulto (&quot;Vulto,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) collects, uses, and protects personal information
            when you use {SITE_NAME}, our website at {SITE_URL}, and related
            applications and services (the &quot;Services&quot;).
          </p>
          <p className="rounded-xl border border-border bg-brand-soft/50 px-4 py-3 text-sm text-foreground">
            Our promise: we never sell your personal data. Never have, never
            will.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Information we collect
          </h2>
          <h3 className="text-base font-semibold text-foreground">
            Information you provide
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Account information</strong> — name, email address, and
              details you add during registration or in your profile (such as
              time zone or preferences).
            </li>
            <li>
              <strong>Payment information</strong> — processed by our payment
              provider (e.g. Stripe). We store billing-related metadata such as
              your billing email and limited payment method details needed for
              invoices—not full card numbers.
            </li>
            <li>
              <strong>Content you create</strong> — tasks, notes, plans,
              calendar blocks, and other planning data you add to Vulto. We
              access this only to operate the Services you request.
            </li>
            <li>
              <strong>Communications</strong> — messages you send to support or
              other outreach to us.
            </li>
          </ul>
          <h3 className="text-base font-semibold text-foreground">
            Information collected automatically
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Usage and product analytics (features used, session patterns,
              onboarding progress).
            </li>
            <li>
              Device and technical data (IP address, browser, OS, device type,
              app version).
            </li>
            <li>
              Performance and reliability data (load times, errors, crash
              diagnostics).
            </li>
            <li>
              Approximate location derived from IP (country/region) for
              performance, security, and legal compliance.
            </li>
          </ul>
          <h3 className="text-base font-semibold text-foreground">
            Information from connected services
          </h3>
          <p>
            When you connect third-party tools (for example Google Calendar,
            Notion, Todoist, or Linear), we access only the data needed to power
            that integration—typically via OAuth or tokens you authorize. We do
            not ask for your third-party passwords when OAuth is available.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            How we use your information
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide, maintain, and improve the Services</li>
            <li>Authenticate accounts and keep the product secure</li>
            <li>Process subscriptions, trials, and billing</li>
            <li>Send transactional email and, with consent, product updates</li>
            <li>Analyze usage to improve planning workflows and reliability</li>
            <li>Comply with legal obligations and enforce our Terms</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            How we share information
          </h2>
          <p>
            We do not sell personal information. We may share data with trusted
            processors who help us run the Services (hosting, analytics,
            payments, email, customer support)—under contracts that limit their
            use of your data. We may also disclose information if required by
            law, to protect rights and safety, or in connection with a merger,
            acquisition, or asset sale (with notice where appropriate).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Your rights and choices
          </h2>
          <p>
            Depending on where you live, you may have rights to access, correct,
            export, or delete your personal data, and to object to or restrict
            certain processing. You can update account details in-product, export
            your planning data where available, and request deletion by
            contacting us. You may unsubscribe from marketing emails at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Data security & retention
          </h2>
          <p>
            We use industry-standard safeguards to protect data in transit and at
            rest. No method of transmission or storage is 100% secure; we
            continuously improve our practices. We retain account and content
            data while your account is active and as needed for legitimate
            business, legal, and security purposes, then delete or anonymize it
            when no longer required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Cookies & tracking
          </h2>
          <p>
            We use cookies and similar technologies for authentication,
            preferences, security, and analytics. You can control cookies
            through your browser settings; some features may not work if cookies
            are disabled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            International transfers & children
          </h2>
          <p>
            Your information may be processed in countries other than your own.
            Where required, we use appropriate safeguards for cross-border
            transfers. The Services are not directed to children under 16, and
            we do not knowingly collect personal information from them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Changes & contact
          </h2>
          <p>
            We may update this policy from time to time. We will post the revised
            version on this page and update the &quot;Last updated&quot; date.
            Continued use of the Services after changes means you accept the
            updated policy.
          </p>
          <p>
            Questions about privacy? Email{" "}
            <a
              href="mailto:privacy@vulto.co"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              privacy@vulto.co
            </a>
            . See also our{" "}
            <Link
              href="/terms"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
