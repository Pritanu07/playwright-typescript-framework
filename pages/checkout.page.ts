import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class CheckoutPage extends BasePage {

  async fillDetails(first: string, last: string, zip: string) {
    await this.fill('#first-name', first);
    await this.fill('#last-name', last);
    await this.fill('#postal-code', zip);
    await this.click('#continue');
  }

  async finishOrder() {
    await this.click('#finish');
  }

  async verifySuccess() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}