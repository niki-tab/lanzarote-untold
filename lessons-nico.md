# Lessons Learned
# Update this file after every correction or bug fix to prevent repeating mistakes.

## Design

### Step cards use gold background, not dark
- **Issue**: HowWeWorkSection cards had dark `bg-card-bg` background with translucent gold text
- **Cause**: Initial implementation didn't match the .pen design file
- **Fix**: Cards should use `bg-gold` with `border-[#5E3E3A]`, step numbers in `text-[#221e1c]`, titles/icons in `text-white`, descriptions in `text-black`
- **Date**: 2026-02-23

## Patterns to Follow

### Mobile-first responsive approach
- Always write base styles for mobile (375px), then add `md:` and `lg:` breakpoints for desktop
- Key breakpoints: `md:` (768px) for nav/layout changes, `lg:` (1024px) for full desktop
- Section padding pattern: `px-5 py-[60px]` → `lg:px-[120px] lg:py-[120px]`

### Server vs Client components
- Default to server components
- Only add `"use client"` when state, effects, or animations are needed
- For mixed needs (like Header with mobile menu), keep parent as server component and extract client logic into a child component (MobileNav pattern)

### Docker environment
- Always use `docker compose up` for development
- Build verification: `npx next build` (or via Docker)
- Access at localhost:3000

## Documentation Accuracy

### Always verify against .pen design file
- **Lesson**: When implementing UI, always cross-reference the .pen design file using Pencil MCP tools for exact colors, sizes, and spacing
- **Date**: 2026-02-23
