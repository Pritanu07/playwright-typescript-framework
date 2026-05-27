import { test } from '../../fixtures/baseTest';

test('SMOKE - add products and validate cart', async ({
  login,
  inventory,
  cart
}) => {

  // LOGIN
  await login.goto();

  await login.login(
    'standard_user',
    'secret_sauce'
  );

  await login.verifyLoginSuccess();

  // INVENTORY
  await inventory.verifyInventoryPageIsDisplayed();

  // ADD PRODUCTS
  await inventory.addProduct('sauce-labs-backpack');

  await inventory.addProduct('sauce-labs-bike-light');

  // VERIFY BADGE
  await inventory.verifyCartBadgeCount(2);

  // GO TO CART
  await inventory.goToCart();

  // VERIFY CART PAGE
  await cart.verifyCartPageIsDisplayed();
});