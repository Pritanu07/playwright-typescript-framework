import { test } from '../../fixtures/baseTest';

test('SMOKE - login validation', async ({ login }) => {

  await login.goto();

  await login.login(
    'standard_user',
    'secret_sauce'
  );

  await login.verifyLoginSuccess();
});