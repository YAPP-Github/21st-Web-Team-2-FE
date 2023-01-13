import Topic from '@src/types/Topic';

export const TOPIC: Topic = {
  id: 0,
  title: '개발자 취업 밸런스 게임 하나 하겠습니다.',
  contents: '아래의 두가지 예시중 누가 더 개발자 채용시장에서 환영을 받을 까요?',
  options: [
    { id: 0, text: '골고루 다 할 수 있는 풀스택 개발자', voters: 24 },
    { id: 1, text: '한 언어를 제대로 마스터한 개발자', voters: 45 },
  ],
  member: {
    jobCategory: '개발자',
    nickname: '개발자',
    profileImage: 'https://avatars.githubusercontent.com/u/45786387?v=4',
  },
  comments: 0,
};

export const TOPICS: Topic[] = [
  { ...TOPIC },
  { ...TOPIC, id: 1, title: '두번째' },
  { ...TOPIC, id: 2, title: '세번째' },
  { ...TOPIC, id: 3, title: '네번째' },
  { ...TOPIC, id: 4, title: '다섯번째' },
  { ...TOPIC, id: 5, title: '여섯번째' },
  { ...TOPIC, id: 6, title: '일곱번째' },
];
