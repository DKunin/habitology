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

    await page.click('.md-toolbar button');
    await page.waitFor(500);
    await page.screenshot({ path: './tests/screens/02-side-menu.png' });
    await page.click('div.md-sidenav-content > ul > li:nth-child(1) > button');
    await page.waitFor(500);
    await page.screenshot({ path: './tests/screens/03-add-habit-clicked.png' });

    await page.focus('ul > li:nth-child(1) > div > div > input');
    await page.type('Drink more whater');
    // await page.click('.md-checkbox-container input');
    await page.waitFor(500);
    // await page.focus('body > div > div.page > ul > li:nth-child(5) > div > div > input');
    // await page.type(333);
    await page.screenshot({ path: './tests/screens/04-new-habit-input.png' });
    await page.waitFor(500);
    await page.click('ul > li:nth-child(5) > div > button');
    await page.screenshot({ path: './tests/screens/05-finished-creating-new-habit.png' });

    await browser.close();
})();
