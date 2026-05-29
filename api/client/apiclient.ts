import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {
    // ✅ DEBUG: Check if API key is loaded
    console.log("REQRES_API_KEY =", process.env.REQRES_API_KEY);
  }

  private BASE_URL = 'https://reqres.in/api';

  // =========================
  // API KEY HANDLER
  // =========================
  private getApiKey(): string {
    const apiKey = process.env.REQRES_API_KEY;

    if (!apiKey) {
      throw new Error(
        'REQRES_API_KEY is missing. Add it to .env and GitHub Secrets.'
      );
    }

    return apiKey;
  }

  // =========================
  // COMMON HEADERS
  // =========================
  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      'x-api-key': this.getApiKey()
    };
  }

  // =========================
  // LOGIN API
  // =========================
  async login() {
    const res = await this.request.post(`${this.BASE_URL}/login`, {
      headers: this.getHeaders(),
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
      headers: this.getHeaders()
    });

    const body = await res.text();

    console.log('USERS RESPONSE:', body);

    expect(res.ok(), body).toBeTruthy();

    const json = JSON.parse(body);

    expect(json.data).toBeDefined();
    expect(Array.isArray(json.data)).toBeTruthy();
    expect(json.data.length).toBeGreaterThan(0);

    return json;
  }
}