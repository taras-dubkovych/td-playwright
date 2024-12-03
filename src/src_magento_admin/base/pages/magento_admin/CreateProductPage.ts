import { Locator, Page } from '@playwright/test';
import { BasePage } from "../BasePage";
import { getProductByKey } from '../../../utils/utils';

export class CreateProductPage extends BasePage  {
  readonly page: Page;
  readonly addProductBtn: Locator;
  readonly createSimpleProductOption: Locator;
  readonly createVirtualProductOption: Locator;
  readonly createConfigurableProductOption: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addProductBtn = this.page.locator('button:has-text("Add Product")');
    this.createSimpleProductOption = this.page.locator('text=Simple Product');
    this.createVirtualProductOption = this.page.locator('text=Virtual Product');
    this.createSimpleProductOption = this.page.locator('text=Configurable Product');
    this.successMessage = this.page.locator('[data-ui-id*="message-success"]')
  }

  async fillInRequiredFields(testContext, productKey:string) {
    // let productDetails: { name: string; price: string; sku: string }
    const index: number = 0;
    const productDetails = getProductByKey(productKey);
    if (!productDetails) {
        throw new Error(`Product "${productKey}" is not defined.`);
    }
    testContext.setProductsInfo(productDetails[index]);
    // Fill the form fields using the context
    const productsInfo = testContext.context.products;
    console.log("product info: ", productsInfo)
    await this.page.waitForLoadState();
    await this.waitSpinnerToDissapear();
    await this.page.fill('input[name="product[name]"]', productsInfo[index].name);
    await this.page.fill('input[name="product[sku]"]', productsInfo[index].sku);
    await this.page.fill('input[name="product[price]"]', productsInfo[index].price);
    await this.page.click('span:has-text("Prices")');
    await this.page.fill('input[name="product[commission_for_product]"]', "0")
  }

async productHasBeenCreated(){
    await this.page.waitForLoadState();
    await this.page.waitForSelector(`text=Test Product`);
}

  async clickSaveProductBtn(){
    await this.page.getByRole('button', { name: 'Save', exact: true }).click();
    await this.waitSpinnerToDissapear();
  }

  async getSuccessMessageText() {
    return await this.successMessage.textContent();
}

  async deleteProduct(productName: string) {
    await this.page.fill('input[name="name"]', productName);
    await this.page.click('button:has-text("Search")');
    await this.page.click(`button:has-text("Select"):below(:text("${productName}"))`);
    await this.page.click('button:has-text("Delete")');
    await this.page.click('button:has-text("Confirm")');
    await this.page.waitForSelector('text=The product has been deleted');
  }
}
