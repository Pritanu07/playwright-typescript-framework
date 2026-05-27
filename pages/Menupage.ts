import { Page, expect } from '@playwright/test';

export class MenuPage {
  constructor(private page: Page) {}

  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  async openMenu() {
    await expect(this.page.locator(this.menuButton)).toBeVisible();
    await this.page.click(this.menuButton);
  }

  async logout() {
    await this.openMenu();
    await expect(this.page.locator(this.logoutLink)).toBeVisible();
    await this.page.click(this.logoutLink);
  }

  async verifyLoggedOut() {
    await expect(this.page).toHaveURL(/saucedemo/);
    await expect(this.page.locator('#login-button')).toBeVisible();
  }
}