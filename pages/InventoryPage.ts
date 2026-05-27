import { expect, Page } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  // =========================
  // VERIFY INVENTORY PAGE
  // =========================
  async verifyInventoryPageIsDisplayed() {
    await expect(this.page.locator('.title'))
      .toHaveText('Products');
  }

  // =========================
  // ADD PRODUCT TO CART
  // =========================
  async addProduct(productId: string) {
    const productLocator = this.page.locator(
      `[data-test="add-to-cart-${productId}"]`
    );

    await expect(productLocator).toBeVisible();
    await productLocator.click();
  }

  // =========================
  // VERIFY CART BADGE COUNT
  // =========================
  async verifyCartBadgeCount(expectedCount: number) {
    const badge = this.page.locator('.shopping_cart_badge');

    await expect(badge)
      .toBeVisible();

    await expect(badge)
      .toHaveText(String(expectedCount));
  }

  // =========================
  // NAVIGATE TO CART
  // =========================
  async goToCart() {
    const cartIcon = this.page.locator('.shopping_cart_link');

    await expect(cartIcon).toBeVisible();
    await cartIcon.click();

    await expect(this.page).toHaveURL(/cart/);
  }
}