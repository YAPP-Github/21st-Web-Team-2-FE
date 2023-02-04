import { memberHandler } from '@mocks/apis/handlers/member';

import { authHandler } from './auth';
import { commentHandler } from './comment';
import { topicDetailHandler } from './topic';

export const handlers = [
  ...authHandler, //
  ...topicDetailHandler,
  ...commentHandler,
  ...memberHandler,
];
