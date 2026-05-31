import { defineConfig } from '@playwright/test';

export default defineConfig({
  //globalSetup: require.resolve('./global-setup'),

  testDir: './tests',

  fullyParallel: true,
  retries: 1,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],

  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'on',
    storageState: 'storageState.json',
  },

  projects: [
    {
      name: 'smoke',
      testMatch: /.*smoke\.spec\.ts/
    },
    {
      name: 'regression',
      testMatch: /.*spec\.ts/
    },
    {
      name: 'e2e',
      testMatch: /.*e2e\.spec\.ts/
    }
  ]
});