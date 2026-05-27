import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // =========================
  // TEST DIRECTORY
  // =========================
  testDir: './tests',

  // =========================
  // TIMEOUTS
  // =========================
  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  // =========================
  // EXECUTION SETTINGS
  // =========================
  fullyParallel: true,

  retries: 1,

  workers: 2,

  // =========================
  // REPORTERS
  // =========================
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright'],
  ],

  // =========================
  // SHARED SETTINGS
  // =========================
  use: {
    baseURL: 'https://www.saucedemo.com',

    // TRUE for CI/CD
    // FALSE for local debugging
    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    launchOptions: {
      slowMo: 500,
    },
  },

  // =========================
  // PROJECTS
  // =========================
  projects: [

    {
      name: 'smoke',
      testMatch: /.*smoke.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'regression',
      testMatch: /.*regression.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

  ],

});