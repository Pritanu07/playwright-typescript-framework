import { test } from '../fixtures/baseTest';

test('Add product to cart and verify cart flow', async ({ login, inventory, cart }) => {

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addProductToCart('sauce-labs-backpack');
  await inventory.addProductToCart('sauce-labs-bike-light')
  await inventory.goToCart();

  await cart.verifyCartPageIsDisplayed();
});