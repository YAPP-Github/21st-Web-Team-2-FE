import { MEMBER } from '@mocks/data/member';
import { VOTE_OPTIONS } from '@mocks/data/voteOption';

import Topic from '@src/types/Topic';

export const TOPIC: Topic = {
  topicId: 1,
  title: 'Vote1',
  contents: 'Content1',
  member: MEMBER,
  commentAmount: 2,
  voteAmount: 0,
  liked: false,
  likeAmount: 0,
  tags: [],
  voteOptions: VOTE_OPTIONS,
};

export const TOPICS: Topic[] = [
  { ...TOPIC },
  { ...TOPIC, topicId: 1, title: '두번째' },
  { ...TOPIC, topicId: 2, title: '세번째' },
  { ...TOPIC, topicId: 3, title: '네번째' },
  { ...TOPIC, topicId: 4, title: '다섯번째' },
  { ...TOPIC, topicId: 5, title: '여섯번째' },
  { ...TOPIC, topicId: 6, title: '일곱번째' },
];
