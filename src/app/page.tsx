import Link from "next/link";
import { AppIcon, BRAND_NAME } from "@/components/brand";

export const dynamic = "force-static";

const features = [
  {
    title: "Shared family calendar",
    description:
      "See everyone's playdates, parties, and pickups in one place. No more scrolling through three different group chats to figure out who's free Saturday.",
    icon: CalendarIcon,
    tile: "bg-pool text-white",
  },
  {
    title: "Party invitations that don't get lost",
    description:
      "Send a real invite — RSVPs, addresses, allergy notes, all in one tappable place. Parents can RSVP for the whole family in two taps.",
    icon: PartyIcon,
    tile: "bg-coral text-white",
  },
  {
    title: "Kid availability windows",
    description:
      "Mark when your kids are open for playdates. Other parents see the green windows and reach out — no more endless \"how's tomorrow?\" texting.",
    icon: ClockIcon,
    tile: "bg-sun text-ink",
  },
  {
    title: "Parent-to-parent messaging",
    description:
      "Quick, kid-context conversations between parents. Confirm a playdate, share a pickup, ask about pizza preferences — without exposing phone numbers.",
    icon: ChatIcon,
    tile: "bg-ink text-white",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Add your kids",
    body: "Each child gets a profile with their school, allergies, and playdate preferences. Takes about a minute.",
  },
  {
    step: "02",
    title: "Connect with other parents",
    body: `Find friends already on ${BRAND_NAME} or invite them with a single link. Connections are mutual — no awkward open searches.`,
  },
  {
    step: "03",
    title: "Coordinate the way you actually want to",
    body: "Pick from your shared calendar, send a real invite, or just message another parent directly. Whatever works for the moment.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <GetTheApp />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-subtle">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-accent-strong">
            For parents who are tired of the group text
          </p>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
            Playdates that actually happen.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            See when your kids&apos; friends are free, send the invite and get a
            confirmed plan. {BRAND_NAME} keeps parties, pickups and playdates in
            one place, so nobody has to dig through four group threads.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#get-the-app"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-hover"
            >
              Get the app
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30"
            >
              See what it does
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            Less planning. More playing. iOS and Android, coming soon.
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

// Illustrative only: two families' free time on one day, overlapping where
// the ball sits. It restates the mark's idea with fictional names.
const heroRows = [
  { family: "Your family", start: 8, end: 56, color: "bg-ink" },
  { family: "The Parks", start: 39, end: 92, color: "bg-pool" },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <AppIcon className="absolute -top-10 -right-2 h-24 w-24 drop-shadow-xl sm:h-28 sm:w-28" />
      <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_24px_60px_-30px_rgba(21,35,63,0.35)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Saturday
        </p>
        <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-foreground">
          Who&apos;s free?
        </p>
        <div className="mt-6 space-y-5">
          {heroRows.map((row) => (
            <div key={row.family}>
              <p className="text-sm font-medium text-foreground">
                {row.family}
              </p>
              <div className="relative mt-2 h-4 rounded-full bg-subtle">
                <span
                  className={`absolute inset-y-0 rounded-full ${row.color}`}
                  style={{ left: `${row.start}%`, right: `${100 - row.end}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted">
          <span>9 am</span>
          <span>12 pm</span>
          <span>3 pm</span>
          <span>6 pm</span>
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-subtle p-4">
          <span className="h-6 w-6 shrink-0 rounded-full bg-coral" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Both free, 12:30 to 2 pm
            </p>
            <p className="text-xs text-muted">Send the invite in one tap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold text-accent-strong">
            What it does
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl">
            The boring logistics, finally handled.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {BRAND_NAME} does four things well, instead of trying to be every
            calendar and chat app at once. We built it for the parts of
            parenting we kept getting frustrated by ourselves.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-colors hover:border-accent/50"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.tile}`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-sm font-semibold text-accent-strong">
            How it works
          </h2>
          <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl">
            Three small steps. No onboarding video required.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {BRAND_NAME} is built to be useful within five minutes of installing
            it. No feed, no algorithm — just the parents and kids you actually
            spend time with.
          </p>
        </div>
        <ol className="lg:col-span-2 space-y-6">
          {howItWorks.map((step) => (
            <li
              key={step.step}
              className="flex gap-5 rounded-2xl border border-border bg-white p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-extrabold text-accent-strong">
                {step.step}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function GetTheApp() {
  return (
    <section id="get-the-app" className="bg-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-sm font-semibold text-accent-strong">
              Get the app
            </h2>
            <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl">
              Coming soon to iOS and Android.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We&apos;re putting the finishing touches on the first release.
              Once the App Store and Play Store links are live, the buttons
              below will take you straight there.
            </p>
            <p className="mt-6 text-sm text-muted">
              Questions in the meantime?{" "}
              <a
                href="mailto:support@play-cal.com"
                className="font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                support@play-cal.com
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8">
            <div className="flex flex-col gap-3">
              <StorePlaceholder
                store="App Store"
                line1="Download on the"
                line2="App Store"
                icon={<AppleIcon className="h-7 w-7" />}
              />
              <StorePlaceholder
                store="Google Play"
                line1="Get it on"
                line2="Google Play"
                icon={<PlayIcon className="h-7 w-7" />}
              />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              Buttons are placeholders until the apps are public. We&apos;ll
              flip them on the day of launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorePlaceholder({
  store,
  line1,
  line2,
  icon,
}: {
  store: string;
  line1: string;
  line2: string;
  icon: React.ReactNode;
}) {
  // No <a> here — the apps aren't live yet, so we render a non-interactive
  // badge instead of a dead link. `role="link"` + `aria-disabled` keeps the
  // semantics for screen readers without faking navigation.
  return (
    <span
      role="link"
      aria-disabled="true"
      className="flex items-center gap-3 rounded-xl bg-ink px-4 py-3 text-white opacity-90 cursor-not-allowed select-none"
      title={`${store} — coming soon`}
    >
      <span className="text-white/95">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-white/70">
          {line1}
        </span>
        <span className="text-base font-semibold">{line2}</span>
      </span>
      <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">
        Soon
      </span>
    </span>
  );
}

type IconProps = { className?: string };

function ArrowRight({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
      <circle cx="8.5" cy="14" r="0.7" fill="currentColor" />
      <circle cx="12" cy="14" r="0.7" fill="currentColor" />
      <circle cx="15.5" cy="14" r="0.7" fill="currentColor" />
    </svg>
  );
}

function PartyIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l3.6-9.6a1 1 0 0 1 1.7-.3l5.4 5.4a1 1 0 0 1-.3 1.7L3 21z" />
      <path d="M14 4l1 2M19 5l-1 2M20 10l-2 .5M16 3l-.5 2" />
      <path d="M11 10l3-3M13 12l4-2" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function ChatIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

function AppleIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.43 2.245-1.197 3.04-.81.84-2.115 1.49-3.21 1.4-.135-1.105.42-2.255 1.155-3.025.83-.86 2.235-1.5 3.252-1.415zm3.51 16.97c-.48 1.103-.71 1.595-1.33 2.567-.86 1.35-2.075 3.03-3.575 3.045-1.335.015-1.68-.87-3.49-.86-1.81.01-2.19.87-3.525.857-1.5-.013-2.65-1.53-3.51-2.88C2.115 18.62 1.5 15.07 2.95 12.62c1.04-1.76 2.7-2.86 4.27-2.86 1.6 0 2.6.87 3.92.87 1.28 0 2.06-.87 3.91-.87 1.41 0 2.91.77 3.98 2.1-3.5 1.92-2.93 6.94 1.84 7.94z" />
    </svg>
  );
}

function PlayIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3.6 2.6c-.4.3-.6.8-.6 1.4v16c0 .6.2 1.1.6 1.4l9.5-9.4-9.5-9.4zM14.5 13.4l2.7 2.7-9 5.1c-.5.3-1 .2-1.5-.1l7.8-7.7zM21 11c.7.4.7 1.6 0 2l-2.5 1.4-3-3 3-3L21 11zM5.6 1.5c.4-.2 1-.2 1.4.1l9 5.1-2.7 2.7L5.6 1.5z" />
    </svg>
  );
}
