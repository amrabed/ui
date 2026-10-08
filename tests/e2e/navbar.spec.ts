import { expect, test } from "@playwright/test";

test.describe("NavBar", () => {
  test("should have a brand link pointing to amrabed.com", async ({ page }) => {
    await page.goto("/");
    const brandLink = page.getByRole("link", { name: "Amr Abed" }).first();
    await expect(brandLink).toBeVisible();
    await expect(brandLink).toHaveAttribute("href", "https://amrabed.com");
  });

  test("should have ecosystem navigation links", async ({ page }) => {
    await page.goto("/");
    const blogLink = page.getByRole("link", { name: "Blog" }).first();
    await expect(blogLink).toBeVisible();
    await expect(blogLink).toHaveAttribute("href", "https://amrabed.com/blog");
  });
});
