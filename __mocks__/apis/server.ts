import { SetupServerApi, setupServer } from 'msw/node';

import mockApis from '.';

export const server: SetupServerApi = setupServer(...mockApis);
