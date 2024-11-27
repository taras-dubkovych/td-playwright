// import { Page } from '@playwright/test';
// import { BasePage } from "../BasePage";

// export class LeftBarMenu extends BasePage  {
//   readonly page: Page;

//   constructor(page: Page) {
//     super(page);
//     this.page = page;
//   }

//   /**
//    * Navigate to Products Page
//    */
//   async goToProducts() {
//     await this.page.click('text=Catalog'); // Expand Catalog menu
//     await this.page.click('text=Products'); // Click on Products
//     await this.page.waitForURL('**/catalog/product/**'); // Wait for the page to load
//   }

//   /**
//    * Navigate to Customers Page
//    */
//   async goToCustomers() {
//     await this.page.click('text=Customers'); // Expand Customers menu
//     await this.page.click('text=All Customers'); // Click on All Customers
//     await this.page.waitForURL('**/customer/index'); // Wait for the page to load
//   }

//   /**
//    * Navigate to Orders Page
//    */
//   async goToOrders() {
//     await this.page.click('text=Sales'); // Expand Sales menu
//     await this.page.click('text=Orders'); // Click on Orders
//     await this.page.waitForURL('**/sales/order'); // Wait for the page to load
//   }
// }
