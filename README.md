# play-cal-site

Marketing site for **PlayCal**, the parent-to-parent playdate-coordination app.

Brand: "Meet-up" identity (brand package v1). Colors and fonts live in
`src/app/globals.css` and `src/app/layout.tsx`; the mark is in
`src/components/brand.tsx`.

Live at [play-cal.com](https://play-cal.com).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Deployed to Vercel

## Routes

- `/` — Marketing landing
- `/privacy` — Privacy Policy (synced from `wherk-coder/family-hub`)
- `/terms` — Terms of Service (synced from `wherk-coder/family-hub`)
- `/support` — Support / FAQ
- `/healthz` — Health check (JSON)

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## Deploy

Auto-deploys to Vercel on push to `main`.
