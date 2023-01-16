import axios from 'axios';

import { BaseResponse } from './';

type VoteOption = {
  // TODO-GYU: Change
  // 이 부분은 TopicCard 에서 select를 어떻게 구현하냐에 따라 달라짐
  id?: number; // TODO-GYU: Change

  text: string;
  voteOptionImageFilename: string | null;
  codeBlock: string | null;
  voted: boolean;
  votedAmount: number;
};

export type Member = {
  id: number;
  name: string;
  profileImage: string | null;
  jobCategory: string;
  workingYears: number;
};

export type Topic = {
  topicId: number;
  title: string;
  contents: string;
  member: Member;
  commentAmount: number;
  voteAmount: number;
  liked: boolean;
  likedAmount: number;
  tags: string[];
  voteOptions: VoteOption[];
};

/**
 * 토픽 상세 조회
 */
export type IGetTopicDetailResponseData = BaseResponse<Topic>;
export const getTopicDetail = async (topicId: number) => {
  const res = await axios.get<IGetTopicDetailResponseData>(`/topic/${topicId}`);

  return res.data.data;
};
