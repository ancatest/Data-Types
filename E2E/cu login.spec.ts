import { test, expect } from "@playwright/test";
import data from "../resources/test-data.json" with { type: "json" };

test("login", async ({ page }) => {
  await page.goto("https://letcode.in/signin");

  await page
    .getByRole("textbox", { name: "Enter registered email" })
    .fill(data.accountDetails.username_default);
  await page
    .getByPlaceholder("Password")
    .fill(data.accountDetails.password_default);
  await page.getByRole("button", { name: "LOGIN" }).click();
  await page.waitForURL("https://letcode.in/");
  await expect(page.getByRole("link", { name: "Sign out" })).toBeVisible();
  await page.getByRole("link", { name: "Work-Space" }).click();
  await page.getByText("Select", { exact: true });
  await page.getByRole("link", { name: "Drop-Down" }).click();
  await page.getByText("Select the apple using").isVisible();
  await page.locator("#fruits").selectOption("2");
  await expect(page.getByText("You have selected Orange")).toBeVisible();
  await page.getByText("Select your super hero's").isVisible();
  await page.locator("#superheros").selectOption("aq");
  await page.locator("#superheros").selectOption("bp");
  await page.getByText("You have selected Black").isVisible();
  await page.locator("#lang").selectOption("py");
  await page.locator("#country").selectOption("Peru");
});
