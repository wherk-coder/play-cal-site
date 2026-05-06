import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-foreground">Family Hub</p>
          <p>
            &copy; {year} Wherk LLC. Made for parents, with patience.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="/support"
            className="transition-colors hover:text-foreground"
          >
            Support
          </Link>
          <a
            href="mailto:support@play-cal.com"
            className="transition-colors hover:text-foreground"
          >
            support@play-cal.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
