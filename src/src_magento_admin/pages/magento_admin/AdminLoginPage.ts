import { Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class AdminLoginPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  private get usernameInput() {
    return this.page.locator('#username');
  }

  private get passwordInput() {
    return this.page.locator('#login');
  }

  private get loginButton() {
    return this.page.locator('button.action-login');
  }

  private get logOutButton() {
    return this.page.locator('text=Dashboard');
  }

  async navigateToLogin() {
    await this.page.goto('https://mcstaging.comave.com/admin_ni2d8miur/admin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForSelector('text=Dashboard');
  }
}
