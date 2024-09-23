import { test, expect } from "@playwright/test";


test.skip("feflogin", async ({ page }) => {
await page.goto("https://letcode.in/test");
await expect (page.getByRole('heading',{name:'Practice and become pro in test automation'})).toBeVisible;
await page.getByText('Elements',{exact:true});
await page.getByRole('link',{name:'Find Elements'}).click()
await expect(page.getByRole('heading',{name:'Elements'})).toBeVisible();
await page.getByPlaceholder('Enter your git user name eg').fill('Test');
await page.getByRole('button',{name:'Search'}).click();

})
test.skip("feflogin1", async ({ page }) => {
    await page.goto("https://letcode.in/test");
    await expect (page.getByRole('heading',{name:'Practice and become pro in test automation'})).toBeVisible;
    await page.getByText('Elements',{exact:true});
    await page.getByRole('link',{name:'Find Elements'}).click()
    await expect(page.getByRole('heading',{name:'Elements'})).toBeVisible();
    await page.getByPlaceholder('Enter your git user name eg').fill("1234");
    await page.getByRole('button',{name:'Search'}).click();


})

test.only("feflogin2", async ({ page }) => {
    await page.goto("https://letcode.in/test");
    await expect (page.getByRole('heading',{name:'Practice and become pro in test automation'})).toBeVisible;
    await page.getByText('Elements',{exact:true});
    await page.getByRole('link',{name:'Find Elements'}).click()
    await expect(page.getByRole('heading',{name:'Elements'})).toBeVisible();
    //const ele1 = await page.getByPlaceholder('Enter your git user name eg');
    //await expect (page.getByPlaceholder('Enter your git user name eg')).toBeVisible();
    //await ele1.fill("1234");
    //await ele1.press("Enter");
    //await page.getByRole('img',{name:'Placeholder image'})
    //await expect(page.getByRole('img',{name:'Placeholder image'})).toBeVisible();
    //await page.getByText('Public Repos');
    //await page.getByText('Public Gist');
    //await page.getByText('Followers');
    //await page.locator("//div(@class, 'content')/ol/li/a"); //xpath
    //await expect (page.locator("//div(@class, 'content')/ol/li/a")).toBeVisible;; //xpath
    const ele2 = await page.getByPlaceholder('Enter your git user name eg');
    await expect (page.getByPlaceholder('Enter your git user name eg')).toBeVisible();
    await ele2.fill("1234abc");
    await ele2.press("Enter");
    await page.getByRole('img',{name:'Placeholder image'})
    await expect(page.getByRole('img',{name:'Placeholder image'})).toBeVisible();
    await page.getByText('Public Repos');
    await page.getByText('Public Gist');
    await page.getByText('Followers');
    await page.locator("//div(@class, 'content')/ol/li/a"); //xpath
    await expect (page.locator("//div(@class, 'content')/ol/li/a")).toBeVisible;; //xpath
   // await page.locator("div.content > ol > li > a");  //css


})