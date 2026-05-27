import { request } from '@playwright/test';

export async function getApiContext() {
  return await request.newContext({
    baseURL: 'https://reqres.in/api'
  });
}