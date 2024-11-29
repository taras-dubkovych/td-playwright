import { pageFixture } from "../hooks/PageFixture";
import users from '../data/users.json';
export const clickAndSwitchToNewTab = async (selector: string) => {
    const [newTab] = await Promise.all([
        pageFixture.page.waitForEvent('popup'),
        pageFixture.page.locator(selector).click(),
    ]);

    await newTab.waitForLoadState();
    pageFixture.page = newTab; // Switch to the new tab
    pageFixture.updateDependencies();
    console.log(`Switched to new tab: ${newTab.url()}`);
}

export function getUserByKey(userKey: string) {
    const user = users[userKey];
    if (!user) {
        throw new Error(`User "${userKey}" is not defined in the JSON file.`);
    }
    return user;
}