import { render, screen } from "@testing-library/react";
import { useTheme } from "next-themes";
import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";

import { NavBar } from "@/ui/components/NavBar";

vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

describe("NavBar Component", () => {
  const setTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the Amr Abed brand link", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<NavBar />);

    const brandLink = screen.getByRole("link", { name: /Amr Abed/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute("href", "https://amrabed.com");
  });

  it("renders ecosystem navigation links", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<NavBar currentSite="blog" />);

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

    render(<NavBar currentSite="courses" />);

    const breadcrumbs = screen.getAllByRole("link", { name: "Courses" });
    expect(breadcrumbs.length).toBeGreaterThan(0);
  });

  it("renders the theme toggle selector", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<NavBar />);

    const themeSelector = screen.getByRole("radiogroup", {
      name: "Theme selector",
    });
    expect(themeSelector).toBeInTheDocument();
  });

  it("renders custom children passed to NavBar", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(
      <NavBar currentSite="blog">
        <div data-testid="custom-search-widget">Custom Search</div>
      </NavBar>,
    );

    expect(screen.getByTestId("custom-search-widget")).toBeInTheDocument();
  });

  it("renders with logo omitted when showLogo is false", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    const { container } = render(<NavBar showLogo={false} />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBe(0);
  });

  it("renders custom logo when logo prop is provided", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<NavBar logo={<span data-testid="custom-brand-logo">Logo</span>} />);
    expect(screen.getByTestId("custom-brand-logo")).toBeInTheDocument();
  });

  it("renders monogram Logo when logoType is monogram", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    const { container } = render(<NavBar logoType="monogram" />);
    const svg = container.querySelector("svg[aria-label='Amr Abed']");
    expect(svg).toBeInTheDocument();
  });

  it("does not render GitHub repository icon when repo prop is omitted", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<NavBar />);
    expect(screen.queryByLabelText(/GitHub repository/i)).not.toBeInTheDocument();
  });

  it("renders GitHub repository icon when repo prop is provided", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    const { rerender } = render(<NavBar repo="ui" />);
    const repoLink = screen.getByLabelText(/GitHub repository/i);
    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute("href", "https://github.com/amrabed/ui");
    expect(repoLink).toHaveAttribute("target", "_blank");

    rerender(<NavBar repo="amrabed/blog" />);
    expect(screen.getByLabelText(/GitHub repository/i)).toHaveAttribute(
      "href",
      "https://github.com/amrabed/blog",
    );

    rerender(<NavBar repo="https://github.com/custom/repo" />);
    expect(screen.getByLabelText(/GitHub repository/i)).toHaveAttribute(
      "href",
      "https://github.com/custom/repo",
    );
  });

  it("renders centered desktop navbar items with absolute positioning", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<NavBar currentSite="home" />);
    const nav = screen.getByRole("navigation", { name: "Main Navigation" });
    expect(nav.className).toContain("absolute");
    expect(nav.className).toContain("left-1/2");
    expect(nav.className).toContain("-translate-x-1/2");
  });
});
