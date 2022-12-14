import React, { FC } from 'react';

import { IComment } from '@src/types/Comment';

import * as S from './CommentListItem.styles';

interface Props {
  comment: IComment;
  onClickLike: (commentId: number) => void;
}
const CommentListItem: FC<Props> = (props) => {
  const { comment, onClickLike } = props;

  return (
    <S.Wrapper>
      <S.Avatar />
      <S.Content>
        <S.UserWrapper>
          <S.UserNickName>{comment.createdMemberName}</S.UserNickName>
          <S.UserInfo>
            {comment.createdMemberJobCategory}·{comment.createdMemberWorkingYears}연차
          </S.UserInfo>
        </S.UserWrapper>
        <S.Comment>{comment.commentContent}</S.Comment>
        <S.VoteWrapper $liked={comment.liked}>
          <S.VoteIcon name="Vote" size={16} onClick={() => onClickLike(comment.commentId)} /> {comment.likeAmount}
        </S.VoteWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default CommentListItem;
