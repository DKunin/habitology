'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
    const browser = await puppeteer.launch({
        slowMo: true,
        headless: false
    });
    const page = await browser.newPage();
    await page.emulate(devices['iPhone 6']);
    await page.goto('http://localhost:8082');
    // await page.goto('https://habitology.life');

    await page.screenshot({ path: './tests/screens/01-main-screen.png' });

    await page.waitFor('.toolbar-button');
    await page.click('.toolbar-button');
    await page.waitFor('.add-button');
    await page.screenshot({ path: './tests/screens/02-side-menu.png' });
    await page.click('.add-button');
    await page.waitFor('.habit-name-input');
    await page.screenshot({ path: './tests/screens/03-add-habit-clicked.png' });

    await page.focus('.habit-name-input');
    await page.type('Drink more water');
    await page.click('.continuing-goal-checkbox label');
    await page.waitFor('.initial-value-input');
    await page.focus('.initial-value-input');
    await page.type('333');

    await page.screenshot({ path: './tests/screens/04-new-habit-input.png' });
    await page.waitFor('.submit-habit-button');
    await page.click('.submit-habit-button');

    await page.screenshot({ path: './tests/screens/05-finished-creating-new-habit.png' });
    await page.click('.add-increment-button');
    await page.waitFor(400);
    await page.click('.md-radio-label');
    await page.screenshot({ path: './tests/screens/06-added-log-increment.png' });
    await page.click('.md-dialog-actions .md-button');
    await page.waitFor('.md-dialog-actions .md-button');
    await page.click('.open-habit-log-button');
    await page.screenshot({ path: './tests/screens/07-opened-habit-log.png' });
    await page.waitFor('.edit-log');
    await page.click('.edit-log');

    await page.click('.md-radio:nth-child(3) .md-radio-label');
    await page.waitFor(400);
    await page.screenshot({ path: './tests/screens/08-changed-increment.png' });
    await page.click('.save-increment-edit-button');
    await page.waitFor('.back-button');
    await page.click('.back-button');
    await page.waitFor('.habit-menu-trigger');
    await page.click('.habit-menu-trigger');
    await page.waitFor('.edit-habit-button');
    await page.click('.edit-habit-button');
    await page.screenshot({ path: './tests/screens/09-editing-habit.png' });

    await page.focus('.habit-name-input');
    await page.type('2');
    await page.waitFor(400);
    await page.click('.submit-habit-button');
    await page.waitFor(400);

    await page.click('.toolbar-button');
    await page.waitFor(400);
    await page.click('.settings-button');

    await page.click('.local-select + div .md-select-value');
    await page.waitFor(400);
    await page.click('.md-list-item.md-menu-item.md-option:nth-child(1) button');
    await page.screenshot({ path: './tests/screens/10-changed-locale.png' });

    await page.click('.settings-save-button');
    await page.waitFor(400);
    await page.screenshot({ path: './tests/screens/11-saved-settings.png' });
    await page.waitFor(400);

    await browser.close();
})();
