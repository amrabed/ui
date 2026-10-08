import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Logo } from "@/ui/components/Logo";

describe("Logo Component", () => {
  it("renders with default props and accessibility attributes", () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-label", "Amr Abed");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
    expect(screen.getByText("Amr Abed")).toBeInTheDocument();
  });

  it("applies custom size, title, and className", () => {
    const { container } = render(
      <Logo size={48} title="Custom Brand" className="text-primary custom-logo-class" />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "48");
    expect(svg).toHaveAttribute("height", "48");
    expect(svg).toHaveAttribute("aria-label", "Custom Brand");
    expect(svg).toHaveClass("text-primary", "custom-logo-class");
    expect(screen.getByText("Custom Brand")).toBeInTheDocument();
  });
});
