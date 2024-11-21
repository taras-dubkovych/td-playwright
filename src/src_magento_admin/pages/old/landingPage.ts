import { Locator, Page } from "@playwright/test";

export class LandingPage {
    private readonly page: Page;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator('//a[normalize-space()="Sign in"]');
    }

    async clickSignInButton(): Promise<void> {
        await this.signInButton.click();
    }
}
