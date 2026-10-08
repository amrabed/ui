"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  HiOutlineComputerDesktop,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeSwitchProps {
  className?: string;
  ariaLabel?: string;
}

const OPTIONS: {
  mode: ThemeMode;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { mode: "light", label: "Light theme", icon: HiOutlineSun },
  { mode: "dark", label: "Dark theme", icon: HiOutlineMoon },
  { mode: "system", label: "System theme", icon: HiOutlineComputerDesktop },
];

export function ThemeSwitch({
  className = "",
  ariaLabel = "Theme selector",
}: ThemeSwitchProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={`inline-flex items-center rounded-full bg-slate-200/80 dark:bg-slate-800/80 p-0.5 border border-slate-300/60 dark:border-slate-700/60 shadow-inner ${className}`}
    >
      {OPTIONS.map(({ mode, label, icon: Icon }) => {
        const isSelected = mounted ? theme === mode : mode === "system";
        return (
          <button
            key={mode}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={label}
            onClick={() => setTheme(mode)}
            className={`relative flex items-center justify-center p-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isSelected
                ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}

export const ThemeToggle = ThemeSwitch;
export type ThemeToggleProps = ThemeSwitchProps;

export default ThemeSwitch;
