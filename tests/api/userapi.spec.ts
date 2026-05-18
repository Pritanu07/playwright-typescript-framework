import { test, expect } from '@playwright/test';

test('Get users API test', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);

  expect(responseBody.length).toBeGreaterThan(0);
});