import { MEMBER } from '@mocks/data/member';
import { VOTE_OPTIONS } from '@mocks/data/voteOption';

import { GetTopicsResponseData } from '@src/apis';
import Topic from '@src/types/Topic';

export const TOPIC: GetTopicsResponseData = {
  topicId: 1,
  title: 'Vote1',
  contents: 'Content1',
  member: MEMBER,
  commentAmount: 2,
  voteAmount: 0,
  tags: [],
  voteOptions: VOTE_OPTIONS,
};

export const TOPICS: GetTopicsResponseData[] = [
  { ...TOPIC },
  { ...TOPIC, topicId: 2, title: '두번째' },
  { ...TOPIC, topicId: 3, title: '세번째' },
  { ...TOPIC, topicId: 4, title: '네번째' },
  { ...TOPIC, topicId: 5, title: '다섯번째' },
  { ...TOPIC, topicId: 6, title: '여섯번째' },
  { ...TOPIC, topicId: 7, title: '일곱번째' },
  { ...TOPIC, topicId: 8, title: '8' },
  { ...TOPIC, topicId: 9, title: '9' },
  { ...TOPIC, topicId: 10, title: '10' },
  { ...TOPIC, topicId: 11, title: '11' },
  { ...TOPIC, topicId: 12, title: '12' },
  { ...TOPIC, topicId: 13, title: '13' },
  { ...TOPIC, topicId: 14, title: '14' },
  { ...TOPIC, topicId: 15, title: '15' },
  { ...TOPIC, topicId: 16, title: '16' },
  { ...TOPIC, topicId: 17, title: '17' },
  { ...TOPIC, topicId: 18, title: '18' },
  { ...TOPIC, topicId: 19, title: '19' },
];

export const TOPIC_DETAIL: Topic = {
  ...TOPIC,
  liked: false,
  likeAmount: 0,
};
