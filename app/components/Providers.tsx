"use client";

import { useRouter } from "next/navigation";
import { RouterProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { SearchProvider } from "@/hooks/use-search-state";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <SearchProvider>
          {children}
        </SearchProvider>
      </NextThemesProvider>
    </RouterProvider>
  );
}
