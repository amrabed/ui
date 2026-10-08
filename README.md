# @amrabed/ui

[![CI](https://github.com/amrabed/ui/actions/workflows/check.yml/badge.svg)](https://github.com/amrabed/ui/actions/workflows/check.yml)

Shared UI chrome, design tokens, navigation breadcrumbs, and components for Amr Abed's web ecosystem (`amrabed.com`, `blog`, and `courses`).

Built on **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **HeroUI**.

---

## Capabilities

- **Unified Header**: Responsive breadcrumb branding (`Amr Abed / [Site]`), cross-site ecosystem navigation, mobile drawer menu, and slot for site-specific extras (search, RSS).
- **Unified Footer**: Canonical copyright notice, verified social profiles (LinkedIn, GitHub, Google Scholar, Medium, Stack Overflow, X, YouTube, Goodreads), and accessible tooltips.
- **Unified Brand Monogram & Icons**: Canonical SVG geometric monogram component (`<Logo />`) and static icon assets (`icon.svg`, `apple-touch-icon.png`, dark/light variants) for favicons and app icons across the web ecosystem.
- **Unified Color Palette**: Canonical Indigo accent (`#4f46e5` / `#6366f1`) and Slate/Zinc neutrals configured via Tailwind v4 `@theme` and `@layer base`.
- **System-Aware Theme Switching**: Dark/light mode switcher powered by `next-themes` and HeroUI compound components.
- **Interactive Showcase**: Next.js App Router live preview displaying all header states, tokens, and components.

---

## Package Structure

```text
├── src/
│   ├── components/
│   │   ├── NavBar.tsx       # Header with breadcrumb identity & cross-site navigation
│   │   ├── Footer.tsx       # Footer with verified social profiles & copyright
│   │   ├── Logo.tsx         # Canonical SVG monogram brand icon
│   │   ├── Social.tsx       # Verified social profile buttons
│   │   ├── ThemeToggle.tsx  # Accessible dark/light mode button
│   │   ├── Providers.tsx    # NextThemes + HeroUI context providers
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css      # Canonical Tailwind v4 @theme and Indigo+Slate tokens
│   ├── constants/           # Ecosystem URLs, verified social profiles, metadata, icons
│   └── index.ts             # Main library entry point
├── public/                  # Unified icon assets (icon.svg, apple-touch-icon.png, etc.)
├── app/                     # Interactive Next.js showcase & style guide
├── tests/
│   ├── unit/                # Vitest unit test suite (19 suites, 70 tests)
│   └── e2e/                 # Playwright E2E & Axe accessibility audits
└── .mise.toml               # Toolchain and task definitions
```

---

## Consuming in Other Repositories

### 1. Installation
In your consumer repository (`amrabed.github.io`, `blog`, or `courses`):

```bash
# Via git dependency
pnpm add github:amrabed/ui
```

### 2. Styling
Import the canonical stylesheet in your root layout or CSS:

```css
/* app/globals.css */
@import "@amrabed/ui";
```

### 3. Layout Usage
Wrap your application in `Providers` and mount `Header` and `Footer`:

```tsx
// app/layout.tsx
import "@amrabed/ui";
import { Header, Footer, Providers } from "@amrabed/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {/* currentSite controls the active highlight and breadcrumb */}
          <Header currentSite="courses">
            {/* Optional site-specific controls (e.g. Search, RSS) */}
          </Header>

          <main id="main-content">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
```

---

## Local Development

```bash
# Install dependencies
mise run install   # or pnpm install

# Start interactive showcase
mise run dev       # or pnpm dev

# Run verification checks (lint, typecheck, tests)
mise run verify    # or pnpm run typecheck && pnpm run lint && pnpm test
```
