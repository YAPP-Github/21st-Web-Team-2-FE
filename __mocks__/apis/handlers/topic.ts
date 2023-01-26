import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { TOPIC } from '@mocks/data/topic';

import { BaseResponse } from '@src/apis/';
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

export const topicDetailHandler = [
  rest.get(`${BASE_URL}/topic/:topicId`, getTopic), //
];
