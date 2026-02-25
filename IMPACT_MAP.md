# Impact Map
# When you change a domain entity or shared component, check here to know what's affected.
# Updated: 2026-02-23

---

## Domain Types (`src/domain/types.ts`)

### NavigationItem
| Consumer | File | What it uses |
|----------|------|-------------|
| **Header** | `layout/Header.tsx` | `id`, `label`, `href`, `isCTA` — filters links vs CTA |
| **MobileNav** | `layout/MobileNav.tsx` | Same fields — mobile hamburger menu |
| **RootLayout** | `app/layout.tsx` | Passes `navigation` from repository to Header |

### Experience
| Consumer | File | What it uses |
|----------|------|-------------|
| **ExperiencesSection** | `sections/ExperiencesSection.tsx` | `id`, `title`, `category`, `image`, `slug` — card grid |
| **HomePage** | `app/page.tsx` | Passes experiences from use case |

### ProcessStep
| Consumer | File | What it uses |
|----------|------|-------------|
| **HowWeWorkSection** | `sections/HowWeWorkSection.tsx` | `id`, `number`, `title`, `description`, `icon` — step cards |

### Stat
| Consumer | File | What it uses |
|----------|------|-------------|
| **SocialProofSection** | `sections/SocialProofSection.tsx` | `id`, `value`, `label` — animated stat counters |

### Testimonial
| Consumer | File | What it uses |
|----------|------|-------------|
| **SocialProofSection** | `sections/SocialProofSection.tsx` | `id`, `quote`, `authorName`, `authorLocation` — quote cards |

---

## Shared Components

### Header (`layout/Header.tsx`)
- Used in: `app/layout.tsx` (every page)
- Depends on: `MobileNav`, `NavigationItem` type
- If changed: affects all 8 routes

### Footer (`layout/Footer.tsx`)
- Used in: `app/layout.tsx` (every page)
- If changed: affects all 8 routes

### MobileNav (`layout/MobileNav.tsx`)
- Used in: `Header.tsx`
- Client component with `useState` for menu toggle
- If changed: affects mobile navigation on all pages

### Button (`ui/Button.tsx`)
- Used in: `HeroSection.tsx`
- Props: `href`, `variant`, `children`, `className`
- If changed: affects hero CTA buttons

### SectionLabel (`ui/SectionLabel.tsx`)
- Used in: `HeroSection.tsx`
- Props: `children`, `withLine`, `className`
- If changed: affects hero label

### StubPage (`ui/StubPage.tsx`)
- Used in: 6 stub route pages (`/about`, `/contact`, `/experiences`, `/volcano-nature`, `/sea-adventure`, `/wine-gastronomy`)
- Props: `title`, `subtitle`
- If changed: affects all stub pages

---

## Data Sources (`infrastructure/data/`)

| Data file | Consumed by | Via |
|-----------|------------|-----|
| `navigation.ts` | Header, MobileNav | `StaticContentRepository` → `getNavigation()` |
| `experiences.ts` | ExperiencesSection | `StaticContentRepository` → `getExperiences()` |
| `processSteps.ts` | HowWeWorkSection | `StaticContentRepository` → `getProcessSteps()` |
| `stats.ts` | SocialProofSection | `StaticContentRepository` → `getStats()` |
| `testimonials.ts` | SocialProofSection | `StaticContentRepository` → `getTestimonials()` |

---

## Theme / Styling (`globals.css`)

### If you change a color token:
| Token | Components affected |
|-------|-------------------|
| `--color-gold` | Button (primary), SectionLabel, all section headers, step cards bg, footer brand |
| `--color-dark-bg` | body, Header, Footer, MobileNav overlay, testimonial cards |
| `--color-card-bg` | HowWeWorkSection (non-gold cards if reverted), any future dark cards |
| `--color-card-border` | Step card borders |
| `--color-text-primary` | All headings, card titles, nav links on hover |
| `--color-text-muted` | Nav links, body text in various sections |

### If you change fonts (`infrastructure/config/fonts.ts`):
- Affects every component — `font-cormorant` and `font-inter` are used everywhere
- Font variables set on `<body>` in `app/layout.tsx`
