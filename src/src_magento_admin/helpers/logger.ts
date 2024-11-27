import { Page } from '@playwright/test';

export class Logger {
  private static attachedPages = new WeakSet<Page>(); // Трекінг підключених сторінок

  static attach(page: Page) {
    if (Logger.attachedPages.has(page)) {
      return;
    }

    Logger.attachedPages.add(page);

    page.on('framenavigated', (frame) => {
      if (frame === page.mainFrame()) {
        console.log(`[NAVIGATION]: Navigated to ${frame.url()}`);
      }
    });

    const originalClick = page.click.bind(page);
    page.click = async (selector: string, options?) => {
      console.log(`[CLICK]: Clicked on selector: ${selector}`);
      await originalClick(selector, options); 
    };

    const originalFill = page.fill.bind(page);
    page.fill = async (selector: string, text: string, options?) => {
      console.log(`[INPUT]: Filling selector: ${selector} with text: "${text}"`);
      await originalFill(selector, text, options); // Виклик оригінального методу
    };
  }
}
