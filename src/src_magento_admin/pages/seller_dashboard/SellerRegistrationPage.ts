import { Page } from '@playwright/test';
import { BasePage } from "../BasePage";
import { faker } from '@faker-js/faker';

export class SellerRegistrationPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  private get firstNameInput() {
    return this.page.locator("#firstname");
  }

  private get lastNameInput() {
    return this.page.locator("#lastname");
  }

  private get emailInput() {
    return this.page.locator("#email_address");
  }

  private get shopUrlInput() {
    return this.page.locator("#profileurl");
  }

  private get passwordInput() {
    return this.page.locator("#password");
  }

  private get confirmPasswordInput() {
    return this.page.locator("#password-confirmation");
  }

  private get showPasswordCheckbox() {
    return this.page.getByRole('checkbox', {name: "show-password"});
  }

  private get nextButton() {
    return this.page.locator("button[title='Create an Account']");
  }

  private get vendorGroupSelect() {
    return this.page.locator("#attribute-group");
  }

  private get backButton() {
    return this.page.locator("#main");
  }

  private get vatNoInput() {
    return this.page.locator("#wkv_vat_no");
  }

  private get createAccountButton() {
    return this.page.locator("button[title='Create an Account']");
  }

  private get registerSellerAccForm(){
    return this.page.locator("#register-as-seller")
  }

  private get validationErrMsgs(){
    return this.page.locator('.mage-error');
  }

  //---------------------------------------------------------------------------------------------
  async validateRegisterFormDisplayed() {
    await this.registerSellerAccForm.waitFor({state: 'attached', timeout: 300000});
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

async waitForVendorGroupSelect(){
  await this.vendorGroupSelect.waitFor();
}

async selectAttributeGroup(value: string){
  await this.vendorGroupSelect.selectOption({ label: value });
}

async registerNewSelleraAccount(firstName: string, lastName: string, email: string, shopUrl: string, password: string) {
      // Generate fake data for the fields
  const userData = {
      firstName: firstName,
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      shopUrl: faker.internet.domainWord(),
      password: faker.internet.password({length:12}), // Generate a secure password
      vendorGroup: "Retail Seller", // Replace with a valid option from your application if required
  };

  // Fill in the form using generated data
  await this.firstNameInput.fill(userData.firstName);
  await this.lastNameInput.fill(userData.lastName);
  await this.emailInput.fill(userData.email);
  await this.shopUrlInput.fill(userData.shopUrl);
  await this.passwordInput.fill(userData.password);
  await this.confirmPasswordInput.fill(userData.password);
  await this.nextButton.click();
  // Optionally check the "show password" checkbox
  await this.showPasswordCheckbox.check();

  // Select vendor group from dropdown
  await this.vendorGroupSelect.selectOption(userData.vendorGroup);

  // Submit the form
  await this.createAccountButton.click();

  // Wait for confirmation or next step
  await this.page.waitForSelector('text=Account created successfully');
}
}
