import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),

  testDir: './tests',

  fullyParallel: true,
  retries: 1,

  reporter: [
    ['list'],
    ['allure-playwright'],
  ],

  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
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