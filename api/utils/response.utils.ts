import { expect } from '@playwright/test';

export class ResponseUtils {

  static verifyStatus(response: any, expectedStatus: number) {
    expect(response.status()).toBe(expectedStatus);
  }

  static async verifyJsonProperty(response: any, property: string) {
    const body = await response.json();
    expect(body).toHaveProperty(property);
  }

  static async verifyResponseTime(response: any, maxTime: number) {
    expect(response.timing().responseEnd).toBeLessThanOrEqual(maxTime);
  }

};