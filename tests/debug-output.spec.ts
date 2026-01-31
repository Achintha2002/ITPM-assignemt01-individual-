import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('debug output selector', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.locator('textarea').first().fill('mama');
    await page.waitForTimeout(3000);

    const el = page.locator('text=මම').first();
    let log = '';
    if (await el.count() > 0) {
        log += 'Found element with text "මම"\n';
        log += 'Tag: ' + await el.evaluate(e => e.tagName) + '\n';
        log += 'Class: ' + await el.evaluate(e => e.className) + '\n';
        log += 'ID: ' + await el.evaluate(e => e.id) + '\n';
        log += 'Parent Tag: ' + await el.evaluate(e => e.parentElement?.tagName) + '\n';
        log += 'Parent Class: ' + await el.evaluate(e => e.parentElement?.className) + '\n';
        log += 'OuterHTML: ' + await el.evaluate(e => e.outerHTML) + '\n';
    } else {
        log += 'Could not find text "මම"\n';
    }
    fs.writeFileSync('e:\\assinment01\\ITPm 01\\debug_html.txt', log);
});
