import { test, expect } from "@playwright/test";
import { equal } from "assert";


test ("calendarflg", async ({ page }) => {
await page.goto("https://letcode.in/test");
await expect (page.getByRole('heading',{name:'Practice and become pro in test automation'})).toBeVisible;
await page.getByRole('link',{name:'Date & Time'}).click();
await expect(page.getByRole('heading',{name:'Calendar'})).toBeVisible();
await expect(page.locator('.datepicker-nav').first()).toBeVisible();
await page.getByRole('button',{name:'16'}).click();
await page.waitForTimeout(3000);
try{
 await page.evaluate('document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();');
 await page.evaluate('document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();');
}catch(Exception){

}
await expect(page.getByText('You have selected 9/16/24')).toBeVisible();
await page.getByRole('button',{name:'Today'}).click();
await page.clock.setFixedTime(new Date('2024-09-26T10:00:00'));
await expect(page.getByTestId('current-time')).toHaveText('You have selected 9/26/24, 12:14 PM');
await page.clock.setFixedTime(new Date('2024-09-26T12:14:00'));
await expect(page.getByTestId('current-time')).toHaveText('9/17/2024, 12:14:00 AM');

//await page.getByRole('button',{name:'Clear'}).click();
//await expect(page.getByText('You have selected 9/17/24, 12:09 PM')).toBeHidden();
//await expect(page.getByText('+00-;+00-'))
});
