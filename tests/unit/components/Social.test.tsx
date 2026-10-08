import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Social } from "@/ui/components/Social";

describe("Social Component", () => {
  it("renders default social profiles with tooltips, rel me, and brand hover styles", () => {
    render(<Social />);

    const linkedIn = screen.getByLabelText(/LinkedIn/i);
    expect(linkedIn).toBeInTheDocument();
    expect(linkedIn).toHaveAttribute("href", "https://www.linkedin.com/in/amrabed");
    expect(linkedIn).toHaveAttribute("rel", "noopener noreferrer me");
    expect(linkedIn).toHaveAttribute("target", "_blank");
    expect(linkedIn).toHaveStyle({ "--social-hover-color": "#0A66C2" });

    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Google Scholar/i)).toBeInTheDocument();
  });

  it("renders custom profiles when provided", () => {
    const customProfiles = [
      {
        name: "CustomNet",
        url: "https://custom.net/user",
        color: "#123456",
      },
    ];

    render(<Social profiles={customProfiles} className="custom-class" />);

    const customLink = screen.getByLabelText(/CustomNet/i);
    expect(customLink).toBeInTheDocument();
    expect(customLink).toHaveAttribute("href", "https://custom.net/user");
    expect(customLink).toHaveStyle({ "--social-hover-color": "#123456" });
  });
});
