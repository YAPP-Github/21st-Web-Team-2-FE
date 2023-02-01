import axios from 'axios';

import Topic from '@src/types/Topic';

import { BasePaginationResponse, BaseResponse } from './';

/**
 * 토픽 상세 조회
 */
export type GetTopicDetailResponse = BaseResponse<Topic>;

export const getTopicDetail = async (topicId: number) => {
  const res = await axios.get<GetTopicDetailResponse>(`/topic/${topicId}`);

  return res.data.data;
};

export type GetTopicsResponseData = Omit<Topic, 'liked' | 'likeAmount'>;
export type GetTopicsResponse = BasePaginationResponse<GetTopicsResponseData[]>;

export const getTopics = async (offsetId?: number) => {
  const queries = new URLSearchParams({ lastOffset: offsetId?.toString() || '' });
  const url = `/topic/latest?${queries.toString()}`;
  const res = await axios.get<GetTopicsResponse>(url);

  return res.data;
};
