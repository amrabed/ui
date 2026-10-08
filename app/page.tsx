import { Header } from "@/ui/components/Header";
import { Footer } from "@/ui/components/Footer";
import { ThemeToggle } from "@/ui/components/ThemeToggle";
import { ECOSYSTEM_SITES, DEFAULT_PROFILES } from "@/ui/constants";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-16">
      {/* Intro */}
      <section className="flex flex-col gap-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-divider text-xs text-primary font-medium w-fit mx-auto md:mx-0">
          <span>@amrabed/ui</span>
          <span>•</span>
          <span>v0.1.0</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">
          Amr Abed Design System & UI Chrome
        </h1>
        <p className="text-base text-muted max-w-2xl">
          Unified header, footer, navigation breadcrumbs, and Indigo + Slate design tokens
          shared across <code className="text-primary font-mono text-xs">amrabed.com</code>,{" "}
          <code className="text-primary font-mono text-xs">blog</code>, and{" "}
          <code className="text-primary font-mono text-xs">courses</code>.
        </p>
      </section>

      {/* Header Previews */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold text-heading">Header Navigation Previews</h2>
          <p className="text-sm text-muted">
            Responsive breadcrumb header with ecosystem switching and dark/light mode toggle.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">
              1. Home Site State (amrabed.com)
            </span>
            <div className="rounded-xl border border-divider overflow-hidden shadow-sm">
              <Header currentSite="home" showLogo={false} navAriaLabel="Home Showcase Navigation" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">
              2. Blog Site State (amrabed.com/blog)
            </span>
            <div className="rounded-xl border border-divider overflow-hidden shadow-sm">
              <Header
                currentSite="blog"
                repo="amrabed/blog"
                navAriaLabel="Blog Showcase Navigation"
              >
                <span className="hidden sm:inline-block text-xs px-2.5 py-1 rounded-full bg-surface border border-divider text-muted">
                  Custom Children (Search / Actions)
                </span>
              </Header>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">
              3. Courses Site State (amrabed.com/courses)
            </span>
            <div className="rounded-xl border border-divider overflow-hidden shadow-sm">
              <Header
                currentSite="courses"
                repo="amrabed/courses"
                navAriaLabel="Courses Showcase Navigation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Tokens */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold text-heading">Unified Color Palette</h2>
          <p className="text-sm text-muted">
            Indigo brand accent with balanced Slate & Zinc neutrals for high-contrast accessibility.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-divider bg-surface flex flex-col gap-2">
            <div className="h-12 w-full rounded-lg bg-primary" />
            <span className="text-xs font-bold text-heading">Primary (Indigo)</span>
            <span className="text-[11px] font-mono text-muted">--heroui-primary</span>
          </div>

          <div className="p-4 rounded-xl border border-divider bg-surface flex flex-col gap-2">
            <div className="h-12 w-full rounded-lg bg-secondary" />
            <span className="text-xs font-bold text-heading">Secondary (Zinc)</span>
            <span className="text-[11px] font-mono text-muted">--heroui-secondary</span>
          </div>

          <div className="p-4 rounded-xl border border-divider bg-surface flex flex-col gap-2">
            <div className="h-12 w-full rounded-lg bg-background border border-divider" />
            <span className="text-xs font-bold text-heading">Background</span>
            <span className="text-[11px] font-mono text-muted">--heroui-background</span>
          </div>

          <div className="p-4 rounded-xl border border-divider bg-surface flex flex-col gap-2">
            <div className="h-12 w-full rounded-lg bg-surface border border-divider flex items-center justify-center">
              <ThemeToggle />
            </div>
            <span className="text-xs font-bold text-heading">Theme Toggle</span>
            <span className="text-[11px] font-mono text-muted">Interactive component</span>
          </div>
        </div>
      </section>

      {/* Ecosystem Sibling Links */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold text-heading">Target Repositories</h2>
          <p className="text-sm text-muted">
            The three sites that consume this shared package:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.values(ECOSYSTEM_SITES).map((site) => (
            <div key={site.id} className="card-container">
              <span className="font-bold text-base text-heading capitalize">{site.name}</span>
              <p className="text-xs text-muted">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-primary hover:underline mt-2 inline-flex items-center gap-1"
              >
                {site.url} &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Preview */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold text-heading">Footer Component Preview</h2>
          <p className="text-sm text-muted">
            Canonical copyright and social profiles ({DEFAULT_PROFILES.length} verified links).
          </p>
        </div>

        <div className="rounded-xl border border-divider overflow-hidden shadow-sm">
          <Footer />
        </div>
      </section>
    </div>
  );
}
