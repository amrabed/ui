import { test, expect } from "@playwright/test";

test.describe("Theme Switch", () => {
  test("should switch between light, dark, and system themes correctly", async ({ page }) => {
    await page.goto("/");
    const darkButton = page.getByRole("radio", { name: "Dark theme" }).first();
    const lightButton = page.getByRole("radio", { name: "Light theme" }).first();

    await expect(darkButton).toBeVisible();
    await darkButton.click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    await expect(lightButton).toBeVisible();
    await lightButton.click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });
});
