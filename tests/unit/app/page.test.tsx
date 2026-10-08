import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Page from "@/page";

vi.mock("next-themes", () => ({
  useTheme: vi.fn().mockReturnValue({
    resolvedTheme: "light",
    setTheme: vi.fn(),
  }),
}));

describe("Design System Showcase Page", () => {
  it("renders the showcase heading", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Amr Abed Design System/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the color palette section", () => {
    render(<Page />);
    const colorHeading = screen.getByRole("heading", {
      level: 2,
      name: /Unified Color Palette/i,
    });
    expect(colorHeading).toBeInTheDocument();
  });

  it("renders target ecosystem repositories", () => {
    render(<Page />);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Blog").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Courses").length).toBeGreaterThan(0);
  });

  it("renders the unified brand monogram section", () => {
    render(<Page />);
    const monogramHeading = screen.getByRole("heading", {
      level: 2,
      name: /Unified Brand Monogram/i,
    });
    expect(monogramHeading).toBeInTheDocument();
  });
});
