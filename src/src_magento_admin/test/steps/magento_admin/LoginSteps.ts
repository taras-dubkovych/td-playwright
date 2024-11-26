import { Given, When, Then } from "@cucumber/cucumber";
//import { chromium, Browser, Page, expect } from "@playwright/test";
import { AdminLoginPage } from '../../../pages/magento_admin/AdminLoginPage';
import { config } from '../../../utils/config';
import { pageFixture } from "../../../hooks/pageFixture";

let adminLoginPage: AdminLoginPage;

Given('I am on the marketplace login page', async function () {
    adminLoginPage = new AdminLoginPage(pageFixture.page);
    await adminLoginPage.navigateToUrl(config.magentoAdminURL);
    await adminLoginPage.login(config.admin.username, config.admin.password);
});

When('I login with valid credentials', async function () {

});

Then('marketplace dashboard is opened', async function () {

});