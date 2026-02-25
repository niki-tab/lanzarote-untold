# Tech Stack - Isla Dorada
# Locked dependencies. Do not add new packages without explicit approval.

## Frontend

### Core Framework
- Next.js: 16.1.6
- React: 19.2.3
- React DOM: 19.2.3
- TypeScript: ^5

### CSS
- Tailwind CSS: ^4 (v4 with `@theme inline` in globals.css)
- @tailwindcss/postcss: ^4
- PostCSS (via Tailwind)

### Animation
- Framer Motion: ^12.34.3

### Icons
- Lucide React: ^0.575.0

### Build Tools
- ESLint: ^9
- eslint-config-next: 16.1.6

## Fonts (Google Fonts via next/font)
- Cormorant Garamond (headings): weights 300, 400, 500, 600
- Inter (body/UI): variable weight

## Infrastructure

### Development
- Docker Compose (Node 20 Alpine)
- `docker compose up` → localhost:3000
- Hot reload via volume mounts + WATCHPACK_POLLING

### Production
- (TBD — add hosting details when deployed)

## Architecture
- Hexagonal architecture (domain / application / infrastructure / presentation)
- Next.js App Router (src/app/)
- Server components by default, "use client" only when needed
- Static site generation (all pages prerendered)

## Forbidden
- Do NOT add new CSS frameworks (stick to Tailwind v4)
- Do NOT add jQuery or other JS libraries
- Do NOT add a CMS or database without approval
- Do NOT change Node.js version (20 Alpine)
