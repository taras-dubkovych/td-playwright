import { Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProducts() {
    await this.page.goto('/admin_ni2d8miur/admin/catalog/product');
  }

  async createSimpleProduct(productDetails: { name: string; price: string; sku: string }) {
    await this.page.click('button:has-text("Add Product")');
    await this.page.click('text=Simple Product');
    await this.page.fill('input[name="product[name]"]', productDetails.name);
    await this.page.fill('input[name="product[sku]"]', productDetails.sku);
    await this.page.fill('input[name="product[price]"]', productDetails.price);
    await this.page.click('button:has-text("Save")');
    await this.page.waitForSelector(`text=${productDetails.name}`);
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
