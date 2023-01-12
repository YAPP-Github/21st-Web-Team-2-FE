// DELETE-GYU: PR에 참조하고 지우기
// https://github.com/vercel/next.js/blob/canary/examples/with-msw/mocks/browser.ts
import { SetupWorkerApi, setupWorker } from 'msw';

import { handlers } from './handlers';

export const worker: SetupWorkerApi = setupWorker(...handlers);
