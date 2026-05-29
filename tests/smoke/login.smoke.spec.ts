import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test('@smoke login validation', async ({ page }) => {

  const login = new LoginPage(page);

  // =========================
  // NAVIGATE
  // =========================
  await login.goto();

  // =========================
  // LOGIN
  // =========================
  await login.login(
    'standard_user',
    'secret_sauce'
  );

  // =========================
  // VALIDATION
  // =========================
  await login.verifyLoginSuccess();
});