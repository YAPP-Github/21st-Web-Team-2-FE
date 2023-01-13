import { commentHandler } from './comment';
import { topicDetailHandler } from './topic';

export const handlers = [
  ...topicDetailHandler, //
  ...commentHandler,
];

export const getRandomNumber = (min = 100, max = 600) => {
  return Math.random() * (max - min) + min;
};
