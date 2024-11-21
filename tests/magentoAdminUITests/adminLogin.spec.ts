// import { test, expect } from '@playwright/test';
// import { saveSession, loadSession, sessionExists } from '../src/utils/sessionUtils';

// const MAGENTO_ADMIN_URL = 'https://mcstaging.comave.com/admin_ni2d8miur/';
// const ADMIN_CREDENTIALS = {
//   username: 'tarasd',
//   password: 'Ntcsr2789___',
// };

// test.describe('Magento Admin Login', () => {
//   test.beforeEach(async ({ browser }) => {
//     const context = await browser.newContext();
//     console.log("tttttt");
//     console.log(sessionExists());

//         console.log("1")
//       // No saved session, perform login
//       console.log("2")
//       const page = await context.newPage();
//       await page.goto(MAGENTO_ADMIN_URL);

//       // Log in
//       await page.fill('#username', ADMIN_CREDENTIALS.username);
//       await page.fill('#login', ADMIN_CREDENTIALS.password);
//       await page.click('button.action-login');

//       // Wait for Dashboard to load
//       await page.waitForSelector('text=Dashboard');

//       // Save session
//       await saveSession(context);
//       await context.close();
    
//   });

//   test('Should load Magento Admin Dashboard using saved session', async ({ browser }) => {
//     const context = await browser.newContext();

//     // Load session if available
//     if (sessionExists()) {
//       await context.storageState({ path: './admin-session.json' });
//     }

//     const page = await context.newPage();

//     // Navigate to Magento Admin URL
//     await page.goto(MAGENTO_ADMIN_URL);

//     // Validate session and Dashboard access
//     await page.waitForSelector('text=Dashboard');
//     const title = await page.title();
//     expect(title).toContain('Dashboard');

//     // Close context after the test
//     await context.close();
//   });
// });
