import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';
import { CheckoutPage } from '../../pages/checkout.page';

test.describe('@regression Checkout Flow', () => {

  test('should complete checkout with multiple products', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await login.verifyLoginSuccess();

    await inventory.verifyInventoryPageIsDisplayed();
    await inventory.addProduct('sauce-labs-backpack');
    await inventory.addProduct('sauce-labs-bike-light');

    await inventory.verifyCartBadgeCount(2);

    await inventory.goToCart();

    await cart.verifyCartPage();
    await cart.proceedToCheckout();

    await checkout.fillDetails('John', 'Doe', '12345');
    await checkout.finishOrder();
    await checkout.verifySuccess();
  });

});