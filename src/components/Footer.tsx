"use client";

import React from "react";

import { BRAND_HOVER_COLORS, Social, type SocialProfileItem } from "@/ui/components/Social";
import { DEFAULT_PROFILES } from "@/ui/constants";

export { BRAND_HOVER_COLORS };
export type { SocialProfileItem };

export interface FooterProps {
  copyrightHolder?: string;
  tagline?: React.ReactNode;
  profiles?: readonly SocialProfileItem[];
  className?: string;
}

export function Footer({
  copyrightHolder = "Amr Abed",
  tagline,
  profiles = DEFAULT_PROFILES,
  className,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full bg-background border-t border-divider transition-colors duration-300 py-12 px-6 ${
        className ?? ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left order-2 md:order-1">
          <p className="text-sm font-medium text-heading">
            © {currentYear} {copyrightHolder}
          </p>
          {tagline ? (
            <p className="text-xs text-muted">{tagline}</p>
          ) : (
            <p className="text-xs text-muted">
              Built with{" "}
              <a
                href="https://tsx.cur8d.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                cur8d.tsx
              </a>
            </p>
          )}
        </div>

        <div className="order-1 md:order-2">
          <Social profiles={profiles} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
