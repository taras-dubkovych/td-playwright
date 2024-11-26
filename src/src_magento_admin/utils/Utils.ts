import { pageFixture } from "../hooks/pageFixture";

// const SESSION_FILE_PATH = './admin-session.json';

// export const saveSession = async (context: BrowserContext) => {
//   const storageState = await context.storageState();
//   fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(storageState));
// };

// export const loadSession = async (context: BrowserContext) => {
//   if (fs.existsSync(SESSION_FILE_PATH)) {
//     const storageState = JSON.parse(fs.readFileSync(SESSION_FILE_PATH, 'utf-8'));
//     await context.addCookies(storageState.cookies);
//   }
// };

// export const sessionExists = (): boolean => {
//   return fs.existsSync(SESSION_FILE_PATH);
// };

export const clickAndSwitchToNewTab = async (selector: string) => {
    const [newTab] = await Promise.all([
        pageFixture.page.waitForEvent('popup'),
        pageFixture.page.locator(selector).click(),
    ]);

    await newTab.waitForLoadState();
    pageFixture.page = newTab; // Switch to the new tab
}
