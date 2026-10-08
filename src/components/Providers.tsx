"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { RouterProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const router = useRouter();

  return (
    <RouterProvider navigate={router?.push}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    </RouterProvider>
  );
}

export const Providers = ThemeProvider;
export type ProvidersProps = ThemeProviderProps;
export default ThemeProvider;
