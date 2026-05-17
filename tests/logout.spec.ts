import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/Menupage';


import loginData from '../test-data/loginData.json';

test('Verify user can logout successfully', async ({ page }) => {

  // Create page objects
  const loginPage = new LoginPage(page);

  const menuPage = new MenuPage(page);

  // Step 1: Launch application
  await loginPage.launch();

  // Step 2: Login
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  // Step 3: Verify inventory page loaded
  await expect(page).toHaveURL(/inventory/);

  // Step 4: Open menu
  await menuPage.openMenu();

  // Step 5: Logout
  await menuPage.logout();

  // Step 6: Verify logout successful
  await menuPage.verifyLogoutSuccess();

  // Optional pause
  await page.waitForTimeout(2000);
});