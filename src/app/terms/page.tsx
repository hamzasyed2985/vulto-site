import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing your use of ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-28 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: October 7, 2026</p>

      <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-ink-soft">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Acceptance of these terms
          </h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) are an agreement between
            you and Vulto governing access to and use of {SITE_NAME}, the
            website at {SITE_URL}, and related applications and services
            (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By accessing or using the Services, creating an account, or clicking
            to accept these Terms, you agree to be bound by them and by our{" "}
            <Link
              href="/privacy"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            . If you do not agree, do not use the Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Organizations
          </h2>
          <p>
            If you use the Services on behalf of a company or other entity (an
            &quot;Organization&quot;), you represent that you have authority to
            bind that Organization, and &quot;you&quot; refers to both you and
            the Organization. The Organization is responsible for its users&apos;
            compliance with these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Accounts & security
          </h2>
          <p>
            You must provide accurate registration information and keep it
            updated. You are responsible for safeguarding your credentials and
            for activity under your account. Notify us promptly of any
            unauthorized access. We may suspend or disable accounts that violate
            these Terms or pose a security risk.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Subscriptions, trials & billing
          </h2>
          <p>
            Paid plans are billed in advance on a monthly or annual basis as
            selected at checkout. Free trials convert to paid subscriptions
            unless canceled before the trial ends, according to the terms shown
            at signup. Fees are non-refundable except where required by law or
            expressly stated otherwise. You may cancel anytime; access continues
            through the end of the current billing period.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Your content
          </h2>
          <p>
            You retain ownership of tasks, notes, and other content you submit
            (&quot;User Content&quot;). You grant Vulto a limited license to
            host, process, and display User Content solely to provide and
            improve the Services. You are responsible for User Content and for
            ensuring you have the rights to submit it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Integrations & third-party services
          </h2>
          <p>
            The Services may integrate with third-party products (calendars,
            task managers, and similar tools). Those services are governed by
            their own terms and privacy policies. Vulto is not responsible for
            third-party availability, accuracy, or practices. You are responsible
            for the permissions you grant and for disconnecting integrations you
            no longer want.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Intellectual property
          </h2>
          <p>
            The Services—including software, design, branding, and
            documentation—are owned by Vulto and its licensors and are protected
            by intellectual property laws. Except for your User Content, these
            Terms do not grant you ownership of any Vulto materials. You may not
            copy, modify, reverse engineer, or redistribute the Services except
            as expressly allowed by law or written permission from us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Acceptable use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Violate any applicable law or regulation</li>
            <li>
              Interfere with or disrupt the Services, including via malware,
              scraping at abusive scale, or denial-of-service attacks
            </li>
            <li>Attempt unauthorized access to accounts, systems, or data</li>
            <li>
              Impersonate others, spam, or harass users or Vulto staff
            </li>
            <li>
              Use the Services to exploit or harm minors, or to transmit
              unlawful or infringing content
            </li>
            <li>
              Resell, sublicense, or misuse the Services in ways that harm other
              customers or our infrastructure
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Disclaimers & limitation of liability
          </h2>
          <p>
            The Services are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, express or implied,
            including merchantability, fitness for a particular purpose, and
            non-infringement, to the fullest extent permitted by law. We do not
            guarantee uninterrupted or error-free operation.
          </p>
          <p>
            To the maximum extent permitted by law, Vulto and its affiliates
            will not be liable for indirect, incidental, special, consequential,
            or punitive damages, or for lost profits, data, or goodwill. Our
            aggregate liability arising from these Terms or the Services will
            not exceed the amounts you paid us for the Services in the twelve
            (12) months before the claim.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Termination
          </h2>
          <p>
            You may stop using the Services and close your account at any time.
            We may suspend or terminate access if you breach these Terms or if
            we discontinue the Services. Provisions that by nature should
            survive (including ownership, disclaimers, and liability limits)
            will survive termination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Changes to the terms
          </h2>
          <p>
            We may update these Terms from time to time. Changes take effect
            when posted on this page unless a later date is stated. Continued
            use after changes constitutes acceptance. If you do not agree,
            discontinue use of the Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Contact
          </h2>
          <p>
            Questions about these Terms? Email{" "}
            <a
              href="mailto:legal@vulto.co"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              legal@vulto.co
            </a>
            .
          </p>
          <p className="text-sm text-muted">
            These pages are provided for product launch readiness and should be
            reviewed by counsel before relying on them as final legal advice.
          </p>
        </section>
      </div>
    </article>
  );
}
