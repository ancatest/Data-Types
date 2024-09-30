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
});
