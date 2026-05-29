import { test } from '../../fixtures/baseTest';
import { CheckoutPage } from '../../pages/checkout.page';

test('@regression Full E2E purchase - multiple products', async ({
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
  // ADD PRODUCTS
  // =========================
  await inventory.addProduct('sauce-labs-backpack');
  await inventory.addProduct('sauce-labs-bike-light');

  await inventory.verifyCartBadgeCount(2);

  // =========================
  // CART FLOW
  // =========================
  await inventory.goToCart();
  await cart.verifyCartPage();

  await cart.proceedToCheckout();

  // =========================
  // CHECKOUT FLOW
  // =========================
  const checkout = new CheckoutPage(page);

  await checkout.fillDetails('John', 'Doe', '12345');
  await checkout.finishOrder();
  await checkout.verifySuccess();
});