import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.fill('#user-name', username);
    await this.fill('#password', password);
    await this.click('#login-button');
  }
  async verifyLoginSuccess() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async verifyLoginErrorMessage(message: string) {
  await expect(this.page.locator('[data-test="error"]'))
    .toContainText(message);
  }

  async verifyInventoryPageIsDisplayed() {
  await expect(this.page.locator('.title')).toHaveText('Products');
}

  async verifyLoginPageIsDisplayed() {
  await expect(this.page.locator('#login-button')).toBeVisible();
}

}

