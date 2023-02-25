import React, { FC } from 'react';

import ProfileImg from '@src/components/common/ProfileImg';
import Comment from '@src/types/Comment';

import * as S from './CommentListItem.styles';

interface Props {
  comment: Comment;
}
const CommentListItem: FC<Props> = (props) => {
  const { comment } = props;
  const { contents, likeAmount, liked, member } = comment;

  return (
    <S.Wrapper>
      <ProfileImg jobCategory={member.jobCategory} size={44} />
      <S.Content>
        <S.UserWrapper>
          <S.UserNickName>{member.nickname}</S.UserNickName>
          <S.UserInfo>
            {member.jobCategory}·{member.workingYears}
          </S.UserInfo>
        </S.UserWrapper>
        <S.Comment>{contents}</S.Comment>
        <S.VoteWrapper $liked={liked}>
          <S.VoteIcon name="Vote" size={16} /> {likeAmount}
        </S.VoteWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default CommentListItem;
