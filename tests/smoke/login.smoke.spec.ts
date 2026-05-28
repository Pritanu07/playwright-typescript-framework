import { test } from '../../fixtures/baseTest';

test('SMOKE - login validation', async ({ login }) => {

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
  // STABLE VALIDATION
  // =========================
  await login.verifyLoginSuccess();
});