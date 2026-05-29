import { test, expect } from '../fixtures/baseTest';

test('UI login + API sanity check', async ({ page, login, api }) => {

  // =====================
  // API LAYER
  // =====================
  const apiResponse = await api.login();
  expect(apiResponse.token).toBeDefined();

  // =====================
  // UI FLOW
  // =====================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const title = page.locator('.title');

  await expect(title).toBeVisible();
  await expect(title).toHaveText('Products');

  // =====================
  // API USERS VALIDATION
  // =====================
  const users = await api.getUsers();

  expect(users.data).toBeTruthy();
  expect(Array.isArray(users.data)).toBeTruthy();
  expect(users.data.length).toBeGreaterThan(0);
}); 