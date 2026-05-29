import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);

    await this.page.click('#login-button');
  }

  // =========================
  // POSITIVE LOGIN VALIDATION
  // =========================
  async verifyLoginSuccess() {
    const title = this.page.locator('.title');

    await expect(title).toBeVisible({ timeout: 15000 });
    await expect(title).toHaveText('Products');
  }

  // =========================
  // NEGATIVE LOGIN VALIDATION
  // =========================
  async verifyLoginErrorMessage(expectedText: string) {
    const error = this.page.locator('[data-test="error"]');

    await expect(error).toBeVisible({ timeout: 15000 });
    await expect(error).toContainText(expectedText);
  }

  async verifyLoginFailed() {
    const error = this.page.locator('[data-test="error"]');

    await expect(error).toBeVisible({ timeout: 15000 });
  }
}