import { test } from '../../fixtures/baseTest';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('@regression Full checkout validation', async ({
  login,
  inventory,
  cart
}) => {

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
  await cart.proceedToCheckout();

  // =========================
  // CHECKOUT FLOW (FIXED)
  // =========================
  const checkout = new CheckoutPage(cart['page']);

  await checkout.fillDetails('John', 'Doe', '12345');
  await checkout.finishOrder();
  await checkout.verifySuccess();
});