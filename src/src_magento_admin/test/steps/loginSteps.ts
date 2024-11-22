import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { AdminLoginPage } from '../../pages/adminLoginPage';
import { config } from '../..//utils/config';

let browser: Browser;
let page: Page;


Given('I am on the marketplace login page', async function () {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.navigateToLogin();
    await adminLoginPage.login(config.admin.username, config.admin.password);
});

When('I login with valid credentials', async function () {

});

Then('marketplace dashboard is opened', async function () {

});