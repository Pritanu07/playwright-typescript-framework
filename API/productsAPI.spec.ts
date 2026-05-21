import { test, expect } from '@playwright/test';

test('Get posts API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
});