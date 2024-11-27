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
    const userData = {
      firstName: firstName || faker.person.firstName(),
      lastName: lastName || faker.person.lastName(),
      email: email || faker.internet.email(),
      shopUrl: shopUrl || faker.internet.domainWord(),
      password: password || faker.internet.password({ length: 12 }), // Генерація пароля
      vendorGroup: "Retail Seller", // Замінити на відповідну опцію за потреби
    };

    // Заповнення форми
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.shopUrlInput.fill(userData.shopUrl);
    await this.passwordInput.fill(userData.password);
    await this.confirmPasswordInput.fill(userData.password);
    await this.showPasswordCheckbox.check();
    await this.nextButton.click();

    // Вибір групи продавців
    await this.vendorGroupSelect.selectOption(userData.vendorGroup);

    // Надсилання форми
    await this.createAccountButton.click();

    // Очікування підтвердження
    await this.page.waitForSelector('text=Account created successfully');
  }
}
