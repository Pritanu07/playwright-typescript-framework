import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyCartPageIsDisplayed() {
    await expect(this.page.locator('.title')).toHaveText('Your Cart');
  }

  async checkout() {
    await this.page.click('#checkout');

    await expect(this.page.locator('.title'))
      .toHaveText('Checkout: Your Information');
  }

  async fillCustomerDetails(first: string, last: string, zip: string) {
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);

    await this.page.click('#continue');
  }

  async verifyOverviewPage() {
    await expect(this.page.locator('.title'))
      .toHaveText('Checkout: Overview');

    await expect(this.page.locator('.summary_total_label'))
      .toBeVisible();
  }

  async finishOrder() {
    await this.page.click('#finish');

    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}