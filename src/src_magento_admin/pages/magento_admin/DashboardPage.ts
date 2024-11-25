import { Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class DashboardPage extends BasePage  {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async validateDashboard() {
    return await this.page.isVisible('text=Dashboard');
  }
}
