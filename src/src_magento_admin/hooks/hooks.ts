import { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { Logger } from '../../src_magento_admin/helpers/Logger';

let browser: Browser;
let page: Page;
let context: BrowserContext;
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
    console.log('Test suite initialization started');
    browser = await chromium.launch({ headless: false });
    console.log('Browser launched');
})

Before( async function () {
    context = await browser.newContext();
    page = await browser.newPage();
    await pageFixture.init(page);
    Logger.attach(page);
})

After(async function ({pickle, result}) {
    //Screenshot only for failure
    if(result?.status == Status.FAILED){
        const image = await pageFixture.page.screenshot({path: `.test-result/screenshot/${pickle.name}.png`, type: "png"});
        await this.attach(image, "image/png")
    }
    await page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
})
