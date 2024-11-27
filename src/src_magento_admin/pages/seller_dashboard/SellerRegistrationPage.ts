import { Locator, Page } from '@playwright/test';
import { BasePage } from "../BasePage";
import { faker } from '@faker-js/faker';

export class SellerRegistrationPage extends BasePage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly shopUrlInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly showPasswordCheckbox: Locator;
  readonly nextButton: Locator;
  readonly vendorGroupSelect: Locator;
  readonly backButton: Locator;
  readonly vatNoInput: Locator;
  readonly createAccountButton: Locator;
  readonly registerSellerAccForm: Locator;
  readonly validationErrMsgs: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.firstNameInput = this.page.locator("#firstname");
    this.lastNameInput = this.page.locator("#lastname");
    this.emailInput = this.page.locator("#email_address");
    this.shopUrlInput = this.page.locator("#profileurl");
    this.passwordInput = this.page.locator("#password");
    this.confirmPasswordInput = this.page.locator("#password-confirmation");
    this.showPasswordCheckbox = this.page.getByRole('checkbox', { name: "show-password" });
    this.nextButton = this.page.locator("button[title='Create an Account']");
    this.vendorGroupSelect = this.page.locator("#attribute-group");
    this.backButton = this.page.locator("#main");
    this.vatNoInput = this.page.locator("#wkv_vat_no");
    this.createAccountButton = this.page.locator("button[title='Create an Account']");
    this.registerSellerAccForm = this.page.locator("#register-as-seller");
    this.validationErrMsgs = this.page.locator('.mage-error');
  }

  async validateRegisterFormDisplayed() {
    await this.registerSellerAccForm.waitFor({ state: 'attached', timeout: 300000 });
    return await this.registerSellerAccForm.isVisible();
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }

  async fillVatNo(vatNo: string) {
    await this.vatNoInput.fill(vatNo);
  }

  async hasValidationErrors() {
    const count = await this.validationErrMsgs.count();
    return count > 0;
  }

  async waitForVendorGroupSelect() {
    await this.vendorGroupSelect.waitFor();
  }

  async selectAttributeGroup(value: string) {
    await this.vendorGroupSelect.selectOption({ label: value });
  }

  async registerNewSellerAccount(firstName: string, lastName: string, email: string, shopUrl: string, password: string) {
    
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.shopUrlInput.fill(shopUrl);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    // await this.showPasswordCheckbox.check();
    // await this.nextButton.click();
  }
}
