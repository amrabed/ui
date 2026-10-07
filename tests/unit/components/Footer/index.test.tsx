import { render, screen } from "@testing-library/react";
import { Footer } from "@/ui/components/Footer";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

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

  it("renders social links with tooltips", () => {
    render(<Footer />);

    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Google Scholar/i)).toBeInTheDocument();
  });
});
