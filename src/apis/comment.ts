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
export type PostCommentRequest = {
  topicId: number;
  contents: Comment['contents'];
};

export type PostCommentResponse = BaseResponse<Pick<Comment, 'commentId' | 'contents'>>;

export const createComment = async (data: PostCommentRequest) => {
  const res = await axios.post<PostCommentResponse>(`/comment`, data);

  return res.data.data;
};

export interface LikeCommentRequest {
  commentId: Comment['commentId'];
}
export interface LikeCommentResponseData {
  commentId: Comment['commentId'];
  liked: boolean;
}
export type LikeCommentResponse = BaseResponse<LikeCommentResponseData>;

export const likeComment = async (data: LikeCommentRequest) => {
  const res = await axios.post<LikeCommentResponse>('/comment/likes', data);

  return res.data.data;
};
