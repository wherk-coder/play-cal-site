// Play Cal "Meet-up" identity (brand package v1, Oct 2026). Two offset
// schedule pills with a ball where they overlap. Geometry is copied from the
// master SVGs; don't redraw or recolor individual pieces.

export const BRAND_NAME = "Play Cal";

const PILL_LEFT =
  "M12 23A15 15 0 0 1 42 23L42 30.04A21.5 21.5 0 0 0 33.943 64.298A15 15 0 0 1 12 51Z";
const PILL_RIGHT =
  "M88 77A15 15 0 0 1 58 77L58 69.96A21.5 21.5 0 0 0 66.057 35.702A15 15 0 0 1 88 49Z";
const BALL = "M32 50A18 18 0 1 0 68 50A18 18 0 1 0 32 50Z";

type MarkProps = { className?: string };

/** Full-color symbol for light backgrounds. */
export function BrandSymbol({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d={PILL_LEFT} fill="var(--ink)" />
      <path d={PILL_RIGHT} fill="var(--pool)" />
      <path d={BALL} fill="var(--coral)" />
    </svg>
  );
}

/** The app icon: white and ink pills, sun ball, on a pool tile. */
export function AppIcon({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="-20 -20 140 140" aria-hidden="true">
      <rect x="-20" y="-20" width="140" height="140" rx="31" fill="var(--pool)" />
      <path d={PILL_LEFT} fill="#ffffff" />
      <path d={PILL_RIGHT} fill="var(--ink)" />
      <path d={BALL} fill="var(--sun)" />
    </svg>
  );
}

/** Horizontal lockup: symbol + wordmark set in Bricolage Grotesque ExtraBold. */
export function BrandLockup({ className }: MarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <BrandSymbol className="h-7 w-7" />
      <span className="font-display text-xl font-extrabold tracking-[-0.03em] text-foreground">
        {BRAND_NAME}
      </span>
    </span>
  );
}
