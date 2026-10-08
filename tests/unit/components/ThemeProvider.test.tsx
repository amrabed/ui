import React from "react";
import { useRouter } from "next/navigation";
import { render, screen } from "@testing-library/react";
import { useTheme } from "next-themes";
import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";

import { Providers, ThemeProvider } from "@/ui/components/Providers";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

vi.mock("@heroui/react", async () => {
  const actual = await vi.importActual<Record<string, unknown>>("@heroui/react");
  return {
    ...actual,
    RouterProvider: vi.fn(({ children }: { children?: React.ReactNode }) => (
      <div data-testid="hero-ui-router-provider">{children}</div>
    )),
  };
});

const TestConsumer = () => {
  const { theme } = useTheme();
  return <div data-testid="theme-value">{theme || "undefined"}</div>;
};

describe("ThemeProvider / Providers (@amrabed/ui)", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it("renders children and provides NextThemesProvider", () => {
    render(
      <ThemeProvider>
        <TestConsumer />
        <span data-testid="child-span">Hello</span>
      </ThemeProvider>
    );

    expect(screen.getByTestId("child-span")).toHaveTextContent("Hello");
    expect(screen.getByTestId("theme-value")).toBeInTheDocument();
  });

  it("passes router.push to RouterProvider", async () => {
    const { RouterProvider } = await import("@heroui/react");

    render(
      <ThemeProvider>
        <div />
      </ThemeProvider>
    );

    expect(RouterProvider).toHaveBeenCalled();
    const props = (RouterProvider as Mock).mock.calls[0][0];
    expect(props.navigate).toBe(mockPush);
  });

  it("exports Providers as an alias to ThemeProvider", () => {
    expect(Providers).toBe(ThemeProvider);
  });
});
