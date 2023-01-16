import { commentHandler } from './comment';
import { topicDetailHandler } from './topic';

export const handlers = [
  ...topicDetailHandler, //
  ...commentHandler,
];
