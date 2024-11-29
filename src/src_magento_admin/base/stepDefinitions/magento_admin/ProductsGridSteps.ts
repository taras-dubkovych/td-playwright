import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/PageFixture";
import * as Constants from "../../Constants/constants"

Then('', async function () {
    const dashboardTitle = await pageFixture.magentoDashboardPage.dashboardTitle.textContent();
    expect(dashboardTitle).toContain(Constants.MAGENTO_DASHBOARD_TITLE);  
});

  Then('the user selects to create {string} product', async function (productType: string) {
    switch (productType.toLowerCase()) {
        case 'simple':
            await pageFixture.productsGridPage.createSimpleProduct();
            break;
        case 'virtual':
            await pageFixture.productsGridPage.createVirtualProduct();
            break;
        case 'congigurable':
            await pageFixture.productsGridPage.createConfigurableProduct();
            break;
        default:
            throw new Error(`Unknown page: ${productType}`);
    }
  });

  Then('the {string} product should appear in the product grid', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });