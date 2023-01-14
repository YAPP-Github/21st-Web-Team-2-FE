import { rest } from 'msw';

import { COMMENTS } from '@mocks/data/comment';

import { IBasePaginationResponse } from '@src/apis';
import { Comment } from '@src/apis/comment';
import { BASE_URL } from '@src/configs/axios';

import { getRandomNumber } from '.';

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
