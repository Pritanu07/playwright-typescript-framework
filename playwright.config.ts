import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    headless: true,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      testIgnore: ['API/**/*'],
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
      testIgnore: ['API/**/*'],
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
      testIgnore: ['API/**/*'],
    },

    {
      name: 'api',
      testMatch: ['API/**/*.spec.ts'],
    },

  ],
});