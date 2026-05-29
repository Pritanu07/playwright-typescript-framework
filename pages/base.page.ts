import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async getText(selector: string) {
    return await this.page.locator(selector).textContent();
  }

  async expectVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }
}