const title = 'title';
const contents = 'contents';
export const member = {
  id: 1,
  nickname: 'gyu',
  profileImage: null,
  jobCategory: '개발자',
  workingYears: 1,
};
const voteOptions = [
  { id: 0, text: 'text', voters: 0 },
  { id: 1, text: 'text', voters: 0 },
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
