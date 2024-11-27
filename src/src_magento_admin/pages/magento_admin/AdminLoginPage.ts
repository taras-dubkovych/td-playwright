import { Page, Locator } from '@playwright/test';
import { BasePage } from "../BasePage";

export class AdminLoginPage extends BasePage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logOutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    // Ініціалізація селекторів у конструкторі
    this.usernameInput = this.page.locator('#username');
    this.passwordInput = this.page.locator('#login');
    this.loginButton = this.page.locator('button.action-login');
    this.logOutButton = this.page.locator('text=Dashboard');
  }

  async navigateToLogin() {
    await this.navigateToUrl('https://mcstaging.comave.com/admin_ni2d8miur/admin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForSelector('text=Dashboard');
  }
}
