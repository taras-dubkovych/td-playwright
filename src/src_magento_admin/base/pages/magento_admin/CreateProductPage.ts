import { Locator, Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class CreateProductPage extends BasePage  {
  readonly page: Page;
  readonly addProductBtn: Locator;
  readonly createSimpleProductOption: Locator;
  readonly createVirtualProductOption: Locator;
  readonly createConfigurableProductOption: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addProductBtn = this.page.locator('button:has-text("Add Product")');
    this.createSimpleProductOption = this.page.locator('text=Simple Product');
    this.createVirtualProductOption = this.page.locator('text=Virtual Product');
    this.createSimpleProductOption = this.page.locator('text=Configurable Product');
  }

  async fillInRequiredFields() {
    let productDetails: { name: string; price: string; sku: string }
    await this.page.waitForLoadState();
    await this.page.fill('input[name="product[name]"]', productDetails.name);
    await this.page.fill('input[name="product[sku]"]', productDetails.sku);
    await this.page.fill('input[name="product[price]"]', productDetails.price);
    await this.page.click('span:has-text("Prices")');
    await this.page.fill('input[name="product[commission_for_product]"]', "0")
   
  }

async productHasBeenCreated(){
    await this.page.waitForLoadState();
    await this.page.waitForSelector(`text=Test Product`);
}

  async clickSaveProductBtn(){
    await this.page.click('button:has-text("Save")');
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
