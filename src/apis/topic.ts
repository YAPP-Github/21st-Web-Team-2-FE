import axios from 'axios';

import Topic, { TopicCategory } from '@src/types/Topic';
import VoteOption from '@src/types/VoteOption';

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

export type GetPopularTopicsResponseData = Omit<Topic, 'liked' | 'likeAmount'>;
export type GetPopularTopicsResponse = BaseResponse<GetPopularTopicsResponseData[]>;
export const getPopularTopics = async () => {
  const res = await axios.get<GetPopularTopicsResponse>('/topic/popular');

  return res.data.data;
};

export interface PostTopicRequest extends Pick<Topic, 'title' | 'contents' | 'tags'> {
  voteOptions: Pick<VoteOption, 'text' | 'image' | 'language' | 'codeBlock'>[];
  topicCategory: TopicCategory;
}

export const createTopic = (data: PostTopicRequest) => {
  return axios.post('/topic', data);
};

export interface LikeTopicRequest {
  topicId: Topic['topicId'];
}
export interface LikeTopicResponseData {
  topicId: Topic['topicId'];
  liked: boolean;
}
export type LikeTopicResponse = BaseResponse<LikeTopicResponseData>;

export const likeTopic = async (data: LikeTopicRequest) => {
  const res = await axios.post<LikeTopicResponse>('/topic/likes', data);

  return res.data.data;
};
