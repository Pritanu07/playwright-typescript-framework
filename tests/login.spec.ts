import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import loginData from '../test-data/loginData.json';

test('Valid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.launch();

  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(2000);
});