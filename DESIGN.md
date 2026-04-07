# StayOnTop Design System

## Brand Identity
- **Personality**: Calm, trustworthy, family-oriented, modern, clear
- **Voice**: Reassuring, straightforward, helpful without hype
- **Target**: Busy parents and household organizers managing life admin through email

## Color Palette

### Primary Colors
- **Teal 600** `#0d9488` — Primary brand color, CTAs, active states
- **Teal 700** `#0f766e` — Primary hover state
- **Teal 50** `#f0fdfa` — Light teal backgrounds
- **Teal 100** `#ccfbf1` — Subtle teal accents

### Neutral Colors
- **Warm Gray 900** `#1c1917` — Primary text (stone-900)
- **Warm Gray 700** `#44403c` — Secondary text (stone-700)
- **Warm Gray 500** `#78716c` — Muted text (stone-500)
- **Warm Gray 200** `#e7e5e4` — Borders (stone-200)
- **Warm Gray 100** `#f5f5f4` — Section backgrounds (stone-100)
- **Warm Gray 50** `#fafaf9` — Page background (stone-50)
- **White** `#ffffff` — Card backgrounds

### Accent Colors
- **Amber 500** `#f59e0b` — Warning, attention
- **Amber 50** `#fffbeb` — Warm highlight backgrounds
- **Rose 500** `#f43f5e` — Error states
- **Emerald 500** `#10b981` — Success states

### Dark Mode
- **Background** `#0c0a09` — stone-950
- **Surface** `#1c1917` — stone-900
- **Surface elevated** `#292524` — stone-800
- **Text primary** `#fafaf9` — stone-50
- **Text secondary** `#a8a29e` — stone-400
- **Border** `#44403c` — stone-700

## Typography

### Font Stack
- **Headlines**: Geist Sans (system) — clean, modern, geometric
- **Body**: Geist Sans (system) — excellent readability
- **Mono**: Geist Mono — for any code or technical text

### Type Scale
- **Display**: 3.75rem (60px) / line-height 1.1 — Hero headline
- **H1**: 2.25rem (36px) / line-height 1.2 — Section titles
- **H2**: 1.875rem (30px) / line-height 1.3 — Subsection titles
- **H3**: 1.25rem (20px) / line-height 1.4 — Card titles
- **Body Large**: 1.125rem (18px) / line-height 1.75 — Lead paragraphs
- **Body**: 1rem (16px) / line-height 1.75 — Default body text
- **Small**: 0.875rem (14px) / line-height 1.5 — Captions, labels
- **XS**: 0.75rem (12px) / line-height 1.5 — Fine print

## Spacing System
Based on 4px grid with Tailwind defaults:
- **xs**: 4px (1)
- **sm**: 8px (2)
- **md**: 16px (4)
- **lg**: 24px (6)
- **xl**: 32px (8)
- **2xl**: 48px (12)
- **3xl**: 64px (16)
- **4xl**: 96px (24)
- **Section padding**: 96px vertical (py-24), 128px on desktop (py-32)

## Component Patterns

### Buttons
- **Primary**: Teal-600 bg, white text, rounded-xl, px-6 py-3, hover teal-700, transition
- **Secondary**: White bg, stone-700 border, stone-900 text, hover stone-50 bg
- **Ghost**: Transparent bg, teal-600 text, hover teal-50 bg

### Cards
- White background, stone-200 border, rounded-2xl, p-6 or p-8
- Subtle shadow-sm, hover shadow-md transition
- Dark mode: stone-900 bg, stone-700 border

### Forms
- Inputs: rounded-xl, stone-200 border, stone-50 bg, focus ring teal-500
- Labels: text-sm font-medium stone-700
- Textarea: same styling, min-h appropriate

### Navigation
- Sticky header with backdrop-blur
- White/95% opacity background
- Stone-200 bottom border
- Mobile hamburger at md breakpoint

### Section Layout
- Max-width: 1280px (max-w-7xl) centered
- Consistent padding: px-4 sm:px-6 lg:px-8
- Section spacing: py-24 lg:py-32

## Accessibility
- WCAG 2.1 AA compliance target
- All colors meet 4.5:1 contrast ratio for text
- Focus visible outlines on all interactive elements
- Semantic HTML (nav, main, section, footer)
- ARIA labels where needed
- Keyboard navigable
- Reduced motion respect via prefers-reduced-motion

## Design Rationale
- **Warm stone neutrals** instead of cold grays to feel approachable and family-friendly
- **Teal primary** conveys trust and calm without the generic startup blue
- **Generous whitespace** reduces cognitive load — mirrors the product's mission
- **Rounded corners (2xl)** feel soft and friendly
- **No aggressive gradients or animations** — the brand is about reducing stress, not adding visual noise
- **Mobile-first** because busy parents are often on their phones
