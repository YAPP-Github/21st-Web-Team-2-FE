import axios from 'axios';

import { BASE_URL } from '@src/configs/axios';

import { IBasePaginationResponse, IBaseResponse, Member } from './';

export type Comment = {
  commentId: number;
  member: Member;
  commentContent: string;
  likeAmount: number;
  liked: boolean;
};

export type IGetCommentsResponseData = IBasePaginationResponse<Comment[]>;

export const getComments = async (topicId: number, offsetId?: number) => {
  const url = `${BASE_URL}/comment/${topicId}/latest${offsetId ? `?lastOffset=${offsetId}` : ''}`;
  const res = await axios.get<IGetCommentsResponseData>(url);

  return res.data;
};

export type IPostCommentResponsData = IBaseResponse<Comment>;
export const createComment = async (topicId: number, data: Comment) => {
  const res = await axios.post<IPostCommentResponsData>(`${BASE_URL}/comment/${topicId}`, data);

  return res.data.data;
};
