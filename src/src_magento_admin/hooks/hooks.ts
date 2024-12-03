import { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./PageFixture";
import { createLogger } from "winston";
import { options } from "../utils/logger";

let browser: Browser;
let page: Page;
let context: BrowserContext;
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
    console.log('Test suite initialization started');
    browser = await chromium.launch({ headless: false });
    console.log('Browser launched');
})

Before( async function ({pickle}) {
    // await page.context().tracing.start({ screenshots: true, snapshots: true });
    // const workerIndex = process.env.TEST_WORKER_INDEX || 0; // Provided by test runner
    // const totalWorkers = process.env.TEST_WORKER_TOTAL || 1;

    // console.log("workerIndex", workerIndex)
    // console.log("totalWorkers", totalWorkers)

    const scenarioName = `${pickle.name.replace(/\s+/g, '_')}_${process.pid}`;
    console.log("ickle.id", pickle.id)
    context = await browser.newContext();
    page = await context.newPage();
    // const scenarioIndex = pickle.id % productPool.length;
    await pageFixture.init(page);
    pageFixture.logger = createLogger(options(scenarioName));
    pageFixture.logger.info(`Execution started for test: ${scenarioName}`)
})

After(async function ({pickle, result}) {
    //Screenshot only for failure
    if(result?.status == Status.FAILED){
        const image = await pageFixture.page.screenshot({path: `.test-result/screenshot/${pickle.name}.png`, type: "png"});
        await this.attach(image, "image/png")
    } 
    pageFixture.logger.info(`Execution finished for test: ${pickle.name} with status: ${result?.status}`)
    await page.close();
    await context.close();
})

AfterAll(async function () {
    pageFixture.logger.info(`The test suit execution is finished`)
    await browser.close();
    pageFixture.logger.close();
})
