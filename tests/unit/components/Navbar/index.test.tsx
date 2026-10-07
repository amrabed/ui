import { render, screen } from "@testing-library/react";
import { Header } from "@/ui/components/Header";
import { useTheme } from "next-themes";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";

vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

describe("Header / Navbar", () => {
  const setTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the Amr Abed brand link", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<Header />);

    const brandLink = screen.getByRole("link", { name: /Amr Abed/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute("href", "https://amrabed.com");
  });

  it("renders ecosystem navigation links", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<Header currentSite="blog" />);

    const homeLinks = screen.getAllByRole("link", { name: "Home" });
    const blogLinks = screen.getAllByRole("link", { name: "Blog" });
    const coursesLinks = screen.getAllByRole("link", { name: "Courses" });

    expect(homeLinks.length).toBeGreaterThan(0);
    expect(blogLinks.length).toBeGreaterThan(0);
    expect(coursesLinks.length).toBeGreaterThan(0);
  });

  it("renders subsite breadcrumb when currentSite is set", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<Header currentSite="courses" />);

    const breadcrumbs = screen.getAllByRole("link", { name: "Courses" });
    expect(breadcrumbs.length).toBeGreaterThan(0);
  });

  it("renders the theme toggle", () => {
    (useTheme as Mock).mockReturnValue({
      resolvedTheme: "light",
      setTheme,
    });

    render(<Header />);

    const themeToggle =
      screen.queryByLabelText(/Switch to (dark|light) theme/) ||
      screen.getByLabelText("Toggle theme");
    expect(themeToggle).toBeInTheDocument();
  });
});
