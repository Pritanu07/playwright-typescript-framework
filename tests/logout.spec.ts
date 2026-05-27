import { test, expect } from '../fixtures/baseTest';
import { MenuPage } from '../pages/MenuPage';

test('Logout Feature', async ({ login, inventory, page }) => {

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const menuPage = new MenuPage(page);

  await menuPage.logout();
});
