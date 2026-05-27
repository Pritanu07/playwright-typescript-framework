import { test } from '../../fixtures/baseTest';

test('@regression Full checkout validation', async ({ login, inventory, cart }) => {

  // =========================
  // LOGIN FLOW
  // =========================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await login.verifyLoginSuccess();

  // =========================
  // INVENTORY FLOW
  // =========================
  await inventory.verifyInventoryPageIsDisplayed();

  await inventory.addProduct('sauce-labs-backpack');
  await inventory.addProduct('sauce-labs-bike-light');

  await inventory.verifyCartBadgeCount(2);

  // =========================
  // CART FLOW
  // =========================
  await inventory.goToCart();

  await cart.verifyCartPageIsDisplayed();

  // =========================
  // CHECKOUT FLOW
  // =========================
  await cart.checkout();

  await cart.fillCustomerDetails('John', 'Doe', '12345');

  await cart.verifyOverviewPage();

  await cart.finishOrder();
});