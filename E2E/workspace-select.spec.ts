import { test, expect } from "@playwright/test";

test.skip("test", async ({ page }) => {
  await page.goto("https://letcode.in/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByRole("textbox", { name: "Enter registered email" }).click();
  await page
    .getByRole("textbox", { name: "Enter registered email" })
    .fill("an@yahoo.com");
  await page
    .getByRole("textbox", { name: "Enter registered email" })
    .press("Tab");
  await page.getByPlaceholder("Enter password").fill("Test1234");
  await page.getByPlaceholder("Enter password").press("Enter");
  await page.getByRole("link", { name: "Work-Space" }).click();
  await page.getByRole("link", { name: "Drop-Down" }).click();
  console.log(
    page.getByRole("combobox", { name: "#fruits" }).getAttribute("value"),
  );
  await page.locator("#fruits").selectOption("0");
  await page.locator("#superheros").selectOption("aq");
  await page.locator("#superheros").selectOption("bp");
  await page.locator("#lang").selectOption("py");
  await page.locator("#country").selectOption("Peru");
});
