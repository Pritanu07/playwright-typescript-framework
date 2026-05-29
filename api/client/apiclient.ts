import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  // =====================
  // GET USERS (API LAYER)
  // =====================
  async getUsers() {
    const res = await this.request.get(`${this.BASE_URL}/users`);

    const body = await res.json();

    console.log('USERS STATUS:', res.status());
    console.log('USERS RESPONSE:', body);

    expect(res.ok()).toBeTruthy();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    return body;
  }

  // =====================
  // MOCK LOGIN (optional API demo)
  // JSONPlaceholder doesn't have login
  // =====================
  async mockLogin() {
    const res = await this.request.post(`${this.BASE_URL}/posts`, {
      data: {
        title: 'test login',
        body: 'qa automation',
        userId: 1
      }
    });

    const body = await res.json();

    console.log('MOCK LOGIN STATUS:', res.status());
    console.log('MOCK LOGIN RESPONSE:', body);

    expect(res.ok()).toBeTruthy();
    expect(body.id).toBeDefined();

    return body;
  }
}