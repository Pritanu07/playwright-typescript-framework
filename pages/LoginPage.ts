import { expect, type Page, type Locator } from "@playwright/test";

export class LoginPage {

  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.usernameInput = page.locator('#user-name');
    this.page.waitForTimeout(3000);

    this.passwordInput = page.locator('#password');
    this.page.waitForTimeout(3000);
    this.loginButton = page.locator('#login-button');
    
  }

  async launch() {

    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {

    await this.usernameInput.waitFor({
      state: 'visible'
    });

    await this.usernameInput.fill(username);
    await this.page.waitForTimeout(3000);

    await this.passwordInput.fill(password);
    await this.page.waitForTimeout(3000);

    await this.loginButton.click();
    await this.page.waitForTimeout(3000);

  
  }
}