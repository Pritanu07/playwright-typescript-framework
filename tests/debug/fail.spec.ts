import { test, expect } from '@playwright/test';

test('forced failure test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // This will FAIL on purpose
  await expect(page).toHaveTitle('ThisWillFail');
});