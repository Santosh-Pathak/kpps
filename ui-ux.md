# Cursor Prompt — UI Overhaul (10/10 Visual Design Pass)

Paste this into Cursor as a follow-up prompt on the existing project. Goal: take the current basic UI and rebuild it into a polished, animated, distinctive design. **Build/finish the Home page fully first** — that's the only page a demo audience will judge. Other pages can inherit the same design system afterward.

Use **dummy/placeholder content everywhere** (images, videos, logo, stats, names) since real assets aren't ready yet. Structure the code so swapping dummy → real content later is a one-line data change, not a rebuild (put all dummy data in a `/data` or `/lib/dummy-data.ts` file, never hardcoded inline in JSX).

---

## 0. DESIGN SYSTEM — LOCK THIS IN FIRST

Don't let Cursor freestyle colors per component. Define this once as Tailwind theme tokens / CSS variables, then every component pulls from it.

### Color palette — Green & White only, no stray colors
Use CSS variables so light/dark theme swap is trivial:

| Token | Light mode | Dark mode | Use |
|---|---|---|---|
| `--primary` | `#0F5132` (deep forest green) | `#22C55E` (bright emerald) | Headlines, primary buttons, nav active state |
| `--primary-dark` | `#0B3D26` | `#166534` | Hover states, gradients |
| `--accent` | `#22C55E` (emerald) | `#4ADE80` | CTAs, highlights, icons |
| `--accent-soft` | `#D1FAE5` (pale mint) | `#0F3D2E` | Card backgrounds, badges, tags |
| `--bg` | `#FFFFFF` | `#0A1F16` (near-black forest) | Page background |
| `--bg-alt` | `#F6FBF8` (warm off-white, faint green tint) | `#0F2A1E` | Alternating section backgrounds |
| `--text` | `#0B1F17` (near-black, green-tinted) | `#F0FBF6` | Body/headline text |
| `--text-muted` | `#4B6358` | `#9CC7B3` | Secondary text |
| `--border` | `#E3F0E9` | `#1C4632` | Card borders, dividers |

No terracotta, no purple, no random accent colors. Every shade must trace back to this table. Gold/yellow is explicitly banned even though it's common in school branding — green + white + the neutral text grays above is the full palette.

### Typography — give it personality, not default Inter-everywhere
- **Display/headline font**: `Fraunces` (variable serif, warm and slightly organic — pairs well with an education/growth theme without being generic). Use at high weight (600–700) for H1/H2, and in *italic* for pull-quotes/taglines.
- **Body font**: `Plus Jakarta Sans` — clean, friendly, highly legible at small sizes for mobile.
- **Utility/caption font**: same as body, smaller size + `--text-muted` color + slight letter-spacing for eyebrows/labels (e.g., "OUR CAMPUS", "WHY KPPS").
- Import both via `next/font/google` (self-hosted, no external font-loading jank).
- Set a real type scale: H1 `clamp(2.25rem, 5vw, 4rem)`, H2 `clamp(1.75rem, 3vw, 2.5rem)`, body `1rem–1.125rem`. Use `clamp()` everywhere so text scales fluidly instead of jumping at breakpoints.

### Signature visual motif (the "10/10" differentiator)
Pick **one** recurring element and use it consistently instead of scattering random decorations:
- An **organic leaf/vine line** (thin animated SVG path, `--accent` color) that runs along section edges or behind the hero, drawn on scroll using Framer Motion's `pathLength` animation. This ties every section together and reflects "growth" without resorting to clipart leaves.
- Use soft **blob/organic-shape backgrounds** (not sharp rectangles) behind stat cards and the hero — irregular rounded shapes in `--accent-soft`, very low opacity, positioned absolutely behind content for depth.
- Section dividers: instead of straight hard lines, use a subtle **wave or leaf-edge SVG divider** between alternating `--bg` / `--bg-alt` sections.

Keep every other element restrained and clean so this motif reads as intentional, not busy.

---

## 1. LIBRARIES — use these to cut custom code and get quality for free

