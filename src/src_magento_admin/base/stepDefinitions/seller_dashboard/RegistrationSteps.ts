import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/PageFixture";

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

When('the user fills in the Vat No field with a unique value {string}', async function (value: string) {
    this.setUser({ vatNo: value });
    await pageFixture.sellerRegistrationPage.fillVatNo(value);
    const enteredVatNo = await pageFixture.sellerRegistrationPage.vatNoInput.inputValue();
    expect(enteredVatNo).toEqual(value);
});

When('the user clicks the Create Account button', async function () {
    await pageFixture.sellerRegistrationPage.clickCreateAccountButton();
});
