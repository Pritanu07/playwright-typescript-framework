import { expect, Page } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  // =========================
  // NAVIGATE TO CART
  // =========================
  async goToCart() {
    const cartIcon = this.page.locator('.shopping_cart_link');

    await expect(cartIcon).toBeVisible({ timeout: 15000 });
    await cartIcon.click();

    // 🔥 stable cart load validation
    await expect(this.page.locator('.cart_list'))
      .toBeVisible({ timeout: 15000 });
  }

  // =========================
  // VERIFY CART PAGE
  // =========================
  async verifyCartPage() {

    const title = this.page.locator('.title');

    await expect(title).toBeVisible({ timeout: 15000 });
    await expect(title).toHaveText('Your Cart');
  }

  // =========================
  // VERIFY PRODUCT IN CART
  // =========================
  async verifyProductInCart(productName: string) {

    const product = this.page.locator('.cart_item', {
      hasText: productName
    });

    await expect(product).toBeVisible({ timeout: 15000 });
  }

  async verifyCartPageIsDisplayed() {
  await this.verifyCartPage();
 }

  // =========================
  // REMOVE PRODUCT
  // =========================
  async removeProduct(productId: string) {

    const removeBtn = this.page.locator(
      `[data-test="remove-${productId}"]`
    );

    await expect(removeBtn).toBeVisible({ timeout: 15000 });
    await removeBtn.click();
  }

  // =========================
  // PROCEED TO CHECKOUT
  // =========================
  async proceedToCheckout() {

    const checkoutBtn = this.page.locator('#checkout');

    await expect(checkoutBtn).toBeVisible({ timeout: 15000 });
    await checkoutBtn.click();
  }
}