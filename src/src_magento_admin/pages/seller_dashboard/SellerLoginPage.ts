import { Page } from '@playwright/test';
import { BasePage } from "../BasePage";

export class SellerLoginPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  private get usernameInput() {
    return this.page.locator("#email");
  }

  private get passwordInput() {
    return this.page.locator("#pass");
  }

  private get loginButton() {
    return this.page.locator("button:has-text('Sign in')");
  }
  
  private get forgotPasswordLink() {
    return this.page.locator("a[href$='forgotpassword/']");
  }

  private get registrationLink() {
    return this.page.locator("a[href$='marketplace/']");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.waitFor({state: "visible"});
    await this.loginButton.click();
  }

  async clickRegistrationLink(){
    await this.registrationLink.click();
  }

  async getRegistrationLinkSelector(){
    return "a[href$='marketplace/']";
  }

  async clickRForgotPassLink(){
    await this.forgotPasswordLink.click();
  }

}
