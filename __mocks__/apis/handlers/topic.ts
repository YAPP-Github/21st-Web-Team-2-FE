import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { TOPIC } from '@mocks/data/topic';

import { BaseResponse, PostTopicRequest } from '@src/apis/';
import { BASE_URL } from '@src/configs/axios';
import Topic from '@src/types/Topic';

const getTopic = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<BaseResponse<Topic>>({
      code: 'SUCCES',
      message: '성공',
      data: TOPIC,
    }),
  );
};

const createTopic = (req: RestRequest<PostTopicRequest>, res: ResponseComposition, ctx: RestContext) => {
  return res(ctx.status(201));
};

export const topicDetailHandler = [
  rest.get(`${BASE_URL}/topic/:topicId`, getTopic), //
  rest.post(`${BASE_URL}/topic`, createTopic),
];
