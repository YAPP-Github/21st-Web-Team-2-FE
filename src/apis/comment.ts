import axios from 'axios';

import { BasePaginationResponse, BaseResponse, Member } from './';

export interface Comment {
  commentId: number;
  member: Member;
  commentContent: string;
  likeAmount: number;
  liked: boolean;
}

/**
 * topic 별 댓글 조회
 */
export type IGetCommentsResponseData = BasePaginationResponse<Comment[]>;
export const getComments = async (topicId: number, offsetId?: number) => {
  const url = `/comment/${topicId}/latest${offsetId ? `?lastOffset=${offsetId}` : ''}`;
  const res = await axios.get<IGetCommentsResponseData>(url);

  return res.data;
};

/**
 * 댓글 생성
 */
export type IPostCommentResponsData = BaseResponse<Comment>;
export const createComment = async (topicId: number, data: Comment['commentContent']) => {
  const res = await axios.post<IPostCommentResponsData>(`/comment/${topicId}`, data);

  return res.data.data;
};
