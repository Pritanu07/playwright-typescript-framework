import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { loginData } from '../api/data/login.data';

test.describe('Login Negative Scenarios', () => {

  test('Locked out user should not login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    await login.login(
      loginData.lockedUser.username,
      loginData.lockedUser.password
    );

    await login.verifyLoginErrorMessage(
      'Sorry, this user has been locked out'
    );
  });

  test('Invalid password should not login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    await login.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await login.verifyLoginErrorMessage(
      'Username and password do not match'
    );
  });

  test('Empty username should show validation error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    await login.login('', loginData.emptyUser.password);

    await login.verifyLoginErrorMessage(
      'Username is required'
    );
  });

  test('Empty password should show validation error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    await login.login(
      loginData.validUser.username,
      ''
    );

    await login.verifyLoginErrorMessage(
      'Password is required'
    );
  });

});