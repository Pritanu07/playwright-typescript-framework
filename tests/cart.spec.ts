import { test, expect } from '../fixtures/baseTest';

import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/cartpage';

test('Add product to cart and verify cart flow', async ({ loggedInPage }) => {

  const inventoryPage = new InventoryPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);

  // Step 1: Verify inventory page
  await expect(loggedInPage).toHaveURL(/inventory/);

  // Step 2: Add items
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  // Step 3: Verify cart badge
  await inventoryPage.verifyCartCount('2');

  // Step 4: Open cart
  await inventoryPage.openCart();

  // Step 5: Verify cart items
  await cartPage.verifyBackpackVisible();
  await cartPage.verifyBikeLightVisible();
  await cartPage.verifyCartHasItems(2);

  // Step 6: Checkout
  await cartPage.clickCheckout();

  await expect(loggedInPage).toHaveURL(/checkout-step-one/);
});