import { test, expect } from "@playwright/test";
import data from "../resources/test-data.json" with { type: "json" };

test.skip("login", async ({ page }) => {
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
  await page.getByRole("link", { name: "Tabs" }).click();
  await page.goto("https://letcode.in/windows");
  await page.getByLabel("Goto Home").click();
  const [tub] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#home"),
  ]);
  await tub.waitForTimeout(3000); // aici mi-a crapat cand am folosit load state si am inlocuit cu timeout
  expect(tub.url()).toContain("https://letcode.in/test");
  const pageTitle = await tub.title();
  expect(pageTitle).toBe("LetCode - Testing Hub");
  await page.goto("https://letcode.in/windows");
  await page.getByRole("button", { name: "Muiltiple windows" }).click();
  const [tub1] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#multi"),
  ]);

  //const [tub2] =await Promise.all([
  //page.waitForEvent('popup'),
  //page.click('#multi'),
  //]);
  await tub1.waitForTimeout(3000);
  expect(tub1.url()).toContain("https://letcode.in/alert");
  const pageTitle1 = await tub1.title();
  expect(pageTitle1).toBe("LetCode with Koushik");
});
