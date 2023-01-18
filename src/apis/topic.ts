import axios from 'axios';

import { BaseResponse } from './';

type VoteOption = {
  id: number;
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
export type GetTopicDetailResponseData = BaseResponse<Topic>;
export const getTopicDetail = async (topicId: number) => {
  const res = await axios.get<GetTopicDetailResponseData>(`/topic/${topicId}`);

  return res.data.data;
};
