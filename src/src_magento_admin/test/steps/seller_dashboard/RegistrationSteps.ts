import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/pageFixture";

Given('the Register As Seller form is displayed', async function () {
    const isRegistrationFormDisplayed = await pageFixture.sellerRegistrationPage.validateRegisterFormDisplayed();
    expect(isRegistrationFormDisplayed).toBeTruthy();  
});

When('the user fills in the registration form with the following data:', async function (dataTable) {
    const data = dataTable.rowsHash();
   // Map data directly to the context using the setUser method
   this.setUser({
    firstName: data.First_Name,
    lastName: data.Last_Name,
    email: data.Email,
    shop_url: data.Shop_URL,
    password: data.Password,
    });

    // Fill the form fields using the context
    const userInfo = this.context.userInfo;

    await pageFixture.sellerRegistrationPage.registerNewSellerAccount(
        userInfo.firstName,
        userInfo.lastName,
        userInfo.email,
        userInfo.shop_url,
        userInfo.password
    )
});

Then('the fields accept the values', async function () {
    const isValidationErrorsDisplayed = await pageFixture.sellerRegistrationPage.hasValidationErrors();
    expect(isValidationErrorsDisplayed).toBeFalsy();  
});

When('the user clicks the Next button', async function () {
    await pageFixture.sellerRegistrationPage.clickNextButton();
});

Then('the Select Vendor Group dropdown is displayed', async function () {
    await pageFixture.sellerRegistrationPage.waitForVendorGroupSelect();
});

When('the user selects {string} in the Select Vendor Group dropdown', async function (value: string) {
    this.setUser({ vendorGroup: value });
    await pageFixture.sellerRegistrationPage.selectAttributeGroup(value)
    //await new Promise(resolve => setTimeout(resolve, 50000));
});

Then('the Vat No field is displayed', async function () {
    await pageFixture.page.waitForSelector('#wkv_vat_no'); // Adjust selector for VAT field
});

When('the user fills in the {string} field with a unique value {string}', async function (fieldName: string, value: string) {
    this.setUser({ vatNo: value });
    await pageFixture.sellerRegistrationPage.fillVatNo(value);
});

Then('the field accepts the value', async function () {
    const enteredVatNo = await pageFixture.page.inputValue('#wkv_vat_no');
    const userInfo = this.getUserInfo();
    expect(enteredVatNo).toEqual(userInfo.vatNo);
});

When('the user clicks the Create Account button', async function () {
    await pageFixture.sellerRegistrationPage.clickCreateAccountButton();
});

Then('I receive the following emails:', async function (dataTable) {
    const expectedEmails = dataTable.rawTable.flat(); // Extract expected email types
    // Validate emails (integration with an email API or mock data would be needed)
    console.log('Received Emails:', expectedEmails);
});