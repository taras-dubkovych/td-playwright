import { Page } from '@playwright/test';

export class CustomersPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCustomers() {
    await this.page.goto('/admin_ni2d8miur/admin/customer/index');
  }

  async createCustomer(customerDetails: { firstName: string; lastName: string; email: string }) {
    await this.page.click('button:has-text("Add New Customer")');
    await this.page.fill('input[name="firstname"]', customerDetails.firstName);
    await this.page.fill('input[name="lastname"]', customerDetails.lastName);
    await this.page.fill('input[name="email"]', customerDetails.email);
    await this.page.click('button:has-text("Save")');
    await this.page.waitForSelector(`text=${customerDetails.email}`);
  }

  async editCustomerEmail(existingEmail: string, newEmail: string) {
    await this.page.fill('input[name="email"]', existingEmail);
    await this.page.click('button:has-text("Search")');
    await this.page.click(`a:has-text("${existingEmail}")`);
    await this.page.fill('input[name="email"]', newEmail);
    await this.page.click('button:has-text("Save")');
    await this.page.waitForSelector(`text=${newEmail}`);
  }

  async deleteCustomer(email: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.click('button:has-text("Search")');
    await this.page.click(`button:has-text("Select"):below(:text("${email}"))`);
    await this.page.click('button:has-text("Delete")');
    await this.page.click('button:has-text("Confirm")');
    await this.page.waitForSelector('text=The customer has been deleted');
  }
}
