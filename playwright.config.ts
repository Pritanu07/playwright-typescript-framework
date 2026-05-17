import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 1,

  // Workers
  workers: process.env.CI ? 1 : 1,

  // Reporters
  reporter: [
    ['html'],
    ['list']
  ],

  // Shared settings
  use: {

    // Browser actions
    headless: false,

    // Trace
    trace: 'on-first-retry',

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Video on failure
    video: 'retain-on-failure',
  },

  // Browser projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],
});