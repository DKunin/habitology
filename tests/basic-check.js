'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
    const browser = await puppeteer.launch({
        // slowMo: true,
        // headless: false
    });
    const page = await browser.newPage();
    await page.emulate(devices['iPhone 6']);
    await page.goto('http://localhost:3000');

    await page.screenshot({ path: './tests/screens/01-main-screen.png' });

    await page.click('.toolbar-button');
    await page.waitFor(300);
    await page.screenshot({ path: './tests/screens/02-side-menu.png' });
    await page.click('.add-button');
    await page.waitFor(300);
    await page.screenshot({ path: './tests/screens/03-add-habit-clicked.png' });

    await page.focus('.habit-name-input');
    await page.type('Drink more water');
    await page.click('.continuing-goal-checkbox label');
    await page.waitFor(300);
    await page.focus('.initial-value-input');
    await page.type('333');
    await page.screenshot({ path: './tests/screens/04-new-habit-input.png' });
    await page.waitFor(300);
    await page.click('.submit-habit-button');
    await page.screenshot({ path: './tests/screens/05-finished-creating-new-habit.png' });
    await page.click('.add-increment-button');
    await page.waitFor(300);
    await page.click('.md-radio-label');
    await page.screenshot({ path: './tests/screens/06-added-log-increment.png' });

    await browser.close();
})();
