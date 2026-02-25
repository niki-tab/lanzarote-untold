# Frontend Guidelines - Isla Dorada
# Reference this document for all UI work. Do not deviate without approval.
# Design aesthetic: luxury travel, editorial, warm dark tones.

## Design Philosophy
- **Dark, warm palette** — dark brown backgrounds with gold accents
- **Generous whitespace** — large padding, breathing room between sections
- **Rounded corners on cards** — `rounded-[16px]` mobile, `rounded-[20px]` desktop
- **Elegant typography** — Cormorant Garamond for headings, Inter for body
- The aesthetic is refined, unhurried, and premium — like a luxury concierge, not a booking engine

## Brand Colors

### Primary Palette (from globals.css @theme)
| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Gold | `#C9A962` | `text-gold`, `bg-gold` | CTAs, labels, accents, highlights |
| Gold End | `#8B7845` | `to-gold-end` | Gradient endpoint (logo mark) |
| Dark BG | `#2A2624` | `bg-dark-bg` | Page background, header, footer |
| Card BG | `#4A2E2A` | `bg-card-bg` | Dark card backgrounds |
| Card Border | `#5E3E3A` | `border-card-border` | Card borders |
| Text Primary | `#F5F5F0` | `text-text-primary` | Headings, main content |
| Text Secondary | `#AAA6A2` | `text-text-secondary` | Body paragraphs |
| Text Muted | `#7A7674` | `text-text-muted` | Subtle text, nav links |
| Text Dark | `#1E1A18` | `text-text-dark` | Text on gold backgrounds |
| Border | `#4A4541` | `border-border` | Dividers, separators |

### Usage Rules
- **Primary buttons**: `bg-gold text-text-dark font-medium` + `tracking-[2px]`
- **Secondary buttons**: `border border-[#F5F5F050] text-text-primary`
- **Outline buttons**: `border border-gold text-gold font-medium`
- **Section labels**: `text-gold text-[9px] lg:text-[11px] tracking-[3px] font-medium`
- **Backgrounds**: Always `bg-dark-bg` — never white or light backgrounds

### Step Cards (How We Work)
- **Background**: `bg-gold` (gold-filled cards)
- **Border**: `border-[#5E3E3A]`
- **Step number**: `text-[#221e1c]` (dark)
- **Title**: `text-white`
- **Description**: `text-black`
- **Icon**: `text-white`

---

## Typography

### Font Families
```
font-cormorant: Cormorant Garamond (headings, display text)
font-inter: Inter (body text, UI elements, labels)
```

### Font Sizes (Mobile → Desktop)
| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero heading | `text-[44px]` | `lg:text-[72px]` |
| Section heading | `text-[32px]` or `text-4xl` | `lg:text-5xl` |
| Card heading | `text-[22px]` | `lg:text-[26px]` |
| Body text | `text-sm` (14px) | `lg:text-base` (16px) |
| Labels | `text-[9px]` | `lg:text-[11px]` |
| Nav links | `text-[13px]` | `text-[13px]` |

### Text Styling
- Headings: `font-cormorant font-light tracking-[-1px]`
- Labels: `font-inter font-medium tracking-[3px] uppercase`
- Body: `font-inter font-light leading-[1.8]`

---

## Spacing

### Section Padding (Mobile → Desktop)
- Standard sections: `px-5 py-[60px]` → `lg:px-[120px] lg:py-[120px]`
- Header: `px-5 py-4` → `md:px-20 md:py-6`
- Footer: `px-5 pt-10 pb-6` → `lg:px-[120px] lg:pt-[60px] lg:pb-10`

### Component Gaps
- Section internal gaps: `gap-10` → `lg:gap-20`
- Card padding: `p-6` → `lg:p-10`
- Card gaps: `gap-4` → `lg:gap-6`

---

## Components

### Buttons
```tsx
// Primary (gold background)
<Button href="/contact" variant="primary">BEGIN YOUR JOURNEY</Button>
// → bg-gold text-text-dark font-medium px-9 py-4 tracking-[2px]

// Secondary (subtle border)
<Button href="/experiences" variant="secondary">VIEW EXPERIENCES</Button>
// → border border-[#F5F5F050] text-text-primary px-9 py-4

// Outline (gold border)
<Button href={cta.href} variant="outline">ENQUIRE NOW</Button>
// → border border-gold text-gold font-medium
```

### Cards
- Background: `bg-card-bg` or `bg-dark-bg` depending on context
- Border: `border border-card-border` or `border border-border`
- Corner radius: `` mobile, `` desktop
- Padding: `p-6` mobile, `lg:p-10` desktop

### Section Labels
```tsx
<SectionLabel withLine>LANZAROTE, CANARY ISLANDS</SectionLabel>
// → gold text, uppercase, wide tracking, optional gold line
```

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | 0-767px | Mobile (base styles) |
| `md:` | 768px+ | Tablet — nav visible, buttons side-by-side |
| `lg:` | 1024px+ | Desktop — full padding, large text, grid layouts |

### Mobile-First Approach
Always write base styles for mobile, then add responsive prefixes:
```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col lg:flex-row">

<!-- Compact on mobile, spacious on desktop -->
<section class="px-5 py-[60px] lg:px-[120px] lg:py-[120px]">

<!-- Full-width buttons on mobile, auto on desktop -->
<Button className="w-full justify-center md:w-auto">
```

---

## Animations

### Framer Motion (client components only)
- Hero entrance: `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
- CTA section: `whileInView` with `viewport={{ once: true }}`
- Duration: `0.6s` to `0.8s`, `easeOut`

### CSS Transitions
- Hover opacity: `transition-opacity hover:opacity-80`
- Color transitions: `transition-colors`
- Image zoom: `transition-transform duration-700 group-hover:scale-105`

---

## Images
- Background images via inline `style` (Unsplash URLs)
- Gradient overlays via inline `style` (linear-gradient)
- Experience cards: `bg-cover bg-center` with hover zoom effect

---

## Do's and Don'ts

### DO
- Use the design token colors from globals.css consistently
- Follow mobile-first responsive patterns
- Use `font-cormorant` for all headings
- Use `font-inter` for all body/UI text
- Add hover states to all interactive elements
- Keep dark backgrounds throughout — this is a dark-themed site

### DON'T
- Don't use white or light backgrounds
- Don't use random hex colors — use Tailwind token classes
- Don't forget `tracking-[2px]` or `tracking-[3px]` on labels/buttons
- Don't use `font-bold` — headings use `font-light` or `font-medium`
- Don't skip responsive breakpoints — every component must work at 375px
