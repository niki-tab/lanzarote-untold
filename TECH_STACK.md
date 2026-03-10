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

### Rich Text Editor
- @tiptap/react: ^3.20.0
- @tiptap/starter-kit: ^3.20.0
- @tiptap/extension-image: ^3.20.0
- @tiptap/extension-link: ^3.20.0
- @tiptap/pm: ^3.20.0

### Utilities
- slugify: ^1.6.6
- bcryptjs: ^3.0.3

### Build Tools
- ESLint: ^9
- eslint-config-next: 16.1.6

## Backend

### Database
- PostgreSQL 16 (Alpine, via Docker)
- Prisma ORM: ^7.4.1
- @prisma/client: ^7.4.1
- @prisma/adapter-pg: ^7.4.1

### Authentication
- NextAuth: ^4.24.13 (Credentials provider, JWT sessions)

## Fonts (Google Fonts via next/font)
- Cormorant Garamond (headings): weights 300, 400, 500, 600
- Inter (body/UI): variable weight

## Infrastructure

### Development
- Docker Compose (Node 20 Alpine + PostgreSQL 16 Alpine)
- `docker compose up` → localhost:3000 (web) + localhost:5432 (db)
- Hot reload via volume mounts + WATCHPACK_POLLING

### Production
- (TBD — add hosting details when deployed)

## Architecture
- Hexagonal architecture (domain / application / infrastructure / presentation)
- Next.js App Router (src/app/)
- Route groups: (public) for visitor pages, (admin) for admin panel
- Server components by default, "use client" only when needed
- Static site generation for public pages, dynamic rendering for blog + admin

## Forbidden
- Do NOT add new CSS frameworks (stick to Tailwind v4)
- Do NOT add jQuery or other JS libraries
- Do NOT change Node.js version (20 Alpine)
