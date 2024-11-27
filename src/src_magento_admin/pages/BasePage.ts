import { Page } from '@playwright/test';

export abstract class BasePage {
  //protected testController;
 // abstract initElementLocators();
  //protected logger;
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToUrl(url: string){
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.title();
  }

  async waitForElement(selector: string, timeout: number = 3000): Promise<void> {
    await this.page.waitForSelector(selector, { timeout });
  }

  async clickElement(selector: string){
    await this.page.click(selector);
  }

  async fillInput(selector: string, text: string){
    await this.page.fill(selector, text);
  }
  
  async getText(selector: string){
    return this.page.textContent(selector) || '';
  }
}
