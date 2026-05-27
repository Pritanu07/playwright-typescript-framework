import { test } from '../../fixtures/baseTest';

test('SMOKE - checkout basic flow', async ({ login, inventory, cart }) => {

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addProduct('sauce-labs-backpack');
  await inventory.goToCart();

  await cart.checkout();
  await cart.fillCustomerDetails('John', 'Doe', '12345');
  await cart.finishOrder();
});