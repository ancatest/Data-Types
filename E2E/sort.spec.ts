import { test, expect } from "@playwright/test";

test("sortflogin",async ({ page }) => {
await page.goto("https://letcode.in/test");
await expect(page.getByRole('heading',{name:'Practice and become pro in test automation'})).toBeVisible();
await page.getByRole('link',{name:'AUI - 3'}).click();
await expect(page.getByRole('heading',{name:'Sort'})).toBeVisible();
await expect(page.getByRole('heading',{name:'To do'})).toBeVisible();
//await page.getByRole('heading',{name:'To do'}).selectOption('Get to work');
//await page.locator('Get to work').hover();
//await page.mouse.down();
//await page.getByText('Get to work').dragTo(page.locator('#cdk-drop-list-3'));
//await page.mouse.up();
//await page.getByRole('heading',{name:'Done'}).selectOption
const item1 = page.getByText('Get to work');
let Done = page.locator('[cdkdroplistgroup] > div:nth-of-type(2) > .cdk-drop-list');


await page.waitForTimeout(3000);
try{
 await page.evaluate('document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();');
 await page.evaluate('document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].remove();');
}catch(Exception){

}
//  await item1.dragTo(Done, 
// {
//     // sourcePosition: { x: 34, y: 7 },
//     // targetPosition: { x: 10, y: 20 },
//     force: true
//   });

await Done.scrollIntoViewIfNeeded(); 

await item1.hover();

await page.mouse.down();
const box = (await Done.boundingBox())!;

await page.mouse.move(box.x + box.width / 2 , box.y + box.height / 2, {steps: 10});
await page.mouse.up();

await expect(Done).toContainText('Get to work');



})