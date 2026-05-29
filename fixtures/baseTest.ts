import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { ApiClient } from '../api/client/apiclient';
import { MenuPage } from '../pages/menu.page';

export const test = base.extend<{
  login: LoginPage;
  inventory: InventoryPage;
  cart: CartPage;
  checkout: CheckoutPage;
  menupage: MenuPage;
  api: ApiClient;
}>({
  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventory: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cart: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkout: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  menupage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },

  api: async ({ request }, use) => {
    await use(new ApiClient(request));
  },

});

export { expect } from '@playwright/test';