import { Locator, Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class LeftBarMenu extends BasePage  {
  readonly page: Page;
  readonly logoImg: Locator;

  readonly salesTab: Locator;
  readonly ordersOption: Locator;

  readonly catalogTab: Locator;
  readonly productsOption: Locator;

  readonly customersTab: Locator;
  readonly allCuctomersOption: Locator;
  

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.logoImg = this.page.locator('[class="logo-img"]');
    this.salesTab = this.page.locator('#menu-magento-sales-sales');
    this.ordersOption = this.page.locator('[data-ui-id*="sales-order"]');
    this.catalogTab = this.page.locator('#menu-magento-catalog-catalog');
    this.productsOption = this.page.locator('[data-ui-id*="catalog-products"]');
    this.customersTab = this.page.locator('#menu-magento-customer-customer');
    this.allCuctomersOption = this.page.locator('[data-ui-id*="customer-manage"]');
  }

  async goToProducts() {
    await this.page.waitForLoadState();
    await this.waitSpinnerToDissapear();
    await this.catalogTab.click(); // Expand Catalog menu
    await this.scrollToPageTop();
    await this.productsOption.click(); // Click on Products
    await this.waitSpinnerToDissapear();
    await this.page.waitForURL('**/catalog/product/**'); // Wait for the page to load
  }

  async goToCustomers() {
    await this.customersTab.click(); // Expand Customers menu
    await this.allCuctomersOption.click(); // Click on All Customers
    await this.page.waitForURL('**/customer/index/**'); // Wait for the page to load
  }

  async goToOrders() {
    await this.salesTab.click(); // Expand Sales menu
    await this.ordersOption.click(); // Click on Orders
    await this.page.waitForURL('**/sales/order/**'); // Wait for the page to load
  }
}
