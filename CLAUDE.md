# Claude Development Rules - Isla Dorada

## Session Start Protocol
1. Read `progress-nico.txt` to understand current state
2. Read `lessons-nico.md` for past mistakes to avoid
3. Reference `TECH_STACK.md` for allowed dependencies

## Session End Protocol
1. Update `progress-nico.txt` with completed work
2. Update `lessons-nico.md` if any corrections were made

## Trigger Phrases
- **"you made a mistake"** → Immediately add the mistake and fix to `lessons.md`
- **"/design-audit"** → Enter UI/UX architect mode (Steve Jobs/Jony Ive philosophy)
- **"/feature-audit"** → Enter feature intelligence mode (Jobs/Lutke/Chesky/Rams product thinking)
- **"/redesign"** → Enter creative director mode — reimagine a specific component or section from first principles
- **"/image-scout"** → Enter luxury travel photographer mode — find and curate Unsplash images for travel/hospitality
- **"/security-scan"** → Enter security engineer mode — scan dependencies, code, secrets, and infrastructure

---

## Project Overview
Isla Dorada is a luxury bespoke travel agency website for Lanzarote, Canary Islands. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Uses hexagonal architecture (domain → application → infrastructure → presentation).

## Docker Environment
- **Run dev server**: `docker compose up`
- **Build**: `docker compose exec web npm run build`
- **Access**: http://localhost:3000

## Code Architecture

### Hexagonal Architecture
```
src/
  domain/              → Types and interfaces (Experience, Testimonial, Stat, etc.)
  application/
    ports/             → Repository interfaces (IContentRepository)
    use-cases/         → Business logic (getHomePageContent)
  infrastructure/
    adapters/          → Implementations (StaticContentRepository)
    config/            → Fonts, external config
    data/              → Static data (experiences, navigation, stats, etc.)
    seo/               → Structured data, SEO utilities
  presentation/
    components/
      layout/          → Header, Footer, MobileNav
      sections/        → HeroSection, ExperiencesSection, etc.
      ui/              → Button, SectionLabel, StubPage
  app/                 → Next.js App Router pages and layouts
```

### Component Patterns
- Server components by default
- `"use client"` only when needed (animations, state, interactivity)
- Props typed with interfaces from `@/domain/types`
- Framer Motion for animations (HeroSection, CTASection)
- Lucide React for icons

### Routing
- App Router (`src/app/`)
- Static pages: `/`, `/about`, `/contact`, `/experiences`, `/volcano-nature`, `/sea-adventure`, `/wine-gastronomy`, `/private-custom`
- All pages use shared `RootLayout` with Header/Footer

## Styling Rules

### Tailwind CSS v4
- Theme defined in `src/app/globals.css` using `@theme inline`
- Use Tailwind utilities exclusively
- No inline styles (except background images and gradients)
- Mobile-first approach (base styles for mobile, `md:` / `lg:` for larger screens)

### Design Tokens
| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Gold (Primary) | `#C9A962` | `bg-gold`, `text-gold` | CTAs, accents, labels |
| Gold End | `#8B7845` | `to-gold-end` | Gradient endpoint |
| Dark BG | `#2A2624` | `bg-dark-bg` | Page background |
| Card BG | `#4A2E2A` | `bg-card-bg` | Card backgrounds |
| Text Primary | `#F5F5F0` | `text-text-primary` | Headings, main text |
| Text Secondary | `#AAA6A2` | `text-text-secondary` | Body text |
| Text Muted | `#7A7674` | `text-text-muted` | Subtle text, nav links |

### Typography
- **Headings**: `font-cormorant` (Cormorant Garamond) — light/medium weight, large sizes
- **Body/UI**: `font-inter` (Inter) — light weight, smaller sizes
- **Tracking**: Wide letter-spacing on labels (`tracking-[2px]`, `tracking-[3px]`)

## Git Workflow
- Current branch: `master`
- Main branch: `master`
- Commit only when explicitly asked
- Use descriptive commit messages

## Forbidden Actions
- Do NOT add new npm packages without approval
- Do NOT use inline styles (except background images/gradients)
- Do NOT create new pages without approval
- Do NOT commit .env files or secrets
- Do NOT use jQuery or other JS frameworks

## Reference Documents
- `progress-nico.txt` - Current development state (Nico)
- `lessons-nico.md` - Past mistakes and learnings (Nico)
- `TECH_STACK.md` - Locked dependencies
- `FRONTEND_GUIDELINES.md` - Design system, colors, components
- `IMPACT_MAP.md` - Component dependency map
