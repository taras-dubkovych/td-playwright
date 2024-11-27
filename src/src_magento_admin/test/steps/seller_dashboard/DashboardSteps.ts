import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/pageFixture";
import * as Constants from '../../../utils/constants'

Given('the user is redirected to the seller dashboard page', async function () {
    const isDashboardDisplayed = await pageFixture.dashboardPage.verifyDashboardIsVisible();
    expect(isDashboardDisplayed).toBeTruthy();  
    
});

Then('the user verifies the registration success message', async function () {
    const successMsg = await pageFixture.dashboardPage.getRegistrationSuccessMsg();
    expect(successMsg).toHaveText(Constants.SELLER_REGISTRATION_SUCCESS_MSG);
});


