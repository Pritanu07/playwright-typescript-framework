import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class InventoryPage extends BasePage {

  async addProduct(productId: string) {
    await this.page.click(`[data-test="add-to-cart-${productId}"]`);
  }

  async verifyCartBadgeCount(count: number) {
    await expect(this.page.locator('.shopping_cart_badge'))
      .toHaveText(String(count));
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async verifyInventoryPageIsDisplayed() {
  await expect(this.page.locator('.title'))
    .toHaveText('Products');
}

}