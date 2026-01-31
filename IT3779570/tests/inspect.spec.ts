import { test, expect } from '@playwright/test';

test('inspect site structure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');

    // Type 'mama' into the textarea
    const textarea = page.locator('textarea').first();
    await textarea.fill('mama');
    await page.waitForTimeout(3000); // Wait for translation

    // Find element containing the translation 'මම'
    const translation = page.locator('text=මම');
    const count = await translation.count();
    console.log(`Found ${count} elements with text 'මම'`);

    if (count > 0) {
        const el = translation.first();
        const html = await el.evaluate(e => e.outerHTML);
        const tagName = await el.evaluate(e => e.tagName);
        // layout might be nested, get parent too
        const parentHtml = await el.evaluate(e => e.parentElement?.outerHTML);
        console.log(`Translation Element: <${tagName}> HTML: ${html}`);
        console.log(`Parent: ${parentHtml}`);
    } else {
        console.log('Translation not found. Dumping body...');
        // console.log(await page.content()); 
    }
});
