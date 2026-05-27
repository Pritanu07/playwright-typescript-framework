import { test } from '../fixtures/baseTest';

test('regression Checkout flow', async ({ login, inventory, cart }) => {

  // LOGIN
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // INVENTORY
  await inventory.verifyInventoryPageIsDisplayed();
  await inventory.addProductToCart('sauce-labs-backpack');

  await inventory.verifyCartBadgeCount(1);

  // CART
  await inventory.goToCart();
  await cart.verifyCartPageIsDisplayed();
});