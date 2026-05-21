import { type Page, type Locator, expect } from "@playwright/test";

export class LoginPage {

  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async launch() {
    await this.page.goto('https://www.saucedemo.com/');

    // ensure page is loaded properly
    await expect(this.usernameInput).toBeVisible();
  }

  async login(username: string, password: string) {

    await this.usernameInput.fill(username);
    await this.page.waitForTimeout(3000);
    await this.passwordInput.fill(password);
    await this.page.waitForTimeout(3000);

    await this.loginButton.click();
    await this.page.waitForTimeout(3000);

    // IMPORTANT: verify login success
    //await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}