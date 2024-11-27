import { Given, When, Then } from "@cucumber/cucumber";
//import { chromium, Browser, Page, expect } from "@playwright/test";
import { config } from '../../../utils/config';
import { pageFixture } from "../../../hooks/pageFixture";

Given('the user is on the Magento login page', async function () {
    await pageFixture.adminLoginPage.navigateToUrl(config.magentoAdminURL);
    await pageFixture.adminLoginPage.login(config.admin.username, config.admin.password);
});

When('the user logins with valid credentials', async function () {

});

Then('Magento dashboard is opened', async function () {

});