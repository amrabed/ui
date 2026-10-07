"use client";

import React from "react";
import { Button, Tooltip } from "@heroui/react";
import {
  FaGithub,
  FaGoogleScholar,
  FaLinkedinIn,
  FaMedium,
  FaStackOverflow,
  FaXTwitter,
  FaYoutube,
  FaGoodreadsG,
} from "react-icons/fa6";
import { DEFAULT_PROFILES } from "../../constants";

export interface SocialProfileItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface FooterProps {
  copyrightHolder?: string;
  tagline?: string;
  profiles?: readonly SocialProfileItem[];
  className?: string;
}

const DEFAULT_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: <FaLinkedinIn className="size-4" aria-hidden="true" />,
  GitHub: <FaGithub className="size-4" aria-hidden="true" />,
  "Google Scholar": <FaGoogleScholar className="size-4" aria-hidden="true" />,
  Medium: <FaMedium className="size-4" aria-hidden="true" />,
  "Stack Overflow": <FaStackOverflow className="size-4" aria-hidden="true" />,
  X: <FaXTwitter className="size-4" aria-hidden="true" />,
  YouTube: <FaYoutube className="size-4" aria-hidden="true" />,
  Goodreads: <FaGoodreadsG className="size-4" aria-hidden="true" />,
};

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
              Built with Next.js, Tailwind CSS, and HeroUI
            </p>
          )}
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-2 order-1 md:order-2">
          {profiles.map((profile) => {
            const icon = profile.icon ?? DEFAULT_ICONS[profile.name];
            return (
              <Tooltip key={profile.name} delay={200} closeDelay={0}>
                <Tooltip.Trigger
                  render={(triggerProps: React.HTMLAttributes<Element>) => (
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button
                        {...triggerProps}
                        variant="ghost"
                        size="sm"
                        isIconOnly
                        aria-label={`${profile.name} (opens in a new tab)`}
                        className="text-muted hover:text-primary rounded-full size-9 transition-colors"
                      >
                        {icon ?? <span className="text-xs">{profile.name[0]}</span>}
                      </Button>
                    </a>
                  )}
                />
                <Tooltip.Content>{profile.name}</Tooltip.Content>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
