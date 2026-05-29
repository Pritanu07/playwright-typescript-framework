import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { MenuPage } from '../pages/menu.page';

test('Logout Feature', async ({ page }) => {

  // =========================
  // PAGE OBJECTS
  // =========================
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const menuPage = new MenuPage(page);

  // =========================
  // LOGIN FLOW
  // =========================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.verifyLoginSuccess();

  // =========================
  // INVENTORY FLOW
  // =========================
  await inventory.verifyInventoryPageIsDisplayed();

  // =========================
  // LOGOUT FLOW
  // =========================
  await menuPage.logout();

  // =========================
  // VERIFY LOGOUT SUCCESS
  // =========================
  await login.verifyLoginPageIsDisplayed();
});