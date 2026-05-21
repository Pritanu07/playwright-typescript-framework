import { request } from '@playwright/test';

export async function getAuthToken() {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://example.com/api/login', {
    data: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  });

  if (!response.ok()) {
    throw new Error(`Login API failed with status: ${response.status()}`);
  }

  const responseBody = await response.json();

  // adjust this based on real API response structure
  const token = responseBody.token;

  return token;
}