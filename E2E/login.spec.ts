
import { expect } from "@playwright/test";
import test from "../E2E/test";
test.beforeEach(async ({ app }) => {
  await app.base.navigateTo('https://letcode.in/');
});

test("Login Page-ValidCredentials", , { tag: ["@smoke"],}, async ({ page,app }) => {
    await page.getByRole('link', { name: 'Log in' }).click();
    await app.login.completeForm();
 
    //await page.getByRole('textbox',{name:'Enter registered email'}).fill(data.accountDetails.username_default);
    //await page.getByPlaceholder('Password').fill(data.accountDetails.password_default);
    //await page.getByRole('button',{name:'LOGIN'}).click();
    //await page.waitForURL('https://letcode.in/');
    await expect(page.getByRole('link',{name:'Sign out'})).toBeVisible();
})