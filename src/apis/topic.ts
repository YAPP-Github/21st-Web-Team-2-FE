import axios from 'axios';

import Topic, { TopicCategory } from '@src/types/Topic';
import VoteOption from '@src/types/VoteOption';
import { getAuthConfig } from '@src/utils/auth';

import { BasePaginationResponse, BaseResponse } from './';

/**
 * 토픽 상세 조회
 */
export type GetTopicDetailResponse = BaseResponse<Topic>;

export const getTopicDetail = async (topicId: number, accessToken?: string) => {
  const res = await axios.get<GetTopicDetailResponse>(`/topic/${topicId}`, getAuthConfig(accessToken));

  return res.data.data;
};

export interface GetTopicsQuery {
  category: TopicCategory | null;
  offsetId?: number;
}
export type GetTopicsResponseData = Omit<Topic, 'liked' | 'likeAmount'>;
export type GetTopicsResponse = BasePaginationResponse<GetTopicsResponseData[]>;

export const getTopics = async (props: GetTopicsQuery) => {
  const { category, offsetId } = props;
  const queries = new URLSearchParams();
  category && queries.set('topicCategory', category);
  offsetId && queries.set('lastOffset', offsetId.toString());
  const url = `/topic/latest?${queries.toString()}`;
  const res = await axios.get<GetTopicsResponse>(url);

  return res.data;
};

export type GetPopularTopicsResponseData = Omit<Topic, 'liked' | 'likeAmount'>;
export type GetPopularTopicsResponse = BaseResponse<GetPopularTopicsResponseData[]>;
export const getPopularTopics = async (accessToken?: string) => {
  const res = await axios.get<GetPopularTopicsResponse>('/topic/popular', getAuthConfig(accessToken));

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
