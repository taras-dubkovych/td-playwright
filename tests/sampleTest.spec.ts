import {test, expect, selectors} from '@playwright/test'
import { timeLog } from 'console';

test ('My First Test', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
     const title = await page.locator('.login_logo')
     console.log(await title.textContent())
    await expect(title).toHaveText('Swag Labs')
});

test ('My Second Test', async({page})=>{
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