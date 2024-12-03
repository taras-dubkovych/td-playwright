import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/PageFixture";
import * as Constants from "../../constants/constants"

Then('', async function () {
    const dashboardTitle = await pageFixture.magentoDashboardPage.dashboardTitle.textContent();
    expect(dashboardTitle).toContain(Constants.MAGENTO_DASHBOARD_TITLE);  
});

Then('the {string} form should be displayed', async function (formName: string) {
   expect(await pageFixture.createProductPage.getTitle()).toContain(formName);
  });

  Then('the user fills in the required fields with the valid data for {string}', async function (productKey: string) {

    
    await pageFixture.createProductPage.fillInRequiredFields(this, productKey);
  });

  Then('the user saves the product', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.createProductPage.clickSaveProductBtn();
  });

  Then('the product should be successfully created', async function () {
    const messageText = await pageFixture.createProductPage.getSuccessMessageText();
    expect(messageText).toBe(Constants.PRODUCT_CREATED_SUCCESS_MSG);
  });