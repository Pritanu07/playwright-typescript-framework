import { test, expect } from '../fixtures/baseTest';
import { ApiClient } from '../api/client/apiclient';

test('UI + API integration flow', async ({ page, login, api }) => {

  // API LAYER
  const apiResponse = await api.login();
  expect(apiResponse.token).toBeDefined();

  // UI FLOW
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const title = page.locator('.title');

  await expect(title).toBeVisible();
  await expect(title).toHaveText('Products');

  // API USERS
  const users = await api.getUsers();
  expect(users.data.length).toBeGreaterThan(0);
});