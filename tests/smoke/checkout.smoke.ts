import { test } from '../../fixtures/baseTest';

test('SMOKE - basic checkout flow', async ({ login, inventory, cart }) => {

  // LOGIN
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // INVENTORY
  await inventory.verifyLoaded();

  await inventory.addProduct('sauce-labs-backpack');
  await inventory.verifyCartBadge(1);

  // CART
  await inventory.openCart();
  await cart.verifyCartPageIsDisplayed();

  await cart.checkout();
  await cart.fillCustomerDetails('John', 'Doe', '12345');

  await cart.finishOrder();
});