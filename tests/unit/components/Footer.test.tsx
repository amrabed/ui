import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Footer } from "@/ui/components/Footer";

describe("Footer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.resetModules();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the current year and Amr Abed copyright text", () => {
    const date = new Date(2026, 0, 1);
    vi.setSystemTime(date);

    render(<Footer />);

    const footerText = screen.getByText(/© 2026 Amr Abed/);
    expect(footerText).toBeInTheDocument();
  });

  it("renders social links with tooltips, rel me, and brand hover variables", () => {
    render(<Footer />);

    const linkedIn = screen.getByLabelText(/LinkedIn/i);
    expect(linkedIn).toBeInTheDocument();
    const link = linkedIn.closest("a");
    expect(link).toHaveAttribute("rel", "noopener noreferrer me");
    expect(linkedIn).toHaveStyle({ "--social-hover-color": "#0A66C2" });

    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Google Scholar/i)).toBeInTheDocument();
  });

  it("renders Built with cur8d.tsx link by default", () => {
    render(<Footer />);

    const link = screen.getByRole("link", { name: "cur8d.tsx" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://tsx.cur8d.dev");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
