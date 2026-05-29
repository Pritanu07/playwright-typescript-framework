import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {

  async verifyCartPage() {
    await expect(this.page.locator('.title')).toHaveText('Your Cart');
  }

  async proceedToCheckout() {
    await this.page.click('#checkout');
  }
}