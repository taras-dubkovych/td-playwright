import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly spinner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spinner = this.page.locator("[class='spinner']").nth(1);
  }

  async waitSpinnerToDissapear() {
    await this.spinner.waitFor({ state: 'hidden', timeout: 30000 });

    await this.scrollToPageTop();
  }

  async scrollToPageTop(){
    await this.page.mouse.wheel(1000, 0);
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

  // async scrollToThePageTop(){
  //   await this.page.evaluate(() => {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  // });
  //}
  }