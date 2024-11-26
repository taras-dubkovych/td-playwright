import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/pageFixture";
import { DashboardPage } from "../../../pages/seller_dashboard/DashboardPage";
import * as Constants from '../../../utils/constants'

let dashboardPage: DashboardPage;

Given('the user is redirected to the seller dashboard page', async function () {
    dashboardPage = new DashboardPage(pageFixture.page);
    const isDashboardDisplayed = await dashboardPage.verifyDashboardIsVisible();
    expect(isDashboardDisplayed).toBeTruthy();  
    
});

Then('the user verifies the registration success message', async function () {
    const successMsg = await dashboardPage.getRegistrationSuccessMsg();
    expect(successMsg).toHaveText(Constants.SELLER_REGISTRATION_SUCCESS_MSG);
});


