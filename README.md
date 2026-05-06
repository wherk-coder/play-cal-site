# play-cal-site

Marketing site for **Family Hub** — the parent-to-parent playdate-coordination app.

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
