import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/PageFixture";
import * as Constants from "../../constants/constants"

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
    
    // Wait for the page to load and spinner to disappear
    await pageFixture.page.waitForLoadState();
    await pageFixture.productsGridPage.waitSpinnerToDissapear();
    const productInfo = this.getProductsInfo();

    await pageFixture.productsGridPage.searchProduct(productInfo[0].sku);
    await pageFixture.productsGridPage.scrollToPageTop();
    const isProductVisible = await pageFixture.productsGridPage.isProductVisible(productInfo[0].name);
    expect(isProductVisible).toBeTruthy();
    await new Promise(resolve => setTimeout(resolve, 5000));
  });