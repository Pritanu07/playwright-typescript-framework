import { test } from '../../fixtures/baseTest';
import { CheckoutPage } from '../../pages/checkout.page';

test('@regression Checkout flow - single product', async ({
  page,
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
  await inventory.addProduct('sauce-labs-bike-light')
  await inventory.verifyCartBadgeCount(2);

  // =========================
  // CART
  // =========================
  await inventory.goToCart();
  await cart.verifyCartPageIsDisplayed();
  await cart.proceedToCheckout();

  // =========================
  // CHECKOUT (PROPER LAYER)
  // =========================
  const checkout = new CheckoutPage(page);

  await checkout.fillDetails('John', 'Doe', '12345');
  await checkout.finishOrder();
  await checkout.verifySuccess();
});