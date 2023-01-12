import axios from 'axios';

import { IBaseResponse } from './';

// THINK-GYU: 해당 타입들을 어디서 관리하지?
type VoteOption = {
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

export type IGetTopicDetailResponseData = IBaseResponse<Topic>;

export const getTopicDetail = async (topicId: number) => {
  const res = await axios.get<IGetTopicDetailResponseData>(`/topic/${topicId}`);

  return res.data.data;
};
