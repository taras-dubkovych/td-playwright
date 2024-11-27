import { Locator, Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class DashboardPage extends BasePage {
  readonly page: Page;

  readonly marketPlaceDashboardLabel1: Locator;
  readonly marketPlaceDashboardLabel: Locator;
  readonly successMessageLocator: Locator;
     

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.marketPlaceDashboardLabel1 = this.page.locator(".base").filter({ hasText: "My Account" });
    this.marketPlaceDashboardLabel = this.page.locator(".base").filter({ hasText: "Marketplace Dashboard" });
    this.successMessageLocator = this.page.locator('div[data-ui-id="message-success"]');
  }

  async validateDashboard() {
    await this.marketPlaceDashboardLabel1.waitFor({ state: 'attached', timeout: 400000 });
    return await this.marketPlaceDashboardLabel1.isVisible();
  }

  async verifyDashboardIsVisible() {
    await this.marketPlaceDashboardLabel.waitFor({ state: 'attached', timeout: 400000 });
    return await this.marketPlaceDashboardLabel.isVisible();
  }

  async getRegistrationSuccessMsg() {
    await this.successMessageLocator.waitFor({ state: 'attached', timeout: 50000 });
    return this.successMessageLocator;
  }
}
