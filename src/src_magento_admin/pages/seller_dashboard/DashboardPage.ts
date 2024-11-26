import { Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class DashboardPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  //TODO: delete this once redirectionissue is fixed
  public get marketPlaceDashboardLabel1() {
    return this.page.locator(".base").filter({hasText: "My Account"});
  }

 //TODO: delete this once redirectionissue is fixed
  async validateDashboard() {
    await this.marketPlaceDashboardLabel1.waitFor({state: 'attached', timeout: 400000});
    return await this.marketPlaceDashboardLabel1.isVisible();
  }

  private get marketPlaceDashboardLabel() {
    return this.page.locator(".base").filter({hasText: "Marketplace Dashboard"});
  }
//-----------------------------------------------------------------------------------------------------
  async verifyDashboardIsVisible() {
    await this.marketPlaceDashboardLabel.waitFor({state: 'attached', timeout: 400000});
    return await this.marketPlaceDashboardLabel.isVisible();
  }

  async getRegistrationSuccessMsg(){
    await this.page.locator('div[data-ui-id="message-success"]').waitFor({state: 'attached', timeout: 50000});
    return this.page.locator('div[data-ui-id="message-success"]');
  }
}
