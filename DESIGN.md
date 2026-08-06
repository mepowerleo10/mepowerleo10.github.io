---
name: Terra & Timber
colors:
  surface: '#fff8f4'
  surface-dim: '#e1d8d2'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2eb'
  surface-container: '#f5ece5'
  surface-container-high: '#f0e7df'
  surface-container-highest: '#eae1da'
  on-surface: '#1f1b17'
  on-surface-variant: '#424843'
  inverse-surface: '#34302b'
  inverse-on-surface: '#f8efe8'
  outline: '#727973'
  outline-variant: '#c2c8c1'
  surface-tint: '#466553'
  primary: '#163526'
  on-primary: '#ffffff'
  primary-container: '#2d4c3b'
  on-primary-container: '#99bca6'
  inverse-primary: '#accfb8'
  secondary: '#a23e18'
  on-secondary: '#ffffff'
  secondary-container: '#fe8357'
  on-secondary-container: '#6f2000'
  tertiary: '#30302c'
  on-tertiary: '#ffffff'
  tertiary-container: '#464642'
  on-tertiary-container: '#b6b4ae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7ebd4'
  primary-fixed-dim: '#accfb8'
  on-primary-fixed: '#012113'
  on-primary-fixed-variant: '#2e4d3c'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#822801'
  tertiary-fixed: '#e5e2dc'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#fff8f4'
  on-background: '#1f1b17'
  surface-variant: '#eae1da'
typography:
  display-lg:
    fontFamily: ClashGrotesk
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: ClashGrotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: ClashGrotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: ClashGrotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: WorkSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: WorkSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: WorkSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: WorkSans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a "Modern Organic" aesthetic, blending the reliability of structured professional layouts with the warmth of the natural world. It targets an audience that values sustainability, craftsmanship, and artisanal quality, such as high-end architectural firms, sustainable furniture brands, or boutique travel agencies.

The UI is rooted in **Minimalism** with **Tactile** undertones. It utilizes expansive whitespace to allow high-quality photography and content to breathe, while employing subtle textures and tonal layering to evoke a sense of physical presence. The emotional response is one of groundedness, sophistication, and quiet confidence.

## Colors
The palette is centered on the "Terra & Timber" concept, utilizing high-contrast natural tones to establish hierarchy.

- **Primary (Forest Green):** Used for primary actions, navigation headers, and grounding structural elements.
- **Secondary (Burnt Orange):** Reserved for high-impact calls to action, highlights, and status indicators that require warmth.
- **Tertiary (Soft Cream):** The primary surface color. It replaces pure white to reduce eye strain and provide a premium, paper-like feel.
- **Neutral (Bark Gray):** Used for body text and secondary iconography to maintain legibility without the harshness of pure black.

Backgrounds should primarily use the Soft Cream, with Forest Green utilized for dark-mode sections or high-contrast footers.

## Typography
The typographic strategy pairs the high-character, geometric precision of **Clash Grotesk** with the utilitarian clarity of **Work Sans**.

- **Clash Grotesk** is used for all headlines and display text. Its unique terminals and visual weight provide a distinct "designed" feel that contrasts against the organic color palette.
- **Work Sans** handles all long-form reading, UI labels, and data. It is chosen for its exceptional legibility and neutral character, ensuring the interface remains professional and accessible.

Maintain tight tracking on large headlines to emphasize the geometric nature of the letterforms, while keeping generous line heights for body text to ensure a comfortable reading experience.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to maintain a curated, editorial feel, transitioning to a **Fluid Grid** for mobile devices.

- **Desktop (1280px+):** A 12-column grid with 24px gutters. Content is centered with wide 64px outer margins to evoke a sense of luxury and focus.
- **Tablet (768px - 1279px):** An 8-column grid with 24px gutters and 40px ma rgins.
- **Mobile (Under 768px):** A 4-column grid with 16px gutters and 20px margins.

Spacing follows an 8px base unit. Use larger vertical increments (64px, 80px, 128px) between major sections to emphasize the minimalist, airy brand personality.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows** rather than harsh borders.

1.  **Level 0 (Base):** Soft Cream tertiary color.
2.  **Level 1 (Cards/Surface):** White surfaces with very soft, diffused shadows (0px 4px 20px, 4% opacity Forest Green tint).
3.  **Level 2 (Modals/Popovers):** White surfaces with more pronounced depth (0px 12px 40px, 8% opacity Forest Green tint).

Avoid using black shadows; always tint shadows with the primary Forest Green hex to maintain a cohesive, natural warmth across the interface.

## Shapes
The shape language is **Soft**, striking a balance between the precision of the architecture (sharp) and the fluidity of nature (round).

- **Standard Elements:** (Inputs, Buttons, Cards) use a 0.25rem (4px) radius.
- **Large Components:** (Modals, Large Containers) use a 0.75rem (12px) radius.
- **Imagery:** Should maintain sharp or slightly softened edges to preserve an editorial, high-end photography look.

Avoid full pills or overly rounded corners to prevent the UI from looking too "bubbly" or casual.

## Components
Consistent execution of components ensures the "Terra & Timber" aesthetic remains cohesive:

- **Buttons:** Primary buttons are solid Forest Green with Soft Cream text. Secondary buttons use a Forest Green 1px outline. Call-to-action buttons use Burnt Orange sparingly for maximum impact. All use `label-md` typography.
- **Inputs:** Understated with a 1px Forest Green border at 20% opacity. Upon focus, the border becomes 100% Forest Green. Use Work Sans for all user input.
- **Cards:** White background, Soft roundedness, and Level 1 elevation. Titles must be in Clash Grotesk.
- **Chips/Tags:** Use a tinted version of the Forest Green or Burnt Orange (10% opacity) with high-contrast text for status or categories.
- **Lists:** Clean, borderless rows separated by 1px rules in Soft Cream (darkened by 5%) to maintain a light, airy feel.
- **Navigation:** Top-tier navigation uses Clash Grotesk in all caps with slight letter spacing to denote hierarchy and premium positioning.