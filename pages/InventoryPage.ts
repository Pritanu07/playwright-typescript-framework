import { type Page, type Locator, expect } from '@playwright/test';

export class InventoryPage {

  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly addBikeLightButton: Locator;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {

    this.page = page;

    this.addBackpackButton =
      page.locator('#add-to-cart-sauce-labs-backpack');

    this.addBikeLightButton =
      page.locator('#add-to-cart-sauce-labs-bike-light');

    this.cartBadge =
      page.locator('.shopping_cart_badge');

    this.cartIcon =
      page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {

    console.log('Adding Backpack to cart');

    await expect(this.addBackpackButton).toBeVisible();

    await this.page.waitForTimeout(2000); // 👈 pause before click

    await this.addBackpackButton.click();

    await this.page.waitForTimeout(2000); // 👈 pause after click
  }

  async addBikeLightToCart() {

    console.log('Adding Bike Light to cart');

    await expect(this.addBikeLightButton).toBeVisible();

    await this.page.waitForTimeout(2000); // 👈 before click

    await this.addBikeLightButton.click();

    await this.page.waitForTimeout(2000); // 👈 after click

    await expect(this.cartBadge).toHaveText('2');
   
  }

  async verifyCartCount(count: string) {

    await expect(this.cartBadge).toHaveText(count);
  }

  async openCart() {

    await this.page.waitForTimeout(2000); // 👈 before navigation

    await this.cartIcon.click();
  }
}