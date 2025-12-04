import { expect, test } from '@playwright/test'

test('Homepage Screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.evaluate(() => document.fonts.ready)

  await page.waitForTimeout(500)

  await expect(page).toHaveScreenshot({ fullPage: true })
})
