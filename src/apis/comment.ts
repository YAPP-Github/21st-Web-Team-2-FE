import axios from 'axios';

import Comment from '@src/types/Comment';

import { BasePaginationResponse, BaseResponse } from './';

/**
 * topic 별 댓글 조회
 */
export type GetCommentsResponse = BasePaginationResponse<Comment[]>;
export const getComments = async (topicId: number, offsetId?: number) => {
  const url = `/comment/${topicId}/latest${offsetId ? `?lastOffset=${offsetId}` : ''}`;
  const res = await axios.get<GetCommentsResponse>(url);

  return res.data;
};

/**
 * 댓글 생성
 */
export type PostCommentResponse = BaseResponse<Comment>;
export const createComment = async (topicId: number, data: Comment['contents']) => {
  const res = await axios.post<PostCommentResponse>(`/comment/${topicId}`, data);

  return res.data.data;
};
