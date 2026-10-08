"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { RouterProvider } from "@heroui/react";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <RouterProvider navigate={router?.push}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    </RouterProvider>
  );
}

export default Providers;
