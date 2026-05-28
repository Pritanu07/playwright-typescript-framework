import { test } from '../../fixtures/baseTest';

test('SMOKE - add products and validate cart', async ({
  login,
  inventory,
  cart
}) => {

  // =========================
  // LOGIN
  // =========================
  await login.goto();

  await login.login(
    'standard_user',  
    'secret_sauce'
  );

  await login.verifyLoginSuccess();

  // =========================
  // ADD PRODUCTS
  // =========================
  await inventory.addProduct('sauce-labs-backpack');
  await inventory.addProduct('sauce-labs-bike-light');

  await inventory.verifyCartBadgeCount(2);

  // =========================
  // GO TO CART
  // =========================
  await inventory.goToCart();

  // =========================
  // VERIFY CART
  // =========================
  await cart.verifyCartPage();
});