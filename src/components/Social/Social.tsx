"use client";

import React from "react";
import { Tooltip } from "@heroui/react";
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
  color?: string;
  hoverColor?: string;
  hoverColorDark?: string;
}

export interface SocialProps {
  profiles?: readonly SocialProfileItem[];
  className?: string;
}

export const BRAND_HOVER_COLORS: Record<string, { light: string; dark: string }> = {
  LinkedIn: { light: "#0A66C2", dark: "#0A66C2" },
  GitHub: { light: "#000000", dark: "#f4f4f5" },
  "Google Scholar": { light: "#4285F4", dark: "#4285F4" },
  Medium: { light: "#000000", dark: "#f4f4f5" },
  "Stack Overflow": { light: "#F58025", dark: "#F58025" },
  X: { light: "#000000", dark: "#f4f4f5" },
  YouTube: { light: "#FF0000", dark: "#FF0000" },
  Goodreads: { light: "#372213", dark: "#f4f1ea" },
  StackShare: { light: "#0690FA", dark: "#0690FA" },
};

export const DEFAULT_SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: <FaLinkedinIn className="size-4" aria-hidden="true" />,
  GitHub: <FaGithub className="size-4" aria-hidden="true" />,
  "Google Scholar": <FaGoogleScholar className="size-4" aria-hidden="true" />,
  Medium: <FaMedium className="size-4" aria-hidden="true" />,
  "Stack Overflow": <FaStackOverflow className="size-4" aria-hidden="true" />,
  X: <FaXTwitter className="size-4" aria-hidden="true" />,
  YouTube: <FaYoutube className="size-4" aria-hidden="true" />,
  Goodreads: <FaGoodreadsG className="size-4" aria-hidden="true" />,
};

export function Social({
  profiles = DEFAULT_PROFILES,
  className = "",
}: SocialProps) {
  return (
    <div
      className={`flex flex-row flex-wrap items-center gap-2 ${className || "justify-center"}`}
    >
      {profiles.map((profile) => {
        const icon = profile.icon ?? DEFAULT_SOCIAL_ICONS[profile.name];
        const brand = BRAND_HOVER_COLORS[profile.name];
        const hoverLight = profile.hoverColor ?? profile.color ?? brand?.light;
        const hoverDark =
          profile.hoverColorDark ??
          (profile.color
            ? profile.name === "Goodreads"
              ? "#f4f1ea"
              : profile.name === "GitHub" || profile.name === "Medium" || profile.name === "X"
                ? "#f4f4f5"
                : profile.color
            : brand?.dark);

        const style = hoverLight
          ? ({
              "--social-hover-color": hoverLight,
              "--social-hover-color-dark": hoverDark ?? hoverLight,
            } as React.CSSProperties)
          : undefined;

        return (
          <Tooltip key={profile.name} delay={200} closeDelay={0}>
            <Tooltip.Trigger
              render={(triggerProps: React.HTMLAttributes<Element>) => (
                <a
                  {...triggerProps}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${profile.name} (opens in a new tab)`}
                  className="inline-flex items-center justify-center size-8 rounded-full text-muted transition-colors hover:bg-surface hover:text-[var(--social-hover-color)] dark:hover:text-[var(--social-hover-color-dark,var(--social-hover-color))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={style}
                >
                  {icon ?? <span className="text-xs">{profile.name[0]}</span>}
                </a>
              )}
            />
            <Tooltip.Content>
              <Tooltip.Arrow />
              {profile.name}
            </Tooltip.Content>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default Social;
