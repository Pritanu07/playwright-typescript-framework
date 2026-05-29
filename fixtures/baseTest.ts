import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/checkout.page';
import { ApiClient } from '../api/client/apiclient';

export const test = base.extend<{
  login: LoginPage;
  inventory: InventoryPage;
  cart: CartPage;
  checkout:CheckoutPage;
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

  api: async ({ request }, use) => {
    await use(new ApiClient(request));
  },

});

export { expect } from '@playwright/test';