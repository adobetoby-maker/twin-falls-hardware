# Twin Falls Hardware & Supply

Next.js 16 App Router website for Twin Falls Hardware & Supply, a family-owned hardware store in Twin Falls, Idaho since 1987.

## Stack
- Next.js 16 App Router (TypeScript, Tailwind CSS v4)
- Framer Motion for animations
- Lenis for smooth scrolling
- Resend for email (contact, quote, contractor applications)
- @heroicons/react for icons

## Brand
- Primary: #B91C1C (deep red)
- Secondary: #374151 (dark gray)
- Background: #FAFAF9 (warm white)
- Headings: Roboto Condensed (700, 900) — uppercase for heroes
- Body: Source Sans 3

## Commands
```bash
npm run dev    # localhost:3000
npm run build
npm run lint
```

## Key files
- lib/cart-context.tsx — CartContext with localStorage persistence (key: tfh-cart-v1)
- lib/products.ts — static product catalog
- lib/categories.ts — category definitions
- lib/articles.ts — blog articles
- components/ — shared UI components
