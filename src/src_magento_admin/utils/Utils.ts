import { pageFixture } from "../hooks/pageFixture";

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