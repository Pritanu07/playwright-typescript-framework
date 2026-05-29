import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  private BASE_URL = 'https://reqres.in/api';

  // =========================
  // LOGIN API
  // =========================
  async login() {
    const res = await this.request.post(`${this.BASE_URL}/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    });

    const text = await res.text();

    let body: any;
    try {
      body = JSON.parse(text);
    } catch {
      body = { raw: text };
    }

    console.log('LOGIN STATUS:', res.status());
    console.log('LOGIN RESPONSE:', body);

    // Assert API success
    expect(res.ok(), `Login failed: ${text}`).toBeTruthy();

    // Assert token exists
    expect(body.token, 'Token missing in login response').toBeDefined();

    return body;
  }

  // =========================
  // GET USERS API
  // =========================
  async getUsers() {
    const res = await this.request.get(`${this.BASE_URL}/users?page=2`);

    const text = await res.text();

    let body: any;
    try {
      body = JSON.parse(text);
    } catch {
      body = { raw: text };
    }

    console.log('USERS STATUS:', res.status());
    console.log('USERS RESPONSE:', body);

    // Assert API success
    expect(res.ok(), `Get users failed: ${text}`).toBeTruthy();

    // Assert data exists
    expect(body.data, 'Users data missing').toBeDefined();
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);

    return body;
  }
}