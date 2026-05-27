import { test, expect } from '@playwright/test';
import { productsData } from '../data/products.data.ts';

test('Validate product details from UI', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  // LOGIN
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // PRODUCT ASSERTIONS
  const productName = page.locator('.inventory_item_name').first();

  const productPrice = page.locator('.inventory_item_price').first();

  await expect(productName)
    .toHaveText(productsData.backpack.name);

  await expect(productPrice)
    .toHaveText(productsData.backpack.price);
});