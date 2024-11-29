import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/PageFixture";
import * as Constants from "../../Constants/constants"

Then('', async function () {
    const dashboardTitle = await pageFixture.magentoDashboardPage.dashboardTitle.textContent();
    expect(dashboardTitle).toContain(Constants.MAGENTO_DASHBOARD_TITLE);  
});

Then('the {string} form should be displayed', async function (formName: string) {
   expect(await pageFixture.createProductPage.getTitle()).toContain(formName);
  });

  Then('the user fills in the required fields with the valid data', async function () {
    await pageFixture.createProductPage.fillInRequiredFields()
  });

  Then('the user saves the product', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the product should be successfully created', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });