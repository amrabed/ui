import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeSwitch, ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";

vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

describe("ThemeSwitch / ThemeToggle", () => {
  const setTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders a radiogroup with light, dark, and system options", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<ThemeSwitch />);

    const group = screen.getByRole("radiogroup", { name: "Theme selector" });
    expect(group).toBeInTheDocument();

    const lightOption = screen.getByRole("radio", { name: "Light theme" });
    const darkOption = screen.getByRole("radio", { name: "Dark theme" });
    const systemOption = screen.getByRole("radio", { name: "System theme" });

    expect(lightOption).toBeInTheDocument();
    expect(darkOption).toBeInTheDocument();
    expect(systemOption).toBeInTheDocument();

    expect(lightOption).toHaveAttribute("aria-checked", "true");
    expect(darkOption).toHaveAttribute("aria-checked", "false");
    expect(systemOption).toHaveAttribute("aria-checked", "false");
  });

  it("calls setTheme with selected theme mode on click", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });

    render(<ThemeToggle />);

    const darkOption = screen.getByRole("radio", { name: "Dark theme" });
    fireEvent.click(darkOption);

    expect(setTheme).toHaveBeenCalledWith("dark");

    const systemOption = screen.getByRole("radio", { name: "System theme" });
    fireEvent.click(systemOption);

    expect(setTheme).toHaveBeenCalledWith("system");
  });

  it("reflects dark mode selection accurately", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "dark",
      setTheme,
    });

    render(<ThemeSwitch />);

    const darkOption = screen.getByRole("radio", { name: "Dark theme" });
    expect(darkOption).toHaveAttribute("aria-checked", "true");
  });
});
