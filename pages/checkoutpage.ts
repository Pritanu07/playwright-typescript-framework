import { type Page, type Locator, expect } from '@playwright/test';

export class CheckoutPage{

  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;

  readonly continueButton: Locator;
  readonly finishButton: Locator;

  readonly successMessage: Locator;

  constructor(page: Page) {

    this.page = page;

    this.firstNameInput =
      page.locator('#first-name');

    this.lastNameInput =
      page.locator('#last-name');

    this.postalCodeInput =
      page.locator('#postal-code');

    this.continueButton =
      page.locator('#continue');

    this.finishButton =
      page.locator('#finish');

    this.successMessage =
      page.locator('.complete-header');
  }

  async enterCheckoutDetails(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {

    await this.firstNameInput.fill(firstName);

    await this.lastNameInput.fill(lastName);

    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout() {

    await this.continueButton.click();
  }

  async finishOrder() {

    await this.finishButton.click();
  }

  async verifyOrderSuccess() {

    await expect(this.successMessage)
      .toHaveText('Thank you for your order!');
  }
}