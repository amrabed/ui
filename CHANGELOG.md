# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.3] - 2026-10-08

### Added
- **Exported `ThemeProvider`**: Exported `ThemeProvider` as primary export from `src/components/Providers.tsx` (with `Providers` retained as backwards-compatible alias) to eliminate name collisions with local `src/app/providers.tsx` in consumer repositories.

## [0.1.2] - 2026-10-08

### Added
- **`showOnScroll` support in `NavBar`**: Added `showOnScroll` prop to reveal the navigation bar on scroll from top, and anchor smooth scrolling support.

## [0.1.1] - 2026-10-08

### Added
- **Direct Package CSS Import & Component Scanning**: Added `style` entry in `package.json` and `@source "../components"` inside `src/styles/globals.css`, enabling consumer applications to use `@import "@amrabed/ui";` directly without requiring manual `@source "../../node_modules/..."` directives.

## [0.1.0] - 2026-10-07

### Added
- **Unified Header / NavBar (`NavBar`)**: Responsive breadcrumb branding (`Amr Abed / [Site]`), cross-site ecosystem navigation, mobile drawer menu, customizable action/children slots, and support for avatar or monogram branding (`logoType`).
- **Brand Monogram Logo (`Logo`)**: Canonical vector SVG monogram component supporting dynamic theming via `fill="currentColor"`.
- **Ecosystem Icon Assets & Metadata**: Bundled vector icons (`icon.svg`, `icon-light.svg`, `icon-dark.svg`, `apple-touch-icon.png`, 192px PNGs) and exported `ECOSYSTEM_ICONS` metadata helper for consumer sites.
- **Unified Footer & Social Profiles (`Footer`, `Social`)**: Canonical copyright notice and verified social profiles across 8 platforms (LinkedIn, GitHub, Google Scholar, Medium, Stack Overflow, X, YouTube, Goodreads).
- **3-Option Theme Switcher (`ThemeToggle`)**: System-aware light/dark/system mode toggle with accessible radiogroup controls.
- **Design Tokens & Theme Styles**: Tailwind CSS v4 `@theme` tokens with canonical Indigo accent and high-contrast Slate/Zinc neutrals.
- **Interactive Showcase & Documentation**: Next.js App Router live component showcase and Nextra documentation.
- Comprehensive test coverage across 19 unit test suites (70 tests) and Playwright accessibility (a11y) E2E audits.
