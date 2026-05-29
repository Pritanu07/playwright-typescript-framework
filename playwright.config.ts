import dotenv from 'dotenv';

// 🔥 FORCE PATH EXPLICITLY
dotenv.config({ path: '.env' });

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://reqres.in/api',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  outputDir: 'test-results',
  retries: 1,
  timeout: 30000,
});