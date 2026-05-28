import { test, expect } from '../fixtures/baseTest';
import { MenuPage } from '../pages/MenuPage';
import { LoginPage } from '../pages/LoginPage';

test('Logout Feature', async ({ login, inventory, page }) => {

  // =========================
  // LOGIN
  // =========================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.verifyLoginSuccess();

  // =========================
  // VERIFY USER IS LOGGED IN
  // =========================
  await inventory.verifyInventoryPageIsDisplayed();

  // =========================
  // LOGOUT FLOW
  // =========================
  const menuPage = new MenuPage(page);
  await menuPage.logout();

  // =========================
  // VERIFY LOGOUT SUCCESS
  // =========================
  const loginPage = new LoginPage(page);

  await expect(page.locator('#login-button')).toBeVisible({ timeout: 15000 });
  await expect(page.locator('#user-name')).toBeVisible({ timeout: 15000 });
});