import { Page } from '@playwright/test';
import { config } from '../../src/utils/config';

export class AdminLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.goto('/admin_ni2d8miur/admin');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#login', password);
    await this.page.click('button.action-login');
    await this.page.waitForSelector('text=Dashboard');
  }
}
