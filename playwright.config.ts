import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // ✅ SINGLE use block (FIXED)
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