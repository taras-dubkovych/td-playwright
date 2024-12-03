import { Given, When } from "@cucumber/cucumber";
//import { chromium, Browser, Page, expect } from "@playwright/test";
import { config } from '../../../utils/config';
import { pageFixture } from "../../../hooks/PageFixture";

Given('the user is on the Magento login page', async function () {
    await pageFixture.adminLoginPage.navigateToUrl(config.magentoAdminURL);
});

When('the user logins with valid credentials', async function () {
    await pageFixture.adminLoginPage.login(config.admin.username, config.admin.password);
});