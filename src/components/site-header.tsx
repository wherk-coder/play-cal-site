import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
        >
          <Logo className="h-7 w-7 text-accent" />
          <span>Family Hub</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
          <Link
            href="/#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="/support"
            className="transition-colors hover:text-foreground"
          >
            Support
          </Link>
        </nav>
        <Link
          href="/#get-the-app"
          className="inline-flex items-center rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-hover"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="26"
        height="26"
        rx="8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="11" cy="13" r="2.2" fill="currentColor" />
      <circle cx="21" cy="13" r="2.2" fill="currentColor" />
      <path
        d="M10 21c1.5 1.6 3.5 2.4 6 2.4s4.5-.8 6-2.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
