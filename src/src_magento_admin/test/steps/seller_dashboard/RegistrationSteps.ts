import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/pageFixture";

let userData;

Given('the Register As Seller form is displayed', async function () {
    const isRegistrationFormDisplayed = await pageFixture.sellerRegistrationPage.validateRegisterFormDisplayed();
    expect(isRegistrationFormDisplayed).toBeTruthy();  
});

When('the user fills in the registration form with the following data:', async function (dataTable) {
    const data = dataTable.rowsHash();
    userData = {
        firstName: data.First_Name,
        lastName: data.Last_Name,
        email: data.Email,
        shopUrl: data.Shop_URL,
        password: data.Password
    };
    await pageFixture.page.fill('#firstname', userData.firstName);
    await pageFixture.page.fill('#lastname', userData.lastName);
    await pageFixture.page.fill('#email_address', userData.email);
    await pageFixture.page.fill('#profileurl', userData.shopUrl);
    await pageFixture.page.fill('#password', userData.password);
    await pageFixture.page.fill('#password-confirmation', userData.password);
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
    userData = {
        vendorGroup: value,
    };
    await pageFixture.sellerRegistrationPage.selectAttributeGroup(value)
    //await new Promise(resolve => setTimeout(resolve, 50000));
});

Then('the Vat No field is displayed', async function () {
    await pageFixture.page.waitForSelector('#wkv_vat_no'); // Adjust selector for VAT field
});

When('the user fills in the {string} field with a unique value {string}', async function (fieldName: string, value: string) {
    userData = {
        vatNo: value
    };
    await pageFixture.sellerRegistrationPage.fillVatNo(userData.vatNo);
});

Then('the field accepts the value', async function () {
    const enteredVatNo = await pageFixture.page.inputValue('#wkv_vat_no');
    expect(enteredVatNo).toEqual(userData.vatNo);
});

When('the user clicks the Create Account button', async function () {
    await pageFixture.sellerRegistrationPage.clickCreateAccountButton();
});

Then('I receive the following emails:', async function (dataTable) {
    const expectedEmails = dataTable.rawTable.flat(); // Extract expected email types
    // Validate emails (integration with an email API or mock data would be needed)
    console.log('Received Emails:', expectedEmails);
});