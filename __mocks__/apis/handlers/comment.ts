import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { COMMENTS } from '@mocks/data/comment';
import { MEMBER } from '@mocks/data/member';

import {
  GetCommentsResponse,
  LikeCommentRequest,
  LikeCommentResponse,
  PostCommentRequest,
  PostCommentResponse,
} from '@src/apis';
import { BASE_URL } from '@src/configs/axios';
import Comment from '@src/types/Comment';

const comments = COMMENTS;

const getComments = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
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
    ctx.json<GetCommentsResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: responseData,
      hasNext: !!responseData.length,
      offsetId: responseData.length ? responseData[responseData.length - 1].commentId : null,
    }),
  );
};

const createComment = (req: RestRequest<PostCommentRequest>, res: ResponseComposition, ctx: RestContext) => {
  const { topicId, contents } = req.body;

  if (!topicId || !contents) {
    return res(ctx.status(400));
  }

  const comment: Comment = {
    commentId: Math.floor(Math.random() * 100),
    member: MEMBER,
    contents,
    likeAmount: 0,
    liked: false,
  };

  comments.unshift(comment);

  return res(
    ctx.status(201),
    ctx.json<PostCommentResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: comment,
    }),
  );
};

let liked = false;
const likeComment = async (req: RestRequest<LikeCommentRequest>, res: ResponseComposition, ctx: RestContext) => {
  const { commentId } = await req.json();
  liked = !liked;
  return res(
    ctx.status(200),
    ctx.json<LikeCommentResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: {
        commentId,
        liked,
      },
    }),
  );
};

export const commentHandler = [
  rest.get(`${BASE_URL}/comment/:topicId/latest`, getComments),
  rest.post(`${BASE_URL}/comment`, createComment),
  rest.post(`${BASE_URL}/comment/like`, likeComment),
];
