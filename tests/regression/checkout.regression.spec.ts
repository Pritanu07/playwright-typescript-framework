import { test, expect } from '../../fixtures/baseTest';

test('@regression Checkout flow - single product', async ({ login, inventory, cart }) => {

  // =========================
  // LOGIN
  // =========================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await login.verifyLoginSuccess();

  // =========================
  // INVENTORY
  // =========================
  await inventory.verifyInventoryPageIsDisplayed();

  await inventory.addProduct('sauce-labs-backpack');

  await inventory.verifyCartBadgeCount(1);

  // =========================
  // CART
  // =========================
  await inventory.goToCart();

  await cart.verifyCartPageIsDisplayed();

  await cart.checkout();

  await cart.fillCustomerDetails('John', 'Doe', '12345');

  await cart.verifyOverviewPage();

  await cart.finishOrder();
});