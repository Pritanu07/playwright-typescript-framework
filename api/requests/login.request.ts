import { APIRequestContext } from '@playwright/test';

export class LoginRequest {
  constructor(private request: APIRequestContext) {}

  async loginUser(payload: any) {
    return await this.request.post('https://reqres.in/api/login', {
      data: payload
    });
  }
}