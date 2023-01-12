import { rest } from 'msw';

import { IBaseResponse, Topic } from '@src/apis/';
import { BASE_URL } from '@src/configs/axios';

import { getRandomNumber } from '.';

const TOPIC_DETAIL: Topic = {
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
      text: 'Content1 OptionA',
      voteOptionImageFilename: null,
      codeBlock: null,
      voted: false,
      votedAmount: 1,
    },
    {
      text: 'Content1 OptionB',
      voteOptionImageFilename: null,
      codeBlock: null,
      voted: false,
      votedAmount: 1,
    },
  ],
};

export const topicDetailHandler = [
  rest.get(`${BASE_URL}/topic/:topicId`, (req, res, ctx) => {
    ctx.delay(getRandomNumber(100, 6000));

    return res(
      ctx.status(200),
      ctx.json<IBaseResponse<Topic>>({
        code: 'SUCCES',
        message: '성공',
        data: TOPIC_DETAIL,
      }),
    );
  }),
];