Install and use:
- **`framer-motion`** — all animations (scroll reveals, hero entrance, hover states, page transitions)
- **`lucide-react`** — icon set (clean, consistent line icons; use instead of react-icons for visual consistency — pick one icon library and stick to it everywhere)
- **`embla-carousel-react`** (or `swiper`) — hero slider + facilities/testimonials carousels, touch-swipe native on mobile
- **`shadcn/ui`** — Button, Card, Dialog, Accordion, Tabs, NavigationMenu primitives (accessible out of the box, styled with our tokens instead of default shadcn theme)
- **`clsx` + `tailwind-merge`** (via a `cn()` utility) — clean conditional classNames
- **`react-intersection-observer`** or Framer Motion's built-in `whileInView` — scroll-triggered reveals
- **`react-fast-marquee`** — for the achievements ticker / logo strip (optional, lightweight)
- Optional: `canvas-confetti` for a celebratory micro-interaction on the admission form success state — nice unexpected delight, use once, don't overdo it

Do **not** hand-roll animation/carousel logic from scratch — always reach for these libraries first.

---

## 2. DUMMY DATA & PLACEHOLDER ASSETS

Since there's no real content yet, tell Cursor explicitly:

- **Logo**: generate a simple placeholder logo — a rounded badge/shield SVG with the initials "KP" in `--primary` on `--accent-soft`, plus wordmark "Kids Paradise" in the display font next to it. Build it as a reusable `<Logo />` component so swapping in the real logo file later is one import change.
- **Hero/gallery images**: use `https://picsum.photos/seed/{unique-name}/{width}/{height}` for all placeholder photos (deterministic seeds so images stay consistent across reloads) — e.g., `picsum.photos/seed/kpps-hero-1/1600/900`. Label each `<Image>` component with a `// TODO: replace with real photo — [description: e.g. "students in science lab"]` comment so real-content swap-in is obvious later.
- **Video**: use a royalty-free placeholder mp4 (e.g., a sample from `https://www.pexels.com/` free stock or a local looping muted background clip) for any hero video background — must be muted + autoplay + loop + `playsInline` for mobile.
- **Stats**: dummy but plausible — "1200+ Students", "Est. 2002", "98% Board Result", "40+ Faculty" — animate counting up on scroll (Framer Motion + a simple `useCountUp` hook).
- **Names/quotes**: clearly fictional placeholder names for testimonials/toppers (e.g., "Aarav Sharma, Parent") — don't use real people.

All of the above lives in `/lib/dummy-data.ts` as typed objects/arrays, imported into components — never inline.

---

## 3. HOME PAGE — SECTION-BY-SECTION UI SPEC

### Navbar
- Sticky, transparent-over-hero on load, transitions to solid `--bg` with soft shadow on scroll (Framer Motion `useScroll` + `useTransform`, not just a scroll-listener hack)
- Logo left, nav links center/right, "Apply Now" button in `--primary` filled, theme toggle (animated sun/moon morph icon, not a plain swap) at far right
- Nav links get an animated underline that slides in from the left on hover (`::after` with `scaleX` transform, or Framer `layoutId` shared underline that slides between active links)
- Mobile: hamburger morphs into an X (Framer Motion path morph), menu slides in as a full-screen overlay with staggered link entrance animations, large tap targets (min 48px height)
- Add a slim top utility bar above the main nav (phone/email, hides on scroll down, reveals on scroll up) — desktop only, hidden on mobile to save space

### Hero Section
- Full-viewport-height (`min-h-[90vh]` mobile, `100vh` desktop) slider using embla-carousel: 4–5 dummy campus images, Ken-Burns-style slow zoom on the active slide (CSS `scale` transition over the slide duration)
- Dark gradient overlay (`--primary-dark` to transparent) for text legibility over photos
- Headline in Fraunces, large, with each word/line fading+sliding up with a staggered delay on page load (Framer Motion `staggerChildren`)
- Subheadline in body font, `--text-muted`-on-dark equivalent
- Two CTAs: primary filled button ("Book a Campus Visit" or "Apply Now") + ghost/outline button ("Explore Academics") — both with a scale+shadow hover lift
- Small scroll-down indicator (animated bouncing chevron, Framer `y` keyframe loop) at hero bottom
- Slider dots/arrows restyled to match theme (not default browser/library styling) — small filled pills in `--accent`, active dot elongates

### Quick-Stats Strip
- Directly below hero, overlapping the hero bottom edge slightly (negative margin card that "floats" over the hero-to-content seam) — this overlap is a classic high-polish touch
- 4 stat cards in a row (stack 2x2 on mobile) on a white/`--bg` card with soft shadow, icon (lucide) + animated count-up number + label
- Each card lifts slightly on hover (`y: -4` + shadow increase)

