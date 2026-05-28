import { Page, expect } from '@playwright/test';

export class MenuPage {
  constructor(private page: Page) {}

  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  // =========================
  // OPEN MENU
  // =========================
  async openMenu() {
    const menuBtn = this.page.locator(this.menuButton);

    await expect(menuBtn).toBeVisible({ timeout: 15000 });
    await menuBtn.click();

    // IMPORTANT: wait for menu animation
    await expect(this.page.locator('.bm-menu-wrap')).toBeVisible({ timeout: 15000 });
  }

  // =========================
  // LOGOUT FLOW
  // =========================
  async logout() {
    await this.openMenu();

    const logoutBtn = this.page.locator(this.logoutLink);

    await expect(logoutBtn).toBeVisible({ timeout: 15000 });
    await logoutBtn.click();

    // wait for redirect to login page
    await expect(this.page).toHaveURL(/saucedemo/, { timeout: 15000 });
  }

  // =========================
  // VERIFY LOGOUT
  // =========================
  async verifyLoggedOut() {
    await expect(this.page.locator('#login-button')).toBeVisible({ timeout: 15000 });
    await expect(this.page.locator('#user-name')).toBeVisible({ timeout: 15000 });
  }
}