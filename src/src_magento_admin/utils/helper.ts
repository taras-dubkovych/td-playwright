// import { chromium, BrowserContext } from 'playwright';
// import fs from 'fs';

// export class Login {}
// const MAGENTO_ADMIN_URL = 'https://mcstaging.comave.com/admin_ni2d8miur/';
// const SESSION_FILE_PATH = './admin-session.json';
// const ADMIN_CREDENTIALS = {
//   username: 'tarasd',
//   password: 'Ntcsr2789___',
// };

// async function saveSession(context: BrowserContext) {
//   const storageState = await context.storageState();
//   fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(storageState));
// }

// async function loadSession(context: BrowserContext) {
//   if (fs.existsSync(SESSION_FILE_PATH)) {
//     const storageState = JSON.parse(fs.readFileSync(SESSION_FILE_PATH, 'utf-8'));
//     await context.addCookies(storageState.cookies);
//   }
// }

// (async () => {
//   const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();

//   // Load session if it exists
//   if (fs.existsSync(SESSION_FILE_PATH)) {
//     console.log('Loading existing session...');
//     await loadSession(context);
//   } else {
//     console.log('No session found. Logging in...');
//     const page = await context.newPage();
//     await page.goto(MAGENTO_ADMIN_URL);

//     // Log in
//     await page.fill('#username', ADMIN_CREDENTIALS.username);
//     await page.fill('#login', ADMIN_CREDENTIALS.password);
//     await page.click('button.action-login');

//     // Wait for admin dashboard to load
//     await page.waitForSelector('text=Dashboard');

//     // Save session
//     console.log('Saving session...');
//     await saveSession(context);
//   }

//   // Navigate to Admin Panel
//   const page = await context.newPage();
//   await page.goto(MAGENTO_ADMIN_URL);

//   // Validate session is still active
//   await page.waitForSelector('text=Dashboard');
//   console.log('Admin logged in successfully!');

//   await browser.close();
// })();
