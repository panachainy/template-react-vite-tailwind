import { test, expect } from '@playwright/test'

test('Homepage Screenshot', async ({ page }) => {
    await page.goto('http://localhost:5173/')
    await expect(page).toHaveScreenshot({ fullPage: true })
})
