# Solvantra Global — Design DNA Specification

> **Source of Truth:** Stitch MCP Server  
> **Project:** `Solvantra Global Corporate Website` (`projects/17336104812324680315`)  
> **Design Theme Name:** Executive Heritage  

---

## 1. Brand Colors

| Token Name | HEX Value | Description & Usage |
|---|---|---|
| **Primary Accent** | `#7E5713` | Deep Antique Bronze. Primary interactive focus, active tab text, icon glyphs, and primary brand markers. |
| **Primary Container** | `#B88A43` | Brushed Antique Bronze. Main CTA button fills, eyebrow highlights, active badges, and focus rings. |
| **Primary Fixed** | `#FFDDB1` | Warm Champagne Highlight. Used for contrast text/numerals inside dark ground sections. |
| **Primary Fixed Dim** | `#F2BE71` | Muted Gold. Used for dark mode sub-headers and secondary stats. |
| **Secondary Ink** | `#241A12` | Deep Roasted Espresso (`on-secondary-fixed`). Foundational ink for primary headlines, dark-ground panels, and footers. |
| **Secondary Slate** | `#6A5C51` | Warm Espresso Slate (`secondary`). Subtitles, body prose, and secondary label metadata. |
| **Secondary Fixed Dim**| `#D6C3B6` | Muted Vellum Slate. Body prose text on dark-ground panels and footers. |
| **Secondary Container**| `#F0DCCF` | Soft Vellum Cream. Recessed highlight chips and secondary badge containers. |
| **Tertiary Accent** | `#7C5815` | Polished Champagne Gold (`tertiary`). Linear borders, directional chevrons, micro-badges. |
| **Tertiary Container**| `#B68B45` | Warm Gold Metallic. Secondary CTA gradient stops and accent badges. |
| **Tertiary Fixed** | `#FFDDAE` | Light Champagne Gold. Ambient highlights on dark surfaces. |
| **Error** | `#BA1A1A` | System alert red for form validation errors. |
| **Error Container** | `#FFDAD6` | Recessed red background for alert pills. |

---

## 2. Background Colors

| Token Name | HEX Value | Description & Usage |
|---|---|---|
| **Surface (Base Canvas)** | `#FEF9EE` | Warm Ivory Vellum. The primary body and main section canvas background. |
| **Surface Bright** | `#FEF9EE` | Luminous Ivory. Hero sections and elevated content canvases. |
| **Surface Dim** | `#DEDACF` | Recessed Vellum. Subtle recessed framing and structural dividers. |
| **Surface Container Lowest** | `#FFFFFF` | Warm Paper White. Resting service cards, elevated floating badges, and input fields. |
| **Surface Container Low** | `#F8F3E8` | Light Vellum Cream. Recessed section backgrounds (Trust Strip, Core Services Grid). |
| **Surface Container** | `#F2EDE3` | Soft Vellum. Secondary container backgrounds, image placeholders, and badge fills. |
| **Surface Container High** | `#EDE8DD` | Mid-tier container elevation and media framing. |
| **Surface Container Highest** | `#E7E2D7` | Highest light-mode surface container tier. |
| **Inverse Surface (Dark Ground)** | `#323029` / `#241A12` | Deep Roasted Espresso. High-authority global operations panels, statement banners, and footers. |

---

## 3. Text Colors

| Context | Token Name | HEX Value | Usage |
|---|---|---|---|
| **Light Canvas Headings** | `on-surface` | `#1D1C15` | Primary section titles, hero headlines, card titles. |
| **Light Canvas Body Prose**| `secondary` / `on-surface-variant` | `#6A5C51` / `#4F4538` | Paragraph prose, descriptions, meta text. |
| **Primary Accent Text** | `primary` / `primary-container` | `#7E5713` / `#B88A43` | Eyebrow badges, active links, stat highlights. |
| **Dark Ground Headings** | `surface-bright` | `#FEF9EE` | Headlines inside dark statement panels and footers. |
| **Dark Ground Body Prose** | `secondary-fixed-dim` | `#D6C3B6` | Paragraph text inside dark statement panels and footers. |
| **Dark Ground Numerals** | `primary-fixed` | `#FFDDB1` | High-contrast numbers (`200+`, `98%`, `5+`) on dark grounds. |
| **CTA Button Text** | `on-primary` | `#FFFFFF` | Pure white text on primary button containers. |

