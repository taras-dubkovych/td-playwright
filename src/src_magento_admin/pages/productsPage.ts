import { Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickAddProductBtn(){
    await this.page.click('button:has-text("Add Product")');
  }

  async createSimpleProductOption(){
    await this.page.click('text=Simple Product');
  }

  async createVirtualProductOption(){
    await this.page.click('text=Virtual Product');
  }

  async createConfigurableProductOption(){
    await this.page.click('text=Configurable Product');
  }

  async fillInRequiredFields(productDetails: { name: string; price: string; sku: string }) {
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
