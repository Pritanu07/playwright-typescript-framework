import { test, expect } from '../fixtures/baseTest';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../api/data/login.data';

test.describe('Login Negative Scenarios', () => {

  test('Locked out user should not login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
      loginData.lockedUser.username,
      loginData.lockedUser.password
    );

    await login.verifyLoginFailed();
  });

  test('Invalid password should not login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await login.verifyLoginErrorMessage('Username and password do not match');
  });

  test('Empty username should show validation error', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
      loginData.emptyUser.username,
      loginData.emptyUser.password
    );

    await login.verifyLoginErrorMessage('Username is required');
  });

  test('Empty password should show validation error', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
      loginData.validUser.username,
      ''
    );

    await login.verifyLoginErrorMessage('Password is required');
  });

});