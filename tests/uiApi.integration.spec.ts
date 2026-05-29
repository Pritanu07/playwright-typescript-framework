import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ApiClient } from '../api/client/apiclient';

test('UI + API E2E flow (SauceDemo + JSONPlaceholder)', async ({ page, request }) => {

  // =====================
  // PAGE OBJECTS
  // =====================
  const login = new LoginPage(page);
  const api = new ApiClient(request);

  // =====================
  // API LAYER
  // =====================
  const users = await api.getUsers();

  expect(users.length).toBeGreaterThan(0);

  // =====================
  // UI LAYER
  // =====================
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.verifyLoginSuccess();

  // =====================
  // VALIDATION (UI STATE)
  // =====================
  await login.verifyInventoryPageIsDisplayed();

  // =====================
  // CROSS VALIDATION (E2E LOGIC)
  // =====================
  const firstUser = users[0];

  console.log('First API User:', firstUser);
});