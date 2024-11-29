import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/PageFixture";
import * as Constants from "../../Constants/constants"

Then('the user navigates to {string} page', async function (pageName) {
    switch (pageName.toLowerCase()) {
        case 'products':
            await pageFixture.leftBarMenu.goToProducts();
            break;
        case 'orders':
            await pageFixture.leftBarMenu.goToOrders();
            break;
        case 'customers':
            await pageFixture.leftBarMenu.goToCustomers();
            break;
        default:
            throw new Error(`Unknown page: ${pageName}`);
    }
});
