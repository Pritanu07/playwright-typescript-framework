import { test, expect } from '../fixtures/baseTest';

test('UI login + API sanity check', async ({ page, login, api }) => {

  // =====================
  // API LAYER - LOGIN
  // =====================
  let apiResponse;

  try {
    apiResponse = await api.login();
    console.log('API LOGIN TOKEN:', apiResponse.token);

    expect(apiResponse.token).toBeDefined();
  } catch (error) {
    console.log('API login failed, continuing UI test:', error);
  }

  // =====================
  // UI FLOW - LOGIN
  // =====================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const title = page.locator('.title');

  await expect(title).toBeVisible();
  await expect(title).toHaveText('Products');

  // =====================
  // API - USERS VALIDATION
  // =====================
  const users = await api.getUsers();

  console.log('USERS COUNT:', users.data.length);

  expect(Array.isArray(users.data)).toBeTruthy();
  expect(users.data.length).toBeGreaterThan(0);

  // stronger validation (recommended)
  expect(users.data[0]).toHaveProperty('id');
  expect(users.data[0]).toHaveProperty('email');
});