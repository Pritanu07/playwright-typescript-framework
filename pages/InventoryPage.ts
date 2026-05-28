import { expect, Page } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  // =========================
  // VERIFY INVENTORY PAGE
  // =========================
  async verifyInventoryPageIsDisplayed() {

    const title = this.page.locator('.title');

    await expect(title).toBeVisible({ timeout: 15000 });
    await expect(title).toHaveText('Products');
  }

  // =========================
  // ADD PRODUCT TO CART
  // =========================
  async addProduct(productId: string) {

    const productLocator = this.page.locator(
      `[data-test="add-to-cart-${productId}"]`
    );

    await expect(productLocator).toBeVisible({ timeout: 15000 });
    await productLocator.click();

    // wait for cart badge update
    await expect(this.page.locator('.shopping_cart_badge'))
      .toBeVisible({ timeout: 15000 });
  }

  // =========================
  // BACKWARD COMPATIBILITY (OPTIONAL)
  // =========================
  async addProductToCart(productId: string) {
    await this.addProduct(productId);
  }

  // =========================
  // VERIFY CART BADGE COUNT
  // =========================
  async verifyCartBadgeCount(expectedCount: number) {

    const badge = this.page.locator('.shopping_cart_badge');

    await expect(badge).toBeVisible({ timeout: 15000 });
    await expect(badge).toHaveText(String(expectedCount));
  }

  // =========================
  // NAVIGATE TO CART
  // =========================
  async goToCart() {

    const cartIcon = this.page.locator('.shopping_cart_link');

    await expect(cartIcon).toBeVisible({ timeout: 15000 });
    await cartIcon.click();

    await expect(this.page).toHaveURL(/cart/, {
      timeout: 15000
    });
  }
}