---

## 4. Accent Colors

- **Primary Antique Bronze:** `#B88A43` / `#7E5713`
- **Champagne Metallic:** `#C79A52` / `#B68B45`
- **Dark Ground Highlight:** `#FFDDB1` / `#F2BE71`
- **Ambient Golden Shimmer:** `rgba(184, 138, 67, 0.08)` to `rgba(184, 138, 67, 0.4)`

---

## 5. Metallic Gold Gradients

- **Primary CTA Button Gradient:** `linear-gradient(to right, #b88a43, #b68b45)` (Tailwind: `bg-gradient-to-r from-primary-container to-tertiary-container`)
- **Executive Shimmer 135° Gradient:** `linear-gradient(135deg, #B88A43 0%, #9C7232 100%)`
- **Dimensional Metallic Accent:** `linear-gradient(135deg, #E7C98A 0%, #B98A45 100%)`

---

## 6. Typography

- **Headlines & Display:** `EB Garamond` (Serif — classical authority & editorial prestige)
- **Body, Interactive & Labels:** `Manrope` (Geometric Sans-Serif — pristine legibility & modern clarity)
- **Numerical Counters & Metrics:** `EB Garamond` (`stat-numeral`)
- **Iconography:** `Material Symbols Outlined`

---

## 7. Font Weights

- **Regular (`400`):** Body text (`body-lg`, `body-md`, `body-sm`)
- **Medium (`500`):** Headlines and display metrics (`display-hero`, `headline-lg`, `headline-md`, `stat-numeral`)
- **SemiBold (`600`):** Sub-headings & labels (`headline-sm`, `label-md`)
- **Bold (`700`):** Eyebrow tags & active navigation links (`eyebrow`)

---

## 8. Font Sizes

| Typographic Token | Font Family | Size (REM) | Size (PX) |
|---|---|---|---|
| `display-hero` | EB Garamond | `3.75rem` | 60px |
| `display-hero-mobile` | EB Garamond | `2.5rem` | 40px |
| `stat-numeral` | EB Garamond | `3.5rem` | 56px |
| `headline-lg` | EB Garamond | `2.75rem` | 44px |
| `headline-lg-mobile` | EB Garamond | `2rem` | 32px |
| `headline-md` | EB Garamond | `2rem` | 32px |
| `headline-sm` | EB Garamond | `1.5rem` | 24px |
| `body-lg` | Manrope | `1.125rem` | 18px |
| `body-md` | Manrope | `0.9375rem` | 15px |
| `body-sm` | Manrope | `0.8125rem` | 13px |
| `label-md` | Manrope | `0.875rem` | 14px |
| `eyebrow` | Manrope | `0.75rem` | 12px |

---

## 9. Line Heights

| Typographic Token | Line Height (REM / Unit) | Line Height (PX) |
|---|---|---|
| `display-hero` | `4.25rem` | 68px |
| `display-hero-mobile` | `3rem` | 48px |
| `stat-numeral` | `3.75rem` | 60px |
| `headline-lg` | `3.25rem` | 52px |
| `headline-lg-mobile` | `2.5rem` | 40px |
| `headline-md` | `2.5rem` | 40px |
| `headline-sm` | `2rem` | 32px |
| `body-lg` | `1.875rem` | 30px |
| `body-md` | `1.6rem` | 25.6px |
| `body-sm` | `1.35rem` | 21.6px |
| `label-md` | `1.25rem` | 20px |
| `eyebrow` | `1rem` | 16px |

---

## 10. Letter Spacing

- `display-hero`: `-0.02em`
- `display-hero-mobile`: `-0.01em`
- `headline-lg`: `-0.015em`
- `headline-lg-mobile`: `0`
- `headline-md`: `0`
- `headline-sm`: `0`
- `eyebrow`: `0.14em` (Wide uppercase tracking)
- `label-md`: `0.02em`

---

## 11. Border Radius

