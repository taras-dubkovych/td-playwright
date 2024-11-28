// import { Page } from '@playwright/test';
// import { BasePage } from "../BasePage";

// export class OrdersPage extends BasePage  {
//   readonly page: Page;

//   constructor(page: Page) {
//     super(page);
//     this.page = page;
//   }

//   async navigateToOrders() {
//     await this.page.goto('/admin_ni2d8miur/admin/sales/order');
//   }

//   async viewOrder(orderId: string) {
//     await this.page.fill('input[name="increment_id"]', orderId);
//     await this.page.click('button:has-text("Search")');
//     await this.page.click(`a:has-text("${orderId}")`);
//     await this.page.waitForSelector('text=Order Information');
//   }

//   async changeOrderStatus(orderId: string, status: string) {
//     await this.viewOrder(orderId);
//     await this.page.selectOption('select[name="status"]', status);
//     await this.page.click('button:has-text("Save")');
//     await this.page.waitForSelector(`text=${status}`);
//   }

//   async deleteOrder(orderId: string) {
//     await this.viewOrder(orderId);
//     await this.page.click('button:has-text("Cancel")');
//     await this.page.click('button:has-text("Confirm")');
//     await this.page.waitForSelector('text=The order has been canceled');
//   }
// }
