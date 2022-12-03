import { SetupWorkerApi, setupWorker } from 'msw';

import mockApis from '.';

export const worker: SetupWorkerApi = setupWorker(...mockApis);