- `DEFAULT` / `rounded-sm`: `0.125rem` (2px)
- `lg` / `rounded-lg`: `0.25rem` (4px) — Standard CTA buttons, cards, form controls
- `xl` / `rounded-xl`: `0.5rem` (8px) — Section feature panels, media visual frames
- `full` / `rounded-full`: `0.75rem` / `9999px` — Circular metric badges, profile avatars, indicator dots

---

## 12. Border Styles

- **Light Surface Hairline:** `1px solid rgba(184, 138, 67, 0.25)` or `border border-outline-variant` (`#d3c4b3`)
- **Dark Surface Hairline:** `1px solid rgba(231, 201, 138, 0.2)` or `border border-outline-variant/20`
- **Section Dividers:** `border-b border-outline-variant` or `border-t border-outline-variant/15`

---

## 13. Shadows

- **Header Sticky Shadow:** `shadow-[0_1px_8px_rgba(36,26,18,0.04)]`
- **Soft Ambient Lift (Cards & CTAs):**  
  `box-shadow: 0 4px 20px -2px rgba(36, 26, 18, 0.05), 0 12px 32px -4px rgba(184, 138, 67, 0.08);`  
  (Tailwind: `shadow-md` / `shadow-lg`)
- **Floating Badge Overlay:** `shadow-xl` / `shadow-2xl`
- **Active Rim Reflection:** `rgba(184, 138, 67, 0.4)`

---

## 14. Spacing Scale

| Token | REM Value | PX Value | Usage |
|---|---|---|---|
| `space-xs` | `0.25rem` | 4px | Micro gaps, badge inner padding |
| `space-sm` | `0.5rem` | 8px | Button vertical padding, icon gaps |
| `space-md` | `1rem` | 16px | Card padding, standard element gap |
| `space-lg` | `1.5rem` | 24px | Card padding, large element gaps |
| `space-xl` | `2.5rem` | 40px | Medium section vertical padding |
| `space-2xl` | `4rem` | 64px | Large section vertical padding |
| `space-3xl` | `6rem` | 96px | Major section pacing (`py-space-3xl`) |
| `gutter` | `2rem` | 32px | Desktop grid column gap |
| `gutter-mobile` | `1rem` | 16px | Mobile grid column gap |
| `margin` | `3rem` | 48px | Desktop outer page margin |
| `margin-mobile` | `1.25rem` | 20px | Mobile outer page margin |

---

## 15. Container Widths

- **Max Container Width:** `1240px` (`max-w-[1240px] mx-auto`)
- **Desktop Page Horizontal Padding:** `px-margin` (48px)
- **Mobile Page Horizontal Padding:** `px-margin-mobile` (20px)

---

## 16. Grid Structure

- **Desktop (1024px+):** 12 columns with `2rem` (32px) gutters
- **Tablet (768px - 1023px):** 8 columns with `1.5rem` (24px) gutters
- **Mobile (320px - 767px):** 4 columns with `1rem` (16px) gutters

---

## 17. Header Dimensions

- **Height:** `80px` (`h-20` / 5rem)
- **Positioning:** `fixed top-0 left-0 right-0 z-50`
- **Styling:** `bg-surface-container-low/95 backdrop-blur-md border-b border-outline-variant shadow-[0_1px_8px_rgba(36,26,18,0.04)]`

---

## 18. Navigation Styling

- **Logo:** 32px circular image avatar (`w-8 h-8 rounded-full`), Title `"SOLVANTRA"` (EB Garamond, uppercase, `text-on-surface`), Eyebrow `"GLOBAL"` (Manrope, uppercase, tracked wide, `text-primary`).
- **Nav Links:** `font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors`.
- **Active State:** `text-primary font-bold` with `aria-current="page"`.
- **Header CTA:** `px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-... hover:bg-primary transition-all duration-200`.

---

## 19. Button Dimensions and States

### Primary CTA Button
- **Padding:** `px-space-lg` (24px) horizontal, `py-3` (12px) vertical
- **Background:** `bg-gradient-to-r from-primary-container to-tertiary-container` (`#b88a43` to `#b68b45`)
- **Typography & Color:** `font-label-md text-label-md text-on-primary` (`#ffffff`)
- **Radius & Shadow:** `rounded` (4px), `shadow-md`
- **Hover State:** `hover:opacity-95 transition-all duration-200`

