import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { COMMENTS } from '@mocks/data/comment';

import { Comment, IGetCommentsResponseData, IPostCommentResponsData } from '@src/apis/comment';
import { BASE_URL } from '@src/configs/axios';

import { getRandomNumber } from '.';

const comments = COMMENTS;

const fetchComments = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  ctx.delay(getRandomNumber(100, 600));

  const lastOffset = req.url.searchParams.get('lastOffset');

  let responseData: Comment[] = [];
  if (lastOffset === null) {
    responseData = comments.slice(0, 5);
  } else {
    const index = comments.findIndex((comment) => comment.commentId === +lastOffset);
    responseData = comments.slice(index + 1, index + 1 + 5);
  }

  return res(
    ctx.status(200),
    ctx.json<IGetCommentsResponseData>({
      code: 'SUCCESS',
      message: '성공',
      data: responseData,
      hasNext: !!responseData.length,
      offsetId: responseData.length ? responseData[responseData.length - 1].commentId : null,
    }),
  );
};

const createComment = (req: RestRequest<Comment>, res: ResponseComposition, ctx: RestContext) => {
  ctx.delay(getRandomNumber(100, 600));

  const comment = req.body;

  comments.unshift(comment);

  return res(
    ctx.status(201),
    ctx.json<IPostCommentResponsData>({
      code: 'SUCCESS',
      message: '성공',
      data: comment,
    }),
  );
};

export const commentHandler = [
  rest.get(`${BASE_URL}/comment/:topicId/latest`, fetchComments),
  rest.post<Comment>(`${BASE_URL}/comment/:topicId`, createComment),
];
