import { test, expect } from '../fixtures/baseTest';
import { ApiClient } from '../api/client/apiclient';

test('UI + API integration flow', async ({ page, login, api }) => {

  // =====================
  // API LAYER FIRST
  // =====================
  const apiResponse = await api.login();
  expect(apiResponse.token).toBeDefined();

  // =====================
  // UI FLOW
  // =====================
   await login.goto();
   await login.login('standard_user', 'secret_sauce');
   await page.waitForTimeout(2000); // small buffer
   await page.pause();

  const title = page.locator('.title');
  await expect(title).toBeVisible();
  await expect(title).toHaveText('Products');

  // Debug (remove later)
  // await page.pause();

  // API users
  const users = await api.getUsers();
  expect(users.data.length).toBeGreaterThan(0);
});