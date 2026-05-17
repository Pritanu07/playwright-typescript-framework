import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import loginData from '../test-data/loginData.json';


// LOCKED USER TEST
test('Login with locked out user', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.launch();

  await loginPage.login(
    loginData.lockedUser.username,
    loginData.lockedUser.password
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Sorry, this user has been locked out.'
  );

  await page.waitForTimeout(2000);
});


// WRONG USERNAME TEST
test('Login with wrong username', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.launch();

  await loginPage.login(
    loginData.wrongUsername.username,
    loginData.wrongUsername.password
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Username and password do not match'
  );

  await page.waitForTimeout(2000);
});


// WRONG PASSWORD TEST
test('Login with wrong password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.launch();

  await loginPage.login(
    loginData.wrongPassword.username,
    loginData.wrongPassword.password
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Username and password do not match'
  );

  await page.waitForTimeout(2000);
});


// EMPTY CREDENTIALS TEST
test('Login with empty credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.launch();

  await loginPage.login(
    loginData.emptyCredentials.username,
    loginData.emptyCredentials.password
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Username is required'
  );

  await page.waitForTimeout(2000);
});