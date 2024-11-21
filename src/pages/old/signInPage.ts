import {Locator, Page} from "@playwright/test"

export class SignInPage {
    readonly page: Page;
    readonly emailIdTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly singInButton: Locator;

    constructor(page: Page){
        this.emailIdTextBox = page.locator('input[placeholder="Email"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.singInButton = page.locator('button[type="submit"]');
    }

    async enterEmailId(emailId: string){
        await this.emailIdTextBox.fill(emailId);
    }
    async enterPassword(password: string){
        await this.singInButton.fill(password)
    }
    async clickSignInButton(){
        await this.singInButton.click()
    }
}