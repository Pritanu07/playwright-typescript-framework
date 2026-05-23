import { test as base, expect } from '@playwright/test';

export const test = base.extend({});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot({ fullPage: true });

    await testInfo.attach('Screenshot on Failure', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
});