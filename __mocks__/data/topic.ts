import { Topic } from '@src/apis';

export const TOPIC: Topic = {
  topicId: 2,
  title: 'Vote1',
  contents: 'Content1',
  member: {
    id: 4,
    name: 'MemberA',
    profileImage: null,
    jobCategory: 'developer',
    workingYears: 3,
  },
  commentAmount: 2,
  voteAmount: 0,
  liked: false,
  likedAmount: 0,
  tags: [],
  voteOptions: [
    {
      id: 1,
      text: 'Content1 OptionA',
      voteOptionImageFilename: null,
      codeBlock: null,
      voted: false,
      votedAmount: 1,
    },
    {
      id: 2,
      text: 'Content1 OptionB',
      voteOptionImageFilename: null,
      codeBlock: null,
      voted: false,
      votedAmount: 1,
    },
  ],
};
