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

    await this.page.waitForURL('**/inventory.html', {
      timeout: 15000
    });
  }

  async verifyLoginSuccess() {
    const title = this.page.locator('.title');
    await expect(title).toBeVisible({ timeout: 15000 });
    await expect(title).toHaveText('Products');
  }
}