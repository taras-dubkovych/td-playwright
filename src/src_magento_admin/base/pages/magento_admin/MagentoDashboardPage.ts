import { Page, Locator } from '@playwright/test';
import { BasePage } from "../BasePage";

export class MagentoDashboardPage extends BasePage  {
  readonly page: Page;
  readonly dashboardTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.dashboardTitle = this.page.locator(".page-title");
  }

  async validateDashboard() {
    return await this.page.isVisible('text=Dashboard');
  }
}
