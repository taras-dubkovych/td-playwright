import {Locator, Page} from "@playwright/test"
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    readonly settingsButton: Locator;

    constructor(page: Page){
        super(page);
        this.settingsButton = page.locator('a[href="#settings"]');
    }

    async clickSignInButton(){
        await this.settingsButton.click()
    }
}