### Welcome/Principal Message
- Two-column on desktop (photo left in a soft organic blob-mask frame, text right), stacks on mobile
- Pull-quote styled in italic Fraunces, oversized opening quotation mark as a decorative `--accent-soft` glyph behind the text

### Why Choose Us
- 6 cards in responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card: icon in a rounded `--accent-soft` circle, headline, one-line description
- Hover: icon circle fills solid `--accent` and icon color inverts to white, card border transitions to `--primary`, subtle lift — a clean, cohesive hover language reused across every card component site-wide (define once as a shared `HoverCard` component)

### Curriculum/Streams Snapshot
- Horizontal scroll-snap row on mobile (native touch scroll, `scroll-snap-x`), grid on desktop
- Each stage card (Nursery–V, VI–VIII, IX–X, XI–XII) has a distinct icon and a soft `--accent-soft` background, "Explore →" link with an animated arrow that slides right on hover

### Facilities Carousel
- Embla carousel, 3 visible on desktop / 1.2 visible (peek next card) on mobile to hint scrollability
- Cards: image top (rounded corners), icon+label overlay bottom-left on the image in a frosted-glass (`backdrop-blur`) chip

### Activities & Trips Gallery Preview
- Masonry-style grid (use CSS columns or a lightweight masonry lib) with varied image heights for visual rhythm — avoid a boring uniform grid
- Hover: image scales up slightly within a fixed-overflow-hidden container (classic zoom-on-hover), gradient overlay fades in with the event title

### Achievements
- Marquee/ticker (`react-fast-marquee`) of small achievement badges scrolling continuously, pausing on hover
- Below it, 3 featured achievement cards with student photo, name, achievement, subtle celebratory accent (e.g., a small confetti-colored ribbon icon — stay within green/white, use a lighter emerald tint for the "ribbon" rather than gold)

### Testimonials
- Auto-playing carousel, large quotation mark motif, avatar + name + "Parent of Class X" caption, smooth crossfade between slides (not a hard cut)

### Admission CTA Banner
- Full-width `--primary` background section (the one place solid dark green fills the whole section, for contrast/impact), white text, form fields styled with white/translucent backgrounds and `--accent` focus rings
- Submit button has a loading state (spinner) and success state (checkmark animation + optional single confetti burst) — build as proper async states, not just an alert()

### Footer
- Dark (`--primary-dark`) background, light text
- 4-column layout collapsing to accordion-style stacked sections on mobile (tap to expand) to avoid a giant scroll wall
- Social icons (lucide) in circular `--accent-soft`-on-dark buttons with hover fill animation

---

## 4. MOTION PRINCIPLES (don't overdo it)

- Every section gets exactly one entrance animation style (fade+slide-up, staggered children) triggered by `whileInView` — consistent across the page, not a different effect per section
- Hover interactions should feel instant (150–200ms) and use `ease-out`; entrance animations can be slightly slower (400–600ms) with `ease-in-out`
- Respect `prefers-reduced-motion` — wrap animation configs in a check and fall back to instant/no-motion
- No more than one "big" animated moment per screen at a time — don't have the hero, stats, and stray decorative elements all animating simultaneously on load; sequence them

---

## 5. RESPONSIVE PRIORITIES (mobile-first, since that's the stated preference)

- Build and screenshot-check every section at 375px width before scaling up
- Touch targets ≥44px, no hover-only interactions that hide critical info on mobile (e.g., don't make the "explore" link only appear on hover — always visible on touch devices)
- Sticky bottom mobile CTA bar ("Call Now" / "Apply Now" split button) persists across the whole Home page on mobile only

---

## 6. WHAT TO EXPLICITLY AVOID

- No default shadcn gray theme left un-customized — every component must use the green/white tokens
- No generic stock-photo-with-gradient-overlay-and-big-number hero — use the slider + staggered headline approach above instead
- No unexplained numbered badges (01/02/03) on cards unless the content is genuinely sequential (e.g., the admission process steps — that's fine there, nowhere else)
- No more than the two font families defined above — don't let Cursor introduce a third
- No colors outside the token table, ever — if Cursor reaches for a random Tailwind color class (e.g. `bg-blue-500`), it's wrong

---

**Instruction to Cursor**: Build the Home page section by section in the order above, using the design tokens as Tailwind theme extensions (`tailwind.config.ts` → `theme.extend.colors` mapped to the CSS variables) so dark mode is automatic everywhere. After each section, take a screenshot/preview and self-check it against section 6 (the avoid-list) before moving to the next.