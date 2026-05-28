import { test } from '../../fixtures/baseTest';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('SMOKE - checkout basic flow', async ({
  login,
  inventory,
  cart
}) => {

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
  await inventory.addProduct('sauce-labs-bike-light');

  await inventory.verifyCartBadgeCount(2);

  // =========================
  // CART
  // =========================
  await inventory.goToCart();
  await cart.verifyCartPage();

  await cart.proceedToCheckout();

  // =========================
  // CHECKOUT
  // =========================
  const checkout = new CheckoutPage(cart['page']);

  await checkout.fillDetails('John', 'Doe', '12345');
  await checkout.finishOrder();
  await checkout.verifySuccess();
});