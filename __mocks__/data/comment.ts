import { MEMBER, MEMBER_DESIGNER, MEMBER_PM } from '@mocks/data/member';

import Comment from '@src/types/Comment';

export const COMMENT: Comment = {
  commentId: 30,
  member: MEMBER,
  contents: 'Comment 10',
  likeAmount: 30,
  liked: false,
};

export const COMMENT_LIKED: Comment = {
  commentId: 30,
  member: MEMBER,
  contents: 'Comment 10',
  likeAmount: 30,
  liked: true,
};

export const COMMENTS: Comment[] = [
  COMMENT,
  {
    ...COMMENT,
    commentId: 29,
    member: MEMBER_DESIGNER,
    contents: 'Comment 10',
    likeAmount: 29,
  },
  {
    ...COMMENT,
    commentId: 28,
    member: MEMBER_PM,
    contents: 'Comment 10',
    likeAmount: 28,
  },
  {
    ...COMMENT,
    commentId: 27,
    contents: 'Comment 9',
    likeAmount: 27,
  },
  {
    ...COMMENT,
    commentId: 26,
    contents: 'Comment 9',
    likeAmount: 26,
  },
  {
    ...COMMENT,
    commentId: 25,
    contents: 'Comment 9',
    likeAmount: 25,
  },
  {
    ...COMMENT,
    commentId: 24,
    contents: 'Comment 8',
    likeAmount: 24,
  },
  {
    ...COMMENT,
    commentId: 23,
    contents: 'Comment 8',
    likeAmount: 23,
  },
  {
    ...COMMENT,
    commentId: 22,
    contents: 'Comment 8',
    likeAmount: 22,
  },
  {
    ...COMMENT,
    commentId: 21,
    contents: 'Comment 7',
    likeAmount: 21,
  },
];
