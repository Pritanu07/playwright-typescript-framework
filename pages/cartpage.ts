import { type Page, type Locator } from '@playwright/test';
import { test, expect } from '../fixtures/baseTest';
export class CartPage {

  readonly page: Page;
  readonly cartItemName: Locator;
  readonly cartItemContainer: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {

    this.page = page;

    // All product names inside cart
    this.cartItemName =
        page.locator('[data-test="inventory-item-name"]');

    // Optional: whole cart item container
    this.cartItemContainer =
      page.locator('.cart_item');
    this.checkoutButton =
      page.locator('#checkout');
  }

  async verifyBackpackVisible() {
  await expect(this.cartItemName)
    .toContainText(['Sauce Labs Backpack']);
}

async verifyBikeLightVisible() {
  await expect(this.cartItemName)
    .toContainText(['Sauce Labs Bike Light']);
}
  async verifyCartHasItems(count: number = 2) {

    await expect(this.cartItemContainer).toHaveCount(count);
  }
  async clickCheckout() {

    await this.checkoutButton.click();
}
};