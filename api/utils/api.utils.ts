import { APIRequestContext } from '@playwright/test';
import { LoggerUtils } from './logger.utils';

export class ApiUtils {

  constructor(private request: APIRequestContext) {}

  async get(url: string) {
    LoggerUtils.logRequest('GET', url);

    const response = await this.request.get(url);

    await LoggerUtils.logResponse(response);

    return response;
  }

  async post(url: string, payload: any) {
    LoggerUtils.logRequest('POST', url, payload);

    const response = await this.request.post(url, {
      data: payload
    });

    await LoggerUtils.logResponse(response);

    return response;
  }

  async put(url: string, payload: any) {
    LoggerUtils.logRequest('PUT', url, payload);

    const response = await this.request.put(url, {
      data: payload
    });

    await LoggerUtils.logResponse(response);

    return response;
  }

  async delete(url: string) {
    LoggerUtils.logRequest('DELETE', url);

    const response = await this.request.delete(url);

    await LoggerUtils.logResponse(response);

    return response;
  }
};