### Secondary CTA Button
- **Padding:** `px-space-lg` (24px) horizontal, `py-3` (12px) vertical
- **Background:** `bg-surface-container-lowest` (`#ffffff`)
- **Typography & Color:** `font-label-md text-label-md text-on-secondary-fixed` (`#241a12`)
- **Radius & Shadow:** `rounded` (4px), `shadow-sm`
- **Hover State:** `hover:bg-surface-container` (`#f2ede3`) `transition-colors`

### Directional Text Link
- **Typography & Color:** `font-label-md text-label-md text-primary hover:text-tertiary-container transition-colors group`
- **Icon:** Material chevron right / arrow forward with `group-hover:translate-x-1 transition-transform`

---

## 20. Card Styling

### Standard Service Card
- **Background:** `bg-surface-container-lowest` (`#ffffff`)
- **Padding:** `p-space-lg` (24px)
- **Radius:** `rounded-xl` (8px)
- **Elevation:** `shadow-sm hover:shadow-xl transition-all duration-300`
- **Icon Badge:** `w-12 h-12 rounded-full bg-surface-container text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors`

### Dark Ground Metric Card
- **Background:** `bg-inverse-surface/60` (`#323029` at 60% opacity)
- **Padding:** `p-space-lg` (24px)
- **Radius:** `rounded-xl` (8px)
- **Numerals:** `font-stat-numeral text-stat-numeral text-primary-fixed` (`#ffddb1`)

---

## 21. Image Aspect Ratios

- **Hero Visual:** `aspect-[4/5]`, `rounded-xl`, `shadow-2xl`
- **Introduction Visual:** `aspect-[16/11]`, `rounded-xl`, `shadow-xl`
- **About Executive Visual:** `aspect-[4/3]`, `rounded-xl`, `shadow-xl`
- **Thumbnails:** `aspect-[4/3]` or `aspect-[1/1]`

---

## 22. Hero Composition

- **Grid Split:** 12-column grid divided into 7-col text column + 5-col visual column (Desktop)
- **Eyebrow Badge:** Pill wrapper `px-3 py-1 rounded-full bg-surface-container mb-space-md`, 6px indicator dot `w-1.5 h-1.5 rounded-full bg-primary`, text `People. Processes. Technology.` (`font-eyebrow text-eyebrow text-primary tracking-widest uppercase`)
- **Main Display Title:** `font-display-hero text-display-hero text-on-surface`, with italicized bronze span (`block italic font-normal text-primary-container`)
- **Paragraph Subtitle:** `font-body-lg text-body-lg text-secondary max-w-xl mb-space-xl`
- **CTA Group:** Primary CTA + Secondary CTA with `gap-space-md`
- **Floating Badge:** Bottom floating overlay container `bg-surface/90 backdrop-blur-md shadow-lg rounded-lg p-space-md`

---

## 23. Section Spacing

- **Major Section Pacing:** `py-space-3xl` (6rem / 96px vertical padding)
- **Secondary Section Pacing:** `py-space-2xl` (4rem / 64px vertical padding)
- **Trust Strip Pacing:** `py-space-xl` (2.5rem / 40px vertical padding)
- **Element Group Gap:** `gap-gutter` (2rem / 32px grid gap)

---

## 24. Responsive Behavior

- Fluid scaling across breakpoints using Tailwind CSS utility classes (`md:`, `lg:`, `xl:`).
- Horizontal padding collapses from `margin` (48px) to `margin-mobile` (20px) on screens `< 768px`.

---

## 25. Desktop Breakpoints

- `lg:` 1024px+ (12-column grid active, side-by-side hero & intro split)
- `xl:` 1280px+ (Full desktop navigation visible, centered max width `1240px`)

---

## 26. Tablet Behavior (768px - 1023px)

- `md:` 8-column grid layout
- 4-column service card matrices collapse to 2-column grids (`grid-cols-2`)
- Page margins scale to `2rem` (32px)

---

## 27. Mobile Behavior (< 768px)

- 4-column grid layout
- Multi-column card grids collapse to 1-column stacked rows (`grid-cols-1`)
- Desktop navigation links hidden behind responsive menu bar
- Hero display text scales to `display-hero-mobile` (`2.5rem` / 40px font size, `3rem` line height)
- Outer page margin collapses to `margin-mobile` (`1.25rem` / 20px)

