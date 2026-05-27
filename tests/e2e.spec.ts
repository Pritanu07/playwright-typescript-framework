import { test } from '../fixtures/baseTest';

test('e2e Full purchase journey', async ({ login, inventory, cart }) => {

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addProductToCart('sauce-labs-backpack');
  await inventory.goToCart();

  await cart.verifyCartPageIsDisplayed();
});