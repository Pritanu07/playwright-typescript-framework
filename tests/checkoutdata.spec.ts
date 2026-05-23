import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/cartpage';
import { CheckoutPage } from '../pages/checkoutpage';

import loginData from '../test-data/loginData.json';
import checkoutData from '../test-data/checkoutdata.json';

test.setTimeout(60000);

test('Complete checkout flow successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // object name → camelCase
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Launch application
  await loginPage.launch();

  // Step 2: Login
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  // Step 3: Verify inventory page loaded
  await expect(page).toHaveURL(/inventory/);

  // Step 4: Add products
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  // Step 5: Verify cart badge
  await inventoryPage.verifyCartCount('2');

  // Step 6: Open cart
  await inventoryPage.openCart();

  // Step 7: Verify items in cart
  await cartPage.verifyBackpackVisible();
  await cartPage.verifyBikeLightVisible();
  await cartPage.verifyCartHasItems(2);

  // Step 8: Checkout
  await cartPage.clickCheckout();

  await expect(page).toHaveURL(/checkout-step-one/);

  await page.waitForTimeout(2000);

  await checkoutPage.enterCheckoutDetails(
    checkoutData.checkoutUser.firstName,
    checkoutData.checkoutUser.lastName,
    checkoutData.checkoutUser.postalCode
  );

  await page.waitForTimeout(2000);

  await checkoutPage.continueCheckout();

  await expect(page).toHaveURL(/checkout-step-two/);

  await page.waitForTimeout(2000);

  await checkoutPage.finishOrder();

  await page.waitForTimeout(2000);

  await checkoutPage.verifyOrderSuccess();

});