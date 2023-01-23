import axios from 'axios';

import Topic from '@src/types/Topic';

import { BaseResponse } from './';

/**
 * 토픽 상세 조회
 */
export type GetTopicDetailResponse = BaseResponse<Topic>;
export const getTopicDetail = async (topicId: number) => {
  const res = await axios.get<GetTopicDetailResponse>(`/topic/${topicId}`);

  return res.data.data;
};
