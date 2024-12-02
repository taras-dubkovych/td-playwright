import { Page, Locator } from '@playwright/test';
import { BasePage } from "../BasePage";
import { getUserByKey } from '../../../utils/utils';

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

  async login(userKey: string) {
    const user = getUserByKey(userKey); // Retrieve user details
    if (!user) {
        throw new Error(`User "${userKey}" is not defined.`);
    }
    await this.usernameInput.fill(user.email);
    await this.passwordInput.fill(user.password);
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
