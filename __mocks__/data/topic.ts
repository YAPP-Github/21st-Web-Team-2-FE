const title = '유망한 직종은?';
const contents = '개발자가 되고 싶은데 직군이 너무 많네요ㅠㅠ 유망한 직군 추천해주세요!';
export const member = {
  id: 1,
  nickname: 'gyu',
  profileImage: null,
  jobCategory: '개발자',
  workingYears: 1,
};
const voteOptions = [
  { id: 0, text: '프론트엔드', voters: 0 },
  { id: 1, text: '백엔드', voters: 0 },
];
const commentAmount = 4;
export const tags = ['React', 'Vue', '연봉', '인기태그', '태그5'];

export const topic = {
  title,
  contents,
  member,
  voteOptions,
  commentAmount,
  tags,
};

export type TopicType = typeof topic;
