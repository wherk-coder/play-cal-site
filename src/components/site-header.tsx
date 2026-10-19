import Link from "next/link";
import { BRAND_NAME, BrandLockup } from "@/components/brand";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label={`${BRAND_NAME} home`}>
          <BrandLockup />
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
          className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-hover"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}
