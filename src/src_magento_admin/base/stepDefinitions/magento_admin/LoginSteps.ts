import { Given, When } from "@cucumber/cucumber";
//import { chromium, Browser, Page, expect } from "@playwright/test";
import { config } from '../../../utils/config';
import { pageFixture } from "../../../hooks/PageFixture";

Given('the user is on the Magento login page', async function () {
     pageFixture.logger.info("test lallalal")
    await pageFixture.adminLoginPage.navigateToUrl(config.magentoAdminURL);
    pageFixture.logger.info("test lallalal")
    
});

When('the user logins with valid credentials', async function () {
    pageFixture.logger.info("test lallalal")
    await pageFixture.adminLoginPage.login(config.admin.username, config.admin.password);
});