---

## 28. Animation & Transition Rules

- **Interactive Hover Colors:** `transition-colors duration-200`
- **Card Shadow Lift:** `transition-all duration-300` (`hover:shadow-xl`, `hover:-translate-y-0.5`)
- **Chevron Shift:** `group-hover:translate-x-1 transition-transform`
- **Header Glass Effect:** `backdrop-blur-md`
- **Pulse Indicators:** `@keyframes pulse` & SVG `<animate attributename="r">`

---

## 29. Icon Styling

- **Library:** `Material Symbols Outlined`
- **Icon Badges:** `w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary`
- **Hover Badges:** `group-hover:bg-primary-container group-hover:text-on-primary transition-colors`
- **Directional Chevrons:** `text-sm` or `text-base` inline text alignment

---

## 30. Footer Structure

- **Background:** `bg-on-secondary-fixed` (`#241A12`)
- **Text Color:** `text-surface-container-high` (`#EDE8DD`)
- **Pacing:** Top padding `pt-space-3xl` (96px), bottom padding `pb-space-xl` (40px)
- **Top 12-Column Grid Split:**
  - **Cols 1–4:** Logo branding, corporate slogan (*People. Processes. Technology.*), and tier-one operational credential badge.
  - **Cols 5–6:** Quick Links navigation stack.
  - **Cols 7–9:** Our Services list.
  - **Cols 10–12:** High-contrast consultation callout box (`bg-inverse-surface/40 p-space-lg rounded-xl border border-primary-container/30`).
- **Bottom Section:** Copyright string + Privacy Policy / Terms of Service links separated by vertical pipe divider (`|`).

---

## 31. Visual Relationships Between Sections

```
┌───────────────────────────────────────────────────────────┐
│ HEADER: Fixed Vellum Low (F8F3E8 / 95% opacity) + Glass   │
├───────────────────────────────────────────────────────────┤
│ 1. HERO: Warm Ivory (FEF9EE)                              │
│    7-Col Text + 5-Col Aspect [4/5] Visual                 │
├───────────────────────────────────────────────────────────┤
│ 2. TRUST STRIP: Recessed Vellum (F8F3E8)                  │
│    4-Column Circular Icon Badges & 24/7 Stats             │
├───────────────────────────────────────────────────────────┤
│ 3. INTRODUCTION / WHO WE HELP: Warm Ivory (FEF9EE)       │
│    6-Col Aspect [16/11] Visual + 6-Col Copy & CTA Link   │
├───────────────────────────────────────────────────────────┤
│ 4. CORE SERVICES: Recessed Vellum (F8F3E8)                │
│    Header + 8-Card Grid (White FFFFFF Cards)              │
├───────────────────────────────────────────────────────────┤
│ 5. GLOBAL OPERATIONS: Dark Espresso (241A12)             │
│    High-Contrast Gold Stats (200+, 98%, 5+) & Map Vector  │
├───────────────────────────────────────────────────────────┤
│ 6. INSTITUTIONAL CTA BANNER: Dark Espresso (241A12)     │
│    Gold Accent Ring + Schedule CTA Button                 │
├───────────────────────────────────────────────────────────┤
│ FOOTER: Dark Espresso (241A12)                            │
│ 4-Column Grid + Copyright & Legal Dividers                │
└───────────────────────────────────────────────────────────┘
```

1. **Rhythmic Surface Alternation:** The page transitions seamlessly between luminous Warm Ivory (`#FEF9EE`) for narrative sections and Recessed Vellum Cream (`#F8F3E8`) for structured component grids, culminating in a cinematic Dark Espresso (`#241A12`) ground for institutional authority stats and footer anchors.
2. **Progressive Narrative Pacing:**
   - *Phase 1 (Promise):* Hero Value Proposition & Dual CTAs.
   - *Phase 2 (Validation):* Immediate Trust Strip metric badges.
   - *Phase 3 (Depth):* Who We Help introductory narrative.
   - *Phase 4 (Capability):* Core Services 8-Card Grid.
   - *Phase 5 (Authority):* Dark Ground Global Scale Metrics & Map.
   - *Phase 6 (Action):* Institutional CTA Banner & Legal Footer.
