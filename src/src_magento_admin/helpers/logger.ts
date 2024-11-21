import { Page } from '@playwright/test';

export class Logger {
  static attach(page: Page) {
    // Log page navigation
    page.on('framenavigated', (frame) => {
      if (frame === page.mainFrame()) {
        console.log(`[NAVIGATION]: Navigated to ${frame.url()}`);
      }
    });

    // Intercept clicks and log them
    const originalClick = page.click.bind(page);
    page.click = async (selector: string, options?) => {
      console.log(`[CLICK]: Clicked on selector: ${selector}`);
      await originalClick(selector, options);
    };

    // Intercept text input and log it
    const originalFill = page.fill.bind(page);
    page.fill = async (selector: string, text: string, options?) => {
      console.log(`[INPUT]: Filling selector: ${selector} with text: "${text}"`);
      await originalFill(selector, text, options);
    };
    
  }
}
