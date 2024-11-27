import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/pageFixture";

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
    );
    const isValidationErrorsDisplayed = await pageFixture.sellerRegistrationPage.hasValidationErrors();
    expect(isValidationErrorsDisplayed).toBeFalsy();  
});

When('the user clicks the Next button', async function () {
    await pageFixture.sellerRegistrationPage.clickNextButton();
    await pageFixture.sellerRegistrationPage.waitForVendorGroupSelect();
});

When('the user selects {string} in the Select Vendor Group dropdown', async function (value: string) {
    this.setUser({ vendorGroup: value });
    await pageFixture.sellerRegistrationPage.selectAttributeGroup(value);
    
});

Then('the Vat No field is displayed', async function () {
    expect(pageFixture.sellerRegistrationPage.vatNoInput).toBeVisible();
});

When('the user fills in the {string} field with a unique value {string}', async function (fieldName: string, value: string) {
    this.setUser({ vatNo: value });
    await pageFixture.sellerRegistrationPage.fillVatNo(value);
    const enteredVatNo = await pageFixture.page.inputValue('#wkv_vat_no');
    const userInfo = this.getUserInfo();
    expect(enteredVatNo).toEqual(userInfo.vatNo);
});

When('the user clicks the Create Account button', async function () {
    await pageFixture.sellerRegistrationPage.clickCreateAccountButton();
});

// Then('I receive the following emails:', async function (dataTable) {
//     const expectedEmails = dataTable.rawTable.flat(); // Extract expected email types
//     // Validate emails (integration with an email API or mock data would be needed)
//     console.log('Received Emails:', expectedEmails);
// });