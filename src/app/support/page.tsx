import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME } from "@/components/brand";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Support",
  description:
    `Get help with ${BRAND_NAME}. Contact support, sign in, delete your account, or report another user.`,
  alternates: { canonical: "/support" },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I sign in? Is there a password?",
    answer: `${BRAND_NAME} doesn’t use passwords. Enter your email on the welcome screen and we’ll send you a one-time code — type it in and you’re signed in. If the code doesn’t arrive within a couple of minutes, check your spam folder, then email us at support@play-cal.com and we’ll get you back in.`,
  },
  {
    question: "How do I delete my account?",
    answer:
      "In the app, go to Profile, then Delete account. After you confirm, your profile, your kids’ profiles and availability, your connections, playdates and messages are deleted right away and can’t be recovered. You can also email support@play-cal.com from the address tied to your account and we’ll handle it for you.",
  },
  {
    question: "How do I report another user?",
    answer:
      "On any user profile, tap the menu icon (three dots) in the top right and choose “Report”. Tell us briefly what happened. We review every report within 24 hours and take action — temporary suspension, permanent ban, or law enforcement contact — based on what we find. Reports are confidential.",
  },
  {
    question: "Why isn’t my friend showing up in search?",
    answer:
      `${BRAND_NAME} doesn’t have an open user search by design — it’s a kid-context app, so we keep it invite-only. Ask your friend to send you a connection link from the app (Settings → Invite a parent), or share your own link with them.`,
  },
  {
    question: `Is ${BRAND_NAME} free?`,
    answer:
      "The core app — calendar, playdates, parties, and parent messaging — is free. We may add optional paid features later (like premium themes or a household plan), but the basics will always be free.",
  },
  {
    question: "What about my kids’ data?",
    answer:
      "We treat children’s data with extra care. We don’t sell it, don’t use it for ads, and don’t share it with third parties beyond the parents you connect with. The full details — including COPPA, GDPR, and CCPA rights — are in our privacy policy.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl">
            Need help?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            We&apos;re a small team of parents building {BRAND_NAME}. If
            something isn&apos;t working — or you&apos;re stuck on something
            small — tell us and we&apos;ll fix it.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-subtle p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Email support
            </p>
            <a
              href="mailto:support@play-cal.com"
              className="mt-1 block text-xl font-semibold text-foreground underline-offset-4 hover:text-accent-strong hover:underline"
            >
              support@play-cal.com
            </a>
            <p className="mt-3 text-sm text-muted">
              We respond within{" "}
              <span className="font-medium text-foreground">
                two business days
              </span>{" "}
              — usually the same day. If it&apos;s an account issue, please
              email from the address tied to your account so we can verify it
              quickly.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="text-sm font-semibold text-accent-strong">
            Frequently asked
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl">
            Quick answers
          </p>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-border bg-white p-5 open:shadow-sm transition-shadow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-white p-6 text-sm text-muted">
            <p>
              Still stuck? Email{" "}
              <a
                href="mailto:support@play-cal.com"
                className="font-medium text-accent-strong underline-offset-2 hover:underline"
              >
                support@play-cal.com
              </a>{" "}
              and tell us what&apos;s going on. The more detail you can share
              — what you tried, what you saw, what device you&apos;re on — the
              faster we can help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
