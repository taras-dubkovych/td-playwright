// import { Page } from '@playwright/test';

// export class AdminHelper {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async login(username: string, password: string) {
//     await this.page.fill('#username', username);
//     await this.page.fill('#login', password);
//     await this.page.click('button.action-login');
//     await this.page.waitForSelector('text=Dashboard');
//   }
// }