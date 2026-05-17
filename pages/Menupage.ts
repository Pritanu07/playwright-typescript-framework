import { type Page, type Locator, expect } from '@playwright/test';

export class MenuPage {

  readonly page: Page;

  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {

    this.page = page;

    this.menuButton =
      page.locator('#react-burger-menu-btn');

    this.logoutLink =
      page.locator('#logout_sidebar_link');
  }

  async openMenu() {

    await expect(this.menuButton)
      .toBeVisible();

    await this.menuButton.click();
  }

  async logout() {

    await expect(this.logoutLink)
      .toBeVisible();

    await this.logoutLink.click();
  }

  async verifyLogoutSuccess() {

    await expect(this.page)
      .toHaveURL(/saucedemo/);

    await expect(
      this.page.locator('#login-button')
    ).toBeVisible();
  }
}