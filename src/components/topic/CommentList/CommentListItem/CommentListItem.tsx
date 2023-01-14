import React, { FC } from 'react';

import { Comment } from '@src/apis/comment';

import * as S from './CommentListItem.styles';

interface Props {
  comment: Comment;
}
const CommentListItem: FC<Props> = (props) => {
  const { comment } = props;

  const { commentContent, likeAmount, liked, member } = comment;
  return (
    <S.Wrapper>
      <S.Avatar />
      <S.Content>
        <S.UserWrapper>
          <S.UserNickName>{member.name}</S.UserNickName>
          <S.UserInfo>
            {member.jobCategory}·{member.workingYears}연차
          </S.UserInfo>
        </S.UserWrapper>
        <S.Comment>{commentContent}</S.Comment>
        <S.VoteWrapper $liked={liked}>
          <S.VoteIcon name="Vote" size={16} /> {likeAmount}
        </S.VoteWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default CommentListItem;
