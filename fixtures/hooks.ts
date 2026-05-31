import { test } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  // Only run on real failure
  if (testInfo.status !== testInfo.expectedStatus) {

    // Screenshot (most reliable quick debug artifact)
    const screenshot = await page.screenshot({
      fullPage: true,
    });

    await testInfo.attach('failure-screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });

    // Optional: attach current URL for debugging
    await testInfo.attach('failed-url', {
      body: page.url(),
      contentType: 'text/plain',
    });
  }
});