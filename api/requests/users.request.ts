import { APIRequestContext } from '@playwright/test';

export class UsersRequest {

  constructor(private request: APIRequestContext) {}

  async createUser(payload: { name: string; job: string }) {

    const response = await this.request.post(
      'https://reqres.in/api/register',
      {
        data: {
          email: 'eve.holt@reqres.in',
          password: 'pistol'
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response;
  }
}