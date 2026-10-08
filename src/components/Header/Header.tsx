"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { ECOSYSTEM_SITES, AUTHOR } from "../../constants";

export interface NavLinkItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface HeaderProps {
  currentSite?: "home" | "blog" | "courses";
  siteTitle?: string;
  siteHomeHref?: string;
  avatarUrl?: string;
  navLinks?: NavLinkItem[];
  showNavLinks?: boolean;
  navAriaLabel?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  mobileContent?: React.ReactNode;
  className?: string;
}

const DEFAULT_ECOSYSTEM_NAV: NavLinkItem[] = [
  { name: "Home", href: ECOSYSTEM_SITES.home.url },
  { name: "Blog", href: ECOSYSTEM_SITES.blog.url },
  { name: "Courses", href: ECOSYSTEM_SITES.courses.url },
];

export function Header({
  currentSite = "home",
  siteTitle,
  siteHomeHref = "/",
  avatarUrl = AUTHOR.avatarUrl,
  navLinks,
  showNavLinks,
  navAriaLabel,
  actions,
  children,
  mobileContent,
  className,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Compute displayed subsite label if not explicitly provided
  const resolvedSiteTitle =
    siteTitle ??
    (currentSite !== "home"
      ? currentSite.charAt(0).toUpperCase() + currentSite.slice(1)
      : undefined);

  const resolvedNavLabel =
    navAriaLabel ??
    (resolvedSiteTitle ? `${resolvedSiteTitle} Navigation` : "Main Navigation");

  const navigationItems = navLinks ?? DEFAULT_ECOSYSTEM_NAV;
  const shouldRenderNav = showNavLinks ?? (!children || Boolean(navLinks));

  const isCurrentActive = (item: NavLinkItem) => {
    if (navLinks) return false;
    if (currentSite === "home" && item.name === "Home") return true;
    if (currentSite === "blog" && item.name === "Blog") return true;
    if (currentSite === "courses" && item.name === "Courses") return true;
    return false;
  };

  const hasMobileDrawer =
    (shouldRenderNav && navigationItems.length > 0) || Boolean(mobileContent);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-divider transition-colors duration-300 ${
        className ?? ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand / Breadcrumbs */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={AUTHOR.url}
            className="group flex items-center gap-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            title="Return to amrabed.com"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-divider group-hover:border-primary transition-colors">
              <Image
                src={avatarUrl}
                alt=""
                aria-hidden="true"
                fill
                sizes="32px"
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="font-semibold text-heading group-hover:text-primary transition-colors">
              {AUTHOR.name}
            </span>
          </a>

          {resolvedSiteTitle && (
            <>
              <span className="text-divider font-light select-none">/</span>
              <Link
                href={siteHomeHref}
                className="text-sm font-bold text-primary hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-0.5"
              >
                {resolvedSiteTitle}
              </Link>
            </>
          )}
        </div>

        {/* Center: Navigation area */}
        {shouldRenderNav && (
          <nav
            aria-label={resolvedNavLabel}
            className="hidden md:flex items-center justify-center gap-6"
          >
            {navigationItems.map((item) => {
              const active = isCurrentActive(item);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1.5 py-1 ${
                    active ? "text-primary font-semibold" : "text-muted"
                  }`}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        )}

        {/* Right / Children Area */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end min-w-0">
          {children}
          {actions}

          <ThemeToggle />

          {hasMobileDrawer && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="md:hidden p-2 rounded-lg text-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors shrink-0"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && hasMobileDrawer && (
        <div
          id="mobile-navigation"
          className="md:hidden px-4 pt-2 pb-6 border-b border-divider bg-background/95 backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {shouldRenderNav && (
            <ul className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const active = isCurrentActive(item);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 px-3 rounded-lg text-base font-medium transition-colors hover:text-primary hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        active ? "text-primary font-bold bg-surface" : "text-muted"
                      }`}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
          {mobileContent}
        </div>
      )}
    </header>
  );
}

export default Header;
