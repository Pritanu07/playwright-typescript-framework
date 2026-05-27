import { test, expect } from '../../fixtures/baseTest';

test('@regression Full E2E purchase - multiple products', async ({ login, inventory, cart }) => {

  // =========================
  // LOGIN
  // =========================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await login.verifyLoginSuccess();

  // =========================
  // ADD PRODUCTS
  // =========================
  await inventory.addProduct('sauce-labs-backpack');
  await inventory.addProduct('sauce-labs-bike-light');

  await inventory.verifyCartBadgeCount(2);

  // =========================
  // CART FLOW
  // =========================
  await inventory.goToCart();

  await cart.verifyCartPageIsDisplayed();

  await cart.checkout();

  await cart.fillCustomerDetails('John', 'Doe', '12345');

  await cart.verifyOverviewPage();

  await cart.finishOrder();
});