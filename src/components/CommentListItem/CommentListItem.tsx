import { IComment } from '__mocks__/data/comment';
import React, { FC } from 'react';

import * as S from './CommentListItem.styles';

interface Props {
  comment: IComment;
}
const CommentListItem: FC<Props> = (props) => {
  const { comment } = props;

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
        <S.Comment>{comment.contents}</S.Comment>
        <S.VoteWrapper>
          <S.VoteIcon name="Vote" size={16} /> {comment.likes}
        </S.VoteWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default CommentListItem;
