import type { Metadata } from "next";
import Link from "next/link";
import { AppIcon, BRAND_NAME } from "@/components/brand";

// Invite links (https://play-cal.com/i/<CODE>) open the app when it is
// installed. Without the app they land here (next.config.ts rewrites
// /i/:code to /i). The page is static and never reads the code, so it is
// the same for every invite and reveals nothing about who sent it.
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "You're invited",
  description: `A parent invited you to connect on ${BRAND_NAME}.`,
  robots: { index: false, follow: false },
};

export default function InvitePage() {
  return (
    <section className="mx-auto max-w-xl px-6 py-20 text-center sm:py-24">
      <div className="mx-auto w-fit">
        <AppIcon className="h-20 w-20" />
      </div>
      <h1 className="mt-8 font-display text-4xl font-extrabold tracking-[-0.03em] text-foreground">
        You&apos;re invited to {BRAND_NAME}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        A parent you know wants to plan playdates with you. Install {BRAND_NAME},
        then tap the invite link again, or open the app and go to Friends,
        then Enter invite code, and type the code from your invite.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        They only see your children after you both connect, and you choose
        which children to share.
      </p>
      <Link
        href="/#get-the-app"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-pool px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
      >
        Get the app
      </Link>
    </section>
  );
}
