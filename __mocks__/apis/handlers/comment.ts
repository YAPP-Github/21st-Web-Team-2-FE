import { rest } from 'msw';

import { Comment } from '@src/apis/comment';
import { BASE_URL } from '@src/configs/axios';

import { getRandomNumber } from '.';
import { IBasePaginationResponse } from './../../../src/apis/index';

const COMMENTS: Comment[] = [
  {
    commentId: 30,
    member: {
      id: 3,
      name: 'MemberC',
      profileImage: null,
      jobCategory: 'product_manager',
      workingYears: 1,
    },
    commentContent: 'Comment 10',
    likeAmount: 30,
    liked: false,
  },
  {
    commentId: 29,
    member: {
      id: 2,
      name: 'MemberB',
      profileImage: null,
      jobCategory: 'Designer',
      workingYears: 5,
    },
    commentContent: 'Comment 10',
    likeAmount: 29,
    liked: false,
  },
  {
    commentId: 28,
    member: {
      id: 1,
      name: 'MemberA',
      profileImage: null,
      jobCategory: 'developer',
      workingYears: 3,
    },
    commentContent: 'Comment 10',
    likeAmount: 28,
    liked: false,
  },
  {
    commentId: 27,
    member: {
      id: 3,
      name: 'MemberC',
      profileImage: null,
      jobCategory: 'product_manager',
      workingYears: 1,
    },
    commentContent: 'Comment 9',
    likeAmount: 27,
    liked: false,
  },
  {
    commentId: 26,
    member: {
      id: 2,
      name: 'MemberB',
      profileImage: null,
      jobCategory: 'Designer',
      workingYears: 5,
    },
    commentContent: 'Comment 9',
    likeAmount: 26,
    liked: false,
  },
  {
    commentId: 25,
    member: {
      id: 1,
      name: 'MemberA',
      profileImage: null,
      jobCategory: 'developer',
      workingYears: 3,
    },
    commentContent: 'Comment 9',
    likeAmount: 25,
    liked: false,
  },
  {
    commentId: 24,
    member: {
      id: 3,
      name: 'MemberC',
      profileImage: null,
      jobCategory: 'product_manager',
      workingYears: 1,
    },
    commentContent: 'Comment 8',
    likeAmount: 24,
    liked: false,
  },
  {
    commentId: 23,
    member: {
      id: 2,
      name: 'MemberB',
      profileImage: null,
      jobCategory: 'Designer',
      workingYears: 5,
    },
    commentContent: 'Comment 8',
    likeAmount: 23,
    liked: false,
  },
  {
    commentId: 22,
    member: {
      id: 1,
      name: 'MemberA',
      profileImage: null,
      jobCategory: 'developer',
      workingYears: 3,
    },
    commentContent: 'Comment 8',
    likeAmount: 22,
    liked: false,
  },
  {
    commentId: 21,
    member: {
      id: 3,
      name: 'MemberC',
      profileImage: null,
      jobCategory: 'product_manager',
      workingYears: 1,
    },
    commentContent: 'Comment 7',
    likeAmount: 21,
    liked: false,
  },
];

export const commentHandler = [
  rest.get(`${BASE_URL}/comment/:topicId/latest`, (req, res, ctx) => {
    ctx.delay(getRandomNumber(100, 600));

    const lastOffset = req.url.searchParams.get('lastOffset');

    let responseData: Comment[] = [];
    if (lastOffset === null) {
      responseData = COMMENTS.slice(0, 5);
    } else {
      const index = COMMENTS.findIndex((comment) => comment.commentId === +lastOffset);
      responseData = COMMENTS.slice(index + 1, index + 1 + 5);
    }

    return res(
      ctx.status(200),
      ctx.json<IBasePaginationResponse<Comment[]>>({
        code: 'SUCCESS',
        message: '성공',
        data: responseData,
        hasNext: !!responseData.length,
        offsetId: responseData.length ? responseData[responseData.length - 1].commentId : null,
      }),
    );
  }),
];
