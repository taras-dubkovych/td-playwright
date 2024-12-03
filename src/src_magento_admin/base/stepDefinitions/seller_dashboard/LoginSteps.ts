import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { config } from '../../../utils/config';
import { pageFixture } from "../../../hooks/PageFixture";
import { clickAndSwitchToNewTab } from "../../../utils/utils"
import * as Constants from "../../constants/constants"

Given('the user is on the seller login page', async function () {
    await pageFixture.sellerLoginPage.navigateToUrl(config.sellerLoginURL);
    expect(await pageFixture.page.title()).toContain(Constants.SELLER_LOGIN_PAGE_TITLE);
});

When('the user logs in as {string}', async function (userKey: string) {
    await pageFixture.sellerLoginPage.login(userKey);
});

Then('the user should be redirected to the Seller Dashboard', async function () {
    const isDashboardValid = await pageFixture.sellerDashboardPage.validateDashboard();
    expect(isDashboardValid).toBeTruthy();  
  });

When('the user clicks on registration link to seller registration form', async function () {
    await clickAndSwitchToNewTab( await pageFixture.sellerLoginPage.getRegistrationLinkSelector());
    const isRegistrationFormDisplayed = await pageFixture.sellerRegistrationPage.validateRegisterFormDisplayed();
    expect(isRegistrationFormDisplayed).toBeTruthy();  
});
