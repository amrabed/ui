"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, Tooltip } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const targetTheme = resolvedTheme === "dark" ? "light" : "dark";
  const label = mounted ? `Switch to ${targetTheme} theme` : "Toggle theme";

  return (
    <Tooltip delay={200} closeDelay={0}>
      <Tooltip.Trigger
        render={(props: React.HTMLAttributes<Element>) => (
          <Button
            {...props}
            isIconOnly
            variant="ghost"
            aria-label={label}
            className={`size-9 rounded-full focus-visible:ring-2 focus-visible:ring-primary text-muted hover:text-primary transition-colors ${className ?? ""}`}
            onClick={(e: React.MouseEvent<Element>) => {
              props.onClick?.(e);
              if (mounted) setTheme(targetTheme);
            }}
          >
            {!mounted ? (
              <span className="size-4" />
            ) : resolvedTheme === "dark" ? (
              <Sun className="size-4" aria-hidden="true" />
            ) : (
              <Moon className="size-4" aria-hidden="true" />
            )}
          </Button>
        )}
      />
      <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip>
  );
}

export default ThemeToggle;
