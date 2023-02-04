import axios from 'axios';

import Topic, { TopicCategory } from '@src/types/Topic';
import VoteOption from '@src/types/VoteOption';

import { BaseResponse } from './';

/**
 * 토픽 상세 조회
 */
export type GetTopicDetailResponse = BaseResponse<Topic>;

export const getTopicDetail = async (topicId: number) => {
  const res = await axios.get<GetTopicDetailResponse>(`/topic/${topicId}`);

  return res.data.data;
};

export interface PostTopicRequest extends Pick<Topic, 'title' | 'contents' | 'tags'> {
  voteOptions: Pick<VoteOption, 'text' | 'image' | 'codeBlock'>[];
  topicCategory: TopicCategory;
}
