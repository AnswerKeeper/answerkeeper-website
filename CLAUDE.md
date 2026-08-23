# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # next dev on :3000
npm run build   # next build
npm run start   # serve production build
npm run lint    # eslint (flat config)
```

There is **no test framework** in this project — no test runner, no test files, no `test` script. Don't reference or invent one.

Two things to know before you trust these commands as gates:

- `npm run lint` currently **fails** (~25 pre-existing errors) on `main` and `controlled-production`. The bulk are `@next/next/no-html-link-for-pages` (landing components use `<a href="/pricing">` instead of `next/link`), plus `react/no-unescaped-entities` in `Testimonials.tsx` and two errors in the dead `tailwind.config.ts`. Treat lint as "did I add *new* errors", not as pass/fail.
- `npm run build` succeeds, but is very slow on this Windows machine (~9 min compile, ~16 min TypeScript). Budget for it or skip it for CSS/copy-only edits. `build-log.txt` at the repo root records a historical `/_global-error` prerender failure that no longer reproduces — it is a stale artifact, not a current bug.

## Architecture

One Next.js 16 App Router project serving two unrelated concerns:

1. **A marketing site** (`src/app/*/page.tsx`, `src/components/landing/*`) — static pages, no data layer.
2. **A Vapi voice-agent tool backend** (`src/app/api/*`) — webhooks called by a hosted Vapi phone agent mid-conversation.

Nothing on the marketing site calls the API routes. They only exist for Vapi to invoke. Changing an API route cannot break a page, and vice versa.

### The Vapi contract (read this before touching `src/app/api/`)

Every route under `src/app/api/` is a **Vapi tool endpoint**, so it follows conventions that look wrong for a normal REST API:

- **Response shape is `{ results: [{ toolCallId, result }] }`.** `result` is a natural-language string that the voice agent **reads aloud to the caller**. Write it as a sentence, not a status code or JSON blob.
- **Errors fail open, not closed.** `check-availability` returns `{ available: true }` with **HTTP 200** even when Google Calendar throws. This is deliberate: a 500 would stall the live phone call. Preserve this when editing — don't "fix" it into a proper error status.
- **Request parsing is defensive and inconsistent.** Vapi sends tool arguments in several shapes depending on message type and schema version, and each route defends differently:
  - `body.message.toolCalls[0].function.arguments` — may be an **object or a JSON-encoded string**; routes `try/catch` a `JSON.parse` on the string case.
  - `body.message.functionCall.parameters` — older/alternate form, still handled in `check-availability` and `vapi-webhook`.
  - Falling back to the raw body (`book-appointment`) for direct/manual invocation.
  - Argument names are aliased both ways (`customerName || callerName`, `address || serviceAddress`, `customerPhone || callbackNumber`). Keep accepting both when adding fields.
- `vapi-webhook` is the multiplexer: it branches on `message.type` for `end-of-call-report` (→ Telegram alert) and `tool-calls` / `function-call` (→ dispatch by function name).

### Two competing tenancy models for Google Calendar

This is the most important thing to know about the backend, and it is easy to change the wrong one:

| Route | Credentials | Calendar |
|---|---|---|
| `api/book-appointment`, `api/check-availability` | **Single-tenant** — `GOOGLE_CLIENT_EMAIL` / `GOOGLE_PRIVATE_KEY` env vars | `GOOGLE_CALENDAR_ID` |
| `api/vapi-webhook` → `book_appointment` | **Multi-tenant** — Supabase `clients` table, looked up by `client_id` (defaults to `"default"`) | per-row `calendar_id` |

So **two independent implementations of "book an appointment" exist**. The Supabase path reads `client_email`, `private_key`, and `calendar_id` off the row and is the multi-tenant direction; the env-var path is the original single-tenant one and additionally sends a Twilio confirmation SMS. When asked to change booking behavior, determine which path the live Vapi assistant actually calls before editing — or change both.

Supabase is accessed with the **service role key** (`SUPABASE_SERVICE_ROLE_KEY`) and bypasses RLS. Client-side Supabase is not used anywhere.

**Google private key normalization** is a recurring footgun, hand-rolled in three places: strip surrounding double quotes, then `replace(/\\n/g, "\n")`. Any new Google-authenticated route needs the same treatment or auth fails opaquely.

Appointment duration is hardcoded to 30 minutes; `check-availability` scans a 1-hour conflict window (so the window and the booked slot deliberately disagree). `book-appointment` pins `timeZone: 'America/New_York'`; the Supabase path sends no timezone at all.

### Twilio: two incompatible sender-number conventions

- `api/send-sms`, `api/send-checkout`: `TWILIO_TOLL_FREE_NUMBER || TWILIO_MESSAGING_NUMBER || '+18665788768'` (**hardcoded fallback number in source**).
- `api/book-appointment`: `TWILIO_PHONE_NUMBER`, and silently skips the SMS if unset.

An identical `formatE164` helper is duplicated verbatim in `send-sms` and `send-checkout` (10 digits → `+1…`, 11 starting with `1` → `+…`); `book-appointment` uses a third, weaker inline variant. If you unify these, unify all three. Booking SMS is truncated to `.slice(0, 160)` to stay one segment, and SMS failure there is caught and logged so booking still succeeds.

### Conversion funnel (and a known live mismatch)

Two distinct paths, chosen in `api/send-checkout` from `is_free_trial || plan_type === 'trial' || request_type === 'trial'`:

- **Free trial** → Tally form `https://tally.so/r/D49rpE`. This URL is **hardcoded in six places** (`send-checkout` plus `Hero`, `Navbar` ×2, `RevenueCalculator`, `Testimonials`, `FinalCTA`). Changing it means changing all of them.
- **Paid** → texts `https://answerkeeper.app/checkout`. ⚠️ **There is no `/checkout` route in this repo.** The Paddle checkout actually lives on `/pricing`. Either the production host handles `/checkout` outside this codebase or the SMS link 404s — verify before relying on it, and don't assume a `/checkout` page exists.

Paddle (`src/components/PaddlePricing.tsx`) is **client-side overlay only — there is no Paddle webhook or server-side fulfillment.** Nothing in this repo records or provisions a subscription. It hard-fails to "Price unavailable" unless `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` starts with `live_` (`environment: "production"`, sandbox tokens are rejected by design). `PRICE_ID` is hardcoded. `successUrl` → `/welcome`.

Operator alerting is Telegram-only: end-of-call reports post a Markdown message via `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID`, with the transcript truncated to 300 chars. It no-ops silently if either var is missing.

## Styling: `tailwind.config.ts` is dead code

Tailwind **v4** via `@tailwindcss/postcss`. The source of truth is `src/app/globals.css` (`@import "tailwindcss"` + `@theme inline`), which defines the real palette: a **navy/blue** scheme (`--blue: #1a6cff`) plus `animate-fade-up`, `animate-float-soft`, `animate-pulse-ring`, `animate-marquee`.

`tailwind.config.ts` is a leftover **v3-style** config. Tailwind v4 does not auto-load it and `globals.css` has no `@config` directive, so **nothing in that file applies** — its purple palette, `blue`→purple aliasing, `bg-stripe-purple`/`shadow-glass` backgrounds, and the `.card-hover` utility are all inert. Editing it changes nothing on screen. Add design tokens to `globals.css` instead. (It is also the source of 2 of the lint errors.)

Consequences worth knowing before you chase a visual bug:

- **The dark-mode toggle does not work.** `ThemeToggle` adds `.dark` to `<html>`, but class-based dark mode requires either the (unloaded) `darkMode: "class"` config or a `@custom-variant dark` in CSS, and neither is active. So the many `dark:` variants in `Navbar`/`ThemeToggle` follow the **OS `prefers-color-scheme`**, not the button. The toggle also has no persistence and always starts light.
- **`layout.tsx` contradicts `globals.css`.** The `<body>` hardcodes `bg-slate-950 text-slate-100` (dark) while `globals.css` sets a white/navy light theme; the utility classes win, so pages fight the body background — hence pages like `/pricing` painting their own full-screen backgrounds.
- **The custom fonts are not loaded.** Components use `font-[family-name:var(--font-outfit)]` and `globals.css` maps `--font-sans`/`--font-display` to `var(--font-dm-sans)`/`var(--font-outfit)`, but `layout.tsx` imports no `next/font`, so those variables are undefined and text falls back to `system-ui`. (The README's mention of Geist is stock boilerplate and inaccurate.) Wire fonts in `layout.tsx` if you need them.

Imports use the `@/*` → `./src/*` alias. Landing sections are barrel-exported from `src/components/landing/index.ts`; `DemoModal` is deliberately **not** in the barrel and is imported directly by `src/app/page.tsx`. `src/app/page.tsx` is a client component purely to hold the `demoOpen` state.

## Environment variables

`.env.example` lists only `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` and is badly out of date. The full set actually read from code:

```
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN     # must start with live_
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_PRIVATE_KEY                  # escaped \n, may be quote-wrapped
GOOGLE_CALENDAR_ID
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_TOLL_FREE_NUMBER             # send-sms, send-checkout
TWILIO_MESSAGING_NUMBER             # fallback for the above
TWILIO_PHONE_NUMBER                 # book-appointment only
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

## Deployment

Vercel, deployed from the repo root (`vercel-root-fix.json` pins `rootDirectory: null`). `main` is the default branch; `controlled-production` is the active hardening branch. Because the Vapi assistant's tool URLs point at deployed endpoints, API-route changes are only exercisable after deploy — local `npm run dev` cannot receive Vapi webhooks without a tunnel.

`tmp-lucide/lucide-react.tgz` is a leftover vendored tarball that is **not** referenced by `package.json` or `package-lock.json` — `lucide-react@1.28.0` installs normally from the registry. The directory is dead weight, not a dependency source.
