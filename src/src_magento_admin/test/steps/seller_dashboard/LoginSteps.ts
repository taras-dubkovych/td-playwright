import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { SellerLoginPage } from '../../../pages/seller_dashboard/SellerLoginPage';
import { config } from '../../../utils/config';
import { pageFixture } from "../../../hooks/pageFixture";
import * as users from '../../../data/users.json';
import { DashboardPage } from "../../../pages/seller_dashboard/DashboardPage";
import { clickAndSwitchToNewTab } from "../../../utils/Utils"

let sellerLoginPage: SellerLoginPage;
let dashboardPage: DashboardPage;

Given('the user is on the seller login page', async function () {
    sellerLoginPage = new SellerLoginPage(pageFixture.page);
    await sellerLoginPage.navigateToUrl(config.sellerLoginURL);
    // await sellerLoginPage.login(config.admin.username, config.admin.password);
});

When('the user logs in as {string}', async function (userKey: string) {
    const user = users["valid_user"];
    if (!user) {
      throw new Error(`User "${userKey}" is not defined in the JSON file.`);
    }
    await sellerLoginPage.login(user.email, user.password);
});

Then('the user should be redirected to the Seller Dashboard', async function () {
    dashboardPage = new DashboardPage(pageFixture.page);
    
    console.log(await dashboardPage.validateDashboard())
    const isDashboardValid = await dashboardPage.validateDashboard();
    expect(isDashboardValid).toBeTruthy();  
  });

Then('the {string} page is displayed', async function (pageName: string) {
    expect(await pageFixture.page.title()).toContain(pageName); 
});

When('the user clicks on registration link', async function () {
    await clickAndSwitchToNewTab( await sellerLoginPage.getRegistrationLinkSelector());
});
