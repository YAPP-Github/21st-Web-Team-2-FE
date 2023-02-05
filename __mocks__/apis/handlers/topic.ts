import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { POPULAR_TOPICS, TOPICS, TOPIC_DETAIL } from '@mocks/data/topic';

import { GetPopularTopicsResponse, GetTopicDetailResponse, GetTopicsResponse, GetTopicsResponseData, PostTopicRequest } from '@src/apis';
import { BASE_URL } from '@src/configs/axios';

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

const getPopularTopics = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<GetPopularTopicsResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: POPULAR_TOPICS,
    }),
  );
};

const getTopic = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<GetTopicDetailResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: TOPIC_DETAIL,
    }),
  );
};

const createTopic = (req: RestRequest<PostTopicRequest>, res: ResponseComposition, ctx: RestContext) => {
  return res(ctx.status(201));
};

export const topicDetailHandler = [
  rest.get(`${BASE_URL}/topic/latest`, getTopics),
  rest.get(`${BASE_URL}/topic/popular`, getPopularTopics),
  rest.get(`${BASE_URL}/topic/:topicId`, getTopic),
  rest.post(`${BASE_URL}/topic`, createTopic),
];
