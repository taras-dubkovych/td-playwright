import { Page } from '@playwright/test';

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateDashboard() {
    return await this.page.isVisible('text=Dashboard');
  }
}
