import { Locator, Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class ProductsGridPage extends BasePage  {
  readonly page: Page;
  readonly addProductSelect: Locator;
  readonly createSimpleProductOption: Locator;
  readonly createVirtualProductOption: Locator;
  readonly createConfigurableProductOption: Locator;
  readonly searchField: Locator;
  readonly searchButton: Locator;
  readonly spinner: Locator;
  

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addProductSelect = this.page.locator('button[aria-label="Add product of type"]');
    this.createSimpleProductOption = this.page.locator('[data-ui-id*="item-simple"]');
    this.createVirtualProductOption = this.page.locator('[data-ui-id*="item-virtual"]');
    this.createConfigurableProductOption = this.page.locator('[data-ui-id*="item-configurable"]');
    this.searchField = page.locator('[aria-label="Search by keyword"]').nth(0);
    this.searchButton = page.locator('[aria-label="Search"]').nth(0);
    this.spinner = this.page.locator("[class='spinner']").nth(1);
  }

  async clickAddProductBtn(){
    await this.page.click('button:has-text("Add Product")');
  }

  async createSimpleProduct(){
    await this.addProductSelect.click();
    await this.createSimpleProductOption.click();
    await this.page.waitForLoadState();
  }

  async createVirtualProduct(){
    await this.addProductSelect.click();
    await this.createVirtualProductOption.click();
    await this.page.waitForLoadState();
  }

  async createConfigurableProduct(){
    await this.addProductSelect.click();
    await this.createConfigurableProductOption.click();
    await this.page.waitForLoadState();
  }

  async searchProduct(productName) {
    // await this.waitSpinnerToDissapear();
    // await this.scrollToPageTop();
    await this.searchField.fill(productName);
    await this.scrollToPageTop();
    await this.searchButton.click();
}

// Method to check if the product is visible in the grid
async isProductVisible(productName) {
    const product = this.page.locator(`text=${productName}`).nth(0);
    await product.waitFor({ state: 'visible', timeout: 30000 });
    return await product.isVisible();
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
