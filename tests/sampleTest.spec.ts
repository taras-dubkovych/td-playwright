import {test, expect, selectors} from '@playwright/test'
import { timeLog } from 'console';

test ('My First Test', async({page})=>{
    

    await test.step(`Open base url`, async () => {
        await page.goto('https://www.saucedemo.com/');
    });

    await test.step(`Verify the page title`, async () => {
        const title = await page.locator('.login_logo')
     console.log(await title.textContent())
    await expect(title).toHaveText('Swag Labs')
    });
    
});

test ('My Second Test withot steps', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    const userNameField = page.locator('#user-name');
    await userNameField.fill("standard_user");

    const userPassField = page.locator('#password');
    await userPassField.fill('secret_sauce');

    const loginButton = page.locator('#login-button');


    await loginButton.click();
    const expectedText = "Products";
    await expect(page.locator(`//span[contains(text(),'${expectedText}')]`)).toHaveText('Products')
})

test ('My Second Test with steps', async({page})=>{
    
    await test.step(`Open base url`, async () => {
        await page.goto('https://www.saucedemo.com/');
    });

    await test.step(`Fill in username`, async () => {
        const userNameField = page.locator('#user-name');
        await userNameField.fill("standard_user");
    });

    await test.step(`Fill in password`, async () => {
        const userPassField = page.locator('#password');
        await userPassField.fill('secret_sauce');
    });

    await test.step(`Click log in button`, async () => {
        const loginButton = page.locator('#login-button');
        await loginButton.click();
    });
    
    await test.step(`Verify text`, async () => {
        const expectedText = "Products";
    await expect(page.locator(`//span[contains(text(),'${expectedText}')]`)).toHaveText('Products')
    });
   
});