import { test } from '@playwright/test';
import { ApiUtils } from '../utils/api.utils';
import { ResponseUtils } from '../utils/response.utils';

test('Get users API', async ({ request }) => {

  const api = new ApiUtils(request);

  const response = await api.get('/api/users?page=2');

  ResponseUtils.verifyStatus(response, 200);

  await ResponseUtils.verifyJsonProperty(response, 'data');
});