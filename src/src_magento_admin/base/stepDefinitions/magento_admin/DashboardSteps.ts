import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../hooks/PageFixture";
import * as Constants from "../../Constants/constants"

Then('Magento dashboard is opened', async function () {
    const dashboardTitle = await pageFixture.magentoDashboardPage.dashboardTitle.textContent();
    expect(dashboardTitle).toContain(Constants.MAGENTO_DASHBOARD_TITLE);  
});