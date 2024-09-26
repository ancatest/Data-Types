import { expect } from "@playwright/test";
import test from "../E2E/test";
test.beforeEach( async ({ app }) => {
  await app.base.navigateTo('https://letcode.in/');
  await app.base.page.waitForLoadState("domcontentloaded");
});

test("Registration", async ({ page,app }) => {
    await page.getByRole('link', { name: 'Sign up' }).click();
    await app.registration.completeForm();
 
   
    await expect(page.getByRole('link',{name:'Sign out'})).toBeVisible();
});