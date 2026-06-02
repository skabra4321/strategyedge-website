# StrategyEdge Advisory — Deployment Guide

## Prerequisites
- Node.js 18.17 or later
- npm 9+ or pnpm/yarn

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Production Build

```bash
npm run build
npm start
```

---

## Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. On first deploy, Vercel auto-detects Next.js and configures everything.

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel detects Next.js automatically — click **Deploy**

No environment variables are required for the base site.

---

## Adding a Contact Form Backend

The contact form in `src/components/ContactForm.tsx` currently simulates submission.
To wire it to a real backend, replace the `await new Promise(...)` with one of:

### Option 1 — Resend (recommended for email)
```bash
npm install resend
```
Create `src/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()
  await resend.emails.send({
    from: 'website@strategyedge.com',
    to: 'principals@strategyedge.com',
    subject: `New enquiry from ${data.name}`,
    text: JSON.stringify(data, null, 2),
  })
  return Response.json({ ok: true })
}
```
Add `RESEND_API_KEY` to Vercel environment variables.

### Option 2 — Formspree (zero-backend)
Replace the `handleSubmit` function with a fetch to your Formspree endpoint.

---

## Customisation Checklist

Before going live, update the following:

### Content
- [ ] Replace placeholder leadership names/bios in `src/lib/data.ts`
- [ ] Replace placeholder case studies in `src/lib/data.ts`
- [ ] Replace placeholder insights in `src/lib/data.ts`
- [ ] Update `principals@strategyedge.com` email in `Footer.tsx`, `ContactCTA.tsx`, `contact/page.tsx`
- [ ] Update `siteName` and `url` in `src/app/layout.tsx` metadata

### Branding
- [ ] Add real logo SVG to `public/logo.svg` and update `Navigation.tsx` and `Footer.tsx`
- [ ] Add `public/og-image.jpg` (1200×630px) for social sharing
- [ ] Add `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Add real leadership photography — update `LeadershipPreview.tsx` and `leadership/page.tsx`

### Domain
- [ ] Add custom domain in Vercel dashboard → Settings → Domains
- [ ] Update `metadataBase` in `src/app/layout.tsx` to match production URL

### Analytics
- [ ] Add Vercel Analytics: `npm install @vercel/analytics` and add `<Analytics />` to `layout.tsx`

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navigation + Footer
│   ├── page.tsx            # Homepage (10 sections)
│   ├── about/              # About page
│   ├── capabilities/       # Capabilities index + [slug] pages
│   ├── industries/         # Industries index + [slug] pages
│   ├── case-studies/       # Case studies index + [slug] pages
│   ├── leadership/         # Leadership index + [slug] pages
│   ├── insights/           # Insights index + [slug] pages
│   └── contact/            # Contact page with form
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── home/               # All homepage section components
│   │   ├── Hero.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Industries.tsx
│   │   ├── WhyUs.tsx
│   │   ├── TheModel.tsx
│   │   ├── Metrics.tsx
│   │   ├── LeadershipPreview.tsx
│   │   ├── InsightsPreview.tsx
│   │   └── ContactCTA.tsx
│   └── ContactForm.tsx     # Contact form component
└── lib/
    ├── data.ts             # All site content (capabilities, industries, case studies, team, insights)
    └── utils.ts            # cn() utility

public/                     # Static assets (add logo, images here)
tailwind.config.ts          # Design system tokens (colors, typography, spacing)
```

---

## Design System Tokens

All design tokens are in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `bg-navy` | `#0F1E2E` | Dark section backgrounds |
| `text-brass` / `bg-brass` | `#A8843A` | Primary accent, CTAs |
| `bg-ivory` | `#F8F6F1` | Page background |
| `bg-stone` | `#EFECE5` | Alternate section background |
| `text-slate` | `#5A6472` | Secondary text |
| `font-cormorant` | Cormorant Garamond | Display / hero headings |
| `font-inter` | Inter | All body text and UI |

---

## Performance Notes

- Fonts loaded via Google Fonts with `display: swap` — no FOUT
- Framer Motion components use `whileInView` with `once: true` — no re-animation on scroll
- Images should be added via `next/image` for automatic optimisation
- All pages are statically generated at build time (`generateStaticParams`)

---

*StrategyEdge Advisory · Built May 2026*
