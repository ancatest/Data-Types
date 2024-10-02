import { test, expect } from "@playwright/test";


//import moment from "moment";
//import { afterEach, beforeEach, it } from "node:test";

//test.skip ("calendarflg", async ({ page }) => {
//await page.goto("https://letcode.in/test");
//await expect (page.getByRole('heading',{name:'Practice and become pro in test automation'})).toBeVisible;
//await page.getByRole('link',{name:'Date & Time'}).click();
//await expect(page.getByRole('heading',{name:'Calendar'})).toBeVisible();
//await expect(page.locator('.datepicker-nav').first()).toBeVisible();
//await page.getByRole('button',{name:'16'}).click();
//await page.waitForTimeout(3000);
//try{
//await page.evaluate('document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();');
//await page.evaluate('document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();');
//}catch(Exception){

//}
//await expect(page.getByText('You have selected 9/16/24')).toBeVisible();
//await page.getByRole('button',{name:'Today'}).click();
//await page.clock.setFixedTime(new Date('2024-09-26T10:00:00'));
//await expect(page.getByTestId('current-time')).toHaveText('You have selected 9/26/24, 12:14 PM');
//await page.clock.setFixedTime(new Date('2024-09-26T12:14:00'));
//await expect(page.getByTestId('current-time')).toHaveText('9/17/2024, 12:14:00 AM');
//const date = require('date-and-time');
//const now = new Date();
//const startFormatted = date.format(now, 'DD');
//await page.goto('https://letcode.in/calendar');
//await page.getByRole('button',{name:'Today'}).click();
//await page.locator('.datepicker-nav' , {has:page.locator(`text=${startFormatted}`)}).click()

//});

test.skip("calendarflg", async ({ page }) => {
  await page.goto("https://letcode.in/test");
  await expect(
    page.getByRole("heading", {
      name: "Practice and become pro in test automation",
    }),
  ).toBeVisible;
  await page.getByRole("link", { name: "Date & Time" }).click();
  await expect(page.getByRole("heading", { name: "Calendar" })).toBeVisible();
  await expect(page.locator(".datepicker-nav").first()).toBeVisible();
  await page.getByRole("button", { name: "16" }).click();
  await page.waitForTimeout(3000);
  try {
    await page.evaluate(
      'document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();',
    );
    await page.evaluate(
      'document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();',
    );
  } catch (Exception) {}
  await expect(
    page.getByText("You have selected 9/16/24, 12:00 AM"),
  ).toBeVisible();
  //await page.getByRole('button',{name:'Today'}).click();
  //await page.clock.setFixedTime(new Date('2024-09-26T10:00:00'));
  //await expect(page.getByTestId('current-time')).toHaveText('You have selected 9/26/24, 12:14 PM');
  //await page.clock.setFixedTime(new Date('2024-09-26T12:14:00'));
  //await expect(page.getByTestId('current-time')).toHaveText('9/17/2024, 12:14:00 AM');
  let date = new Date().toJSON();
  console.log(date);
  await page.getByRole("button", { name: "Today" }).click();
});

test("calendarnextdays", async ({ page }) => {
  await page.goto("https://letcode.in/test");
  await expect(
    page.getByRole("heading", {
      name: "Practice and become pro in test automation",
    }),
  ).toBeVisible;
  await page.getByRole("link", { name: "Date & Time" }).click();
  await expect(page.getByRole("heading", { name: "Calendar" })).toBeVisible();
  await expect(page.locator(".datepicker-nav").first()).toBeVisible();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayTomorrow = tomorrow.getDate();
  console.log("tomorrow :", dayTomorrow);
  await page
    .getByRole("button", { name: dayTomorrow.toString(), exact: true })
    .click();
  await expect(
    page.getByText("You have selected 10/3/24, 12:00 AM"),
  ).toBeVisible();
  const dayaftertomorrow = new Date(tomorrow);
  dayaftertomorrow.setDate(tomorrow.getDate() + 1);
  const adayaftertomorrow = dayaftertomorrow.getDate();
  console.log("poimaine:", adayaftertomorrow);
  await page
    .getByRole("button", { name: adayaftertomorrow.toString(), exact: true })
    .click();
  await expect(
    page.getByText("You have selected 10/4/24, 12:00 AM"),
  ).toBeVisible();
});
