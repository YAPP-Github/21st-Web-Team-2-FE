import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { TOPICS, TOPIC_DETAIL } from '@mocks/data/topic';

import { BaseResponse, GetTopicsResponse, GetTopicsResponseData } from '@src/apis/';
import { BASE_URL } from '@src/configs/axios';
import Topic from '@src/types/Topic';

const getTopics = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  const lastOffset = req.url.searchParams.get('lastOffset');

  const responseData: GetTopicsResponseData[] = [];
  if (lastOffset === null) {
    responseData.push(...TOPICS.slice(0, 5));
  } else {
    const index = TOPICS.findIndex((topic) => topic.topicId === +lastOffset);
    responseData.push(...TOPICS.slice(index + 1, index + 1 + 5));
  }

  return res(
    ctx.status(200),
    ctx.json<GetTopicsResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: responseData,
      hasNext: !!responseData.length,
      offsetId: responseData.length ? responseData[responseData.length - 1].topicId : null,
    }),
  );
};

const getTopic = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<BaseResponse<Topic>>({
      code: 'SUCCESS',
      message: '성공',
      data: TOPIC_DETAIL,
    }),
  );
};

export const topicDetailHandler = [
  rest.get(`${BASE_URL}/topic/latest`, getTopics),
  rest.get(`${BASE_URL}/topic/:topicId`, getTopic),
];
