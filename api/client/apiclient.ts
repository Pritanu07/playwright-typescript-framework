import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  private BASE_URL = 'https://reqres.in/api';

  // =========================
  // LOGIN API
  // =========================
  async login() {

    console.log("REQRES_API_KEY =", process.env.REQRES_API_KEY);

    const res = await this.request.post(`${this.BASE_URL}/login`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REQRES_API_KEY! // keep if required
      },
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    });

    const body = await res.text();
    console.log('LOGIN RESPONSE:', body);

    expect(res.ok(), body).toBeTruthy();

    return JSON.parse(body);
  }

  // =========================
  // GET USERS
  // =========================
  async getUsers() {

    const res = await this.request.get(`${this.BASE_URL}/users?page=2`, {
      headers: {
        'x-api-key': process.env.REQRES_API_KEY! // 🔥 FIX added here
      }
    });

    const body = await res.text();
    console.log('USERS RESPONSE:', body);

    expect(res.ok(), body).toBeTruthy();

    const json = JSON.parse(body);

    expect(json.data, 'users.data missing').toBeDefined();

    return json;
  }
}