import {Locator, Page} from "@playwright/test"

export class SettingsPage {
    readonly page: Page;
    readonly logOutButton: Locator;

    constructor(page: Page){
        this.logOutButton = page.locator('a[href="#settings"]');
    }

    async clickSignInButton(){
        await this.logOutButton.click()
    }
}