import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // =========================
  // FILL CHECKOUT DETAILS
  // =========================
  async fillDetails(first: string, last: string, zip: string) {

    await expect(this.page.locator('#first-name')).toBeVisible({ timeout: 15000 });
    await expect(this.page.locator('#last-name')).toBeVisible({ timeout: 15000 });
    await expect(this.page.locator('#postal-code')).toBeVisible({ timeout: 15000 });

    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);
  }

  // =========================
  // COMPLETE ORDER FLOW
  // =========================
  async finishOrder() {

    const continueBtn = this.page.locator('#continue');
    const finishBtn = this.page.locator('#finish');

    await expect(continueBtn).toBeVisible({ timeout: 15000 });
    await continueBtn.click();

    await expect(finishBtn).toBeVisible({ timeout: 15000 });
    await finishBtn.click();

    await expect(this.page.locator('.complete-header'))
      .toBeVisible({ timeout: 15000 });
  }

  // =========================
  // VERIFY SUCCESS
  // =========================
  async verifySuccess() {

    const successMsg = this.page.locator('.complete-header');
    await expect(successMsg).toBeVisible({ timeout: 15000 });
    await expect(successMsg).toHaveText('Thank you for your order!');
  }
}