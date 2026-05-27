import { Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export class ScreenshotUtils {

  static async capture(page: Page, name: string) {
    try {
      const dir = 'screenshots';

      // Ensure folder exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const filePath = path.join(
        dir,
        `${name}-${Date.now()}.png`
      );

      await page.screenshot({
        path: filePath,
        fullPage: true
      });

      console.log(`📸 Screenshot saved: ${filePath}`);

    } catch (error) {
      console.error('❌ Screenshot capture failed:', error);
    }
  }

}