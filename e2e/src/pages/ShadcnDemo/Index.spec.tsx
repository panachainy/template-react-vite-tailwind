import { test, expect } from '@playwright/test'

test('Homepage Screenshot', async ({ page }) => {
    await page.goto('http://localhost:3000/shadcn')
    await page.evaluate(() => document.fonts.ready);

    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot({ fullPage: true })
})
