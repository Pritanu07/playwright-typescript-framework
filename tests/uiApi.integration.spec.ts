import { test, expect } from '../fixtures/baseTest';
import { productsData } from '../api/data/products.data';

test('integration Hybrid UI + Mock Flow', async ({ page, login, inventory, cart }) => {

  // =========================
  // MOCK API
  // =========================
  await page.route('**/api/products', async (route) => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify({ products: [] })
    });
  });

  // =========================
  // LOGIN FLOW
  // =========================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // =========================
  // UI FLOW
  // =========================
  await expect(page.locator('.title')).toHaveText('Products');

  const product = productsData[0];

  await page.click(`[data-test="add-to-cart-${product.id}"]`);

  await page.click('.shopping_cart_link');

  // =========================
  // CART + CHECKOUT FLOW
  // =========================
  await page.click('#checkout');

  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '12345');

  await page.click('#continue');
  await page.click('#finish');

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});