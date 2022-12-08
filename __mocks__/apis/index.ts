import { RequestHandler } from 'msw';

import * as sample from './sample';

const mockApis = Object.values({
  sample,
}).flatMap((apis: Record<string, RequestHandler>) => Object.values(apis));

export default mockApis;
