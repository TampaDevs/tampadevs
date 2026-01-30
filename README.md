# tampadevs.com

The official website for Tampa Devs, Tampa Bay's largest tech community.

## Tech Stack

- **Framework**: [React Router](https://reactrouter.com/) v7 (SSR)
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Design System**: [@tampadevs/react](../tampadevs-design-system/packages/react), [@tampadevs/tokens](../tampadevs-design-system/packages/tokens), [@tampadevs/tailwind-preset](../tampadevs-design-system/packages/tailwind-preset)
- **Build Tool**: [Vite](https://vite.dev/)
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy
```

## Project Structure

```
tampadevs.com/
├── app/
│   ├── components/      # Reusable React components
│   ├── lib/             # Utilities, types, helpers
│   ├── routes/          # Page routes (file-based routing)
│   ├── entry.server.tsx # Server-side rendering entry
│   ├── root.tsx         # Root layout component
│   ├── routes.ts        # Route configuration
│   └── app.css          # Global styles + Tailwind
├── workers/
│   └── app.ts           # Cloudflare Worker entry point
├── public/              # Static assets
├── vite.config.ts       # Vite configuration
├── react-router.config.ts # React Router SSR config
├── wrangler.jsonc       # Cloudflare Workers config
└── tsconfig*.json       # TypeScript configuration
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/about` | About Tampa Devs |
| `/events` | Upcoming events |
| `/groups` | Tech groups in Tampa Bay |
| `/sponsors` | Sponsorship information |
| `/contact` | Contact information |

## Development

### Adding a New Route

1. Create a new file in `app/routes/` (e.g., `new-page.tsx`)
2. Add the route to `app/routes.ts`
3. Export `meta` function for SEO
4. Export `loader` for server-side data fetching (optional)
5. Export default component

### Using Design System Components

```tsx
import { Button, VideoHero, SponsorGrid } from "@tampadevs/react";

export default function MyPage() {
  return (
    <>
      <Button variant="primary" href="/link">Click Me</Button>
      <SponsorGrid
        title="Our Sponsors"
        sponsors={sponsors}
        showTierHeadings
      />
    </>
  );
}
```

### Environment Variables

Cloudflare Workers environment variables are accessed via the loader context:

```tsx
export async function loader({ context }: Route.LoaderArgs) {
  const apiKey = context.cloudflare.env.API_KEY;
  // ...
}
```

## Deployment

Deployments are handled via Wrangler to Cloudflare Workers:

```bash
npm run deploy
```

The site is deployed to:
- `tampadevs.com`
- `www.tampadevs.com`

## Related Projects

- [api.tampa.dev](https://github.com/TampaDevs/tampa.dev) - Events API and tampa.dev website
- [tampadevs-design-system](https://github.com/TampaDevs/tampadevs-design) - Shared design system

## License

MIT
