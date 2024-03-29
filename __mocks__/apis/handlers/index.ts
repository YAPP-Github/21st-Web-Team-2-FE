import { memberHandler } from '@mocks/apis/handlers/member';

import { authHandler } from './auth';
import { commentHandler } from './comment';
import imageHandler from './image';
import { topicDetailHandler } from './topic';
import voteHandler from './vote';

export const handlers = [
  ...authHandler,
  ...topicDetailHandler,
  ...commentHandler,
  ...memberHandler,
  ...voteHandler,
  ...imageHandler,
];
