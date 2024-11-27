import { Page, Locator } from '@playwright/test';
import { BasePage } from "../BasePage";

export class SellerLoginPage extends BasePage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly registrationLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.usernameInput = this.page.locator("#email");
    this.passwordInput = this.page.locator("#pass");
    this.loginButton = this.page.locator("button:has-text('Sign in')");
    this.forgotPasswordLink = this.page.locator("a[href$='forgotpassword/']");
    this.registrationLink = this.page.locator("a[href$='marketplace/']");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.waitFor({ state: "visible" });
    await this.loginButton.click();
  }

  async clickRegistrationLink() {
    await this.registrationLink.click();
  }

  async getRegistrationLinkSelector() {
    return "a[href$='marketplace/']";
  }

  async clickRForgotPassLink() {
    await this.forgotPasswordLink.click();
  }
}