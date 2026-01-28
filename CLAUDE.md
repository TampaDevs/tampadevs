# CLAUDE.md - AI Agent Context

This file provides context for AI coding agents working on the Tampa Devs website.

## Project Overview

The official website for Tampa Devs (tampadevs.com), built with React Router 7 SSR on Cloudflare Workers.

**Related Projects:**
- `events.api.tampa.dev` - Events API and tampa.dev website (same architecture)
- `tampadevs-design-system` - Shared design tokens and web components

## Quick Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:5173)
npm run build    # Build for production
npm run deploy   # Build + deploy to Cloudflare
npm run typecheck # Full TypeScript check
```

## Architecture

```
Request → Cloudflare Worker → React Router → SSR Render → HTML Response
```

### Key Files

| File | Purpose |
|------|---------|
| `workers/app.ts` | Cloudflare Worker entry point |
| `app/entry.server.tsx` | React SSR rendering |
| `app/root.tsx` | Root layout, meta, scripts |
| `app/routes.ts` | Route configuration |
| `app/app.css` | Global styles + Tailwind theme |
| `vite.config.ts` | Build configuration |
| `wrangler.jsonc` | Cloudflare deployment config |

## Route Patterns

### Creating a Route

```typescript
// app/routes/example.tsx
import type { Route } from "./+types/example";
import { generateMetaTags } from "~/lib/seo";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Page Title",
    description: "Page description",
    url: "https://tampadevs.com/example",
  });
};

export async function loader({ context }: Route.LoaderArgs) {
  // Server-side data fetching
  const env = context.cloudflare.env;
  return { data: "value" };
}

export default function Example({ loaderData }: Route.ComponentProps) {
  return <main>{/* Component JSX */}</main>;
}
```

### Route Registration

Add new routes to `app/routes.ts`:

```typescript
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("example", "routes/example.tsx"),
] satisfies RouteConfig;
```

## Styling

Uses Tailwind CSS v4 with design system tokens:

```css
@import "tailwindcss";
@import "@tampadevs/tokens/css";

@theme {
  --color-navy: var(--td-color-navy);
  --color-coral: var(--td-color-coral);
}
```

### Utility Classes

| Class | Effect |
|-------|--------|
| `.glass` | Glass morphism background |
| `.glass-card` | Glass card with shadow |
| `.glass-light` | Light glass for dark backgrounds |

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#1C2438` | Primary background |
| `coral` | `#E85A4F` | Accent, CTAs |
| `sand` | `#B6A991` | Secondary accent |

## Design System Integration

React components from `@tampadevs/react`:

```tsx
import { Button, EventCard, SponsorGrid, VideoHero } from "@tampadevs/react";

function Page() {
  return (
    <>
      <Button variant="primary" href="/link">Click</Button>
      <EventCard title="Event" date="2025-02-01" />
      <VideoHero
        videoWebm="/video/hero.webm"
        videoMp4="/video/hero.mp4"
        poster="/images/poster.jpg"
        heading={<h1>Title</h1>}
        ctas={<Button variant="primary">Join</Button>}
      />
    </>
  );
}
```

Available components: Button, VideoHero, PromoSection, SponsorGrid, NewsletterSignup, PersonCard, LogoMarquee, ImageCarousel, OpenCollective, and more.

## SEO Pattern

All routes should export `meta` using the helper:

```typescript
import { generateMetaTags } from "~/lib/seo";

export const meta: Route.MetaFunction = () => {
  return generateMetaTags({
    title: "Page Title",
    description: "Description for search engines",
    url: "https://tampadevs.com/path",
    image: "https://tampadevs.com/images/og-image.jpg",
  });
};
```

## Structured Data

Add JSON-LD for rich search results:

```tsx
import { StructuredData } from "~/components/StructuredData";
import { generateOrganizationSchema } from "~/lib/structured-data";

export default function Page() {
  return (
    <>
      <StructuredData data={generateOrganizationSchema()} />
      {/* Page content */}
    </>
  );
}
```

## Cloudflare Context

Access Cloudflare bindings in loaders:

```typescript
export async function loader({ context }: Route.LoaderArgs) {
  const { env, ctx } = context.cloudflare;

  // KV, D1, Durable Objects, etc.
  const value = await env.MY_KV.get("key");

  return { value };
}
```

## Path Aliases

`~/` maps to `./app/`:

```typescript
import { something } from "~/lib/utils";
import { Component } from "~/components";
```

## Common Tasks

### Add a new page
1. Create `app/routes/page-name.tsx`
2. Add to `app/routes.ts`
3. Export `meta`, optionally `loader`, and default component

### Fetch API data
```typescript
export async function loader() {
  const res = await fetch("https://events.api.tampa.dev/...");
  const data = await res.json();
  return { data };
}
```

### Add static asset
Place in `public/` directory, access at root URL:
- `public/images/logo.png` → `/images/logo.png`

## TypeScript

Three tsconfig files:
- `tsconfig.json` - References only
- `tsconfig.cloudflare.json` - App code
- `tsconfig.node.json` - Build tools

Run full typecheck:
```bash
npm run typecheck
```

## Deployment

Configured for Cloudflare Workers:
- Domain: `tampadevs.com`, `www.tampadevs.com`
- Worker name: `tampadevs-com`

Deploy:
```bash
npm run deploy
```
